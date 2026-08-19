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
    "about.role": "供应链管理 · 终身学习者",
    "about.p1":
      "你好，我是 Geoffrey，目前在供应链管理岗位。更早之前，我做过产品技术支持、产品企划、海外销售代表和营销 GTM——路线看起来有些跳跃，但回头看，其实都是在学同一件事：在产品与市场之间搭桥。",
    "about.p2":
      "眼下我正在认真学 AI。不是赶时髦，而是相信它切切实实能提升学习和工作的效率——这个网站，就是我请 AI 帮忙搭起来的。工具会一直变，把工具用好的能力不会。",
    "about.p3":
      "工作之外，我每天会抽时间自学英语，读一章《道德经》安抚心灵；偶尔也炒炒股——不过说来惭愧，至今只买进、从未卖出，与其说是投资，不如说是收藏。希望能早日实现财务自由，去做自己真正热爱的事情。",
    "about.skillsTitle": "技能",
    "about.skill1": "供应链管理",
    "about.skill1Note": "SCM / 交付协同",
    "about.skill2": "产品与营销",
    "about.skill2Note": "企划 / GTM",
    "about.skill3": "AI 工具应用",
    "about.skill3Note": "学习中",
    "about.skill4": "英语",
    "about.skill4Note": "每日打卡",
    "about.timelineTitle": "经历",
    "about.tl1When": "现在",
    "about.tl1What": "供应链管理",
    "about.tl1Note": "把整条链路理顺的日常工作",
    "about.tl2When": "此前",
    "about.tl2What": "产品与市场线",
    "about.tl2Note": "技术支持 · 产品企划 · 海外销售 · 营销 GTM",
    "about.tl3When": "每天",
    "about.tl3What": "英语 + 《道德经》一章",
    "about.tl3Note": "一个长期主义的小仪式",
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
    "about.role": "Supply Chain Management · Lifelong Learner",
    "about.p1":
      "Hi, I'm Geoffrey. I currently work in supply chain management, and before that I wore quite a few hats — product technical support, product planning, overseas sales, and go-to-market. The path looks scattered, but in hindsight it was all one lesson: building bridges between products and markets.",
    "about.p2":
      "These days I'm seriously learning AI. Not to chase the trend, but because I believe it genuinely makes learning and working more efficient — this very site was built with an AI assistant. Tools keep changing; the ability to put them to good use doesn't.",
    "about.p3":
      "Outside of work, I set aside time every day to study English and read a chapter of the Tao Te Ching to quiet my mind. I dabble in stocks too — though, embarrassingly, I've only ever bought and never sold, so my portfolio is less an investment than a collection of beliefs. The goal is financial freedom, and then the freedom to do what I truly love.",
    "about.skillsTitle": "Skills",
    "about.skill1": "Supply chain management",
    "about.skill1Note": "SCM / delivery",
    "about.skill2": "Product & marketing",
    "about.skill2Note": "Planning / GTM",
    "about.skill3": "AI tools",
    "about.skill3Note": "Learning",
    "about.skill4": "English",
    "about.skill4Note": "Daily practice",
    "about.timelineTitle": "Timeline",
    "about.tl1When": "Now",
    "about.tl1What": "Supply Chain Management",
    "about.tl1Note": "Keeping the whole chain flowing",
    "about.tl2When": "Earlier",
    "about.tl2What": "Product & Marketing",
    "about.tl2Note": "Tech support · product planning · overseas sales · GTM",
    "about.tl3When": "Every day",
    "about.tl3What": "English + one chapter of the Tao Te Ching",
    "about.tl3Note": "A small ritual of long-termism",
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
