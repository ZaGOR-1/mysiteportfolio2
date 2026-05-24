"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { Code2, Loader2, Play, RotateCcw, ShieldCheck, Sparkles, TerminalSquare, Trash2 } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/i18n/i18n-context";
import { cn } from "@/lib/utils";

const PYODIDE_WORKER_TIMEOUT = 20_000;

const pythonExamples = {
  uk: [
    {
      key: "portfolio",
      label: "Projects data",
      code: `projects = [
    {"name": "Sitefishing", "status": "completed", "tech": ["Next.js", "Tailwind"]},
    {"name": "Portfolio Website", "status": "completed", "tech": ["React", "SEO"]},
    {"name": "Win11 CalmMode", "status": "in-progress", "tech": ["PowerShell", "CI"]},
]

completed = [project for project in projects if project["status"] == "completed"]

print("Completed projects:", len(completed))
for project in completed:
    print("-", project["name"], "=>", ", ".join(project["tech"]))`
    },
    {
      key: "algorithm",
      label: "Algorithm",
      code: `def fibonacci(n):
    numbers = [0, 1]
    for _ in range(2, n):
        numbers.append(numbers[-1] + numbers[-2])
    return numbers[:n]

print("Fibonacci:", fibonacci(10))
print("Sum:", sum(fibonacci(10)))`
    },
    {
      key: "oop",
      label: "OOP",
      code: `class Project:
    def __init__(self, name, language, status):
        self.name = name
        self.language = language
        self.status = status

    def card(self):
        return f"{self.name} • {self.language} • {self.status}"

portfolio = Project("Zagor Portfolio", "TypeScript", "live")
print(portfolio.card())`
    }
  ],
  en: [
    {
      key: "portfolio",
      label: "Projects data",
      code: `projects = [
    {"name": "Sitefishing", "status": "completed", "tech": ["Next.js", "Tailwind"]},
    {"name": "Portfolio Website", "status": "completed", "tech": ["React", "SEO"]},
    {"name": "Win11 CalmMode", "status": "in-progress", "tech": ["PowerShell", "CI"]},
]

completed = [project for project in projects if project["status"] == "completed"]

print("Completed projects:", len(completed))
for project in completed:
    print("-", project["name"], "=>", ", ".join(project["tech"]))`
    },
    {
      key: "algorithm",
      label: "Algorithm",
      code: `def fibonacci(n):
    numbers = [0, 1]
    for _ in range(2, n):
        numbers.append(numbers[-1] + numbers[-2])
    return numbers[:n]

print("Fibonacci:", fibonacci(10))
print("Sum:", sum(fibonacci(10)))`
    },
    {
      key: "oop",
      label: "OOP",
      code: `class Project:
    def __init__(self, name, language, status):
        self.name = name
        self.language = language
        self.status = status

    def card(self):
        return f"{self.name} • {self.language} • {self.status}"

portfolio = Project("Zagor Portfolio", "TypeScript", "live")
print(portfolio.card())`
    }
  ]
} as const;

type RunnerStatus = "idle" | "loading" | "running" | "success" | "error";

type RunnerResponse = {
  ok: boolean;
  logs: string[];
  error?: string;
};

type PendingRequest = {
  resolve: (response: RunnerResponse) => void;
  timeout: number;
};

type PythonWorkerMessage =
  | { id: number; type: "status"; message: string }
  | { id: number; type: "result"; ok: boolean; logs: string[]; error?: string };

