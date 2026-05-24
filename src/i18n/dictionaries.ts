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
      lab: "JS Lab",
      pythonLab: "Python Lab",
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

    codeLab: {
      kicker: "Інтерактив",
      title: "Міні JS Lab прямо на сайті",
      subtitle:
        "Можна редагувати код, видаляти рядки, запускати JavaScript у безпечному браузерному sandbox і бачити результат у терміналі. Це додає портфоліо відчуття живого dev-продукту.",
      features: [
        { title: "Edit", text: "Змінюй код як у маленькому редакторі." },
        { title: "Run JS", text: "Запускай JavaScript і дивись output." },
        { title: "Fix", text: "Натисни auto-fix, щоб виправити баг." }
      ],
      editorLabel: "Редактор коду",
      run: "Run JavaScript",
      autoFix: "Auto-fix bug",
      deleteLine: "Delete line",
      reset: "Reset",
      terminal: "Terminal output",
      sandboxed: "sandboxed worker",
      lines: "рядків",
      chars: "символів",
      compiling: "Compiling and running code...",
      noOutput: "Code executed without console output.",
      outputPlaceholder: "Натисни Run JavaScript, щоб перевірити код.",
      errorPrefix: "Error:",
      unknownError: "Unknown error",
      fixApplied: "Auto-fix applied: status 'done' → 'completed'. Run the code again.",
      lineDeleted: "Current line deleted. You can run or reset the snippet.",
      challengeTitle: "Міні-завдання",
      challengeText:
        "У прикладі навмисно є логічна помилка: фільтр шукає status 'done', хоча дані використовують 'completed'. Спробуй запустити, виправити вручну або натиснути Auto-fix bug.",
      statuses: {
        ready: "Ready",
        running: "Running",
        success: "Success",
        error: "Error"
      }
    },
    pythonLab: {
      kicker: "Python у браузері",
      title: "Python Lab на Pyodide",
      subtitle:
        "Окремий інтерактивний playground, де можна писати й запускати Python-код прямо на сайті. Runtime завантажується в браузер через Pyodide і працює у Web Worker, тому це не просто красива заглушка.",
      features: [
        { title: "Python", text: "Пиши справжній Python 3 без backend-сервера." },
        { title: "Pyodide", text: "Runtime вантажиться в браузері при першому запуску." },
        { title: "Examples", text: "Перемикай готові приклади: дані, алгоритм, ООП." }
      ],
      editorLabel: "Python-редактор",
      run: "Run Python",
      reset: "Reset code",
      clear: "Clear terminal",
      terminal: "Python output",
      runtime: "Pyodide Web Worker",
      examplesLabel: "Приклади",
      lines: "рядків",
      chars: "символів",
      loadingRuntime: "Loading Pyodide Python runtime... First run can take a few seconds.",
      running: "Running Python...",
      noOutput: "Python code executed without print output.",
      outputPlaceholder: "Натисни Run Python, щоб виконати код.",
      exampleLoaded: "Example loaded: {name}. You can edit it and run again.",
      errorPrefix: "Python error:",
      unknownError: "Unknown Python error",
      timeout: "Execution timeout: Python code took too long. Possible infinite loop.",
      notesTitle: "Як це працює",
      notes: [
        "Код реально виконується в браузері через Pyodide, без окремого backend.",
        "Перший запуск може бути повільнішим, бо завантажується Python runtime з CDN.",
        "Підходить для невеликих скриптів, алгоритмів, списків, словників, класів і print-output."
      ],
      statuses: {
        idle: "Ready",
        loading: "Loading runtime",
        running: "Running",
        success: "Success",
        error: "Error"
      }
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
      lab: "JS Lab",
      pythonLab: "Python Lab",
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

    codeLab: {
      kicker: "Interactive",
      title: "Mini JS Lab inside the portfolio",
      subtitle:
        "Visitors can edit code, delete lines, run JavaScript in a safe browser sandbox, and see the result in a terminal. It makes the portfolio feel like a real developer product.",
      features: [
        { title: "Edit", text: "Change code in a tiny editor." },
        { title: "Run JS", text: "Run JavaScript and inspect output." },
        { title: "Fix", text: "Press auto-fix to repair the bug." }
      ],
      editorLabel: "Code editor",
      run: "Run JavaScript",
      autoFix: "Auto-fix bug",
      deleteLine: "Delete line",
      reset: "Reset",
      terminal: "Terminal output",
      sandboxed: "sandboxed worker",
      lines: "lines",
      chars: "chars",
      compiling: "Compiling and running code...",
      noOutput: "Code executed without console output.",
      outputPlaceholder: "Press Run JavaScript to test the code.",
      errorPrefix: "Error:",
      unknownError: "Unknown error",
      fixApplied: "Auto-fix applied: status 'done' → 'completed'. Run the code again.",
      lineDeleted: "Current line deleted. You can run or reset the snippet.",
      challengeTitle: "Mini challenge",
      challengeText:
        "The example has an intentional logic bug: the filter checks status 'done', while the data uses 'completed'. Run it, fix it manually, or press Auto-fix bug.",
      statuses: {
        ready: "Ready",
        running: "Running",
        success: "Success",
        error: "Error"
      }
    },
    pythonLab: {
      kicker: "Python in browser",
      title: "Python Lab powered by Pyodide",
      subtitle:
        "A separate interactive playground where visitors can write and run Python code directly on the website. The runtime loads in the browser through Pyodide and runs inside a Web Worker, so it is not just a visual mockup.",
      features: [
        { title: "Python", text: "Write real Python 3 without a backend server." },
        { title: "Pyodide", text: "The runtime loads in the browser on first run." },
        { title: "Examples", text: "Switch between data, algorithm, and OOP snippets." }
      ],
      editorLabel: "Python editor",
      run: "Run Python",
      reset: "Reset code",
      clear: "Clear terminal",
      terminal: "Python output",
      runtime: "Pyodide Web Worker",
      examplesLabel: "Examples",
      lines: "lines",
      chars: "chars",
      loadingRuntime: "Loading Pyodide Python runtime... First run can take a few seconds.",
      running: "Running Python...",
      noOutput: "Python code executed without print output.",
      outputPlaceholder: "Press Run Python to execute the code.",
      exampleLoaded: "Example loaded: {name}. You can edit it and run again.",
      errorPrefix: "Python error:",
      unknownError: "Unknown Python error",
      timeout: "Execution timeout: Python code took too long. Possible infinite loop.",
      notesTitle: "How it works",
      notes: [
        "The code really runs in the browser through Pyodide, without a separate backend.",
        "The first run can be slower because the Python runtime is loaded from a CDN.",
        "It is useful for small scripts, algorithms, lists, dictionaries, classes, and print output."
      ],
      statuses: {
        idle: "Ready",
        loading: "Loading runtime",
        running: "Running",
        success: "Success",
        error: "Error"
      }
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
