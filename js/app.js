// Anime Otaku Yerevan: store + landing (the story of anime), three languages (hy / ru / en). Hash routes, no build step.
// The whole cart goes out as ONE WhatsApp message. The shop publishes no prices, so every price is "on request".
import { LANGS, LANG_LABEL, CAT, TAG, DESC, lang, initLang, setLang, t, tt } from './i18n.js';

const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const CART = 'otaku-cart-v1', FAVS = 'otaku-favs-v1';
let data, cart = read(CART, []), favs = new Set(read(FAVS, [])), promoI = 0;

function read(k, d) { try { return JSON.parse(localStorage.getItem(k)) ?? d; } catch { return d; } }
function write(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); } catch { /* private mode */ } }
const find = (id) => data.products.find((p) => p.id === id);
const wa = (text) => `https://wa.me/${data.contacts.whatsapp}?text=${encodeURIComponent(text)}`;
const toast = (msg) => { const el = $('#toast'); el.textContent = msg; el.hidden = false; clearTimeout(toast.t); toast.t = setTimeout(() => (el.hidden = true), 2400); };
const cat = (c) => tt(CAT, c), tag = (g) => tt(TAG, g), desc = (p) => DESC[p.category][lang];
const sub = (p) => [cat(p.category), p.series].filter(Boolean).join(' · ');

