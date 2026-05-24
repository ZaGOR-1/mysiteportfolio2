"use client";

import { ArrowRight, Github, Mail, Send } from "lucide-react";
import { motion } from "framer-motion";
import { socialLinks } from "@/data/site";
import { useI18n } from "@/i18n/i18n-context";

export function Hero() {
  const { t } = useI18n();

  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-36 sm:pt-40 lg:pb-28">
      <div className="absolute inset-0 -z-10 bg-hero-grid bg-[size:44px_44px] opacity-50" />
      <div className="absolute left-1/2 top-20 -z-10 h-80 w-80 -translate-x-1/2 rounded-full bg-brand-500/20 blur-3xl" />
      <div className="container-px mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.08fr_0.92fr]">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="section-kicker">{t.hero.eyebrow}</span>
          <h1 className="mt-6 max-w-4xl font-display text-5xl font-black tracking-[-0.06em] sm:text-6xl lg:text-7xl">
            {t.hero.title}
            <span className="block text-gradient">{t.hero.role}</span>
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-muted sm:text-xl">
            {t.hero.subtitle}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#projects"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-bold text-canvas shadow-glow transition hover:-translate-y-1"
            >
              {t.actions.viewProjects}
              <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
            </a>
            <a
              href="#contacts"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-panel/70 px-6 py-3 text-sm font-bold text-ink backdrop-blur-xl transition hover:-translate-y-1 hover:border-brand-400"
            >
              {t.actions.contactMe}
            </a>
          </div>

          <div className="mt-10 grid max-w-2xl grid-cols-3 gap-3">
            {t.hero.stats.map((stat) => (
              <div key={stat.label} className="glass rounded-3xl p-4">
                <div className="font-display text-2xl font-black">{stat.value}</div>
                <div className="mt-1 text-xs font-medium text-muted">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.94, y: 26 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.75, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
          className="relative"
        >
          <div className="absolute -inset-5 -z-10 rounded-[3rem] bg-brand-gradient opacity-20 blur-3xl" />
          <div className="glass relative overflow-hidden rounded-[2.5rem] p-5">
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/80 to-transparent" />
            <div className="rounded-[2rem] border border-line/60 bg-slate-950 p-5 text-slate-100 shadow-2xl">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex gap-2">
                  <span className="h-3 w-3 rounded-full bg-rose-400" />
                  <span className="h-3 w-3 rounded-full bg-amber-300" />
                  <span className="h-3 w-3 rounded-full bg-emerald-400" />
                </div>
                <span className="rounded-full bg-white/10 px-3 py-1 text-xs text-slate-300">
                  {t.hero.codeCard.label}
                </span>
              </div>
              <pre className="overflow-x-auto text-sm leading-7 text-slate-300">
                <code>
                  {t.hero.codeCard.lines.map((line, index) => (
                    <span key={line} className="block">
                      <span className="mr-4 select-none text-slate-600">{index + 1}</span>
                      {line}
                    </span>
                  ))}
                </code>
              </pre>
            </div>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              <a href={socialLinks.github} target="_blank" rel="noreferrer" className="rounded-3xl border border-line/70 bg-panel/70 p-4 transition hover:-translate-y-1 hover:border-brand-400">
                <Github className="h-5 w-5" />
                <span className="mt-3 block text-sm font-bold">{t.actions.github}</span>
              </a>
              <a href={socialLinks.telegram} target="_blank" rel="noreferrer" className="rounded-3xl border border-line/70 bg-panel/70 p-4 transition hover:-translate-y-1 hover:border-brand-400">
                <Send className="h-5 w-5" />
                <span className="mt-3 block text-sm font-bold">{t.actions.telegram}</span>
              </a>
              <a href={socialLinks.email} className="rounded-3xl border border-line/70 bg-panel/70 p-4 transition hover:-translate-y-1 hover:border-brand-400">
                <Mail className="h-5 w-5" />
                <span className="mt-3 block text-sm font-bold">{t.actions.email}</span>
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
