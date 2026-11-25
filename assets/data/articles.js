/* ============================================================
   Article data — bilingual placeholder content.
   To add/edit a post, just edit the objects below.
   Content blocks: p | h2 | h3 | quote | code | list
   ============================================================ */

const ARTICLES = [
  {
    id: "why-family-hurts",
    date: "2026-09-14",
    tags: ["读书", "心理学"],
    cover: "g6",
    zh: {
      title: "读书报告：《为何家会伤人》",
      excerpt:
        "武志红的原生家庭经典：四个层层递进的命题，从夫妻关系讲到分离与边界——理性地读，温柔地用。",
      content: [
        { type: "p", text: "读完武志红的《为何家会伤人》，做了一份 22 页的读书分享。这本书讲的是原生家庭如何塑造我们，又如何伤到我们——这篇短文是导览，完整 PPT 可在文末下载。" },
        { type: "h2", text: "全书地图：四个层层递进的命题" },
        { type: "list", items: [
          "命题一：夫妻关系是家庭的核心，孝顺不应凌驾于其上；",
          "命题二：恋爱是童年模式的复制与修正，我们总在找「熟悉的感觉」；",
          "命题三：分离是生命中永恒的主题，溺爱不是爱，是阻碍孩子完成分离；",
          "命题四：别把焦虑转嫁给孩子——孩子的症状，往往是大人的答案。",
        ]},
        { type: "h2", text: "报告里最值得反复看的部分" },
        { type: "p", text: "「中国家庭中的轮回链条」把代际问题画成了一张闭环地图；「有关爱的六个谎言」逐条拆解（如「我爱你，所以你要听我的」）；报告还分别给了父母和被原生家庭困住的人各六条行动清单，以及一页全书总结。" },
        { type: "p", text: "难得的是报告专门留了一章「理性地读」：讨论这本书的边界——案例驱动、样本偏差、决定论倾向。共情它的洞察，但不把它读成宿命论，这才是对这本书最好的用法。" },
        { type: "quote", text: "愿我们都能在爱里保持独立。" },
        { type: "link", href: "files/why-family-hurts.pptx", text: "下载完整读书分享（PPTX · 22 页）" },
      ],
    },
    en: {
      title: "Book Report: Why Family Hurts",
      excerpt:
        "Wu Zhihong's classic on family of origin: four progressive propositions, from marriage to separation and boundaries — read it rationally, use it gently.",
      content: [
        { type: "p", text: "After finishing Wu Zhihong's Why Family Hurts, I put together a 22-slide share deck. The book is about how our families of origin shape us — and hurt us. This post is the guide; the full deck is downloadable at the end." },
        { type: "h2", text: "The map: four progressive propositions" },
        { type: "list", items: [
          "One: the couple relationship is the core of a family, above filial piety.",
          "Two: romantic love replicates and revises childhood patterns — we keep seeking what feels familiar.",
          "Three: separation is life's eternal theme; spoiling is not love but an obstacle to it.",
          "Four: don't pass your anxiety to your children — a child's symptoms are often the parents' answer.",
        ]},
        { type: "h2", text: "The parts worth revisiting" },
        { type: "p", text: "The \"cycle of Chinese families\" diagram maps intergenerational patterns into a closed loop; \"six lies about love\" gets dismantled one by one (e.g., \"I love you, so you must obey me\"). The deck also includes two six-item action checklists — one for parents, one for those still trapped by their family of origin — plus a one-page summary of the whole book." },
        { type: "p", text: "Notably, the deck reserves a chapter for reading it critically: case-driven, sample-biased, and leaning deterministic. Empathize with its insights without turning them into fatalism — that's how this book deserves to be used." },
        { type: "quote", text: "May we all stay independent while loving." },
        { type: "link", href: "files/why-family-hurts.pptx", text: "Download the full deck (PPTX · 22 slides)" },
      ],
    },
  },
  {
    id: "superforecasting",
    date: "2026-08-14",
    tags: ["读书", "决策思维"],
    cover: "g5",
    zh: {
      title: "读书报告：《超预测》",
      excerpt:
        "泰洛克二十年研究的结论：预测是可以训练的技能，不是天赋。五项核心技能 + 超预测十诫。",
      content: [
        { type: "p", text: "《超预测》是泰洛克与加德纳对长达二十年的预测研究的总结。读完做了一份 14 页报告，这篇短文带你快速走一遍，完整 PPT 在文末下载。" },
        { type: "h2", text: "核心论点：预测力是可训练的技能" },
        { type: "p", text: "通过预测锦标赛的严格测评，研究发现：一群「认真业余爱好者」的长期预测准确率，竟能超过专业分析师甚至情报专家。超级预测者不是天才，而是掌握了特定思维习惯的普通人。伯林寓言里的「狐狸」胜过「刺猬」——知道很多小事的人，比只知道一件大事的人预测更准。" },
        { type: "h2", text: "五项核心技能" },
        { type: "list", items: [
          "费米分解：把无法回答的大问题拆成可估算的小问题；",
          "外部视角：先看基准率，再考虑具体细节；",
          "概率思维：用概率而非「是/否」表态，用 Brier 分数量化准确度；",
          "贝叶斯更新：新证据到来时小幅修正，而非全盘推翻；",
          "团队智慧：好的预测团队胜过个体预测者的总和。",
        ]},
        { type: "h2", text: "「永远在迭代」" },
        { type: "p", text: "全书最打动我的一句总结：超级预测者不是「达到了终点」，而是「永远在测试版」。报告最后附上泰洛克的超预测十诫，以及把这套思维带入日常决策的具体做法。" },
        { type: "quote", text: "预测能力 = 可训练的技能，而非神秘天赋。" },
        { type: "link", href: "files/superforecasting.pptx", text: "下载完整读书报告（PPTX · 14 页）" },
      ],
    },
    en: {
      title: "Book Report: Superforecasting",
      excerpt:
        "Tetlock's twenty-year verdict: forecasting is a trainable skill, not a gift. Five core skills plus the Ten Commandments.",
      content: [
        { type: "p", text: "Superforecasting sums up Philip Tetlock and Dan Gardner's twenty years of forecasting research. I turned my reading into a 14-slide report; this post walks you through it, with the full deck downloadable at the end." },
        { type: "h2", text: "The thesis: forecasting is a trainable skill" },
        { type: "p", text: "Rigorous forecasting tournaments showed that a crowd of serious amateurs could beat professional analysts and even intelligence experts over the long run. Superforecasters aren't geniuses — they're ordinary people with specific habits of mind. In Berlin's fable, the fox beats the hedgehog: someone who knows many small things forecasts better than someone who knows one big thing." },
        { type: "h2", text: "Five core skills" },
        { type: "list", items: [
          "Fermi decomposition: break unanswerable big questions into estimable small ones.",
          "The outside view: start from base rates, then consider specifics.",
          "Probabilistic thinking: speak in probabilities, not yes/no; measure with Brier scores.",
          "Bayesian updating: nudge beliefs with new evidence instead of overturning them.",
          "Team wisdom: a good forecasting team beats the sum of its individuals.",
        ]},
        { type: "h2", text: "\"Perpetual beta\"" },
        { type: "p", text: "The line that stayed with me: superforecasters never \"arrive\" — they are permanently in beta. The deck ends with Tetlock's Ten Commandments and concrete ways to bring this mindset into everyday decisions." },
        { type: "quote", text: "Forecasting is a trainable skill, not a mystical gift." },
        { type: "link", href: "files/superforecasting.pptx", text: "Download the full report (PPTX · 14 slides)" },
      ],
    },
  },
  {
    id: "thinking-fast-and-slow",
    date: "2026-08-12",
    tags: ["读书", "行为经济学"],
    cover: "g1",
    zh: {
      title: "读书报告：《思考，快与慢》",
      excerpt:
        "18 页 PPT 精读卡尼曼：从双系统到前景理论，再到两个自我的分裂——一本可以改变你思维方式的书。",
      content: [
        { type: "p", text: "断断续续读完了丹尼尔·卡尼曼的《思考，快与慢》，顺手做了一份 18 页的读书报告。这篇短文是报告的导览，完整 PPT 可以在文末下载。" },
        { type: "h2", text: "全书骨架" },
        { type: "p", text: "五大部分、三十八章，从双系统到双自我，逐层揭示人类思维的运作机制：先讲两套思维系统如何分工，再看启发法带来的系统性偏见，接着是过度自信与决策错误，然后是前景理论，最后落在经验自我与记忆自我的分裂上。" },
        { type: "h2", text: "核心框架：系统 1 与系统 2" },
        { type: "p", text: "系统 1 快而省力，永远在线，靠联想记忆对世界作出连贯解释；系统 2 慢而费力，负责复杂计算。问题在于：系统 2 不是警觉的守门员，它是个懒汉，经常直接采纳系统 1 的答案——经典的「球拍与球」问题骗的就是它。" },
        { type: "h2", text: "报告里重点展开的四个模块" },
        { type: "list", items: [
          "启发法与偏见：锚定效应、琳达问题与合取谬误、回归平均值；",
          "过度自信：「知道」的错觉、专家直觉何时可信（卡尼曼与克莱恩的判断法则）；",
          "前景理论：损失厌恶、禀赋效应、心理账户与框架效应——诺奖级的核心成果；",
          "两个自我：经验自我与记忆自我，谁才是「我」。",
        ]},
        { type: "p", text: "报告最后提炼了九条实用原则，以及贯穿全书的三大对立结构（系统 1 vs 系统 2、经验 vs 记忆、统计直觉 vs 专家直觉），适合打印出来贴在工位上。" },
        { type: "quote", text: "这是一本可以改变你思维方式的书。读了它，你对工作、世界以及自己的生活的看法都会改变。" },
        { type: "link", href: "files/thinking-fast-and-slow.pptx", text: "下载完整读书报告（PPTX · 18 页）" },
      ],
    },
    en: {
      title: "Book Report: Thinking, Fast and Slow",
      excerpt:
        "An 18-slide deep read of Kahneman: from the two systems to prospect theory, and the split between two selves — a book that can change how you think.",
      content: [
        { type: "p", text: "I finally finished Daniel Kahneman's Thinking, Fast and Slow and turned my notes into an 18-slide report. This post is the guide; the full deck is downloadable at the end." },
        { type: "h2", text: "The skeleton of the book" },
        { type: "p", text: "Five parts, 38 chapters, moving from two systems to two selves: how the two thinking systems divide the labor, how heuristics produce systematic biases, where overconfidence and decision errors come from, prospect theory, and finally the split between the experiencing self and the remembering self." },
        { type: "h2", text: "The core framework: System 1 and System 2" },
        { type: "p", text: "System 1 is fast, effortless, always on, and constantly makes coherent sense of the world through associative memory. System 2 is slow and deliberate, in charge of hard computation. The catch: System 2 is not a vigilant gatekeeper — it's lazy, and it often just accepts System 1's answer. The classic bat-and-ball question exploits exactly this." },
        { type: "h2", text: "Four modules the report covers in depth" },
        { type: "list", items: [
          "Heuristics & biases: anchoring, the Linda problem and conjunction fallacy, regression to the mean.",
          "Overconfidence: the illusion of knowing, and when to trust expert intuition (the Kahneman–Klein rules).",
          "Prospect theory: loss aversion, endowment effect, mental accounting, and framing — the Nobel-caliber core.",
          "Two selves: the experiencing self vs. the remembering self — which one is \"you\"?",
        ]},
        { type: "p", text: "The deck closes with nine practical principles and the three big distinctions running through the whole book (System 1 vs. System 2, experiencing vs. remembering, statistical intuition vs. expert intuition) — worth printing and pinning above your desk." },
        { type: "quote", text: "This is a book that can change how you think. Read it and your view of your work, the world, and your own life will shift." },
        { type: "link", href: "files/thinking-fast-and-slow.pptx", text: "Download the full report (PPTX · 18 slides)" },
      ],
    },
  },
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
