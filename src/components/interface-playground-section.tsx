"use client";

import { motion } from "framer-motion";
import {
  Copy,
  Grip,
  LayoutDashboard,
  Plus,
  RefreshCcw,
  RotateCcw,
  Shuffle,
  Sparkles,
  Trash2,
  type LucideIcon
} from "lucide-react";
import { useMemo, useRef, useState } from "react";
import { Reveal } from "@/components/reveal";
import { useI18n } from "@/i18n/i18n-context";
import { cn } from "@/lib/utils";

type AccentKey = "cyan" | "violet" | "emerald" | "rose";

type PlaygroundCard = {
  id: string;
  title: string;
  meta: string;
  value: string;
  x: number;
  y: number;
};

const accentStyles: Record<
  AccentKey,
  {
    label: string;
    gradient: string;
    soft: string;
    ring: string;
    dot: string;
  }
> = {
  cyan: {
    label: "Cyan",
    gradient: "from-cyan-400 via-sky-500 to-blue-600",
    soft: "bg-cyan-500/15 text-cyan-700 dark:text-cyan-200",
    ring: "ring-cyan-400/45",
    dot: "bg-cyan-400"
  },
  violet: {
    label: "Violet",
    gradient: "from-violet-400 via-fuchsia-500 to-rose-500",
    soft: "bg-violet-500/15 text-violet-700 dark:text-violet-200",
    ring: "ring-violet-400/45",
    dot: "bg-violet-400"
  },
  emerald: {
    label: "Emerald",
    gradient: "from-emerald-400 via-teal-500 to-cyan-600",
    soft: "bg-emerald-500/15 text-emerald-700 dark:text-emerald-200",
    ring: "ring-emerald-400/45",
    dot: "bg-emerald-400"
  },
  rose: {
    label: "Rose",
    gradient: "from-rose-400 via-pink-500 to-orange-500",
    soft: "bg-rose-500/15 text-rose-700 dark:text-rose-200",
    ring: "ring-rose-400/45",
    dot: "bg-rose-400"
  }
};

const initialCards: PlaygroundCard[] = [
  { id: "ui", title: "UI", meta: "drag me", value: "98%", x: -92, y: -58 },
  { id: "api", title: "API", meta: "click tools", value: "24 ms", x: 110, y: -28 },
  { id: "git", title: "Git", meta: "ship clean", value: "CI", x: -22, y: 96 }
];

const cardPool = [
  { id: "seo", title: "SEO", meta: "metadata", value: "A+" },
  { id: "db", title: "DB", meta: "MySQL", value: "PDO" },
  { id: "ops", title: "VPS", meta: "deploy", value: "SSL" },
  { id: "test", title: "Tests", meta: "checks", value: "OK" }
];

function randomPosition(index: number) {
  const xPositions = [-130, -58, 26, 112, 154, -168];
  const yPositions = [-82, 58, -18, 106, -128, 10];

  return {
    x: xPositions[index % xPositions.length],
    y: yPositions[(index + 2) % yPositions.length]
  };
}