const pythonWorkerSource = `
  const PYODIDE_BASE_URL = "https://cdn.jsdelivr.net/pyodide/v0.26.4/full/";
  let pyodidePromise = null;
  let runtimeLoaded = false;

  const serializeError = (error) => {
    if (!error) return "Unknown error";
    if (error.message) return error.message;
    return String(error);
  };

  const formatResult = (value) => {
    if (typeof value === "undefined" || value === null) return null;
    try {
      return value.toString();
    } catch (_) {
      return String(value);
    }
  };

  async function getPyodide() {
    if (!pyodidePromise) {
      importScripts(PYODIDE_BASE_URL + "pyodide.js");
      pyodidePromise = loadPyodide({ indexURL: PYODIDE_BASE_URL });
    }
    const pyodide = await pyodidePromise;
    runtimeLoaded = true;
    return pyodide;
  }

  self.onmessage = async (event) => {
    const { id, code } = event.data;
    const logs = [];

    try {
      self.postMessage({
        id,
        type: "status",
        message: runtimeLoaded ? "Running Python..." : "Loading Pyodide Python runtime..."
      });

      const pyodide = await getPyodide();
      pyodide.setStdout({ batched: (text) => text && logs.push(text) });
      pyodide.setStderr({ batched: (text) => text && logs.push("stderr: " + text) });

      const result = await pyodide.runPythonAsync(code);
      const formatted = formatResult(result);
      if (formatted) logs.push("=> " + formatted);

      if (result && typeof result.destroy === "function") {
        result.destroy();
      }

      self.postMessage({ id, type: "result", ok: true, logs });
    } catch (error) {
      self.postMessage({ id, type: "result", ok: false, logs, error: serializeError(error) });
    }
  };
`;

