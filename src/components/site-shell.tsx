"use client";

import { AboutSection } from "@/components/about-section";
import { CodeLabSection } from "@/components/code-lab-section";
import { ContactSection } from "@/components/contact-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { InterfacePlaygroundSection } from "@/components/interface-playground-section";
import { ProjectsSection } from "@/components/projects-section";
import { PythonLabSection } from "@/components/python-lab-section";
import { SkillsSection } from "@/components/skills-section";

export function SiteShell() {
  return (
    <main className="relative">
      <div className="pointer-events-none fixed inset-0 -z-10 bg-[radial-gradient(circle_at_10%_10%,rgba(56,189,248,0.14),transparent_28%),radial-gradient(circle_at_90%_5%,rgba(139,92,246,0.16),transparent_26%),radial-gradient(circle_at_50%_100%,rgba(244,114,182,0.10),transparent_30%)]" />
      <Header />
      <Hero />
      <AboutSection />
      <SkillsSection />
      <CodeLabSection />
      <PythonLabSection />
      <InterfacePlaygroundSection />
      <ProjectsSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
