(function () {
  var PROJECTS = [
    { id: "vidya", title: "Vidya Fees Portal", cat: "Web app", year: 2026, tags: ["JavaScript", "Accessibility", "Performance"],
      blurb: "Fee payment and receipts for a 1,800 student school.",
      detail: "Parents used to queue at the office on due dates. The portal shows dues per child, takes UPI payments and generates a receipt that works offline once downloaded.",
      facts: [["Load time", "1.4 s on 3G"], ["Support calls", "down 62%"], ["Role", "Design + build"]], h: 352 },
    { id: "kiran", title: "Kirana Stock", cat: "Web app", year: 2025, tags: ["JavaScript", "Performance"],
      blurb: "Inventory and udhaar ledger for neighbourhood shops.",
      detail: "A one-screen stock tracker that works without a connection and syncs when the shop gets signal. Shopkeepers add an item in three taps.",
      facts: [["Shops using it", "34"], ["Works offline", "Yes"], ["Role", "Front-end"]], h: 14 },
    { id: "ganga", title: "Ganga Ghat Walks", cat: "Website", year: 2025, tags: ["Design", "Accessibility"],
      blurb: "Booking site for heritage walks along the river.",
      detail: "A calm editorial site with a date picker built for thumbs, bilingual Hindi and English copy, and a booking flow with no account step.",
      facts: [["Languages", "2"], ["Bookings", "310 in 3 months"], ["Role", "Design + build"]], h: 28 },
    { id: "pustak", title: "Pustak Library UI", cat: "Design system", year: 2024, tags: ["Design", "Accessibility", "JavaScript"],
      blurb: "Component library shared by four product teams.",
      detail: "Forty components with keyboard support and a documented colour system. Reduced the time to ship a new screen from days to hours.",
      facts: [["Components", "40"], ["Teams", "4"], ["Contrast", "AA on all"]], h: 332 },
    { id: "mausam", title: "Mausam Dashboard", cat: "Web app", year: 2026, tags: ["JavaScript", "Performance"],
      blurb: "Rainfall and flood alerts for district officers.",
      detail: "A dashboard that puts the districts needing attention at the top, with charts that stay readable on old office monitors.",
      facts: [["Districts", "38"], ["Update rate", "every 15 min"], ["Role", "Front-end"]], h: 6 },
    { id: "rangoli", title: "Rangoli Studio Brand", cat: "Website", year: 2024, tags: ["Design"],
      blurb: "Identity and site for a textile print studio.",
      detail: "A pattern-first identity: every page header is generated from the studio's own block prints, so no two pages look the same.",
      facts: [["Pages", "9"], ["Patterns", "14"], ["Role", "Design + build"]], h: 320 }
  ];
  var SKILLS = {
    "HTML & CSS": { lvl: 95, note: "Layouts with grid and flexbox, fluid type, dark mode through colour tokens." },
    "JavaScript": { lvl: 88, note: "Vanilla JS first. Small, readable modules and no library unless it earns its weight." },
    "Accessibility": { lvl: 85, note: "Keyboard paths, visible focus, proper labels and contrast checks on every build." },
    "Performance": { lvl: 82, note: "Budgeted images, system font fallbacks and testing on throttled 3G." },
    "Design": { lvl: 78, note: "Wireframes, type scales and colour systems, mostly in the browser." }
  };
  var ROLES = ["fast websites", "clear interfaces", "helpful tools", "calm dashboards"];
  var HUES = [352, 14, 332, 38, 200];

  var $ = function (s, r) { return (r || document).querySelector(s); };
  var root = document.documentElement;
  function store(k, v) { try { if (v === undefined) return localStorage.getItem(k); localStorage.setItem(k, v); } catch (e) { return null; } }

  /* ---------- illustrations (inline SVG, drawn from theme colours) ---------- */
  function avatar(uid) {
    return '<svg viewBox="0 0 400 420" role="img" aria-label="Illustration of Aarav at his desk" preserveAspectRatio="xMidYMid slice">' +
      '<defs><radialGradient id="ag' + uid + '" cx="50%" cy="38%" r="70%"><stop offset="0" stop-color="hsl(var(--h) 90% 45%)" stop-opacity=".95"/><stop offset=".6" stop-color="hsl(var(--h) 80% 20%)"/><stop offset="1" stop-color="var(--bg)"/></radialGradient></defs>' +
      '<rect width="400" height="420" fill="url(#ag' + uid + ')"/>' +
      '<g opacity=".35" stroke="var(--accent)" fill="none"><circle cx="200" cy="210" r="150"/><circle cx="200" cy="210" r="110"/></g>' +
      '<path d="M40 420 C40 330 120 292 200 292 C280 292 360 330 360 420Z" fill="var(--shirt)"/>' +
      '<path d="M165 292 L200 345 L235 292Z" fill="var(--skin)"/>' +
      '<path d="M40 420 C40 340 100 305 150 296 L200 350 L250 296 C300 305 360 340 360 420Z" fill="var(--shirt)" stroke="var(--accent)" stroke-width="2" stroke-opacity=".6"/>' +
      '<rect x="178" y="252" width="44" height="52" rx="14" fill="var(--skin)"/>' +
      '<ellipse cx="200" cy="190" rx="72" ry="84" fill="var(--skin)"/>' +
      '<path d="M126 188 C112 100 168 72 206 74 C258 76 292 118 274 190 C268 146 236 120 200 122 C164 124 136 146 126 188Z" fill="var(--hair)"/>' +
      '<ellipse cx="128" cy="196" rx="9" ry="16" fill="var(--skin)"/><ellipse cx="272" cy="196" rx="9" ry="16" fill="var(--skin)"/>' +
      '<g fill="none" stroke="var(--accent)" stroke-width="5"><rect x="150" y="176" width="42" height="34" rx="12"/><rect x="208" y="176" width="42" height="34" rx="12"/><path d="M192 190 Q200 184 208 190"/></g>' +
      '<circle cx="171" cy="193" r="5" fill="#1b0b0d"/><circle cx="229" cy="193" r="5" fill="#1b0b0d"/>' +
      '<path d="M178 238 Q200 256 222 238" fill="none" stroke="#8a3a3a" stroke-width="5" stroke-linecap="round"/>' +
      '<rect x="120" y="360" width="160" height="60" rx="8" fill="var(--surface)" stroke="var(--accent)" stroke-opacity=".7"/>' +
      '<g fill="var(--accent)" opacity=".9"><rect x="134" y="374" width="52" height="6" rx="3"/><rect x="134" y="388" width="88" height="6" rx="3" opacity=".6"/><rect x="134" y="402" width="64" height="6" rx="3" opacity=".6"/></g>' +
      '</svg>';
  }
  function art(p) {
    var s = '<svg viewBox="0 0 320 200" preserveAspectRatio="xMidYMid slice" aria-hidden="true"><rect width="320" height="200" fill="var(--c1)"/>', i;
    if (p.id === "vidya") {
      s += '<rect x="34" y="26" width="168" height="148" rx="12" fill="var(--c2)"/><rect x="34" y="26" width="168" height="26" rx="12" fill="var(--c3)"/>' +
        '<rect x="48" y="66" width="104" height="10" rx="5" fill="var(--c4)" opacity=".85"/><rect x="48" y="86" width="140" height="10" rx="5" fill="var(--c4)" opacity=".4"/><rect x="48" y="106" width="120" height="10" rx="5" fill="var(--c4)" opacity=".4"/>' +
        '<rect x="48" y="136" width="72" height="26" rx="8" fill="var(--c3)"/><circle cx="248" cy="100" r="46" fill="var(--c3)"/>' +
        '<text x="248" y="118" text-anchor="middle" font-size="50" font-weight="800" fill="var(--c1)" font-family="sans-serif">₹</text>';
    } else if (p.id === "kiran") {
      var rows = [[52, [[30, 30, 34], [66, 24, 44], [96, 34, 28], [134, 26, 40], [166, 30, 32], [202, 22, 46], [230, 36, 30]]], [112, [[30, 26, 40], [60, 34, 30], [98, 24, 46], [126, 30, 34], [160, 28, 42], [192, 34, 28], [230, 30, 36]]], [172, [[30, 34, 30], [68, 26, 42], [98, 30, 34], [132, 24, 44], [160, 34, 30], [198, 28, 38], [230, 30, 32]]]];
      rows.forEach(function (r, ri) { s += '<rect x="20" y="' + r[0] + '" width="250" height="5" rx="2" fill="var(--c4)" opacity=".6"/>'; r[1].forEach(function (b, bi) { s += '<rect x="' + b[0] + '" y="' + (r[0] - b[2]) + '" width="' + b[1] + '" height="' + b[2] + '" rx="4" fill="' + ((bi + ri) % 3 === 0 ? "var(--c3)" : "var(--c2)") + '"/>'; }); });
      s += '<rect x="262" y="40" width="40" height="120" rx="10" fill="var(--c3)" opacity=".9"/><rect x="272" y="58" width="20" height="6" rx="3" fill="var(--c1)"/><rect x="272" y="74" width="20" height="6" rx="3" fill="var(--c1)" opacity=".6"/>';
    } else if (p.id === "ganga") {
      s += '<circle cx="232" cy="72" r="34" fill="var(--c3)"/><circle cx="232" cy="72" r="50" fill="none" stroke="var(--c3)" opacity=".35"/>' +
        '<path d="M0 120 L40 120 L40 108 L80 108 L80 96 L120 96 L120 84 L150 84 L150 200 L0 200Z" fill="var(--c2)"/>' +
        '<path d="M0 140 Q40 124 80 140 T160 140 T240 140 T320 140 V200 H0Z" fill="var(--c3)" opacity=".55"/>' +
        '<path d="M0 160 Q40 144 80 160 T160 160 T240 160 T320 160 V200 H0Z" fill="var(--c3)" opacity=".8"/>' +
        '<path d="M0 182 Q40 168 80 182 T160 182 T240 182 T320 182 V200 H0Z" fill="var(--c4)" opacity=".7"/>';
    } else if (p.id === "pustak") {
      s += '<rect x="30" y="26" width="76" height="44" rx="10" fill="var(--c2)"/><rect x="42" y="42" width="52" height="12" rx="6" fill="var(--c3)"/>' +
        '<rect x="122" y="26" width="76" height="44" rx="10" fill="var(--c2)"/><rect x="138" y="40" width="44" height="16" rx="8" fill="var(--c3)"/><circle cx="172" cy="48" r="6" fill="var(--c1)"/>' +
        '<rect x="214" y="26" width="76" height="44" rx="10" fill="var(--c2)"/><rect x="226" y="40" width="52" height="16" rx="5" fill="none" stroke="var(--c4)" stroke-width="2"/>' +
        '<rect x="30" y="84" width="76" height="44" rx="10" fill="var(--c2)"/><rect x="44" y="104" width="48" height="4" rx="2" fill="var(--c4)" opacity=".6"/><circle cx="74" cy="106" r="8" fill="var(--c3)"/>' +
        '<rect x="122" y="84" width="76" height="44" rx="10" fill="var(--c3)"/><path d="M146 108 L156 118 L176 96" fill="none" stroke="var(--c1)" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>' +
        '<rect x="214" y="84" width="76" height="44" rx="10" fill="var(--c2)"/><circle cx="252" cy="106" r="16" fill="none" stroke="var(--c3)" stroke-width="5"/>' +
        '<rect x="30" y="142" width="260" height="34" rx="10" fill="var(--c2)"/><rect x="44" y="156" width="120" height="8" rx="4" fill="var(--c4)" opacity=".6"/><rect x="236" y="150" width="42" height="18" rx="9" fill="var(--c3)"/>';
    } else if (p.id === "mausam") {
      s += '<g fill="var(--c4)" opacity=".92"><circle cx="100" cy="66" r="26"/><circle cx="138" cy="52" r="34"/><circle cx="178" cy="68" r="24"/><rect x="76" y="66" width="126" height="28" rx="14"/></g>';
      for (i = 0; i < 6; i++) s += '<path d="M' + (92 + i * 20) + ' 108 l-6 18" stroke="var(--c3)" stroke-width="4" stroke-linecap="round"/>';
      var bars = [30, 52, 38, 70, 46, 84, 60];
      bars.forEach(function (b, k) { s += '<rect x="' + (28 + k * 38) + '" y="' + (186 - b * .8) + '" width="24" height="' + (b * .8) + '" rx="4" fill="' + (k === 5 ? "var(--c3)" : "var(--c2)") + '"/>'; });
      s += '<circle cx="268" cy="54" r="22" fill="var(--c3)"/>';
    } else {
      s += '<g transform="translate(160 100)">';
      for (i = 0; i < 8; i++) s += '<ellipse cx="0" cy="-48" rx="15" ry="38" transform="rotate(' + (i * 45) + ')" fill="' + (i % 2 ? "var(--c2)" : "var(--c3)") + '" opacity=".9"/>';
      for (i = 0; i < 8; i++) s += '<circle cx="0" cy="-86" r="5" transform="rotate(' + (i * 45 + 22.5) + ')" fill="var(--c4)"/>';
      s += '<circle r="20" fill="var(--c4)"/><circle r="10" fill="var(--c1)"/><circle r="94" fill="none" stroke="var(--c3)" stroke-dasharray="3 7" opacity=".6"/></g>';
    }
    return s + "</svg>";
  }

  $("#heroArt").innerHTML = avatar("h");
  $("#aboutArt").innerHTML = avatar("a");

  /* ---------- routing ---------- */
  var VIEWS = ["home", "work", "about", "contact"];
  function route() {
    var h = location.hash.slice(1);
    if (VIEWS.indexOf(h) < 0) h = "home";
    document.querySelectorAll("[data-view]").forEach(function (v) { v.hidden = v.dataset.view !== h; });
    document.querySelectorAll("[data-nav]").forEach(function (a) {
      if (a.dataset.nav === h) a.setAttribute("aria-current", "page"); else a.removeAttribute("aria-current");
    });
    window.scrollTo(0, 0);
  }
  window.addEventListener("hashchange", route);

  /* ---------- theme + accent ---------- */
  var isDark = function () { return root.getAttribute("data-theme") !== "light"; };
  var savedTheme = store("theme");
  if (savedTheme === "light") root.setAttribute("data-theme", "light");
  $("#themeBtn").addEventListener("click", function () {
    var next = isDark() ? "light" : "dark";
    root.setAttribute("data-theme", next); store("theme", next);
  });

  var swBox = $("#swatches");
  function setHue(h) {
    root.style.setProperty("--h", h); store("hue", String(h));
    swBox.querySelectorAll(".sw").forEach(function (b) { b.setAttribute("aria-pressed", String(+b.dataset.h === h)); });
  }
  HUES.forEach(function (h) {
    var b = document.createElement("button");
    b.type = "button"; b.className = "sw"; b.dataset.h = h;
    b.style.setProperty("--c", "hsl(" + h + " 90% 55%)");
    b.setAttribute("aria-label", "Accent hue " + h);
    b.addEventListener("click", function () { setHue(h); });
    swBox.appendChild(b);
  });
  var sh = parseInt(store("hue"), 10);
  setHue(HUES.indexOf(sh) >= 0 ? sh : 352);

  /* ---------- rotating role word ---------- */
  var ri = 0, roleEl = $("#role");
  var reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (!reduce) setInterval(function () { ri = (ri + 1) % ROLES.length; roleEl.textContent = ROLES[ri]; }, 2400);

  /* ---------- floating embers ---------- */
  (function () {
    var box = $("#embers"), i, e, size;
    for (i = 0; i < 34; i++) {
      e = document.createElement("span"); e.className = "ember";
      size = 2 + Math.random() * 4;
      e.style.cssText = "left:" + (Math.random() * 100).toFixed(1) + "%;width:" + size.toFixed(1) + "px;height:" + size.toFixed(1) +
        "px;--d:" + (9 + Math.random() * 12).toFixed(1) + "s;--delay:-" + (Math.random() * 20).toFixed(1) + "s;--dx:" + ((Math.random() * 18) - 9).toFixed(1) + "vw";
      box.appendChild(e);
    }
  })();

  /* ---------- project cards ---------- */
  function thumbStyle(p) {
    var h = p.h;
    return isDark()
      ? "--c1:hsl(" + h + " 55% 9%);--c2:hsl(" + h + " 62% 26%);--c3:hsl(" + h + " 92% 56%);--c4:hsl(" + (h + 12) + " 95% 82%)"
      : "--c1:hsl(" + h + " 70% 94%);--c2:hsl(" + h + " 60% 78%);--c3:hsl(" + h + " 80% 44%);--c4:hsl(" + h + " 75% 62%)";
  }
  function cardHTML(p) {
    return '<button type="button" class="card" data-id="' + p.id + '">' +
      '<div class="thumb" data-thumb="' + p.id + '">' + art(p) + "</div>" +
      '<div class="card-body"><div class="mono">' + p.cat + " · " + p.year + "</div><h3>" + p.title + "</h3><p>" + p.blurb + "</p>" +
      '<div class="tags">' + p.tags.map(function (t) { return '<span class="tag">' + t + "</span>"; }).join("") + "</div></div></button>";
  }
  function paintThumbs() {
    document.querySelectorAll("[data-thumb]").forEach(function (el) {
      var p = PROJECTS.filter(function (x) { return x.id === el.dataset.thumb; })[0];
      el.setAttribute("style", thumbStyle(p));
    });
  }
  function renderFeatured() { $("#featured").innerHTML = PROJECTS.slice(0, 3).map(cardHTML).join(""); }

  var cats = ["All"].concat(PROJECTS.map(function (p) { return p.cat; }).filter(function (c, i, a) { return a.indexOf(c) === i; }));
  var active = "All";
  function renderFilters() {
    $("#filters").innerHTML = cats.map(function (c) {
      var n = c === "All" ? PROJECTS.length : PROJECTS.filter(function (p) { return p.cat === c; }).length;
      return '<button type="button" class="chip" data-cat="' + c + '" aria-pressed="' + (c === active) + '">' + c + '<span class="count">' + n + "</span></button>";
    }).join("");
  }
  function renderProjects() {
    var list = PROJECTS.filter(function (p) { return active === "All" || p.cat === active; });
    $("#projects").innerHTML = list.length ? list.map(cardHTML).join("") : '<div class="empty">No projects in this category yet.</div>';
    paintThumbs();
  }
  $("#filters").addEventListener("click", function (e) {
    var b = e.target.closest("[data-cat]"); if (!b) return;
    active = b.dataset.cat; renderFilters(); renderProjects();
  });

  /* ---------- modal ---------- */
  var overlay = $("#overlay"), lastFocus = null;
  function openProject(id) {
    var p = PROJECTS.filter(function (x) { return x.id === id; })[0]; if (!p) return;
    lastFocus = document.activeElement;
    $("#modal").innerHTML = '<div class="thumb" style="' + thumbStyle(p) + '">' + art(p) + '</div><div class="modal-in">' +
      '<div class="mono">' + p.cat + " · " + p.year + '</div><h2 id="mTitle">' + p.title + "</h2><p>" + p.detail + "</p>" +
      '<div class="facts">' + p.facts.map(function (f) { return '<div class="fact"><span class="mono">' + f[0] + "</span><b>" + f[1] + "</b></div>"; }).join("") + "</div>" +
      '<div class="tags">' + p.tags.map(function (t) { return '<span class="tag">' + t + "</span>"; }).join("") + "</div>" +
      '<div><a class="btn primary" href="#contact" data-close>Ask about a similar project</a></div></div>';
    overlay.hidden = false; $("#closeModal").focus();
  }
  function closeModal() { overlay.hidden = true; if (lastFocus) lastFocus.focus(); }
  document.addEventListener("click", function (e) {
    var c = e.target.closest(".card[data-id]");
    if (c) { openProject(c.dataset.id); return; }
    if (e.target === overlay || e.target.closest("#closeModal") || e.target.closest("[data-close]")) closeModal();
  });
  document.addEventListener("keydown", function (e) { if (e.key === "Escape" && !overlay.hidden) closeModal(); });

  /* ---------- skills ---------- */
  var skillBox = $("#skills"), detail = $("#skillDetail");
  skillBox.innerHTML = Object.keys(SKILLS).map(function (s) {
    return '<button type="button" class="skill" data-skill="' + s + '" aria-pressed="false">' + s + "</button>";
  }).join("");
  function showSkill(name) {
    skillBox.querySelectorAll(".skill").forEach(function (b) { b.setAttribute("aria-pressed", String(b.dataset.skill === name)); });
    var s = SKILLS[name];
    var used = PROJECTS.filter(function (p) { return p.tags.indexOf(name) >= 0 || name === "HTML & CSS"; });
    detail.innerHTML = '<div style="display:flex;justify-content:space-between;gap:1rem"><strong>' + name + '</strong><span class="mono">' + s.lvl + ' / 100</span></div>' +
      '<div class="meter"><i style="width:0"></i></div><p style="color:var(--muted)">' + s.note + "</p>" +
      '<p class="mono">Used in ' + used.length + " of " + PROJECTS.length + " projects</p>";
    requestAnimationFrame(function () { requestAnimationFrame(function () { var m = $(".meter i", detail); if (m) m.style.width = s.lvl + "%"; }); });
  }
  skillBox.addEventListener("click", function (e) { var b = e.target.closest("[data-skill]"); if (b) showSkill(b.dataset.skill); });
  showSkill("JavaScript");

  /* ---------- contact ---------- */
  var toastT;
  function toast(msg) {
    var t = $("#toast"); t.textContent = msg; t.hidden = false;
    clearTimeout(toastT); toastT = setTimeout(function () { t.hidden = true; }, 1800);
  }
  function copy(text, ok) {
    var done = function () { toast(ok); };
    var fallback = function () {
      var ta = document.createElement("textarea"); ta.value = text; ta.style.cssText = "position:fixed;opacity:0";
      document.body.appendChild(ta); ta.select();
      try { document.execCommand("copy"); done(); } catch (e) { toast("Select the text and copy it"); }
      document.body.removeChild(ta);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) navigator.clipboard.writeText(text).then(done, fallback); else fallback();
  }
  $("#copyMail").addEventListener("click", function () { copy($("#mail").textContent, "Email address copied"); });

  var form = $("#form"), result = $("#result");
  function setErr(id, msg) { $("#e-" + id).textContent = msg; return !msg; }
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    var n = $("#name").value.trim(), em = $("#email").value.trim(), m = $("#msg").value.trim();
    var a = setErr("name", n ? "" : "Please enter your name.");
    var b = setErr("email", /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(em) ? "" : "Enter an email like name@example.com.");
    var c = setErr("msg", m.length >= 15 ? "" : "Tell me a little more (at least 15 characters).");
    if (!(a && b && c)) return;
    $("#out").textContent = "To: " + $("#mail").textContent + "\nSubject: " + $("#kind").value + " enquiry from " + n + "\n\nHi Aarav,\n\n" + m + "\n\nReply to: " + em + "\n" + n;
    form.hidden = true; result.hidden = false;
  });
  $("#copyMsg").addEventListener("click", function () { copy($("#out").textContent, "Message copied"); });
  $("#editMsg").addEventListener("click", function () { result.hidden = true; form.hidden = false; });

  /* ---------- boot ---------- */
  renderFeatured(); renderFilters(); renderProjects(); paintThumbs(); route();
  new MutationObserver(paintThumbs).observe(root, { attributes: true, attributeFilter: ["data-theme"] });
})();
