/* =====================================================================
   Mehedi Marof — mehedimarof.com
   app.js
   ===================================================================== */

/* ---------------------------------------------------------------------
   OUTLET LOGOS — used both for the "Work appeared in" band
   and for the small outlet mark inside each story card.
   --------------------------------------------------------------------- */
const outletLogos = {
  "Al Jazeera": "images/logos/aljazeera.svg",
  "NBC News": "images/logos/nbcnews.svg",
  "Maryland Matters": "images/logos/marylandmatters.png",
  "Capital News Service": "images/logos/cns.png",
  "College Park Here & Now": "images/logos/college-park-hn.webp",
  "Dialogue Earth": "images/logos/dialogueearth.svg",
  "Rest of World": "images/logos/restofworld.svg",
  "Netra News": "images/logos/netranews.png",
  "The Diplomat": "images/logos/thediplomat.png",
  "The Wire": "images/logos/thewire.svg",
  "Scroll": "images/logos/scrollindia.svg",
  "The Business Standard": "images/logos/tbsnews.svg",
  "The Daily Star": "images/logos/thedailystar.svg"
};

const interviewedLogos = [
  { name: "BBC World Service", file: "images/logos/bbcworldservice.svg" },
  { name: "The Independent", file: "images/logos/independentuk.svg" },
  { name: "ABC Australia", file: "images/logos/abcaustralia.svg" }
];

/* ---------------------------------------------------------------------
   STORIES
   - `featured` (number) = position in the first 8 cards shown on load.
   - Stories without `featured` are appended (newest first) when the
     user clicks "View all stories".
   - To add a hero image, paste a direct URL into `image`. If left
     empty the card falls back to OG fetch, then to the outlet logo.
   - Tags drive the filter buttons:
       investigation | data | feature | opinion |
       breaking | politics | climate | local | rights
   --------------------------------------------------------------------- */