// ---------------------------------------------------------------- chrome (header, menus, footer): rebuilt on language change
const NAV = [['#/story', 'navStory'], ['#/shop', 'navShop'], ...['Фигурки', 'Одежда', 'Манга', 'Стикеры'].map((c) => [`#/shop/${encodeURIComponent(c)}`, c]), ['#/store', 'navStore']];
const navLabel = (k) => (CAT[k] ? cat(k) : t(k));
function chrome() {
  $('#nav').innerHTML = NAV.map(([h, k]) => `<a href="${h}">${navLabel(k)}</a>`).join('');
  $('#mobileMenu').innerHTML = `<button class="x" id="menuClose" aria-label="×">✕</button>${NAV.map(([h, k]) => `<a href="${h}">${navLabel(k)}</a>`).join('')}<a href="#/favorites">${t('favorites')}</a><a href="#/help">${t('help')}</a><a href="Anime_Otaku_prezentaciya.pdf" target="_blank" rel="noopener">${t('deck')}</a>`;
  $('#lang').innerHTML = LANGS.map((l) => `<button data-lang="${l}" class="${l === lang ? 'on' : ''}" aria-label="${l}">${LANG_LABEL[l]}</button>`).join('');
  $('#searchInput').placeholder = t('searchPh'); $('#searchClose').textContent = t('cancel');
  $('#searchBtn').setAttribute('aria-label', t('search')); $('#burger').setAttribute('aria-label', t('menu')); $('#icoFav').setAttribute('aria-label', t('favorites')); $('#icoBag').setAttribute('aria-label', t('bag'));
  $$('#promo button').forEach((b, i) => b.setAttribute('aria-label', t(i ? 'fwd' : 'back')));
  const a = (h, txt, ext) => `<a href="${h}"${ext ? ' target="_blank" rel="noopener"' : ''}>${txt}</a>`;
  $('#footer').innerHTML = `<div class="foot-cols">
    <div><h4>${t('fCatalog')}</h4>${['Фигурки', 'Одежда', 'Манга', 'Стикеры'].map((c) => a(`#/shop/${encodeURIComponent(c)}`, cat(c))).join('')}</div>
    <div><h4>Anime Otaku</h4>${a('#/story', t('navStory'))}${a('Anime_Otaku_prezentaciya.pdf', t('deck'), 1)}${a('#/store', t('addr'))}${a('#/store', t('hours'))}${a('https://yandex.com/maps/org/anime_otaku/82438621509/', t('fRoute'), 1)}</div>
    <div><h4>${t('fHelp')}</h4>${a('#/help', t('hq1'))}${a('#/help', t('delivery'))}</div>
    <div><h4>${t('fContact')}</h4>${a('tel:+37498281910', '+374 98 281910')}${a('https://www.instagram.com/animeotakuarmenia/', 'Instagram @animeotakuarmenia', 1)}</div></div>
    <div class="foot-bottom"><span>${t('fDemo')}</span><span>${t('fBy')}</span></div>`;
  promo(0); counters();
}

const heart = (p) => `<button class="fav ${favs.has(p.id) ? 'on' : ''}" data-fav="${p.id}" aria-label="${t('toFav')}" aria-pressed="${favs.has(p.id)}"><svg viewBox="0 0 24 24" width="22" height="22"><path d="M12 20s-7-4.4-7-10a4 4 0 0 1 7-2.6A4 4 0 0 1 19 10c0 5.6-7 10-7 10z"/></svg></button>`;
function card(p) {
  return `<article class="card ${p.cutout ? 'is-cut' : ''}" data-id="${p.id}">
    ${p.tag ? `<span class="badge ${p.example ? 'ex' : ''}">${esc(tag(p.tag))}</span>` : ''}${heart(p)}
    <a class="card-hit" href="#/p/${p.id}"><div class="photo"><img alt="${esc(p.name)}" src="${p.image}" loading="lazy"></div>
    <h3>${esc(p.name)}</h3><p class="sub">${esc(sub(p))}</p><p class="price">${t('priceAsk')}</p></a>
    <button class="btn small add" data-add="${p.id}">${t('toBag')}</button></article>`;
}
const secHead = (title, label) => `<div class="sec-h"><h2>${title}</h2><i></i><span>${label}</span></div>`;
const row = (title, list, link, label = 'NEW ITEMS') => `<section class="band">${secHead(title, label)}<div class="band-head"><div></div><div class="arrows">${link ? `<a class="btn small ghost" href="${link}">${t('seeAll')}</a>` : ''}<button data-scroll="-1" aria-label="${t('back')}">‹</button><button data-scroll="1" aria-label="${t('fwd')}">›</button></div></div><div class="track">${list.map(card).join('')}</div></section>`;

// ---------------------------------------------------------------- views
const MARQUEE = ['ONE PIECE', 'NARUTO', 'DRAGON BALL', 'FRIEREN', 'CHAINSAW MAN', 'JUJUTSU KAISEN', 'STUDIO GHIBLI', 'DEMON SLAYER'];
function viewHome() {
  const m = MARQUEE.map((x) => `<span>${x}</span><i>★</i>`).join('');
  const tl = [1, 2, 3, 4].map((n) => `<li><b class="yr">${t('t' + n + 'y')}</b><h3>${t('t' + n + 'h')}</h3><p>${t('t' + n + 'p')}</p></li>`).join('');
  const nums = [1, 2, 3].map((n) => `<div class="num"><b>${t('n' + n)}</b><span>${t('n' + n + 'p')}</span></div>`).join('');
  const why = [1, 2, 3].map((n) => `<article class="why"><span class="why-n">0${n}</span><h3>${t('w' + n + 'h')}</h3><p>${t('w' + n + 'p')}</p></article>`).join('');
  const feat = data.products.filter((p) => !p.example);
  return `
    <section class="hero"><div class="hero-panel">
      <div class="hero-copy"><p class="bar">${t('kick')}</p><h1><span>ANIME</span><span>OTAKU</span></h1><p class="bar sm">${t('heroSub')}</p>
        <div class="hero-btns"><a class="btn" href="#/shop">${t('heroBtn1')}</a><a class="btn ghost" href="#/story">${t('heroBtn2')}</a><a class="btn ghost" href="Anime_Otaku_prezentaciya.pdf" target="_blank" rel="noopener">${t('deck')}</a></div></div>
      <div class="hero-art" aria-hidden="true"><figure class="pn p1"><img alt="" src="img/hero-itachi.jpg"></figure><figure class="pn p2"><img alt="" src="img/products/roronoa-zoro-figure.jpg"></figure><figure class="pn p3"><img alt="" src="img/products/portgas-d-ace-figure.jpg"></figure></div>
      <div class="hero-badge"><b>12–21</b><span>${t('badge')}</span></div>
      <div class="hero-foot"><img src="img/logo.png" alt="" height="84"><p>${t('heroTag')}</p></div>
    </div></section>
    <section class="band strip"><div class="arrows-side"><button data-scroll="-1" aria-label="${t('back')}">‹</button></div><div class="track">${['store-wall', 'store-figures', 'store-interior'].map((n) => `<a class="strip-i" href="#/story"><img alt="" src="img/${n}.jpg" loading="lazy"></a>`).join('')}${feat.slice(0, 7).map((p) => `<a class="strip-i" href="#/p/${p.id}"><img alt="${esc(p.name)}" src="${p.image}" loading="lazy"></a>`).join('')}</div><div class="arrows-side r"><button data-scroll="1" aria-label="${t('fwd')}">›</button></div></section>
    <div class="marquee" aria-hidden="true"><div class="mq">${m}${m}${m}</div></div>
    <section class="chap" id="story"><div class="wrap two"><div><p class="ch-k">${t('s1k')}</p><h2><span>${t('s1h')}</span></h2><p class="lead">${t('s1p')}</p></div><figure class="pic"><img alt="" src="img/store-wall.jpg" loading="lazy"></figure></div></section>
    <section class="chap dark"><div class="wrap"><p class="ch-k">${t('s2k')}</p><h2><span>${t('s2h')}</span></h2><ol class="timeline">${tl}</ol></div></section>
    <section class="chap"><div class="wrap"><p class="ch-k">${t('s3k')}</p><h2><span>${t('s3h')}</span></h2><div class="nums">${nums}</div><p class="src">${t('src')}</p></div></section>
    <section class="chap alt"><div class="wrap"><p class="ch-k">${t('s4k')}</p><h2><span>${t('s4h')}</span></h2><div class="whys">${why}</div></div></section>
    <section class="chap"><div class="wrap two rev"><figure class="pic"><img alt="" src="img/store-figures.jpg" loading="lazy"></figure><div><p class="ch-k">${t('s5k')}</p><h2><span>${t('s5h')}</span></h2><p class="lead">${t('s5p')}</p><div class="hero-btns"><a class="btn" href="#/shop">${t('heroBtn1')}</a><a class="btn ghost" href="#/store">${t('navStore')}</a></div></div></div></section>
    <section class="band">${secHead(t('chooseSection'), 'CATEGORIES')}<div class="cat-tiles">${data.categories.map((c) => { const p = data.products.find((x) => x.category === c); return `<a class="cat-tile ${p.cutout ? 'is-cut' : ''}" href="#/shop/${encodeURIComponent(c)}"><div class="photo"><img alt="" src="${p.image}" loading="lazy"></div><span>${cat(c)}</span></a>`; }).join('')}</div></section>
    ${row(t('featured'), feat, '#/shop')}`;
}

function parseQuery(q) { const o = {}; (q || '').split('&').filter(Boolean).forEach((kv) => { const [k, v] = kv.split('='); o[decodeURIComponent(k)] = decodeURIComponent(v || ''); }); return o; }
function viewShop(seg, q) {
  const f = parseQuery(q);
  const c = seg ? decodeURIComponent(seg) : '';
  const list = data.products.filter((p) => (!c || p.category === c) && (!f.series || p.series === f.series));
  const title = c ? cat(c) : t('allProducts');
  const base = `#/shop${c ? '/' + encodeURIComponent(c) : ''}`;
  const url = (patch) => { const n = { ...f, ...patch }; Object.keys(n).forEach((k) => !n[k] && delete n[k]); const s = Object.entries(n).map(([k, v]) => `${k}=${encodeURIComponent(v)}`).join('&'); return base + (s ? '?' + s : ''); };
  const series = [...new Set(data.products.filter((p) => (!c || p.category === c) && p.series).map((p) => p.series))];
  const hide = read('otaku-hide-filters', innerWidth < 1000);
  return `<div class="plp ${hide ? 'no-filters' : ''}">
    <div class="plp-head"><h1>${esc(title)} <span>(${list.length})</span></h1><div class="plp-tools"><button id="toggleFilters">${hide ? t('showFilters') : t('hideFilters')}</button></div></div>
    <div class="plp-body"><aside class="filters">
      <nav class="cat-list"><a href="#/shop" class="${!c ? 'on' : ''}">${t('allProducts')}</a>${data.categories.map((x) => `<a href="#/shop/${encodeURIComponent(x)}" class="${x === c ? 'on' : ''}">${cat(x)}</a>`).join('')}</nav>
      ${series.length ? `<details open><summary>${t('series')}</summary>${series.map((s) => `<label class="chk"><input type="checkbox" data-url="${url({ series: f.series === s ? '' : s })}" ${f.series === s ? 'checked' : ''}> ${esc(s)}</label>`).join('')}</details>` : ''}
      ${f.series ? `<a class="clear" href="${base}">${t('reset')}</a>` : ''}</aside>
      <div class="grid">${list.length ? list.map(card).join('') : `<p class="muted empty">${t('empty')}</p>`}</div></div></div>`;
}

