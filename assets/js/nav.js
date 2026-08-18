/* ============================================================
   nav.js — injects a unified header/footer skeleton on every page,
   handles active link, mobile burger menu, and language button.
   Requires i18n.js to be loaded first.
   ============================================================ */

(function () {
  const PAGES = [
    { key: "nav.home", href: "index.html", match: [/^index\.html$/, /^$/, /\/$/] },
    { key: "nav.blog", href: "blog.html", match: [/^blog\.html$/, /^article\.html$/] },
    { key: "nav.portfolio", href: "portfolio.html", match: [/^portfolio\.html$/] },
    { key: "nav.about", href: "about.html", match: [/^about\.html$/] },
  ];

  const currentFile = (location.pathname.split("/").pop() || "index.html").split("?")[0];

  function isActive(page) {
    return page.match.some((re) => re.test(currentFile));
  }

  function linkHtml(page) {
    const cls = isActive(page) ? "nav-link active" : "nav-link";
    return `<li><a class="${cls}" href="${page.href}" data-i18n="${page.key}">${page.key}</a></li>`;
  }

  function buildHeader() {
    const header = document.createElement("header");
    header.className = "site-header";
    header.innerHTML = `
      <div class="container">
        <a class="nav-logo" href="index.html">Geoffrey</a>
        <div class="nav-right">
          <ul class="nav-links">
            ${PAGES.map(linkHtml).join("")}
          </ul>
          <button class="lang-btn" type="button" data-i18n="lang.toggle" aria-label="Switch language">EN</button>
          <button class="nav-burger" type="button" aria-label="Menu" aria-expanded="false">
            <span></span><span></span><span></span>
          </button>
        </div>
      </div>
      <nav class="nav-menu" aria-label="Mobile">
        <ul>
          ${PAGES.map(linkHtml).join("")}
        </ul>
      </nav>`;
    document.body.prepend(header);
    return header;
  }

  function buildFooter() {
    const footer = document.createElement("footer");
    footer.className = "site-footer";
    footer.innerHTML = `
      <div class="container">
        <div>
          <p class="footer-copy" data-i18n="footer.copyright">© 2026 Geoffrey</p>
          <p class="footer-copy" data-i18n="footer.builtWith"></p>
        </div>
        <ul class="footer-social">
          <li><a href="https://github.com/geoffreyzhou1104" target="_blank" rel="noopener" data-i18n="about.github">GitHub</a></li>
          <li><a href="mailto:geoffreyzhou1104@163.com" data-i18n="about.email">Email</a></li>
        </ul>
      </div>`;
    document.body.append(footer);
    return footer;
  }

  function bindMenu(header) {
    const burger = header.querySelector(".nav-burger");
    const menu = header.querySelector(".nav-menu");

    function close() {
      burger.classList.remove("open");
      menu.classList.remove("open");
      burger.setAttribute("aria-expanded", "false");
    }

    burger.addEventListener("click", (e) => {
      e.stopPropagation();
      const open = !menu.classList.contains("open");
      burger.classList.toggle("open", open);
      menu.classList.toggle("open", open);
      burger.setAttribute("aria-expanded", String(open));
    });

    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", close));
    document.addEventListener("click", (e) => {
      if (menu.classList.contains("open") && !menu.contains(e.target)) close();
    });
  }

  function init() {
    Lang.init();
    const header = buildHeader();
    buildFooter();
    bindMenu(header);
    document.documentElement.lang = Lang.current;

    header.querySelector(".lang-btn").addEventListener("click", () => Lang.toggle());

    Lang.apply(); // translate injected skeleton (incl. static page copy)
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