const stories = [
  /* ====================== FEATURED 8 (exact order) ===================== */
  {
    featured: 1,
    title: "A year after layoffs, former federal workers are still piecing their lives back together",
    outlet: "Capital News Service", date: "2026-05-15", tags: ["Feature", "politics"],
    url: "https://cnsmaryland.org/2026/05/15/a-year-after-layoffs-former-federal-workers-are-still-piecing-together-their-lives/",
    image: "https://cnsmaryland.org/wp-content/uploads/2026/05/Har.jpg"
  },
  {
    featured: 2,
    title: "When Musk joined Trump, countries rolled out the red carpet for Starlink",
    outlet: "Rest of World", date: "2025-12-03", tags: ["investigation", "politics"],
    url: "https://restofworld.org/2025/musk-starlink-trump-doge/",
    image: "https://restofworld.org/wp-content/uploads/2025/11/color_sized_starlinkHeader_Final.jpg"
  },
  {
    featured: 3,
    title: "Bangladesh election: Is the military still a power behind the scenes?",
    outlet: "Al Jazeera", date: "2026-01-29", tags: ["politics", "investigation"],
    url: "https://www.aljazeera.com/features/2026/1/29/bangladesh-election-is-the-military-still-a-power-behind-the-scenes",
    image: "https://www.aljazeera.com/wp-content/uploads/2026/01/AP24203298486010-1769662870.jpg"
  },
  {
    featured: 4,
    title: "'One less mouth to feed': Climate disasters fuelling child marriage in Bangladesh",
    outlet: "Dialogue Earth", date: "2024-05-17", tags: ["climate", "rights"],
    url: "https://dialogue.earth/en/climate/climate-disasters-linked-to-child-marriage-bangladesh/",
    image: "https://dialogue.earth/content/uploads/2024/05/People-walking-up-gangplank-over-floodwater-Bangladesh-2014_Alamy_EPHRHY.jpg"
  },
  {
    featured: 5,
    title: "Priced out at College Park: Graduate students struggle with high rents",
    outlet: "Maryland Matters", date: "2025-12-31", tags: ["local", "feature"],
    url: "https://marylandmatters.org/2025/12/31/priced-out-at-college-park-graduate-students-struggle-with-high-rents/",
    image: "https://marylandmatters.org/wp-content/uploads/2025/12/Screenshot-2025-12-30-at-5.33.49%E2%80%AFPM-1536x1013.jpeg"
  },
  {
    featured: 6,
    title: "Bangladesh prime minister is ousted after weeks of deadly protests",
    outlet: "NBC News", date: "2024-08-05", tags: ["breaking", "politics"],
    url: "https://www.nbcnews.com/news/world/bangladesh-prime-minister-reportedly-ousted-student-led-protests-rcna165110",
    image: "https://media.muckrack.com/portfolio/images/20302289/2662052_240805-bangladesh-mb-0821-c92561.jpg"
  },
  {
    featured: 7,
    title: "In Cumilla, a murder exposes Bangladesh Army's contempt for rules",
    outlet: "Netra News", date: "2025-03-10", tags: ["investigation", "politics"],
    url: "https://netra.news/2025/cumilla-murder-army-contempt-rules-bangladesh/",
    image: ""
  },
  {
    featured: 8,
    title: "Bangladesh's new outcasts: Students from ex-PM Hasina's party now in hiding",
    outlet: "Al Jazeera", date: "2024-10-27", tags: ["politics", "feature"],
    url: "https://www.aljazeera.com/news/2024/10/27/once-powerful-student-members-of-hasinas-party-bangladeshs-new-outcastes",
    image: "https://media.muckrack.com/portfolio/images/20302289/2732405_img_4820-1729942480.jpeg"
  },

  /* ====================== AL JAZEERA / NETRA / SCROLL / DIPLOMAT ===================== */
  {
    title: "Nahid Islam and the uneasy alliance that could shape Bangladesh's vote",
    outlet: "Al Jazeera", date: "2026-02-11", tags: ["politics", "feature"],
    url: "https://www.aljazeera.com/features/2026/2/11/nahid-islam-and-the-uneasy-alliance-that-could-shape-bangladeshs-vote",
    image: "https://www.aljazeera.com/wp-content/uploads/2026/02/GettyImages-2260071772-1-1770712829.jpg"
  },
  {
    title: "Jobs, cash, loans: Can Bangladesh's parties deliver on election promises?",
    outlet: "Al Jazeera", date: "2026-02-03", tags: ["politics", "data"],
    url: "https://www.aljazeera.com/features/2026/2/3/jobs-cash-loans-can-bangladeshs-parties-deliver-on-election-promises",
    image: "https://www.aljazeera.com/wp-content/uploads/2026/02/2026-01-27T112213Z_309515006_RC2N9JAYA5PS_RTRMADP_3_BANGLADESH-ELECTION-1770085368.jpg"
  },
  {
    title: "Bangladeshi Gen Z toppled Hasina. Now they could decide next prime minister",
    outlet: "Al Jazeera", date: "2026-01-20", tags: ["politics", "feature"],
    url: "https://www.aljazeera.com/features/2026/1/20/bangladeshi-youth-toppled-hasina-now-they-could-decide-next-prime-minister",
    image: "https://www.aljazeera.com/wp-content/uploads/2026/01/AP25195353071632-1768878447.jpg"
  },
  {
    title: "'Gotham but no Batman': Crime grips Bangladesh 6 months after Hasina fled",
    outlet: "Al Jazeera", date: "2025-03-04", tags: ["politics", "feature"],
    url: "https://www.aljazeera.com/features/2025/3/4/gotham-but-no-batman-crime-wave-grips-dhaka-6-months-after-hasina-fled",
    image: "https://www.aljazeera.com/wp-content/uploads/2025/03/PXL_20240717_095710148-1741060098-e1741069542828.jpg"
  },
  {
    title: "Why do anti-India sentiments simmer across Bangladesh?",
    outlet: "Netra News", date: "2025-01-19", tags: ["politics", "feature"],
    url: "https://netra.news/2025/anti-india-sentiments-simmer-across-bangladesh/",
    image: ""
  },
  {
    title: "What's still standing in the way of Tarique Rahman's homecoming?",
    outlet: "Netra News", date: "2024-12-20", tags: ["politics"],
    url: "https://netra.news/2024/tariques-homecoming-en/",
    image: ""
  },
  {
    title: "'Our lives don't matter': Bangladeshi Hindus in fear after Hasina exit",
    outlet: "Al Jazeera", date: "2024-12-12", tags: ["rights", "politics"],
    url: "https://www.aljazeera.com/features/2024/12/12/our-lives-dont-matter-in-post-hasina-bangladesh-hindus-fear-future",
    image: "https://www.aljazeera.com/wp-content/uploads/2024/12/Krishna-Das-1733982706.jpg"
  },
  {
    title: "Hindu nationalist mob storms Bangladesh mission in India amid escalating tension",
    outlet: "Netra News", date: "2024-12-02", tags: ["politics", "rights"],
    url: "https://netra.news/2024/hindu-nationalist-mob-storms-bangladesh-mission-in-india-amid-escalating-tension/",
    image: ""
  },
  {
    title: "In Bangladesh, an old flashpoint re-erupts: Tribals clash with settlers and army",
    outlet: "Scroll", date: "2024-09-21", tags: ["rights", "politics"],
    url: "https://scroll.in/article/1073548/in-bangladesh-an-old-flashpoint-re-erupts-tribals-clash-with-settlers-and-army",
    image: ""
  },
  {
    title: "Can the Bangladesh Police Recover?",
    outlet: "The Diplomat", date: "2024-08-20", tags: ["politics", "investigation"],
    url: "https://thediplomat.com/2024/08/can-the-bangladesh-police-recover/",
    image: ""
  },
  {
    title: "Bangladesh protesters call for Nobel laureate Muhammad Yunus to lead after PM's ouster",
    outlet: "NBC News", date: "2024-08-05", tags: ["breaking", "politics"],
    url: "https://www.nbcnews.com/news/world/bangladesh-protesters-call-nobel-laureate-muhammad-yunus-lead-rcna165310",
    image: "https://media-cldnry.s-nbcnews.com/image/upload/t_fit-860w,f_auto,q_auto:best/rockcms/2024-08/240806-muhammad-yunus-mb-0939-b97d7d.jpg"
  },
  {
    title: "How Bangladesh's Quota Reform Protest Turned Into a Revolutionary Uprising",
    outlet: "The Diplomat", date: "2024-08-05", tags: ["politics", "feature"],
    url: "https://thediplomat.com/2024/08/how-bangladeshs-quota-reform-protest-turned-into-a-mass-uprising-against-a-killer-government/",
    image: ""
  },
  {
    title: "'Step Down Hasina': Millions take to the streets in Bangladesh; at least 91 feared dead",
    outlet: "Scroll", date: "2024-08-04", tags: ["breaking", "politics"],
    url: "https://scroll.in/latest/1071628/step-down-hasina-as-millions-take-to-the-streets-in-bangladesh-48-feared-dead",
    image: ""
  },
  {
    title: "Bangladesh student-led protests morph into a mass uprising to unseat an 'autocratic government'",
    outlet: "Scroll", date: "2024-08-03", tags: ["politics"],
    url: "https://scroll.in/article/1071602/bangladesh-student-led-protests-morph-into-a-mass-uprising-to-unseat-an-autocratic-government",
    image: ""
  },
  {
    title: "Raids, Mass Arrests and a Climate of Terror in Bangladesh",
    outlet: "The Wire", date: "2024-07-31", tags: ["rights", "politics"],
    url: "https://thewire.in/south-asia/raids-mass-arrests-and-a-climate-of-terror-student-identity-sparks-concerns-of-detention-in-bangladesh",
    image: "https://media.muckrack.com/portfolio/images/20302289/2662056_gs6lsggxmaai0io-1024x600.jpeg"
  },
  {
    title: "In Bangladesh, climate disasters are forcing girls into underage marriages",
    outlet: "Scroll", date: "2024-05-24", tags: ["climate", "rights"],
    url: "https://scroll.in/article/1068174/in-bangladesh-climate-disasters-are-forcing-girls-into-underage-marriages",
    image: ""
  },

  /* ====================== COLLEGE PARK / LOCAL ===================== */
  {
    title: "Developer plans student housing for Guilford Drive",
    outlet: "College Park Here & Now", date: "2025-12-08", tags: ["local"],
    url: "https://streetcarsuburbs.news/developer-plans-student-housing-for-guilford-drive/",
    image: ""
  },
  {
    title: "College Park Day features music, food, vendors",
    outlet: "College Park Here & Now", date: "2025-10-19", tags: ["local"],
    url: "https://streetcarsuburbs.news/college-park-day-features-music-food-vendors/",
    image: ""
  },
  {
    title: "3 run for 2 District 2 council seats",
    outlet: "College Park Here & Now", date: "2025-10-08", tags: ["local", "politics"],
    url: "https://streetcarsuburbs.news/3-run-for-2-district-2-council-seats/",
    image: "https://i0.wp.com/streetcarsuburbs.news/wp-content/uploads/2025/10/d2-candidate-photos.jpg?w=538&ssl=1"
  },

  /* ====================== THE BUSINESS STANDARD ===================== */
  {
    title: "What does it take to parent a child with disabilities?",
    outlet: "The Business Standard", date: "2024-03-17", tags: ["feature"],
    url: "https://www.tbsnews.net/features/panorama/what-does-it-take-parent-child-disabilities-810114",
    image: ""
  },
  {
    title: "Ramadan away from home: How it goes for Bangladeshi students abroad",
    outlet: "The Business Standard", date: "2024-03-14", tags: ["feature"],
    url: "https://www.tbsnews.net/features/far-home-foreign-ramadan-bangladeshi-students-abroad-808614",
    image: ""
  },
  {
    title: "Mojo's Gaza aid also rockets its sales",
    outlet: "The Business Standard", date: "2024-03-12", tags: ["feature"],
    url: "https://www.tbsnews.net/economy/mojos-gaza-aid-also-rockets-its-sales-807686",
    image: ""
  },
  {
    title: "From 48 hours to '50 years': The never-ending Sagar-Runi murder mystery",
    outlet: "The Business Standard", date: "2024-02-11", tags: ["investigation", "feature"],
    url: "https://www.tbsnews.net/bangladesh/crime/48-hours-50-years-never-ending-sagar-runi-murder-mystery-790978",
    image: ""
  },
  {
    title: "Newly-formed cabinet by age: Oldest minister 81, youngest 41",
    outlet: "The Business Standard", date: "2024-01-11", tags: ["data", "politics"],
    url: "https://www.tbsnews.net/bangladesh/newly-formed-cabinet-age-oldest-minister-81-youngest-51-773302",
    image: ""
  },
  {
    title: "New cabinet: 15 from Dhaka, 9 from Ctg, 13 from other divisions",
    outlet: "The Business Standard", date: "2024-01-11", tags: ["data", "politics"],
    url: "https://www.tbsnews.net/bangladesh/politics/new-cabinet-15-dhaka-9-ctg-13-other-divisions-773282",
    image: ""
  },
  {
    title: "Woes of university admission seekers in a new city amid political strife",
    outlet: "The Business Standard", date: "2023-11-28", tags: ["feature"],
    url: "https://www.tbsnews.net/bangladesh/education/political-unrest-hampers-admission-prep-hsc-2023-intake-747782",
    image: ""
  },
  {
    title: "Endless cycle of poverty and struggle along the shore",
    outlet: "The Business Standard", date: "2023-11-07", tags: ["feature", "climate"],
    url: "https://www.tbsnews.net/features/panorama/endless-cycle-poverty-and-struggle-along-shore-734594",
    image: ""
  },
  {
    title: "'My stomach doesn't understand blockade': Transport workers who defy fear, death",
    outlet: "The Business Standard", date: "2023-11-06", tags: ["feature"],
    url: "https://www.tbsnews.net/features/dont-want-be-burned-transport-workers-defy-fear-take-roads-stave-hunger-734202",
    image: ""
  },
  {
    title: "Political instability snatching what little left for daily wage earners",
    outlet: "The Business Standard", date: "2023-11-01", tags: ["feature"],
    url: "https://www.tbsnews.net/features/political-instability-snatching-what-little-left-daily-wage-earners-731226",
    image: ""
  },
  {
    title: "Panic at the pump: How Israel-Hamas conflict prompts revisit to global oil crisis",
    outlet: "The Business Standard", date: "2023-10-09", tags: ["feature"],
    url: "https://www.tbsnews.net/world/global-economy/panic-pump-how-israel-hamas-conflict-prompts-revisit-oil-crisis-715198",
    image: ""
  },
  {
    title: "An unexpected rain, an unexpected expense: How food delivery men survive Dhaka's storms",
    outlet: "The Business Standard", date: "2023-09-29", tags: ["feature", "climate"],
    url: "https://www.tbsnews.net/features/unexpected-rain-unexpected-expense-how-food-delivery-men-survive-dhakas-storms-709034",
    image: ""
  },
  {
    title: "Rise in work-from-home job scams in Bangladesh",
    outlet: "The Business Standard", date: "2023-09-22", tags: ["feature"],
    url: "https://www.tbsnews.net/bangladesh/crime/rise-work-home-job-scams-bangladesh-what-you-need-know-705162",
    image: ""
  },

  /* ====================== OPINION — DAILY STAR / DHAKA TRIBUNE / DAILY OBSERVER ===================== */
  {
    title: "Shedding light on child labour in educational institutions",
    outlet: "The Daily Star", date: "2023-06-12", tags: ["opinion", "rights"],
    url: "https://www.thedailystar.net/opinion/views/news/shedding-light-child-labour-educational-institutions-3344056",
    image: "https://www.thedailystar.net/sites/default/files/styles/big_1/public/images/2023/06/12/1bdmosabber-alauddin-7618.jpg"
  },
  {
    title: "Fishing ban in Bangladesh is a bilateral issue",
    outlet: "The Daily Star", date: "2023-06-11", tags: ["opinion", "climate"],
    url: "https://www.thedailystar.net/opinion/views/news/fishing-ban-bangladesh-bilateral-issue-3331831",
    image: "https://www.thedailystar.net/sites/default/files/styles/big_1/public/images/2023/05/28/screenshot_2023-05-28_at_10.05.11_pm.png"
  },
];