function viewProduct(id) {
  const p = find(id); if (!p) return viewNotFound();
  document.title = `${p.name} — Anime Otaku`;
  const related = data.products.filter((x) => x.id !== p.id && (x.category === p.category || (p.series && x.series === p.series))).slice(0, 8);
  return `<div class="pdp" data-id="${p.id}">
    <nav class="crumbs"><a href="#/">${t('home')}</a> / <a href="#/shop/${encodeURIComponent(p.category)}">${cat(p.category)}</a> / <span>${esc(p.name)}</span></nav>
    <div class="pdp-grid"><div class="stage-img ${p.cutout ? 'is-cut' : ''}"><img alt="${esc(p.name)}" src="${p.image}"></div>
      <div class="pdp-info">${p.tag ? `<p class="tag">${esc(tag(p.tag))}</p>` : ''}<h1>${esc(p.name)}</h1><p class="sub">${esc(sub(p))}</p>
        <p class="pdp-price">${t('priceAsk')}</p><p class="muted small">${t('priceNote')}</p>
        <button class="btn wide big" data-add="${p.id}">${t('addBag')}</button>
        <button class="btn ghost wide big fav-big ${favs.has(p.id) ? 'on' : ''}" data-fav="${p.id}">${favs.has(p.id) ? t('inFav') : t('addFav')}</button>
        <p class="desc">${esc(desc(p))}</p>
        <details class="acc" open><summary>${t('about')}</summary><ul><li>${t('fCat')}: ${esc(cat(p.category))}</li>${p.series ? `<li>${t('fSeries')}: ${esc(p.series)}</li>` : ''}</ul></details>
        <details class="acc"><summary>${t('delivery')}</summary><p>${t('deliveryText')}</p></details></div></div>
    ${related.length ? row(t('related'), related) : ''}</div>`;
}

