"use client";

import { Github, Mail, Send } from "lucide-react";
import { socialLinks } from "@/data/site";
import { useI18n } from "@/i18n/i18n-context";
import { Reveal } from "@/components/reveal";

export function ContactSection() {
  const { t } = useI18n();

  const links = [
    { icon: Mail, label: t.contacts.email, href: socialLinks.email },
    { icon: Send, label: t.contacts.telegram, href: socialLinks.telegram },
    { icon: Github, label: t.contacts.github, href: socialLinks.github }
  ];

  return (
    <section id="contacts" className="container-px mx-auto max-w-7xl py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-slate-950 p-8 text-white shadow-glow sm:p-10 lg:p-12">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-brand-500/30 blur-3xl" />
          <div className="absolute -bottom-24 left-10 h-80 w-80 rounded-full bg-violet-500/25 blur-3xl" />
          <div className="relative grid gap-10 lg:grid-cols-[1fr_0.9fr] lg:items-end">
            <div>
              <span className="inline-flex rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                {t.contacts.kicker}
              </span>
              <h2 className="mt-5 max-w-3xl font-display text-4xl font-black tracking-[-0.045em] sm:text-5xl">
                {t.contacts.title}
              </h2>
              <p className="mt-5 max-w-2xl text-lg leading-8 text-slate-300">{t.contacts.subtitle}</p>
            </div>
            <div className="grid gap-3">
              {links.map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith("http") ? "_blank" : undefined}
                  rel={href.startsWith("http") ? "noreferrer" : undefined}
                  className="group flex items-center gap-4 rounded-3xl border border-white/10 bg-white/10 p-4 backdrop-blur-xl transition hover:-translate-y-1 hover:bg-white/15"
                >
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-white text-slate-950">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="font-semibold text-slate-100">{label}</span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