const INITIAL_VISIBLE = 8;

/* =====================================================================
   THEME — light by default; preference is persisted in localStorage.
   ===================================================================== */
const root = document.documentElement;
const themeBtn = document.getElementById('theme-btn');
const storedTheme = localStorage.getItem('mm-theme');
if (storedTheme) root.dataset.theme = storedTheme;

themeBtn.addEventListener('click', () => {
  root.dataset.theme = root.dataset.theme === 'dark' ? 'light' : 'dark';
  localStorage.setItem('mm-theme', root.dataset.theme);
});

/* =====================================================================
   NAV — adds a hairline border when the page is scrolled, and
   highlights the link for the section currently in view.
   ===================================================================== */
const nav = document.getElementById('nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 12);
}, { passive: true });

const spyObs = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));
    const link = document.querySelector(`.nav-links a[data-target="${e.target.id}"]`);
    if (link) link.classList.add('active');
  });
}, { rootMargin: '-40% 0px -55% 0px' });

['work', 'project', 'experience', 'honors', 'contact'].forEach(id => {
  const el = document.getElementById(id);
  if (el) spyObs.observe(el);
});

/* =====================================================================
   HERO NAME — letters fade up one by one.
   ===================================================================== */
(function splitLetters() {
  const headline = document.getElementById('hero-name');
  headline.querySelectorAll('[data-word]').forEach(w => {
    w.innerHTML = w.textContent
      .split('')
      .map(ch => ch === ' ' ? ' ' : `<span class="char">${ch}</span>`)
      .join('');
  });
  headline.querySelectorAll('.char').forEach((c, i) => {
    setTimeout(() => c.classList.add('in'), 100 + i * 30);
  });
})();