function viewFavorites() {
  const list = data.products.filter((p) => favs.has(p.id));
  return `<div class="plp"><div class="plp-head"><h1>${t('favorites')} <span>(${list.length})</span></h1></div>${list.length ? `<div class="grid fav-grid">${list.map(card).join('')}</div>` : `<div class="emptybox"><p>${t('favsEmpty')}</p><a class="btn" href="#/shop">${t('toCatalog')}</a></div>`}</div>`;
}

function viewBag() {
  if (!cart.length) return `<div class="plp"><div class="plp-head"><h1>${t('bag')}</h1></div><div class="emptybox"><p>${t('bagEmpty')}</p><a class="btn" href="#/shop">${t('toCatalog')}</a></div></div>`;
  return `<div class="bag"><h1>${t('bag')}</h1><div class="bag-grid">
    <div class="bag-list">${cart.map((r, i) => { const p = find(r.id); return `<div class="line"><a class="${p.cutout ? 'is-cut' : ''}" href="#/p/${p.id}"><img alt="" src="${p.image}"></a>
      <div><a href="#/p/${p.id}"><b>${esc(p.name)}</b></a><p class="muted">${esc(sub(p))}</p>
        <div class="qty"><button data-qty="${i}" data-d="-1" aria-label="${t('lessAria')}">−</button><span>${r.qty}</span><button data-qty="${i}" data-d="1" aria-label="${t('moreAria')}">+</button><button class="link" data-rm="${i}">${t('remove')}</button></div></div>
      <div class="lp">${t('priceAsk')}</div></div>`; }).join('')}</div>
    <aside class="summary"><h2>${t('total')}</h2><div class="sum-row"><span>${t('cost')}</span><b>${t('onRequest')}</b></div>
      <p class="one-msg">${t('oneMsg')}</p>
      <form id="checkout" autocomplete="on"><input name="name" placeholder="${t('phName')}" autocomplete="name"><input name="phone" placeholder="${t('phPhone')}" inputmode="tel" autocomplete="tel"><input name="address" placeholder="${t('phAddr')}" autocomplete="street-address"><textarea name="note" rows="2" placeholder="${t('phNote')}"></textarea>
        <button class="btn wide big" type="submit">${t('send')}</button></form>
      <p class="muted small">${t('sendHint')}</p></aside></div></div>`;
}

