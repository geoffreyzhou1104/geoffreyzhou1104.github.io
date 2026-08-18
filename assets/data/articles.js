/* ============================================================
   Article data — bilingual placeholder content.
   To add/edit a post, just edit the objects below.
   Content blocks: p | h2 | h3 | quote | code | list
   ============================================================ */

const ARTICLES = [
  {
    id: "why-i-write",
    date: "2026-07-12",
    tags: ["随笔", "Writing"],
    cover: "g3",
    zh: {
      title: "我为什么开始写作",
      excerpt:
        "写作不是输出，而是把脑子里一团乱麻的想法摊开在桌面上，一根一根捋顺的过程。",
      content: [
        { type: "p", text: "很长一段时间里，我以为写作是“内容创作者”的事，和我这种写代码的人没什么关系。直到有一天我发现，很多纠缠了我几周的技术决策，其实是在被迫写一段说明文档的时候才真正想清楚的。" },
        { type: "h2", text: "写作是最便宜的思考工具" },
        { type: "p", text: "脑子里想事情很快，快到可以自己骗自己——一个念头闪过去，感觉“懂了”，其实只是“眼熟了”。写下来就不一样：句子必须连贯，逻辑必须能站住，写不下去的地方，恰恰就是没想明白的地方。" },
        { type: "quote", text: "如果你不能把一件事写清楚，说明你还没有真正理解它。" },
        { type: "h2", text: "公开写作的额外好处" },
        { type: "list", items: [
          "倒逼质量：知道会有人看，就不太好意思糊弄自己；",
          "留下时间戳：一年后回头看，能清楚看到自己当时的局限；",
          "遇到同路人：不少朋友和机会，都是从一篇文章开始的。",
        ]},
        { type: "p", text: "所以我开了这个博客。不追求更新频率，也不追求爆款，只求每一篇都是当时真实的思考。如果某句话恰好对你有用，那就是它最大的价值。" },
      ],
    },
    en: {
      title: "Why I Started Writing",
      excerpt:
        "Writing isn't output — it's the process of laying a tangled ball of thoughts on the desk and combing it straight, one strand at a time.",
      content: [
        { type: "p", text: "For a long time I assumed writing was for \"content people,\" not for someone like me who writes code all day. Then one day I noticed that the technical decisions that had haunted me for weeks only truly clicked when I was forced to write a short doc explaining them." },
        { type: "h2", text: "Writing is the cheapest thinking tool" },
        { type: "p", text: "Thinking feels fast — so fast you can fool yourself. A thought flashes by and it feels like understanding, when it's really just familiarity. Writing is different: sentences have to connect, logic has to hold. The place where you get stuck writing is exactly the place you haven't figured out yet." },
        { type: "quote", text: "If you can't write it down clearly, you don't really understand it yet." },
        { type: "h2", text: "The bonus of writing in public" },
        { type: "list", items: [
          "It raises the bar: knowing someone might read it makes it harder to fool yourself.",
          "It leaves timestamps: a year later you can see exactly where you were.",
          "It attracts like-minded people: more than one friendship started with a post.",
        ]},
        { type: "p", text: "So here's this blog. No posting schedule, no chasing virality — just honest thinking captured at the time it happened. If a single sentence happens to be useful to you, that's the best it can do." },
      ],
    },
  },
  {
    id: "building-a-static-site",
    date: "2026-06-03",
    tags: ["技术", "Web"],
    cover: "g5",
    zh: {
      title: "不用框架，从零搭一个个人网站",
      excerpt:
        "五个 HTML 页面、一份 CSS、四个 JS 文件、零构建工具——这个网站本身就是一个案例。",
      content: [
        { type: "p", text: "这个网站没有用任何框架，没有打包器，没有 node_modules。双击 index.html 就能跑，丢到任何静态托管上就能上线。这不是复古情怀，而是一个务实的选择。" },
        { type: "h2", text: "为什么" },
        { type: "list", items: [
          "内容规模小：几篇文章、几个作品，框架带来的工程收益接近于零；",
          "维护成本低：一年后回来改内容，不用担心依赖已经全坏了；",
          "性能天然好：没有 hydration，没有 bundle，首屏就是 HTML。",
        ]},
        { type: "h2", text: "怎么做" },
        { type: "p", text: "结构非常朴素：文章和作品的数据放在独立的 JS 文件里，用全局变量承载，页面脚本负责渲染。这绕开了 file:// 协议下 fetch JSON 的跨域限制，也让“以后换内容”变成只改数据文件的事。" },
        { type: "code", lang: "js", text: "// data/articles.js\nconst ARTICLES = [\n  {\n    id: \"hello-world\",\n    date: \"2026-06-03\",\n    zh: { title: \"...\", content: [ { type: \"p\", text: \"...\" } ] },\n    en: { title: \"...\", content: [ /* ... */ ] },\n  },\n];" },
        { type: "p", text: "文章详情页只有一个 article.html，通过 ?id=xxx 找到对应数据渲染。找不到就给一个体面的 404 提示。整套东西加起来不到一千行，但该有的都有：响应式、双语、动效。" },
        { type: "quote", text: "工具应该匹配问题的规模，而不是匹配你的焦虑。" },
      ],
    },
    en: {
      title: "Building a Personal Site Without Any Framework",
      excerpt:
        "Five HTML pages, one stylesheet, four JS files, zero build tools — this very site is the case study.",
      content: [
        { type: "p", text: "This site uses no framework, no bundler, no node_modules. Double-click index.html and it runs; drop it on any static host and it's live. That's not nostalgia — it's a pragmatic call." },
        { type: "h2", text: "Why" },
        { type: "list", items: [
          "The content is small: a handful of posts and projects means framework payoff is near zero.",
          "Maintenance is cheap: coming back in a year to edit content won't mean fighting rotted dependencies.",
          "Performance is free: no hydration, no bundle — first paint is just HTML.",
        ]},
        { type: "h2", text: "How" },
        { type: "p", text: "The structure is plain: article and project data live in standalone JS files as global variables, and page scripts render them. That sidesteps CORS issues with fetch under the file:// protocol, and makes \"updating content later\" a data-file-only job." },
        { type: "code", lang: "js", text: "// data/articles.js\nconst ARTICLES = [\n  {\n    id: \"hello-world\",\n    date: \"2026-06-03\",\n    zh: { title: \"...\", content: [ { type: \"p\", text: \"...\" } ] },\n    en: { title: \"...\", content: [ /* ... */ ] },\n  },\n];" },
        { type: "p", text: "There's a single article.html detail template that reads ?id=xxx, looks up the data, and renders — with a decent not-found fallback. The whole thing is under a thousand lines, yet covers responsive layout, bilingual UI, and subtle motion." },
        { type: "quote", text: "Tools should match the size of the problem, not the size of your anxiety." },
      ],
    },
  },
  {
    id: "books-2026",
    date: "2026-03-21",
    tags: ["读书", "年度清单"],
    cover: "g2",
    zh: {
      title: "2026 上半年读过的几本书",
      excerpt:
        "三个月，六本书，两本重读。挑三本最值得聊的简单记一笔。",
      content: [
        { type: "p", text: "今年给自己定的规矩很简单：不追新书榜，重读多于新读。到三月底，恰好读完六本，其中两本是重读。挑三本值得说说。" },
        { type: "h2", text: "《风格的要素》" },
        { type: "p", text: "经典小册子，讲英文写作。这次重读最大的收获不是规则本身，而是它对“删减”的执念：好文章是删出来的。写完一稿，先砍掉十分之一，通常都会更好。这条规则对写代码同样成立。" },
        { type: "h2", text: "《禅与摩托车维修艺术》" },
        { type: "p", text: "十年前读不懂，现在能读进去了。书里说的 Quality（良质）——那种无法被定义但你能感受到的东西——大概就是所有手艺人对“做得好”的直觉。装一把螺丝刀和写一个函数，投入的态度可以是同一种。" },
        { type: "h2", text: "《纳瓦尔宝典》" },
        { type: "p", text: "快餐但有营养。其中关于“杠杆”的一段值得抄下来：代码和内容是无需许可的杠杆，睡觉的时候也在替你干活。这本书本身就是这句话的实践。" },
        { type: "quote", text: "读书的意义不在于记住，而在于某天做决定时，脑子里多出一个声音。" },
      ],
    },
    en: {
      title: "Books I Read in Early 2026",
      excerpt:
        "Three months, six books, two of them re-reads. Here are the three worth talking about.",
      content: [
        { type: "p", text: "My rule this year was simple: ignore bestseller lists, and re-read more than I read new. By the end of March I'd finished six books, two of them re-reads. Three are worth mentioning." },
        { type: "h2", text: "The Elements of Style" },
        { type: "p", text: "The classic little book on English prose. What struck me this time wasn't the rules but its obsession with cutting: good writing is subtractive. Finish a draft, then delete a tenth of it — it's almost always better. The rule works for code, too." },
        { type: "h2", text: "Zen and the Art of Motorcycle Maintenance" },
        { type: "p", text: "I couldn't get through it ten years ago; now I could. The book's idea of Quality — the thing you can't define but always recognize — is probably the craftsman's intuition of \"done well.\" Tightening a screw and writing a function can carry the same attitude." },
        { type: "h2", text: "The Almanack of Naval Ravikant" },
        { type: "p", text: "Fast food, but nourishing. The passage on leverage is worth copying down: code and content are permissionless leverage — they work for you while you sleep. Fittingly, the book itself is proof of that sentence." },
        { type: "quote", text: "The point of reading isn't remembering. It's having one more voice in your head the day you make a big decision." },
      ],
    },
  },
  {
    id: "design-tokens-practice",
    date: "2026-01-08",
    tags: ["设计", "CSS"],
    cover: "g4",
    zh: {
      title: "在个人项目里实践 Design Tokens",
      excerpt:
        "一组 CSS 变量，让“改主题”从一下午的重活变成改十几行代码的小事。",
      content: [
        { type: "p", text: "Design Tokens 听起来是大厂才用的概念，其实一个个人项目只需要半小时就能落地，收益却立竿见影：颜色、圆角、阴影、间距全部变成变量，换主题只需要覆盖一层。" },
        { type: "h2", text: "最小可行的一套 Token" },
        { type: "code", lang: "css", text: ":root {\n  --bg: #ffffff;\n  --bg-secondary: #f7f7f5;\n  --text-primary: #1a1a1a;\n  --text-secondary: #555555;\n  --border: #e8e8e6;\n  --accent: #0071e3;\n  --radius: 12px;\n  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);\n}" },
        { type: "p", text: "关键不是变量本身，而是纪律：组件样式里不允许出现任何裸的颜色值。做到了这一点，暗色模式就不再是“一个功能”，而是根节点上加一个属性的事。" },
        { type: "h2", text: "三条实践心得" },
        { type: "list", items: [
          "语义命名优于视觉命名：--text-secondary 比 --gray-1 活得久，因为换主题时“次要文字”依然成立，而“灰色一号”未必；",
          "间距用一套固定刻度（8/16/24/32/48/96），不要每次现场发明；",
          "先亮色后暗色：先把一套变量调到满意，再基于它推导另一套。",
        ]},
        { type: "p", text: "这个网站就是按这个思路搭的：暗色主题的变量块已经预留好，哪天想上线，解开注释加一个切换按钮就完事。" },
      ],
    },
    en: {
      title: "Practicing Design Tokens on a Side Project",
      excerpt:
        "One set of CSS variables turns \"retheme the site\" from an afternoon of drudgery into a ten-line diff.",
      content: [
        { type: "p", text: "Design Tokens sound like a big-company concept, but a personal project can adopt them in half an hour — and the payoff is immediate: colors, radii, shadows, and spacing all become variables, and retheming becomes overriding a single layer." },
        { type: "h2", text: "A minimal viable token set" },
        { type: "code", lang: "css", text: ":root {\n  --bg: #ffffff;\n  --bg-secondary: #f7f7f5;\n  --text-primary: #1a1a1a;\n  --text-secondary: #555555;\n  --border: #e8e8e6;\n  --accent: #0071e3;\n  --radius: 12px;\n  --shadow-md: 0 4px 16px rgba(0, 0, 0, 0.08);\n}" },
        { type: "p", text: "The trick isn't the variables — it's discipline: no raw color values anywhere in component styles. Stick to that and dark mode stops being \"a feature\" and becomes one attribute on the root element." },
        { type: "h2", text: "Three lessons learned" },
        { type: "list", items: [
          "Semantic names beat visual names: --text-secondary outlives --gray-1, because \"secondary text\" survives a retheme while \"gray number one\" might not.",
          "Use a fixed spacing scale (8/16/24/32/48/96); don't invent values on the spot.",
          "Light first, dark second: tune one set until you love it, then derive the other.",
        ]},
        { type: "p", text: "This very site was built that way: the dark-theme variable block is already reserved. The day I want to ship it, it's a comment and one toggle button away." },
      ],
    },
  },
];