/* =====================================================================
   ROTATOR — italic word swaps every ~2.6s in front of "& journalism".
   The min-width is computed once from the widest word so the layout
   doesn't reflow during a swap.
   ===================================================================== */
const rotatorWords = [
  'investigation', 'data + viz', 'pol + econ', 'analysis',
  'interactive', 'mapping', 'osint', 'documentary'
];
const rotatorEl = document.getElementById('rotator-word');
let rotatorIndex = 0;

function setRotatorWidth() {
  const ghost = document.createElement('span');
  ghost.style.cssText =
    'position:absolute;visibility:hidden;font-style:italic;font-weight:500;' +
    'font-family:Newsreader,serif;font-size:26px;letter-spacing:-0.018em;';
  document.body.appendChild(ghost);
  let max = 0;
  rotatorWords.forEach(w => {
    ghost.textContent = w;
    max = Math.max(max, ghost.offsetWidth);
  });
  document.body.removeChild(ghost);
  document.getElementById('rotator').style.minWidth = (max + 12) + 'px';
}
setRotatorWidth();
window.addEventListener('resize', setRotatorWidth);

setInterval(() => {
  rotatorEl.classList.remove('in');
  rotatorEl.classList.add('out');
  setTimeout(() => {
    rotatorIndex = (rotatorIndex + 1) % rotatorWords.length;
    rotatorEl.textContent = rotatorWords[rotatorIndex];
    rotatorEl.classList.remove('out');
    void rotatorEl.offsetWidth;        // force reflow so animation restarts
    rotatorEl.classList.add('in');
  }, 450);
}, 2600);

