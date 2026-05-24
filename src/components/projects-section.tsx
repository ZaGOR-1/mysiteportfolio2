"use client";

import { ExternalLink, Github } from "lucide-react";
import { projectAccents } from "@/data/site";
import { useI18n } from "@/i18n/i18n-context";
import { Reveal } from "@/components/reveal";

export function ProjectsSection() {
  const { t } = useI18n();

  return (
    <section id="projects" className="container-px mx-auto max-w-7xl py-20">
      <Reveal>
        <span className="section-kicker">{t.projects.kicker}</span>
        <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <h2 className="font-display text-4xl font-black tracking-[-0.045em] sm:text-5xl">
            {t.projects.title}
          </h2>
          <p className="max-w-2xl text-lg leading-8 text-muted lg:justify-self-end">
            {t.projects.subtitle}
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-5 lg:grid-cols-3">
        {t.projects.items.map((project, index) => (
          <Reveal key={project.title} delay={index * 0.08}>
            <article className="group relative h-full overflow-hidden rounded-[2.3rem] border border-line/70 bg-panel/70 p-6 shadow-glass backdrop-blur-xl transition hover:-translate-y-2">
              <div
                className={`absolute inset-x-6 top-0 h-1 rounded-full bg-gradient-to-r ${projectAccents[index % projectAccents.length]}`}
              />
              <div className={`mb-8 h-36 rounded-[1.7rem] bg-gradient-to-br ${projectAccents[index % projectAccents.length]} p-px shadow-glow`}>
                <div className="relative h-full overflow-hidden rounded-[1.65rem] bg-slate-950">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_35%),radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.16),transparent_30%)]" />
                  <div className="absolute bottom-4 left-4 right-4 rounded-2xl border border-white/10 bg-white/10 p-3 text-xs font-semibold text-white backdrop-blur">
                    {project.tech.slice(0, 3).join(" • ")}
                  </div>
                </div>
              </div>
              <h3 className="font-display text-2xl font-bold">{project.title}</h3>
              <p className="mt-3 text-sm leading-7 text-muted">{project.description}</p>
              <div className="mt-5 flex flex-wrap gap-2">
                {project.tech.map((tech) => (
                  <span key={tech} className="rounded-full bg-ink/5 px-3 py-1.5 text-xs font-bold text-muted dark:bg-white/10">
                    {tech}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex gap-3">
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-xs font-bold text-canvas transition hover:-translate-y-0.5"
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    {t.actions.live}
                  </a>
                ) : null}
                <a
                  href={project.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-line px-4 py-2 text-xs font-bold text-muted transition hover:-translate-y-0.5 hover:text-ink"
                >
                  <Github className="h-3.5 w-3.5" />
                  {t.actions.code}
                </a>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