export function PythonLabSection() {
  const { t, locale } = useI18n();
  const examples = pythonExamples[locale];
  const initialCode = examples[0].code;
  const [code, setCode] = useState<string>(initialCode);
  const [status, setStatus] = useState<RunnerStatus>("idle");
  const [output, setOutput] = useState<string[]>([t.pythonLab.outputPlaceholder]);
  const [activeExample, setActiveExample] = useState<string>(examples[0].key);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const workerRef = useRef<Worker | null>(null);
  const requestIdRef = useRef(0);
  const pendingRef = useRef<Map<number, PendingRequest>>(new Map());

  const stats = useMemo(() => {
    const lines = code.split("\n").length;
    const chars = code.length;
    return { lines, chars };
  }, [code]);

  useEffect(() => {
    const pendingRequests = pendingRef.current;

    return () => {
      workerRef.current?.terminate();
      workerRef.current = null;
      pendingRequests.forEach((pending) => window.clearTimeout(pending.timeout));
      pendingRequests.clear();
    };
  }, []);

  const failPendingRequests = (message: string) => {
    pendingRef.current.forEach((pending) => {
      window.clearTimeout(pending.timeout);
      pending.resolve({ ok: false, logs: [], error: message });
    });
    pendingRef.current.clear();
  };

  const resetWorker = () => {
    workerRef.current?.terminate();
    workerRef.current = null;
  };

  const getWorker = () => {
    if (workerRef.current) return workerRef.current;

    const blob = new Blob([pythonWorkerSource], { type: "application/javascript" });
    const workerUrl = URL.createObjectURL(blob);
    const worker = new Worker(workerUrl);
    URL.revokeObjectURL(workerUrl);

    worker.onmessage = (event: MessageEvent<PythonWorkerMessage>) => {
      const message = event.data;

      if (message.type === "status") {
        setStatus(message.message.includes("Loading") ? "loading" : "running");
        setOutput([message.message]);
        return;
      }

      const pending = pendingRef.current.get(message.id);
      if (!pending) return;

      window.clearTimeout(pending.timeout);
      pendingRef.current.delete(message.id);
      pending.resolve({ ok: message.ok, logs: message.logs, error: message.error });
    };

    worker.onerror = (event) => {
      const message = event.message || t.pythonLab.unknownError;
      failPendingRequests(message);
      resetWorker();
    };

    workerRef.current = worker;
    return worker;
  };

  const runPythonInWorker = (source: string): Promise<RunnerResponse> => {
    return new Promise((resolve) => {
      const worker = getWorker();
      const id = requestIdRef.current + 1;
      requestIdRef.current = id;

      const timeout = window.setTimeout(() => {
        pendingRef.current.delete(id);
        resetWorker();
        resolve({ ok: false, logs: [], error: t.pythonLab.timeout });
      }, PYODIDE_WORKER_TIMEOUT);

      pendingRef.current.set(id, { resolve, timeout });
      worker.postMessage({ id, code: source });
    });
  };

  const runCode = async () => {
    setStatus(workerRef.current ? "running" : "loading");
    setOutput([workerRef.current ? t.pythonLab.running : t.pythonLab.loadingRuntime]);
    const result = await runPythonInWorker(code);

    if (result.ok) {
      setStatus("success");
      setOutput(result.logs.length ? result.logs : [t.pythonLab.noOutput]);
      return;
    }

    setStatus("error");
    setOutput([...result.logs, `${t.pythonLab.errorPrefix} ${result.error ?? t.pythonLab.unknownError}`]);
  };

  const setExample = (example: (typeof examples)[number]) => {
    setActiveExample(example.key);
    setCode(example.code);
    setStatus("idle");
    setOutput([t.pythonLab.exampleLoaded.replace("{name}", example.label)]);
    requestAnimationFrame(() => textareaRef.current?.focus());
  };

  const resetCode = () => {
    setActiveExample(examples[0].key);
    setCode(initialCode);
    setStatus("idle");
    setOutput([t.pythonLab.outputPlaceholder]);
  };

  const clearOutput = () => {
    setStatus("idle");
    setOutput([t.pythonLab.outputPlaceholder]);
  };

  const statusLabel = t.pythonLab.statuses[status];

  return (
    <section id="python-lab" className="container-px mx-auto max-w-7xl py-20">
      <Reveal>
        <span className="section-kicker">{t.pythonLab.kicker}</span>
        <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div>
            <h2 className="font-display text-4xl font-black tracking-[-0.045em] sm:text-5xl">
              {t.pythonLab.title}
            </h2>
            <p className="mt-5 max-w-2xl text-lg leading-8 text-muted">{t.pythonLab.subtitle}</p>
          </div>
          <div className="grid gap-3 sm:grid-cols-3">
            {t.pythonLab.features.map((feature) => (
              <div key={feature.title} className="rounded-3xl border border-line/70 bg-panel/70 p-4 shadow-glass backdrop-blur-xl">
                <div className="text-xs font-bold uppercase tracking-[0.2em] text-muted">{feature.title}</div>
                <div className="mt-2 text-sm leading-6 text-muted">{feature.text}</div>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.08}>
        <div className="mt-10 overflow-hidden rounded-[2.5rem] border border-line/70 bg-slate-950 text-slate-100 shadow-glow">
          <div className="flex flex-col gap-4 border-b border-white/10 bg-white/[0.03] p-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex gap-2">
                <span className="h-3 w-3 rounded-full bg-rose-400" />
                <span className="h-3 w-3 rounded-full bg-amber-300" />
                <span className="h-3 w-3 rounded-full bg-emerald-400" />
              </div>
              <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
                playground.py
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-300/20 bg-emerald-300/10 px-3 py-1 text-xs font-semibold text-emerald-100">
                <ShieldCheck className="h-3.5 w-3.5" />
                {t.pythonLab.runtime}
              </span>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs text-slate-400">
              <span>{stats.lines} {t.pythonLab.lines}</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span>{stats.chars} {t.pythonLab.chars}</span>
              <span className="h-1 w-1 rounded-full bg-slate-600" />
              <span className={cn("rounded-full px-3 py-1 font-semibold", status === "success" && "bg-emerald-400/15 text-emerald-200", status === "error" && "bg-rose-400/15 text-rose-200", (status === "loading" || status === "running") && "bg-sky-400/15 text-sky-200", status === "idle" && "bg-white/10 text-slate-300")}>{statusLabel}</span>
            </div>
          </div>

          <div className="grid border-b border-white/10 p-4 lg:grid-cols-[auto_1fr] lg:items-center lg:gap-4">
            <div className="mb-3 inline-flex items-center gap-2 text-sm font-bold text-slate-200 lg:mb-0">
              <Sparkles className="h-4 w-4" />
              {t.pythonLab.examplesLabel}
            </div>
            <div className="flex flex-wrap gap-2">
              {examples.map((example) => (
                <button
                  key={example.key}
                  type="button"
                  onClick={() => setExample(example)}
                  className={cn(
                    "rounded-full border px-4 py-2 text-xs font-bold transition hover:-translate-y-0.5",
                    activeExample === example.key
                      ? "border-brand-400 bg-brand-500 text-white shadow-[0_0_24px_rgb(56_189_248_/_0.24)]"
                      : "border-white/10 bg-white/10 text-slate-200 hover:bg-white/15"
                  )}
                >
                  {example.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative border-b border-white/10 lg:border-b-0 lg:border-r">
              <div className="absolute left-0 top-0 hidden h-full w-12 select-none border-r border-white/10 bg-white/[0.02] py-4 text-right text-xs leading-6 text-slate-600 sm:block">
                {code.split("\n").map((_, index) => (
                  <div key={index} className="pr-3">{index + 1}</div>
                ))}
              </div>
              <textarea
                ref={textareaRef}
                value={code}
                onChange={(event) => {
                  setCode(event.target.value);
                  setStatus("idle");
                }}
                spellCheck={false}
                aria-label={t.pythonLab.editorLabel}
                className="min-h-[460px] w-full resize-none bg-transparent p-4 font-mono text-sm leading-6 text-slate-200 outline-none placeholder:text-slate-600 sm:pl-16"
              />
            </div>

            <div className="flex min-h-[460px] flex-col">
              <div className="grid gap-3 border-b border-white/10 p-4 sm:grid-cols-2">
                <button
                  type="button"
                  onClick={runCode}
                  disabled={status === "loading" || status === "running"}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl bg-emerald-300 px-4 py-3 text-sm font-black text-slate-950 transition hover:-translate-y-0.5 disabled:cursor-not-allowed disabled:opacity-60"
                >
                  {status === "loading" || status === "running" ? <Loader2 className="h-4 w-4 animate-spin" /> : <Play className="h-4 w-4" />}
                  {t.pythonLab.run}
                </button>
                <button
                  type="button"
                  onClick={resetCode}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-slate-100 transition hover:-translate-y-0.5 hover:bg-white/15"
                >
                  <RotateCcw className="h-4 w-4" />
                  {t.pythonLab.reset}
                </button>
                <button
                  type="button"
                  onClick={clearOutput}
                  className="inline-flex items-center justify-center gap-2 rounded-2xl border border-white/10 bg-white/10 px-4 py-3 text-sm font-bold text-slate-100 transition hover:-translate-y-0.5 hover:bg-white/15 sm:col-span-2"
                >
                  <Trash2 className="h-4 w-4" />
                  {t.pythonLab.clear}
                </button>
              </div>

              <div className="flex-1 p-4">
                <div className="mb-3 flex items-center justify-between gap-3">
                  <div className="inline-flex items-center gap-2 text-sm font-bold text-slate-200">
                    <TerminalSquare className="h-4 w-4" />
                    {t.pythonLab.terminal}
                  </div>
                  <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs font-semibold text-slate-300">
                    <Code2 className="h-3.5 w-3.5" />
                    Python 3 in browser
                  </div>
                </div>
                <div className="min-h-[250px] rounded-[1.5rem] border border-white/10 bg-black/30 p-4 font-mono text-sm leading-7 text-slate-300">
                  {output.map((line, index) => (
                    <div key={`${line}-${index}`} className="whitespace-pre-wrap break-words">
                      <span className="mr-2 select-none text-slate-600">$</span>
                      {line}
                    </div>
                  ))}
                </div>
                <div className="mt-4 rounded-3xl border border-white/10 bg-white/[0.04] p-4 text-sm leading-6 text-slate-400">
                  <div className="mb-2 flex items-center gap-2 font-bold text-slate-200">
                    <ShieldCheck className="h-4 w-4" />
                    {t.pythonLab.notesTitle}
                  </div>
                  <ul className="grid gap-2">
                    {t.pythonLab.notes.map((note) => (
                      <li key={note} className="flex gap-2">
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-300" />
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