/* =====================================================================
   BIO TOGGLE — expands the second paragraph of the hero bio.
   ===================================================================== */
(function bioToggle() {
  const btn = document.getElementById('bio-toggle');
  const ext = document.getElementById('bio-extended');
  const lbl = document.getElementById('bio-toggle-lbl');
  let open = false;
  btn.addEventListener('click', () => {
    open = !open;
    btn.setAttribute('aria-expanded', String(open));
    lbl.textContent = open ? 'Less' : 'More';
    ext.style.maxHeight = open ? ext.scrollHeight + 'px' : '0px';
  });
})();

/* =====================================================================
   LOGO BANDS — "Work appeared in" + "Interviewed by".
   ===================================================================== */
function buildLogoItem(name, file) {
  return `<div class="logo-item" title="${name}">
    <img src="${file}" alt="${name}" loading="lazy"
         onerror="this.parentElement.innerHTML='<span class=&quot;text-fb&quot;>${name}</span>'" />
  </div>`;
}
document.getElementById('logos-appeared').innerHTML =
  Object.entries(outletLogos).map(([n, f]) => buildLogoItem(n, f)).join('');
document.getElementById('logos-interviewed').innerHTML =
  interviewedLogos.map(l => buildLogoItem(l.name, l.file)).join('');

/* =====================================================================
   STORIES — render. Featured stories first in declared order;
   everything else newest first, hidden until "View all".
   ===================================================================== */
