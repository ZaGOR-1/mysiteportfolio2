export const siteConfig = {
  name: "Denys Zahorovskyi",
  fullNameUk: "Денис Загоровський",
  baseUrl: "https://zagor-1.github.io/mysiteportfolio2/",
  githubProfile: "https://github.com/ZaGOR-1",
  emailAddress: "ran31276@gmail.com",
  telegramHandle: "@Denis_Zagor",
  telegramUrl: "https://t.me/Denis_Zagor"
} as const;

export const socialLinks = {
  email: `mailto:${siteConfig.emailAddress}`,
  telegram: siteConfig.telegramUrl,
  github: siteConfig.githubProfile
};

export const projectAccents = [
  "from-cyan-400 via-sky-500 to-blue-600",
  "from-violet-400 via-fuchsia-500 to-rose-500",
  "from-emerald-400 via-teal-500 to-cyan-600"
] as const;

export const navItems = [
  { id: "about", key: "about" },
  { id: "skills", key: "skills" },
  { id: "lab", key: "lab" },
  { id: "python-lab", key: "pythonLab" },
  { id: "playground", key: "playground" },
  { id: "projects", key: "projects" },
  { id: "contacts", key: "contacts" }
] as const;
