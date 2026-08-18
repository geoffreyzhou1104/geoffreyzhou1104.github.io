/* ============================================================
   Works / portfolio data — bilingual placeholder content.
   cover: gradient class key (g1–g6), mapped to .cover-g1 … .cover-g6
   ============================================================ */

const WORKS = [
  {
    id: "pulse-metronome",
    year: 2026,
    cover: "g5",
    link: "#",
    repo: "#",
    tags: ["Web Audio", "Vanilla JS"],
    zh: {
      title: "Pulse 在线节拍器",
      desc: "基于 Web Audio API 的极简节拍器，零依赖、离线可用，支持自定义节奏型与强弱拍音色。做它纯粹因为练琴时嫌市面上的工具太吵。",
    },
    en: {
      title: "Pulse Metronome",
      desc: "A minimalist metronome built on the Web Audio API — zero dependencies, works offline, custom rhythms and accented beats. Built because every metronome app I tried was too noisy.",
    },
  },
  {
    id: "mdnotes-cli",
    year: 2025,
    cover: "g4",
    link: "#",
    repo: "#",
    tags: ["Node.js", "CLI"],
    zh: {
      title: "mdnotes 命令行笔记",
      desc: "一个把散落的 Markdown 笔记变成可检索知识库的命令行工具：全文搜索、双向链接、一键导出静态页面。每天在用，比想象中耐用。",
    },
    en: {
      title: "mdnotes CLI",
      desc: "A command-line tool that turns scattered Markdown notes into a searchable knowledge base: full-text search, backlinks, and one-command static export. I use it daily — it has held up better than expected.",
    },
  },
  {
    id: "typeface-playground",
    year: 2025,
    cover: "g2",
    link: "#",
    repo: "",
    tags: ["Typography", "Canvas"],
    zh: {
      title: "字体实验场",
      desc: "一个用 Canvas 做的字体可视化小玩具：输入任意文字，实时预览字重、字距与基线网格的变化。为了搞懂排版细节而做，结果成了收藏夹里的常客。",
    },
    en: {
      title: "Typeface Playground",
      desc: "A small Canvas toy for visualizing typography: type anything and watch weight, tracking, and baseline grids change in real time. Built to understand type details; stayed as a bookmark favorite.",
    },
  },
  {
    id: "tiny-ui",
    year: 2024,
    cover: "g1",
    link: "#",
    repo: "#",
    tags: ["开源", "Web Components"],
    zh: {
      title: "Tiny UI 组件库",
      desc: "一套不依赖任何框架的 Web Components 小组件库：弹层、开关、标签页，每个都小于 3KB。Star 不多，但 issue 区的讨论质量让我很满足。",
    },
    en: {
      title: "Tiny UI Components",
      desc: "A small Web Components library with zero framework deps: popover, switch, tabs — each under 3KB. Not many stars, but the quality of discussion in the issues is its own reward.",
    },
  },
  {
    id: "street-frames",
    year: 2024,
    cover: "g6",
    link: "#",
    repo: "",
    tags: ["摄影", "Gallery"],
    zh: {
      title: "街头一帧",
      desc: "一个纯静态的街头摄影集页面，按城市与年份归档。原本只是给自己整理底片，后来朋友说想看，就顺手做了个极简的浏览界面。",
    },
    en: {
      title: "Street Frames",
      desc: "A purely static street-photography gallery, archived by city and year. Started as a way to organize my own shots; friends wanted to browse, so it got a minimal interface.",
    },
  },
];