function fmtDate(d) {
  return new Date(d + 'T00:00:00')
    .toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

const featured = stories
  .filter(s => s.featured)
  .sort((a, b) => a.featured - b.featured);

const rest = stories
  .filter(s => !s.featured)
  .sort((a, b) => new Date(b.date) - new Date(a.date));

const orderedStories = [...featured, ...rest];

const grid = document.getElementById('work-grid');
grid.innerHTML = orderedStories.map((s, i) => {
  const isHidden = i >= INITIAL_VISIBLE;
  const logoSrc = outletLogos[s.outlet] || '';
  return `
    <a href="${s.url}" target="_blank" rel="noopener"
       class="story-card ${isHidden ? 'hidden-card' : ''}"
       data-index="${i}" data-tags="${(s.tags || []).join('|')}" data-outlet="${s.outlet}">
      <div class="card-img-wrap">
        <div class="card-img-fallback">
          ${logoSrc ? `<img class="fb-logo" src="${logoSrc}" alt="${s.outlet}" />` : `<strong>${s.outlet}</strong>`}
          <span>${fmtDate(s.date)}</span>
        </div>
        <img data-image="${s.image || ''}" data-url="${s.url}" alt="" loading="lazy" />
      </div>
      <div class="card-body">
        <div class="card-meta">
          <span class="card-outlet-mark">
            ${logoSrc
      ? `<img src="${logoSrc}" alt="${s.outlet}"
                      onerror="this.outerHTML='<span class=&quot;outlet-text&quot;>${s.outlet}</span>'" />`
      : `<span class="outlet-text">${s.outlet}</span>`}
          </span>
          <span class="card-date">${fmtDate(s.date)}</span>
        </div>
        <div class="card-headline">${s.title}</div>
        <span class="card-arrow">Read <i data-lucide="arrow-up-right"></i></span>
      </div>
    </a>
  `;
}).join('');

/* Fade cards in as they scroll into view */
const cardObs = new IntersectionObserver((entries) => {
  entries.forEach((e, i) => {
    if (!e.isIntersecting) return;
    setTimeout(() => e.target.classList.add('in'), i * 50);
    cardObs.unobserve(e.target);
  });
}, { rootMargin: '0px 0px -40px 0px' });
document.querySelectorAll('.story-card:not(.hidden-card)').forEach(c => cardObs.observe(c));

/* =====================================================================
   IMAGE LOADING — three-stage fallback:
   1. Manually-pasted hero image (`image:` field)
   2. Open Graph image fetched from microlink.io
   3. Outlet-logo placeholder (already in DOM as `.card-img-fallback`)
   ===================================================================== */
async function fetchOgImage(url) {
  const cacheKey = 'og:' + url;
  const cached = sessionStorage.getItem(cacheKey);
  if (cached) return cached === 'null' ? null : cached;
  try {
    const r = await fetch(`https://api.microlink.io/?url=${encodeURIComponent(url)}`);
    const json = await r.json();
    const img = json?.data?.image?.url || null;
    try { sessionStorage.setItem(cacheKey, img || 'null'); } catch (_) { }
    return img;
  } catch (_) {
    try { sessionStorage.setItem(cacheKey, 'null'); } catch (_) { }
    return null;
  }
}

function showImage(img) {
  img.classList.add('loaded');
  const fb = img.parentElement.querySelector('.card-img-fallback');
  if (fb) fb.style.display = 'none';
}

async function loadCardImage(img) {
  const manual = img.dataset.image;
  const url = img.dataset.url;
  if (manual) {
    img.onload = () => showImage(img);
    img.onerror = () => tryOg(img, url);
    img.src = manual;
    return;
  }
  tryOg(img, url);
}

async function tryOg(img, url) {
  const og = await fetchOgImage(url);
  if (!og) return;
  const test = new Image();
  test.onload = () => { img.src = og; showImage(img); };
  test.onerror = () => { };
  test.src = og;
}

const imgObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    loadCardImage(e.target);
    imgObs.unobserve(e.target);
  });
}, { rootMargin: '300px 0px' });
document.querySelectorAll('.card-img-wrap img').forEach(img => imgObs.observe(img));

/* =====================================================================
   FILTER — tags drive a single-select filter. Picking a filter
   auto-expands the full grid so all matching stories are visible.
   ===================================================================== */
const filterState = { active: null };

function applyFilter() {
  const cards = document.querySelectorAll('.story-card');
  let matched = 0;
  cards.forEach(c => {
    if (c.classList.contains('hidden-card') && !expanded) {
      c.classList.add('filtered-out');
      return;
    }
    const tags = c.dataset.tags.split('|');
    if (!filterState.active || tags.includes(filterState.active)) {
      c.classList.remove('filtered-out');
      matched++;
    } else {
      c.classList.add('filtered-out');
    }
  });
  document.getElementById('empty-state').dataset.show = String(matched === 0);
  document.getElementById('clear-filters').hidden = !filterState.active;
}

document.querySelectorAll('.filter-btn').forEach(b => {
  b.addEventListener('click', () => {
    const v = b.dataset.filter;
    filterState.active = filterState.active === v ? null : v;
    document.querySelectorAll('.filter-btn').forEach(x => {
      x.setAttribute('aria-pressed', String(x.dataset.filter === filterState.active));
    });
    if (filterState.active && !expanded) toggleExpanded(true, false);
    applyFilter();
  });
});

document.getElementById('clear-filters').addEventListener('click', () => {
  filterState.active = null;
  document.querySelectorAll('.filter-btn').forEach(x => x.setAttribute('aria-pressed', 'false'));
  applyFilter();
});

/* =====================================================================
   VIEW MORE — reveals stories in batches of BATCH_SIZE (two rows of 4
   on desktop) per click. When everything is visible, the button flips
   to "Show less" and collapses back to the initial 8.
   ===================================================================== */
const BATCH_SIZE = 8; // 2 rows × 4 cards on desktop
const viewMoreBtn = document.getElementById('view-more');
const lblShow = viewMoreBtn.querySelector('.lbl-show');
const lblHide = viewMoreBtn.querySelector('.lbl-hide');

/* `expanded` is true once the user has clicked "View all" at least once
   AND there are no further hidden cards left to reveal. The filter logic
   relies on this flag, so it stays a module-level variable. */
let expanded = false;

function totalStories() {
  return document.querySelectorAll('.story-card').length;
}
function hiddenStories() {
  return document.querySelectorAll('.story-card.hidden-card');
}
function visibleStories() {
  return totalStories() - hiddenStories().length;
}

