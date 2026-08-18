# Geoffrey's Personal Site

简洁现代的个人网站：文章展示、作品集、关于我。纯 HTML / CSS / JS，无框架、无构建工具，中英双语。

## 本地预览

直接双击 `index.html` 即可，所有功能（含文章详情 `article.html?id=xxx`）离线可用。

也可以起一个本地服务器：

```bash
npx serve .
# 或
python -m http.server 8000
```

## 目录结构

```
├── index.html              首页：Hero + 精选文章 + 精选作品
├── blog.html               文章列表
├── article.html            文章详情（?id=xxx）
├── portfolio.html          作品集
├── about.html              关于我
└── assets/
    ├── css/style.css       全站唯一样式（改主题 → 只改 :root 里的变量）
    ├── js/
    │   ├── i18n.js         双语引擎 + 全部界面文案字典
    │   ├── nav.js          导航栏 / footer / 语言切换按钮
    │   ├── article.js      文章列表与详情渲染
    │   └── works.js        作品卡片渲染
    └── data/
        ├── articles.js     文章数据（改这里发布新文章）
        └── works.js        作品数据（改这里更新作品）
```

## 如何替换内容

### 发一篇文章

打开 `assets/data/articles.js`，往 `ARTICLES` 数组**最前面**加一个对象：

```js
{
  id: "my-new-post",          // URL 用的唯一标识（kebab-case）
  date: "2026-08-20",
  tags: ["随笔"],
  cover: "g1",                // 封面渐变，可选 g1 ~ g6
  zh: {
    title: "标题",
    excerpt: "一句话摘要（列表页显示）",
    content: [
      { type: "p", text: "普通段落" },
      { type: "h2", text: "二级标题" },
      { type: "quote", text: "引用" },
      { type: "code", lang: "js", text: "console.log(1)" },
      { type: "list", items: ["要点一", "要点二"] },
    ],
  },
  en: { title: "...", excerpt: "...", content: [ /* 同上 */ ] },
}
```

保存刷新即可，列表、首页精选、上一篇/下一篇导航自动更新。

### 加 / 改一个作品

打开 `assets/data/works.js`，往 `WORKS` 数组加对象：

```js
{
  id: "my-work",
  year: 2026,
  cover: "g3",                // 渐变封面 g1 ~ g6
  link: "https://...",        // 作品链接（暂无填 "#"）
  repo: "https://...",        // 仓库链接（可留空 ""）
  tags: ["Web", "开源"],
  zh: { title: "作品名", desc: "一句话介绍" },
  en: { title: "...", desc: "..." },
}
```

### 改个人介绍 / 界面文案

- 关于页正文、技能、时间线：`assets/js/i18n.js` 里搜 `about.` 开头的 key，中英文各改一份。
- 导航、按钮等界面文案：同一个文件里其余 key。

### 换主题色 / 启用暗色

- 改主题色：`assets/css/style.css` 顶部的 `:root` 变量（`--accent`、`--bg` 等）。
- 启用暗色：把 `:root` 后面注释掉的 `[data-theme="dark"]` 变量块解开，再给 `<html>` 标签加 `data-theme="dark"` 即可全站生效。

## 部署

纯静态站点，任意静态托管直接可用：

- **GitHub Pages**：push 仓库 → Settings → Pages → 选 main 分支根目录。
- **Vercel / Netlify**：导入仓库，无需任何构建命令，输出目录填根目录。
- **任何对象存储 / 服务器**：把整个文件夹原样上传即可。

## 当前为占位内容

4 篇文章与 5 个作品均为示例，直接按上面的方法逐条替换成你的真实内容。联系邮箱已配置为 `geoffreyzhou1104@163.com`（见 `about.html` 联系区与 `nav.js` footer）；GitHub 链接（`https://github.com/`）仍是占位，记得换成你自己的。