export function InterfacePlaygroundSection() {
  const { t } = useI18n();
  const constraintsRef = useRef<HTMLDivElement>(null);
  const [accent, setAccent] = useState<AccentKey>("cyan");
  const [radius, setRadius] = useState(28);
  const [tilt, setTilt] = useState(-3);
  const [glow, setGlow] = useState(42);
  const [density, setDensity] = useState(14);
  const [spin, setSpin] = useState(false);
  const [glass, setGlass] = useState(true);
  const [copied, setCopied] = useState(false);
  const [cards, setCards] = useState<PlaygroundCard[]>(initialCards);

  const activeAccent = accentStyles[accent];
  const maxCardsReached = cards.length >= initialCards.length + cardPool.length;

  const cssSnippet = useMemo(
    () => `card-radius: ${radius}px;\ncard-gap: ${density}px;\ncard-tilt: ${tilt}deg;\nglow-opacity: ${glow}%;\naccent: ${accent};`,
    [accent, density, glow, radius, tilt]
  );

  function resetPlayground() {
    setAccent("cyan");
    setRadius(28);
    setTilt(-3);
    setGlow(42);
    setDensity(14);
    setSpin(false);
    setGlass(true);
    setCopied(false);
    setCards(initialCards);
  }

  function shuffleCards() {
    setCards((current) =>
      current.map((card, index) => ({
        ...card,
        ...randomPosition(index + Math.floor(Math.random() * 5))
      }))
    );
    setSpin(true);
    window.setTimeout(() => setSpin(false), 700);
  }

  function addCard() {
    setCards((current) => {
      const nextCard = cardPool.find((card) => !current.some((item) => item.id === card.id));

      if (!nextCard) {
        return current;
      }

      return [
        ...current,
        {
          ...nextCard,
          ...randomPosition(current.length + 1)
        }
      ];
    });
  }

  function removeCard() {
    setCards((current) => (current.length > 1 ? current.slice(0, -1) : current));
  }

  async function copySnippet() {
    try {
      await navigator.clipboard.writeText(cssSnippet);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <section id="playground" className="container-px py-24">
      <Reveal>
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-kicker">{t.playground.kicker}</span>
          <h2 className="mt-4 font-display text-3xl font-black tracking-tight sm:text-5xl">
            {t.playground.title}
          </h2>
          <p className="mt-4 text-base leading-8 text-muted sm:text-lg">{t.playground.subtitle}</p>
        </div>
      </Reveal>

      <div className="mx-auto mt-12 grid max-w-7xl gap-6 lg:grid-cols-[0.95fr_1.25fr]">
        <Reveal>
          <div className="glass h-full rounded-[2rem] p-5 sm:p-6">
            <div className="flex items-center justify-between gap-3">
              <div>
                <p className="text-sm font-semibold text-muted">{t.playground.panelTitle}</p>
                <h3 className="font-display text-2xl font-black">{t.playground.controlsTitle}</h3>
              </div>
              <span className={cn("rounded-full px-3 py-1 text-xs font-bold", activeAccent.soft)}>
                {accentStyles[accent].label}
              </span>
            </div>

            <div className="mt-6 space-y-6">
              <div>
                <p className="mb-3 text-sm font-bold text-ink">{t.playground.accent}</p>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
                  {(Object.keys(accentStyles) as AccentKey[]).map((item) => (
                    <button
                      key={item}
                      type="button"
                      onClick={() => setAccent(item)}
                      className={cn(
                        "rounded-2xl border border-line/70 bg-panel/65 p-3 text-left text-xs font-bold transition hover:-translate-y-0.5 hover:shadow-glass",
                        accent === item && "ring-2",
                        accent === item && accentStyles[item].ring
                      )}
                    >
                      <span
                        className={cn(
                          "mb-2 block h-8 rounded-xl bg-gradient-to-br",
                          accentStyles[item].gradient
                        )}
                      />
                      {accentStyles[item].label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <RangeControl
                  label={t.playground.radius}
                  value={radius}
                  min={8}
                  max={42}
                  suffix="px"
                  onChange={setRadius}
                />
                <RangeControl
                  label={t.playground.tilt}
                  value={tilt}
                  min={-12}
                  max={12}
                  suffix="°"
                  onChange={setTilt}
                />
                <RangeControl
                  label={t.playground.glow}
                  value={glow}
                  min={0}
                  max={100}
                  suffix="%"
                  onChange={setGlow}
                />
                <RangeControl
                  label={t.playground.density}
                  value={density}
                  min={8}
                  max={28}
                  suffix="px"
                  onChange={setDensity}
                />
              </div>

              <div className="grid gap-2 sm:grid-cols-2">
                <ActionButton icon={Shuffle} label={t.playground.shuffle} onClick={shuffleCards} />
                <ActionButton
                  icon={Plus}
                  label={t.playground.addCard}
                  onClick={addCard}
                  disabled={maxCardsReached}
                />
                <ActionButton icon={Trash2} label={t.playground.removeCard} onClick={removeCard} />
                <ActionButton icon={RefreshCcw} label={t.playground.reset} onClick={resetPlayground} />
              </div>

              <button
                type="button"
                onClick={() => setGlass((current) => !current)}
                className="flex w-full items-center justify-between rounded-2xl border border-line/70 bg-panel/65 p-4 text-left transition hover:bg-ink/5 dark:hover:bg-white/10"
              >
                <span>
                  <span className="block text-sm font-bold">{t.playground.glassMode}</span>
                  <span className="text-xs text-muted">{t.playground.glassHint}</span>
                </span>
                <span
                  className={cn(
                    "relative h-7 w-12 rounded-full border border-line transition",
                    glass ? "bg-sky-500/80" : "bg-slate-300 dark:bg-slate-700"
                  )}
                >
                  <span
                    className={cn(
                      "absolute top-1 h-5 w-5 rounded-full bg-white shadow transition",
                      glass ? "left-6" : "left-1"
                    )}
                  />
                </span>
              </button>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="glass overflow-hidden rounded-[2rem]">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line/70 px-5 py-4 sm:px-6">
              <div className="flex items-center gap-3">
                <span className={cn("grid h-10 w-10 place-items-center rounded-2xl bg-gradient-to-br text-white", activeAccent.gradient)}>
                  <LayoutDashboard className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-bold">{t.playground.previewTitle}</p>
                  <p className="text-xs text-muted">{t.playground.previewHint}</p>
                </div>
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setSpin(true);
                    window.setTimeout(() => setSpin(false), 700);
                  }}
                  className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-panel/70 px-3 py-2 text-xs font-bold transition hover:-translate-y-0.5 hover:shadow-glass"
                >
                  <RotateCcw className="h-4 w-4" />
                  {t.playground.spin}
                </button>
                <button
                  type="button"
                  onClick={copySnippet}
                  className="inline-flex items-center gap-2 rounded-full border border-line/70 bg-panel/70 px-3 py-2 text-xs font-bold transition hover:-translate-y-0.5 hover:shadow-glass"
                >
                  <Copy className="h-4 w-4" />
                  {copied ? t.playground.copied : t.playground.copyCss}
                </button>
              </div>
            </div>

            <div
              ref={constraintsRef}
              className="relative min-h-[520px] overflow-hidden bg-[linear-gradient(rgba(148,163,184,0.12)_1px,transparent_1px),linear-gradient(90deg,rgba(148,163,184,0.12)_1px,transparent_1px)] bg-[length:28px_28px] p-5 sm:p-8"
            >
              <div
                className={cn(
                  "absolute inset-x-6 top-8 overflow-hidden border border-line/70 transition-all duration-300 sm:inset-x-10",
                  glass ? "bg-panel/60 shadow-glass backdrop-blur-2xl" : "bg-panel shadow-sm"
                )}
                style={{ borderRadius: radius + 10, padding: density }}
              >
                <div className="flex items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    <span className={cn("h-3 w-3 rounded-full", activeAccent.dot)} />
                    <span className="h-3 w-3 rounded-full bg-amber-400" />
                    <span className="h-3 w-3 rounded-full bg-emerald-400" />
                  </div>
                  <span className="rounded-full border border-line/60 px-3 py-1 text-[11px] font-bold text-muted">
                    portfolio-ui.config
                  </span>
                </div>
                <div className="mt-5 grid gap-3 md:grid-cols-[1fr_0.75fr]" style={{ gap: density }}>
                  <div
                    className={cn(
                      "rounded-[1.5rem] bg-gradient-to-br p-5 text-white transition-all duration-300",
                      activeAccent.gradient
                    )}
                    style={{ borderRadius: radius, boxShadow: `0 24px 80px rgba(56, 189, 248, ${glow / 250})` }}
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/70">
                          {t.playground.heroMockLabel}
                        </p>
                        <h4 className="mt-3 font-display text-3xl font-black">ZAGOR.dev</h4>
                      </div>
                      <Sparkles className="h-6 w-6 text-white/80" />
                    </div>
                    <p className="mt-5 max-w-md text-sm leading-6 text-white/82">
                      {t.playground.heroMockText}
                    </p>
                  </div>

                  <div className="rounded-[1.5rem] border border-line/70 bg-panel/80 p-4" style={{ borderRadius: radius }}>
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
                      {t.playground.liveConfig}
                    </p>
                    <pre className="mt-3 whitespace-pre-wrap rounded-2xl bg-slate-950 p-4 text-xs leading-6 text-slate-100">
                      {cssSnippet}
                    </pre>
                  </div>
                </div>
              </div>

              <div className="absolute inset-0 top-52">
                {cards.map((card, index) => (
                  <motion.div
                    key={card.id}
                    drag
                    dragConstraints={constraintsRef}
                    dragElastic={0.12}
                    onDragEnd={(_, info) => {
                      setCards((current) =>
                        current.map((item) =>
                          item.id === card.id
                            ? { ...item, x: item.x + info.offset.x, y: item.y + info.offset.y }
                            : item
                        )
                      );
                    }}
                    initial={false}
                    animate={{
                      x: card.x,
                      y: card.y,
                      rotate: spin ? tilt + 360 : tilt,
                      scale: spin ? 1.05 : 1
                    }}
                    transition={{ type: "spring", stiffness: 240, damping: 24, delay: index * 0.03 }}
                    whileHover={{ y: card.y - 8, scale: 1.03 }}
                    whileTap={{ scale: 0.98, cursor: "grabbing" }}
                    className={cn(
                      "absolute left-1/2 top-1/2 w-44 -translate-x-1/2 -translate-y-1/2 cursor-grab select-none border border-white/50 p-4 shadow-glass backdrop-blur-2xl dark:border-white/10",
                      glass ? "bg-white/78 dark:bg-slate-950/72" : "bg-panel"
                    )}
                    style={{ borderRadius: radius, boxShadow: `0 20px 70px rgba(56, 189, 248, ${glow / 360})` }}
                  >
                    <div className="flex items-center justify-between gap-2">
                      <span className={cn("rounded-full px-2 py-1 text-[10px] font-black uppercase", activeAccent.soft)}>
                        {card.meta}
                      </span>
                      <Grip className="h-4 w-4 text-muted" />
                    </div>
                    <p className="mt-4 font-display text-2xl font-black">{card.title}</p>
                    <p className="mt-1 text-sm font-bold text-muted">{card.value}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

type RangeControlProps = {
  label: string;
  value: number;
  min: number;
  max: number;
  suffix: string;
  onChange: (value: number) => void;
};

function RangeControl({ label, value, min, max, suffix, onChange }: RangeControlProps) {
  return (
    <label className="rounded-2xl border border-line/70 bg-panel/65 p-4">
      <span className="flex items-center justify-between gap-3 text-sm font-bold">
        <span>{label}</span>
        <span className="text-muted">
          {value}
          {suffix}
        </span>
      </span>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="mt-4 w-full accent-sky-500"
      />
    </label>
  );
}

type ActionButtonProps = {
  icon: LucideIcon;
  label: string;
  onClick: () => void;
  disabled?: boolean;
};

function ActionButton({ icon: Icon, label, onClick, disabled = false }: ActionButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      className="inline-flex items-center justify-center gap-2 rounded-2xl border border-line/70 bg-panel/65 px-4 py-3 text-sm font-bold transition hover:-translate-y-0.5 hover:shadow-glass disabled:cursor-not-allowed disabled:opacity-45 disabled:hover:translate-y-0 disabled:hover:shadow-none"
    >
      <Icon className="h-4 w-4" />
      {label}
    </button>
  );
}