function revealBatch(scroll) {
  const hidden = Array.from(hiddenStories()).slice(0, BATCH_SIZE);

  hidden.forEach((c, i) => {
    c.style.display = '';
    c.classList.remove('hidden-card');
    requestAnimationFrame(() => {
      c.style.transition =
        'opacity 0.5s cubic-bezier(0.22, 1, 0.36, 1), ' +
        'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)';
      c.style.transform = 'translateY(16px)';
      c.style.opacity = '0';
      setTimeout(() => {
        c.style.transform = 'translateY(0)';
        c.style.opacity = '1';
      }, 30 + i * 25);
    });
    const img = c.querySelector('.card-img-wrap img');
    if (img && !img.classList.contains('loaded')) loadCardImage(img);
  });

  if (window.lucide) lucide.createIcons();
  expanded = hiddenStories().length === 0;
  updateViewMoreLabel();
  applyFilter();
  if (scroll === true && hidden.length) {
    /* Bring the first newly-revealed card into view */
    hidden[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
}

function collapseAll() {
  document.querySelectorAll('.story-card').forEach((c, i) => {
    if (i >= INITIAL_VISIBLE) {
      c.classList.add('hidden-card');
      c.style.display = 'none';
    }
  });
  expanded = false;
  updateViewMoreLabel();
  applyFilter();
  document.getElementById('work').scrollIntoView({ behavior: 'smooth' });
}

function updateViewMoreLabel() {
  const more = hiddenStories().length;
  if (more > 0) {
    /* Still more to reveal */
    viewMoreBtn.setAttribute('aria-expanded', 'false');
    lblShow.textContent = visibleStories() === INITIAL_VISIBLE
      ? 'View all stories'
      : 'Show more';
    lblShow.hidden = false;
    lblHide.hidden = true;
  } else {
    /* Everything is on screen — offer to collapse */
    viewMoreBtn.setAttribute('aria-expanded', 'true');
    lblShow.hidden = true;
    lblHide.hidden = false;
  }
}

viewMoreBtn.addEventListener('click', () => {
  if (hiddenStories().length > 0) revealBatch();
  else collapseAll();
});

/* Compatibility shim — the filter logic calls toggleExpanded(true, false)
   to "open everything" when a tag is picked. Reveal every batch at once. */
function toggleExpanded(force) {
  if (force === true) {
    while (hiddenStories().length > 0) {
      hiddenStories().forEach(c => {
        c.style.display = '';
        c.classList.remove('hidden-card');
      });
    }
    expanded = true;
    updateViewMoreLabel();
    if (window.lucide) lucide.createIcons();
    document.querySelectorAll('.card-img-wrap img').forEach(img => {
      if (!img.classList.contains('loaded')) loadCardImage(img);
    });
  } else if (force === false) {
    collapseAll();
  }
}

updateViewMoreLabel();

/* =====================================================================
   FEATURED PROJECT — lazy-loads the iframe and toggles pointer-events
   on hover so users can interact with the live preview.
   ===================================================================== */
const fpFrame = document.getElementById('fp-frame');
const fpIframe = document.getElementById('fp-iframe');
const fpOverlay = document.getElementById('fp-overlay');

const fpObs = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (!e.isIntersecting) return;
    fpIframe.src = 'https://mehedi-marof.github.io/opioid-overdose-crisis/';
    fpObs.disconnect();
  });
}, { rootMargin: '300px 0px' });
fpObs.observe(document.getElementById('project'));

let interactTimeout;
fpFrame.addEventListener('mouseenter', () => {
  clearTimeout(interactTimeout);
  interactTimeout = setTimeout(() => {
    fpFrame.classList.add('interactive');
    fpOverlay.style.opacity = '0';
  }, 250);
});
fpFrame.addEventListener('mouseleave', () => {
  clearTimeout(interactTimeout);
  fpFrame.classList.remove('interactive');
  fpOverlay.style.opacity = '1';
});

/* =====================================================================
   EXPERIENCE
   ===================================================================== */
const exp = [
  {
    org: 'Howard Center for Investigative Journalism',
    orgUrl: 'https://merrill.umd.edu/howard-center-for-investigative-journalism',
    location: 'College Park, Maryland',
    role: 'Reporting Fellow',
    date: 'Aug 2025 — present',
    short: "Working on a nationwide investigation into negligent and disciplined doctors, built on data and public-records reporting.",
    bullets: [
      'Filed dozens of nationwide public records requests for an investigative project on "bad doctors."',
      'Analyzed disciplinary records and case data using R.',
      'Developed individual-level case studies and conducted interviews with affected patients.'
    ]
  },
  {
    org: 'Freelance: Al Jazeera, NBC News, among others',
    orgUrl: '',
    location: 'Washington, D.C. · Dhaka',
    role: 'Independent Journalist',
    date: 'Jul 2024 — present',
    short: "Work appeared in NBC News, Maryland Matters, Al Jazeera, Dialogue Earth, Rest of World, College Park Here & Now, Scroll India, The Diplomat, The Wire and more.",
    bullets: [
      'Covered U.S. federal workforce cuts, College Park city politics, regional housing affordability, and climate-driven displacement.',
      "Reported on Bangladesh's 2024 deadly regime-collapsing protests and 2026 election for NBC News and Al Jazeera English.",
      "Served as lead reporter for a Rest of World investigation across Asian countries, examining how Elon Musk's relationship with Trump helped Starlink gain foreign footholds."
    ]
  },
  {
    org: 'Netra News',
    orgUrl: 'https://netra.news/',
    location: 'Dhaka',
    role: 'Staff Correspondent',
    date: 'Aug 2024 — Aug 2025',
    short: "Investigative reporting on the Bangladesh military, accountability, and the persecution of religious minorities.",
    bullets: [
      'Investigated and authored a story on politically motivated extrajudicial killings by the Bangladesh military.',
      'Reported extensively on the persecution of minority Hindus.',
    ]
  },
  {
    org: 'The Business Standard',
    orgUrl: 'https://www.tbsnews.net/',
    location: 'Dhaka',
    role: 'Staff Editor / Reporter',
    date: 'Mar 2023 — Jul 2024',
    short: "Edited the breaking-news desk before joining the enterprise reporting team for long-form features.",
    bullets: [
      'Edited news stories for the breaking news desk for the first six months before joining the enterprise reporting team.',
      'Covered two city corporation elections.',
      'Reported over twenty long-form pieces — politics, climate, society, and rights abuse.'
    ]
  }
];