function viewStore() {
  return `<div class="page"><h1>${t('storeTitle')}</h1>
    <div class="shop"><div class="shop-info"><p class="addr">${t('addr')}</p><p class="hours">${t('hours')}</p>
      <a class="rating" href="https://yandex.com/maps/org/anime_otaku/82438621509/reviews/" target="_blank" rel="noopener"><b>★ 4,6</b><span>${t('rating')}</span></a>
      <p class="muted">${t('storeText')}</p>
      <ul class="feats"><li>${t('f1')}</li><li>${t('f2')}</li><li>${t('f3')}</li></ul>
      <div class="shop-actions"><a class="btn" href="https://yandex.com/maps/org/anime_otaku/82438621509/" target="_blank" rel="noopener">${t('route')}</a><a class="btn ghost" href="tel:+37498281910">${t('call')} +374 98 281910</a></div></div>
      <div class="shop-map"><iframe title="Anime Otaku" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://yandex.com/map-widget/v1/?ll=44.512492%2C40.186751&z=16&pt=44.512492%2C40.186751%2Cpm2rdm"></iframe></div></div></div>`;
}

function viewHelp() {
  const q = (a, b) => `<details class="acc" open><summary>${a}</summary><p>${b}</p></details>`;
  return `<div class="page"><h1>${t('help')}</h1>${q(t('hq1'), t('ha1'))}${q(t('delivery'), t('deliveryText'))}${q(t('hq4'), `${esc(data.contacts.phone)} · Instagram @${esc(data.contacts.instagram)}`)}</div>`;
}
const viewNotFound = () => `<div class="page"><h1>${t('notFound')}</h1><p><a class="btn" href="#/">${t('toHome')}</a></p></div>`;

// ---------------------------------------------------------------- router
function route() {
  const hash = location.hash.slice(1) || '/';
  const [path, query] = hash.split('?');
  const seg = path.split('/').filter(Boolean);
  let html, title = 'Anime Otaku — Yerevan';
  if (!seg.length || seg[0] === 'story') html = viewHome();
  else if (seg[0] === 'shop') html = viewShop(seg[1], query);
  else if (seg[0] === 'p') html = viewProduct(decodeURIComponent(seg[1] || ''));
  else if (seg[0] === 'favorites') html = viewFavorites();
  else if (seg[0] === 'bag') html = viewBag();
  else if (seg[0] === 'store') html = viewStore();
  else if (seg[0] === 'help') html = viewHelp();
  else html = viewNotFound();
  $('#view').innerHTML = html;
  if (seg[0] !== 'p') document.title = title;
  if (seg[0] === 'story') { const el = $('#story'); if (el) window.scrollTo({ top: el.offsetTop - 70, behavior: 'auto' }); }
  else if (!(seg[0] === 'shop' && route.last === 'shop') && !route.keep) window.scrollTo(0, 0);
  route.last = seg[0];
  closeOverlays();
}
const rerender = () => { route.keep = true; route(); route.keep = false; };

function counters() {
  const n = cart.reduce((s, r) => s + r.qty, 0);
  $('#cartCount').textContent = n; $('#cartCount').hidden = !n;
  $('#favCount').textContent = favs.size; $('#favCount').hidden = !favs.size;
}
const PROMO = [['promo1', '#/store'], ['promo2', '#/store'], ['promo3', '#/help']];
function promo(d = 0) { promoI = (promoI + d + PROMO.length) % PROMO.length; const el = $('#promoText'); el.textContent = t(PROMO[promoI][0]); el.href = PROMO[promoI][1]; }

function openSearch() { $('#search').hidden = false; document.body.classList.add('lock'); const i = $('#searchInput'); i.value = ''; i.focus(); doSearch(''); }
function closeSearch() { $('#search').hidden = true; if ($('#mobileMenu').hidden) document.body.classList.remove('lock'); }
function closeOverlays() { closeSearch(); $('#mobileMenu').hidden = true; document.body.classList.remove('lock'); }
function doSearch(q) {
  q = q.trim().toLowerCase();
  const pop = ['Naruto', 'One Piece', 'Dragon Ball', 'Frieren'];
  $('#searchPop').innerHTML = q ? '' : `<p class="muted">${t('popular')}</p><div class="chips">${pop.map((x) => `<button class="chip" data-q="${x}">${x}</button>`).join('')}</div>`;
  const hay = (p) => [p.name, p.series, p.category, cat(p.category), DESC[p.category].ru, DESC[p.category].en, DESC[p.category].hy].join(' ').toLowerCase();
  const res = q ? data.products.filter((p) => hay(p).includes(q)) : [];
  $('#searchRes').innerHTML = q ? (res.length ? res.map((p) => `<a class="sres ${p.cutout ? 'is-cut' : ''}" href="#/p/${p.id}"><img alt="" src="${p.image}"><div><b>${esc(p.name)}</b><span>${esc(sub(p))}</span></div></a>`).join('') : `<p class="muted">${t('none')}</p>`) : '';
}

