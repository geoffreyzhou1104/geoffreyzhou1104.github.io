/* ============================================================
   works.js — renders the portfolio grid and the featured
   works section on the home page. Requires i18n.js.
   ============================================================ */

(function () {
  function esc(s) {
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function cardHtml(w, lang) {
    const loc = w[lang];
    const initial = esc(loc.title.trim().charAt(0).toUpperCase());
    const tags = w.tags.map((t) => `<span class="work-tag">${esc(t)}</span>`).join("");
    return `
      <li class="reveal">
        <a class="work-card" href="${esc(w.link || "#")}" ${w.link && w.link !== "#" ? 'target="_blank" rel="noopener"' : ""}>
          <div class="work-cover cover-${esc(w.cover)}" aria-hidden="true">${initial}</div>
          <div class="work-body">
            <span class="work-year">${esc(w.year)}</span>
            <div class="work-title">${esc(loc.title)}</div>
            <p class="work-desc">${esc(loc.desc)}</p>
            <div class="work-tags">${tags}</div>
          </div>
        </a>
      </li>`;
  }

  function renderGrid(container, lang, limit) {
    const list = limit ? WORKS.slice(0, limit) : WORKS;
    container.innerHTML = `<ul class="works-grid${limit ? " three-col" : ""}">${list
      .map((w) => cardHtml(w, lang))
      .join("")}</ul>`;
    if (window.ArticleUI) ArticleUI.observeReveals(container);
  }

  window.WorksUI = { renderGrid };

  document.addEventListener("DOMContentLoaded", () => {
    Lang.init();
    const grid = document.getElementById("works-grid");
    if (grid) renderGrid(grid, Lang.current);
    const featured = document.getElementById("featured-works");
    if (featured) renderGrid(featured, Lang.current, 3);

    Lang.onChange((l) => {
      if (grid) renderGrid(grid, l);
      if (featured) renderGrid(featured, l, 3);
    });
  });
})();
