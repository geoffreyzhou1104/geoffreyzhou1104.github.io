/* ============================================================
   i18n engine — bilingual UI (zh / en) with localStorage memory
   ============================================================ */

const I18N = {
  zh: {
    "nav.home": "首页",
    "nav.blog": "文章",
    "nav.portfolio": "作品集",
    "nav.about": "关于",

    "lang.toggle": "EN",

    "home.eyebrow": "个人网站",
    "home.heroTitle": "你好，我是 Geoffrey",
    "home.heroSubtitle":
      "写代码，也写字。在这里记录我的思考、项目与日常，欢迎随便逛逛。",
    "home.ctaWorks": "看看作品",
    "home.ctaBlog": "读读文章",
    "home.featuredPosts": "精选文章",
    "home.featuredPostsSub": "最近的几篇文字",
    "home.featuredWorks": "精选作品",
    "home.featuredWorksSub": "一些值得展示的项目",
    "home.viewAllPosts": "查看全部文章 →",
    "home.viewAllWorks": "查看全部作品 →",

    "blog.title": "所有文章",
    "blog.sub": "按时间倒序，随手写的一些东西",

    "portfolio.title": "作品集",
    "portfolio.sub": "做过的一些小项目和实验",

    "article.back": "← 返回文章列表",
    "article.notFoundTitle": "文章不存在或已下线",
    "article.notFoundText": "这篇文章可能已被移动或删除。",
    "article.prev": "上一篇",
    "article.next": "下一篇",

    "about.title": "关于我",
    "about.role": "开发者 · 写作者",
    "about.p1":
      "你好，我是 Geoffrey。白天写代码，晚上写点字，周末拍拍照。我相信把东西做简单比做复杂难得多，也值得多。",
    "about.p2":
      "这个网站是我的一个小实验：不用框架、不用构建工具，看看最朴素的技术能走多远。顺便逼自己持续写作——毕竟公开立 flag 是最好的自我监督。",
    "about.p3":
      "工作之外，我在学英语、读闲书、给街头拍照。如果你对这里任何一篇文章或项目感兴趣，欢迎写信聊聊。",
    "about.skillsTitle": "技能",
    "about.skill1": "前端开发",
    "about.skill1Note": "HTML / CSS / JS",
    "about.skill2": "工具与效率",
    "about.skill2Note": "Node.js / CLI",
    "about.skill3": "排版与设计",
    "about.skill3Note": "Design Tokens",
    "about.skill4": "摄影",
    "about.skill4Note": "街头 / 纪实",
    "about.timelineTitle": "经历",
    "about.tl1When": "2024 —",
    "about.tl1What": "独立开发者",
    "about.tl1Note": "做自己的小产品，写自己的博客",
    "about.tl2When": "2021 — 2024",
    "about.tl2What": "前端工程师",
    "about.tl2Note": "在某家公司修了三年像素",
    "about.tl3When": "2017 — 2021",
    "about.tl3What": "计算机科学 · 本科",
    "about.tl3Note": "在图书馆和机房之间来回",
    "about.contact": "联系我",
    "about.github": "GitHub",
    "about.email": "Email",

    "footer.copyright": "© 2026 Geoffrey. 保留所有权利。",
    "footer.builtWith": "纯 HTML / CSS / JS 手工打造",
  },
  en: {
    "nav.home": "Home",
    "nav.blog": "Blog",
    "nav.portfolio": "Portfolio",
    "nav.about": "About",

    "lang.toggle": "中",

    "home.eyebrow": "Personal Site",
    "home.heroTitle": "Hi, I'm Geoffrey",
    "home.heroSubtitle":
      "I write code and I write words. This is where I keep my thoughts, projects, and everyday notes. Make yourself at home.",
    "home.ctaWorks": "View my work",
    "home.ctaBlog": "Read the blog",
    "home.featuredPosts": "Featured Writing",
    "home.featuredPostsSub": "A few recent pieces",
    "home.featuredWorks": "Featured Projects",
    "home.featuredWorksSub": "Some things worth showing",
    "home.viewAllPosts": "View all posts →",
    "home.viewAllWorks": "View all work →",

    "blog.title": "All Posts",
    "blog.sub": "Sorted by date, things I felt like writing down",

    "portfolio.title": "Portfolio",
    "portfolio.sub": "Small projects and experiments I've built",

    "article.back": "← Back to all posts",
    "article.notFoundTitle": "Post not found",
    "article.notFoundText": "This post may have been moved or removed.",
    "article.prev": "Previous",
    "article.next": "Next",

    "about.title": "About Me",
    "about.role": "Developer · Writer",
    "about.p1":
      "Hi, I'm Geoffrey. I write code during the day, words at night, and take photos on weekends. I believe making things simple is much harder than making them complicated — and worth far more.",
    "about.p2":
      "This site is a small experiment: no frameworks, no build tools — just to see how far the plainest tech can go. It also nudges me to keep writing; a public flag is the best self-supervision.",
    "about.p3":
      "Outside of work I'm learning English, reading books, and shooting street photography. If any post or project here interests you, my inbox is open.",
    "about.skillsTitle": "Skills",
    "about.skill1": "Front-end",
    "about.skill1Note": "HTML / CSS / JS",
    "about.skill2": "Tooling",
    "about.skill2Note": "Node.js / CLI",
    "about.skill3": "Typography & design",
    "about.skill3Note": "Design Tokens",
    "about.skill4": "Photography",
    "about.skill4Note": "Street / documentary",
    "about.timelineTitle": "Timeline",
    "about.tl1When": "2024 —",
    "about.tl1What": "Independent developer",
    "about.tl1Note": "Building small products, writing this blog",
    "about.tl2When": "2021 — 2024",
    "about.tl2What": "Front-end engineer",
    "about.tl2Note": "Spent three years fixing pixels somewhere",
    "about.tl3When": "2017 — 2021",
    "about.tl3What": "B.Sc. Computer Science",
    "about.tl3Note": "Lived between the library and the lab",
    "about.contact": "Get in touch",
    "about.github": "GitHub",
    "about.email": "Email",

    "footer.copyright": "© 2026 Geoffrey. All rights reserved.",
    "footer.builtWith": "Handcrafted with plain HTML / CSS / JS",
  },
};

/* Language engine */
const Lang = {
  current: "zh",
  _listeners: [],

  init() {
    let lang = null;
    try {
      lang = localStorage.getItem("site-lang");
    } catch (e) {
      /* storage unavailable — fall through */
    }
    if (lang !== "zh" && lang !== "en") {
      const nav = (navigator.language || "zh").toLowerCase();
      lang = nav.startsWith("zh") ? "zh" : "en";
    }
    this.current = lang;
  },

  t(key) {
    const dict = I18N[this.current] || I18N.zh;
    return dict[key] !== undefined ? dict[key] : I18N.zh[key] !== undefined ? I18N.zh[key] : key;
  },

  apply() {
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      el.textContent = this.t(el.dataset.i18n);
    });
  },

  /* Pages register a callback to re-render dynamic data on language change */
  onChange(fn) {
    if (typeof fn === "function") this._listeners.push(fn);
  },

  toggle() {
    this.current = this.current === "zh" ? "en" : "zh";
    try {
      localStorage.setItem("site-lang", this.current);
    } catch (e) {
      /* ignore */
    }
    this.apply();
    this._listeners.forEach((fn) => fn(this.current));
    document.documentElement.lang = this.current;
  },
};
