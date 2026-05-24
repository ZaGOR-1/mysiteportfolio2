import { siteConfig } from "@/data/site";

export type Locale = "uk" | "en";

export const locales: Locale[] = ["uk", "en"];

export const localeLabels: Record<Locale, string> = {
  uk: "UA",
  en: "EN"
};

export const dictionaries = {
  uk: {
    meta: {
      langName: "Українська"
    },
    nav: {
      about: "Про мене",
      skills: "Навички",
      projects: "Портфоліо",
      contacts: "Контакти"
    },
    actions: {
      viewProjects: "Дивитись проєкти",
      contactMe: "Зв’язатися",
      github: "GitHub",
      telegram: "Telegram",
      email: "Email",
      live: "Демо",
      code: "Код",
      theme: "Тема",
      language: "Мова"
    },
    hero: {
      eyebrow: "2 курс • Інженерія програмного забезпечення",
      title: "Денис Загоровський",
      role: "Student Software Engineer",
      subtitle:
        "Створюю швидкі, адаптивні та чисті вебінтерфейси, поєднуючи сучасний frontend з міцною базою алгоритмів, ООП та backend-розробки.",
      stats: [
        { value: "2", label: "курс навчання" },
        { value: "10+", label: "технологій у стеку" },
        { value: "UA/EN", label: "мови сайту" }
      ],
      codeCard: {
        label: "current_focus.ts",
        lines: [
          "const focus = ['React', 'TypeScript', 'PHP', 'C#'];",
          "const goal = 'build useful, polished products';",
          "export const mindset = 'learn fast, ship clean';"
        ]
      }
    },
    about: {
      kicker: "Про мене",
      title: "Майбутній інженер, який мислить системно і любить якісний UX.",
      body:
        "Я навчаюся на 2 курсі спеціальності «Інженерія програмного забезпечення» в Житомирській політехніці. Мене цікавить повний цикл створення продуктів: від архітектури та чистого коду до мікроанімацій, доступності й продуктивності.",
      educationTitle: "Освіта",
      education:
        "Державний університет «Житомирська політехніка», спеціальність «Інженерія програмного забезпечення», 2 курс.",
      qualities: [
        "Швидко вивчаю нові технології та застосовую їх у практичних проєктах.",
        "Ціную зрозумілу структуру коду, компонентний підхід і сильну типізацію.",
        "Фокусуюся на деталях інтерфейсу: відступах, типографіці, станах і доступності."
      ]
    },
    skills: {
      kicker: "Стек",
      title: "Технології, з якими працюю",
      groups: [
        {
          title: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
        },
        {
          title: "Backend & Core",
          items: ["PHP", "C#", "ASP.NET Core", "MySQL", "REST API"]
        },
        {
          title: "Tools",
          items: ["Git", "GitHub", "Docker", "VS Code", "CI/CD"]
        }
      ]
    },
    projects: {
      kicker: "Портфоліо",
      title: "Обрані практичні проєкти",
      subtitle:
        "Кілька робіт, які показують frontend, структуру коду, деплой через GitHub Pages і практику автоматизації.",
      items: [
        {
          title: "Sitefishing",
          description:
            "Адаптивний landing page для магазину рибальських товарів із каталогом, перемиканням мови, фільтрами та швидкими CTA.",
          tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
          repo: "https://github.com/ZaGOR-1/Sitefishing",
          demo: "https://zagor-1.github.io/Sitefishing/"
        },
        {
          title: "Portfolio Website",
          description:
            "Особистий сайт-портфоліо з локалізацією, темами, SEO, Open Graph, sitemap, robots.txt і JSON-LD.",
          tech: ["React", "Next.js", "i18n", "SEO"],
          repo: "https://github.com/ZaGOR-1/mysiteportfolio2",
          demo: "https://zagor-1.github.io/mysiteportfolio2/"
        },
        {
          title: "Win11 CalmMode",
          description:
            "PowerShell-проєкт для акуратного налаштування Windows 11: структура скриптів, документація, changelog і CI-перевірки.",
          tech: ["PowerShell", "Windows", "Git", "GitHub Actions"],
          repo: "https://github.com/ZaGOR-1/Win11-25H2-CalmMode",
          demo: null
        }
      ]
    },
    contacts: {
      kicker: "Контакти",
      title: "Відкритий до навчальних, командних і pet-проєктів.",
      subtitle:
        "Напишіть, якщо потрібен відповідальний junior developer для вебінтерфейсу, навчального проєкту або прототипу.",
      email: siteConfig.emailAddress,
      telegram: siteConfig.telegramHandle,
      github: "ZaGOR-1"
    },
    footer: {
      made: "Спроєктовано та зібрано з Next.js, Tailwind CSS і Framer Motion.",
      rights: "Усі права захищено."
    }
  },
  en: {
    meta: {
      langName: "English"
    },
    nav: {
      about: "About",
      skills: "Skills",
      projects: "Portfolio",
      contacts: "Contacts"
    },
    actions: {
      viewProjects: "View projects",
      contactMe: "Contact me",
      github: "GitHub",
      telegram: "Telegram",
      email: "Email",
      live: "Live",
      code: "Code",
      theme: "Theme",
      language: "Language"
    },
    hero: {
      eyebrow: "2nd year • Software Engineering",
      title: "Denys Zahorovskyi",
      role: "Student Software Engineer",
      subtitle:
        "I build fast, responsive, clean web interfaces while combining modern frontend skills with solid foundations in algorithms, OOP, and backend development.",
      stats: [
        { value: "2", label: "year of study" },
        { value: "10+", label: "technologies in stack" },
        { value: "UA/EN", label: "site languages" }
      ],
      codeCard: {
        label: "current_focus.ts",
        lines: [
          "const focus = ['React', 'TypeScript', 'PHP', 'C#'];",
          "const goal = 'build useful, polished products';",
          "export const mindset = 'learn fast, ship clean';"
        ]
      }
    },
    about: {
      kicker: "About",
      title: "A future engineer who thinks systematically and cares about UX.",
      body:
        "I am a 2nd-year Software Engineering student at Zhytomyr Polytechnic. I am interested in the full product cycle: from architecture and clean code to micro-interactions, accessibility, and performance.",
      educationTitle: "Education",
      education:
        "Zhytomyr Polytechnic State University, Software Engineering, 2nd year.",
      qualities: [
        "I learn new technologies quickly and apply them in practical projects.",
        "I value clear code structure, component-based design, and strong typing.",
        "I focus on interface details: spacing, typography, states, and accessibility."
      ]
    },
    skills: {
      kicker: "Stack",
      title: "Technologies I work with",
      groups: [
        {
          title: "Frontend",
          items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"]
        },
        {
          title: "Backend & Core",
          items: ["PHP", "C#", "ASP.NET Core", "MySQL", "REST API"]
        },
        {
          title: "Tools",
          items: ["Git", "GitHub", "Docker", "VS Code", "CI/CD"]
        }
      ]
    },
    projects: {
      kicker: "Portfolio",
      title: "Selected practical projects",
      subtitle:
        "A few works that demonstrate frontend, code structure, GitHub Pages deployment, and automation practice.",
      items: [
        {
          title: "Sitefishing",
          description:
            "A responsive landing page for a fishing tackle shop with catalog, language switching, filters, and fast CTAs.",
          tech: ["Next.js", "TypeScript", "Tailwind", "Framer Motion"],
          repo: "https://github.com/ZaGOR-1/Sitefishing",
          demo: "https://zagor-1.github.io/Sitefishing/"
        },
        {
          title: "Portfolio Website",
          description:
            "A personal portfolio website with localization, themes, SEO, Open Graph, sitemap, robots.txt, and JSON-LD.",
          tech: ["React", "Next.js", "i18n", "SEO"],
          repo: "https://github.com/ZaGOR-1/mysiteportfolio2",
          demo: "https://zagor-1.github.io/mysiteportfolio2/"
        },
        {
          title: "Win11 CalmMode",
          description:
            "A PowerShell project for careful Windows 11 setup: script structure, documentation, changelog, and CI checks.",
          tech: ["PowerShell", "Windows", "Git", "GitHub Actions"],
          repo: "https://github.com/ZaGOR-1/Win11-25H2-CalmMode",
          demo: null
        }
      ]
    },
    contacts: {
      kicker: "Contacts",
      title: "Open to study, team, and pet projects.",
      subtitle:
        "Message me if you need a responsible junior developer for a web interface, student project, or prototype.",
      email: siteConfig.emailAddress,
      telegram: siteConfig.telegramHandle,
      github: "ZaGOR-1"
    },
    footer: {
      made: "Designed and built with Next.js, Tailwind CSS, and Framer Motion.",
      rights: "All rights reserved."
    }
  }
} as const;

export type Dictionary = (typeof dictionaries)[Locale];