const edu = [
  {
    org: 'University of Maryland, College Park',
    orgUrl: 'https://umd.edu/',
    location: 'Philip Merrill College of Journalism',
    role: 'Master of Journalism',
    date: 'Aug 2025 — May 2027',
    short: 'Data and Investigative Journalism.',
    bullets: ['CGPA 4.00 / 4.00.']
  },
  {
    org: 'University of Liberal Arts Bangladesh',
    orgUrl: 'https://ulab.edu.bd/',
    location: 'Dhaka',
    role: 'Bachelor of Social Science',
    date: 'Dec 2019 — Dec 2023',
    short: 'Media Studies and Journalism.',
    bullets: [
      'Graduated summa cum laude with a CGPA of 3.98 / 4.00.',
      "Vice Chancellor's Award and Dean's Award.",
      'Major in Digital Journalism; minor in English.',
      'English Editor at the campus newspaper.'
    ]
  }
];

function renderExp(targetId, items) {
  document.getElementById(targetId).innerHTML = items.map(i => {
    const orgHtml = i.orgUrl
      ? `<a href="${i.orgUrl}" target="_blank" rel="noopener">${i.org}</a>`
      : i.org;
    return `
      <article class="exp-row" data-open="false">
        <div>
          <div class="exp-org">${orgHtml}</div>
          <div class="exp-org-meta">${i.date}${i.location ? ' · ' + i.location : ''}</div>
        </div>
        <div class="exp-main">
          <div class="exp-role-row">
            <div class="exp-role">${i.role}</div>
            <button class="exp-toggle" aria-expanded="false">
              <span class="tgl-lbl">More</span>
              <i data-lucide="chevron-down"></i>
            </button>
          </div>
          <p class="exp-short">${i.short}</p>
          <div class="exp-long">
            <ul>${i.bullets.map(b => `<li>${b}</li>`).join('')}</ul>
          </div>
        </div>
      </article>
    `;
  }).join('');
}
renderExp('exp-list', exp);
renderExp('edu-list', edu);

document.querySelectorAll('.exp-row').forEach(row => {
  const btn = row.querySelector('.exp-toggle');
  btn.addEventListener('click', (e) => {
    e.stopPropagation();
    const open = row.dataset.open === 'true';
    row.dataset.open = String(!open);
    btn.setAttribute('aria-expanded', String(!open));
    btn.querySelector('.tgl-lbl').textContent = open ? 'More' : 'Less';
  });
});

/* =====================================================================
   HONORS + AFFILIATIONS
   ===================================================================== */
const honors = [
  { name: 'Howard Center for Investigative Journalism Fellowship', from: 'University of Maryland', year: '2025–26' },
  { name: 'Bangladesh Tech Policy Fellowship', from: 'Digitally Right', year: '2024' },
  { name: "Vice Chancellor's Award", from: 'University of Liberal Arts Bangladesh', year: '2023' },
  { name: "Dean's Award", from: 'University of Liberal Arts Bangladesh', year: '2023' }
];
document.getElementById('honors-list').innerHTML = honors.map(h => `
  <div class="honor-row">
    <div class="honor-name">${h.name}${h.from ? `<span class="honor-from">· ${h.from}</span>` : ''}</div>
    <div class="honor-year">${h.year}</div>
  </div>
`).join('');

const affiliations = [
  { name: 'Investigative Reporters and Editors', role: 'Member', year: '2025 — present' },
  { name: 'Asian American Journalists Association', role: 'Member', year: '2025 — present' },
  { name: 'South Asian Journalists Association', role: 'Member', year: '2025 — present' }
];
document.getElementById('affil-list').innerHTML = affiliations.map(a => `
  <div class="affil-row">
    <div class="affil-name">${a.name}<span class="affil-role">· ${a.role}</span></div>
    <div class="affil-year">${a.year}</div>
  </div>
`).join('');

/* =====================================================================
   Initialize Lucide icons (must run after DOM is populated).
   ===================================================================== */
if (window.lucide) lucide.createIcons();
