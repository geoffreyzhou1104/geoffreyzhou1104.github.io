/* ============================================================
   article.js — renders article lists (blog/home) and the
   detail page (article.html?id=xxx). Requires i18n.js.
   ============================================================ */

(function () {
  function byDateDesc(list) {
    return [...list].sort((a, b) => (a.date < b.date ? 1 : -1));
  }

  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function metaHtml(a) {
    const tags = a.tags.map((t) => `<span class="post-tag">${esc(t)}</span>`).join("");
    return `<div class="post-meta"><span>${esc(a.date)}</span>${tags}</div>`;
  }

  /* One <li> for list-style rendering (blog page) */
  function itemHtml(a, lang) {
    return `
      <li class="reveal">
        <a class="post-item" href="article.html?id=${encodeURIComponent(a.id)}">
          ${metaHtml(a)}
          <div class="post-title">${esc(a[lang].title)}</div>
          <p class="post-excerpt">${esc(a[lang].excerpt)}</p>
        </a>
      </li>`;
  }

  /* Render full blog list */
  function renderList(container, lang) {
    container.innerHTML = `<ul class="post-list">${byDateDesc(ARTICLES)
      .map((a) => itemHtml(a, lang))
      .join("")}</ul>`;
    observeReveals(container);
  }

  /* Render featured posts on home */
  function renderFeatured(container, lang, count) {
    container.innerHTML = byDateDesc(ARTICLES)
      .slice(0, count || 3)
      .map((a) => itemHtml(a, lang))
      .join("");
    observeReveals(container);
  }

  /* Render block-based article body */
  function blockHtml(block) {
    switch (block.type) {
      case "h2":
        return `<h2>${esc(block.text)}</h2>`;
      case "h3":
        return `<h3>${esc(block.text)}</h3>`;
      case "quote":
        return `<blockquote>${esc(block.text)}</blockquote>`;
      case "code":
        return `<pre><code>${esc(block.text)}</code></pre>`;
      case "list":
        return `<ul>${block.items.map((i) => `<li>${esc(i)}</li>`).join("")}</ul>`;
      default:
        return `<p>${esc(block.text)}</p>`;
    }
  }

  /* Render detail page into #article-root */
  function renderDetail(root, lang) {
    const id = new URLSearchParams(location.search).get("id");
    const sorted = byDateDesc(ARTICLES);
    const idx = sorted.findIndex((a) => a.id === id);

    if (idx === -1) {
      root.innerHTML = `
        <div class="container notfound">
          <h1 data-i18n="article.notFoundTitle"></h1>
          <p data-i18n="article.notFoundText"></p>
          <a class="btn btn-primary" href="blog.html" data-i18n="article.back"></a>
        </div>`;
      Lang.apply();
      return;
    }

    const a = sorted[idx];
    const prev = sorted[idx + 1]; // older
    const next = sorted[idx - 1]; // newer
    const loc = a[lang];

    root.innerHTML = `
      <div class="container">
        <div class="reading">
          <div class="article-header">
            ${metaHtml(a)}
            <h1 class="article-title">${esc(loc.title)}</h1>
            <p class="article-lead">${esc(loc.excerpt)}</p>
          </div>
          <div class="article-body">${loc.content.map(blockHtml).join("")}</div>
          <nav class="article-nav" aria-label="Article navigation">
            ${
              next
                ? `<a href="article.html?id=${encodeURIComponent(next.id)}">
                     <span class="nav-label" data-i18n="article.next"></span>
                     <span class="nav-article-title">${esc(next[lang].title)}</span>
                   </a>`
                : "<span></span>"
            }
            ${
              prev
                ? `<a class="next" href="article.html?id=${encodeURIComponent(prev.id)}">
                     <span class="nav-label" data-i18n="article.prev"></span>
                     <span class="nav-article-title">${esc(prev[lang].title)}</span>
                   </a>`
                : "<span></span>"
            }
          </nav>
        </div>
      </div>`;

    document.title = `${loc.title} — Geoffrey`;
    Lang.apply();
  }

  /* Scroll reveal helper (respects prefers-reduced-motion via CSS) */
  function observeReveals(scope) {
    const els = (scope || document).querySelectorAll(".reveal:not(.visible)");
    if (!("IntersectionObserver" in window)) {
      els.forEach((el) => el.classList.add("visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.08 }
    );
    els.forEach((el) => io.observe(el));
  }

  window.ArticleUI = { renderList, renderFeatured, renderDetail, observeReveals };

  /* Auto-render when the page declares a mount point */
  document.addEventListener("DOMContentLoaded", () => {
    Lang.init();
    const lang = Lang.current;
    const list = document.getElementById("post-list");
    if (list) renderList(list, lang);
    const featured = document.getElementById("featured-posts");
    if (featured) renderFeatured(featured, lang, 3);
    const detail = document.getElementById("article-root");
    if (detail) renderDetail(detail, lang);

    Lang.onChange((l) => {
      if (list) renderList(list, l);
      if (featured) renderFeatured(featured, l, 3);
      if (detail) renderDetail(detail, l);
    });
  });
})();