// ---------------------------------------------------------------- actions
function setFav(id) { favs.has(id) ? favs.delete(id) : favs.add(id); write(FAVS, [...favs]); counters(); toast(favs.has(id) ? t('tFav') : t('tUnfav')); }
function addBag(p) { const r = cart.find((x) => x.id === p.id); r ? r.qty++ : cart.push({ id: p.id, qty: 1 }); write(CART, cart); counters(); toast(t('tBag')); }
function orderText(f) {
  const lines = cart.map((r, k) => `${k + 1}. ${find(r.id).name} × ${r.qty}`);
  const who = [f.name && `${t('oName')}: ${f.name}`, f.phone && `${t('oPhone')}: ${f.phone}`, f.address && `${t('oAddr')}: ${f.address}`, f.note && `${t('oNote')}: ${f.note}`].filter(Boolean).join('\n');
  return `${t('oHead')}\n\n${lines.join('\n')}\n\n${t('oAsk')}${who ? '\n\n' + who : ''}`;
}

function wire() {
  document.addEventListener('click', (e) => {
    const el = e.target;
    const lg = el.closest('[data-lang]'); if (lg) { setLang(lg.dataset.lang); chrome(); rerender(); if (!$('#search').hidden) doSearch($('#searchInput').value); return; }
    const fav = el.closest('[data-fav]'); if (fav) { e.preventDefault(); const id = fav.dataset.fav; setFav(id); $$(`[data-fav="${id}"]`).forEach((b) => { b.classList.toggle('on', favs.has(id)); if (b.classList.contains('fav-big')) b.textContent = favs.has(id) ? t('inFav') : t('addFav'); }); if (location.hash.startsWith('#/favorites')) route(); return; }
    const add = el.closest('[data-add]'); if (add) { e.preventDefault(); addBag(find(add.dataset.add)); return; }
    const q = el.closest('[data-qty]'); if (q) { const r = cart[+q.dataset.qty]; r.qty += +q.dataset.d; if (r.qty <= 0) cart.splice(+q.dataset.qty, 1); write(CART, cart); counters(); rerender(); return; }
    const rm = el.closest('[data-rm]'); if (rm) { cart.splice(+rm.dataset.rm, 1); write(CART, cart); counters(); rerender(); return; }
    const sc = el.closest('[data-scroll]'); if (sc) { const tr = sc.closest('.band').querySelector('.track'); tr.scrollBy({ left: +sc.dataset.scroll * tr.clientWidth * 0.85, behavior: 'smooth' }); return; }
    const pr = el.closest('[data-p]'); if (pr) { promo(+pr.dataset.p); return; }
    const chip = el.closest('[data-q]'); if (chip) { $('#searchInput').value = chip.dataset.q; doSearch(chip.dataset.q); return; }
    if (el.closest('#searchBtn')) return openSearch();
    if (el.closest('#searchClose')) return closeSearch();
    if (el.closest('#burger')) { $('#mobileMenu').hidden = false; document.body.classList.add('lock'); return; }
    if (el.closest('#menuClose') || el.closest('#mobileMenu a') || el.closest('.sres')) { closeOverlays(); return; }
    if (el.closest('#toggleFilters')) { write('otaku-hide-filters', !read('otaku-hide-filters', innerWidth < 1000)); rerender(); return; }
  });
  document.addEventListener('change', (e) => { if (e.target.dataset && e.target.dataset.url) location.hash = e.target.dataset.url; });
  document.addEventListener('input', (e) => { if (e.target.id === 'searchInput') doSearch(e.target.value); });
  document.addEventListener('submit', (e) => {
    if (e.target.id !== 'checkout') return;
    e.preventDefault();
    window.open(wa(orderText(Object.fromEntries(new FormData(e.target).entries()))), '_blank', 'noopener');
  });
  document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeOverlays(); });
  addEventListener('hashchange', route);
  addEventListener('scroll', () => $('#top').classList.toggle('solid', scrollY > 10), { passive: true });
  setInterval(() => promo(1), 6000);
}

async function init() {
  initLang();
  data = await (await fetch('data/products.json')).json();
  cart = cart.filter((r) => find(r.id)); write(CART, cart);
  favs = new Set([...favs].filter((id) => find(id))); write(FAVS, [...favs]);
  chrome(); wire(); route();
}
init();
