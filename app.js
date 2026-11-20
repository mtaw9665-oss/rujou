(function () {
'use strict';

/* ================= Data: stickers and phrases ================= */

const ART = {
  sun: '<g stroke="#F2B33D" stroke-width="5" stroke-linecap="round"><path d="M60 20v10M31 32l7 7M89 32l-7 7M16 62h10M94 62h10"/></g><circle cx="60" cy="66" r="22" fill="#F2B33D"/><path d="M8 84c18-10 34-10 52 0s34 10 52 0v28H8z" fill="#2F8F7E"/>',
  seedling: '<path d="M60 98V56" stroke="#2F8F7E" stroke-width="6" stroke-linecap="round"/><path d="M60 64C60 44 44 34 26 36c0 20 14 30 34 28z" fill="#4CAF7D"/><path d="M60 52C60 34 74 24 94 26c0 18-14 28-34 26z" fill="#2F8F7E"/><path d="M38 88h44l-6 22H44z" fill="#C4542D"/>',
  mountain: '<path d="M8 106L48 40l22 34 14-18 28 50z" fill="#5B7FA6"/><path d="M48 40l-10 16 10-4 8 6z" fill="#FFFFFF"/><path d="M48 40V20" stroke="#12262B" stroke-width="3" stroke-linecap="round"/><path d="M48 20h22l-6 7 6 7H48z" fill="#B8442C"/>',
  wave: '<circle cx="60" cy="38" r="14" fill="#F2B33D"/><path d="M6 72c14-14 28-14 42 0s28 14 42 0c8-8 18-8 24-4v42H6z" fill="#3E7FB5"/><path d="M6 90c14-12 28-12 42 0s28 12 42 0c8-7 18-7 24-3v26H6z" fill="#1F5F94"/>',
  shield: '<path d="M60 10l38 14v32c0 28-18 44-38 52C40 98 22 84 22 56V24z" fill="#1D6F63"/><path d="M42 58l13 13 24-26" stroke="#FFFFFF" stroke-width="9" fill="none" stroke-linecap="round" stroke-linejoin="round"/>',
  lighthouse: '<path d="M50 42L10 28M50 42L10 56M70 42l40-14M70 42l40 14" stroke="#F2B33D" stroke-width="4" stroke-linecap="round"/><path d="M48 104l6-56h12l6 56z" fill="#FFFFFF" stroke="#12262B" stroke-width="3" stroke-linejoin="round"/><path d="M51 78h18l1.5 12h-21z" fill="#B8442C"/><rect x="50" y="36" width="20" height="12" rx="2" fill="#12262B"/><path d="M54 36l6-12 6 12z" fill="#B8442C"/><rect x="32" y="104" width="56" height="8" rx="3" fill="#12262B"/>',
  key: '<circle cx="36" cy="60" r="20" fill="none" stroke="#E0A02A" stroke-width="10"/><path d="M56 60h50M90 60v16M103 60v12" stroke="#E0A02A" stroke-width="10" stroke-linecap="round"/>',
  bird: '<ellipse cx="58" cy="66" rx="30" ry="22" fill="#3E7FB5"/><circle cx="84" cy="52" r="14" fill="#3E7FB5"/><path d="M96 52l14 4-14 5z" fill="#F2B33D"/><circle cx="87" cy="50" r="3" fill="#FFFFFF"/><path d="M34 64c10-24 28-28 36-20-8 4-14 12-16 24z" fill="#1F5F94"/><path d="M30 72L10 80l22 2z" fill="#1F5F94"/>',
  star: '<polygon points="60,12 72,44 106,46 80,67 89,100 60,81 31,100 40,67 14,46 48,44" fill="#F2B33D" stroke="#E09A1A" stroke-width="4" stroke-linejoin="round"/>',
  anchor: '<circle cx="60" cy="26" r="9" fill="none" stroke="#12262B" stroke-width="6"/><path d="M60 35v66M42 50h36" stroke="#12262B" stroke-width="6" stroke-linecap="round"/><path d="M24 74c4 22 20 30 36 30s32-8 36-30" fill="none" stroke="#12262B" stroke-width="6" stroke-linecap="round"/>'
};
const BG = {
  sun: '#FFE9B8', seedling: '#DDF2E5', mountain: '#DCE8F5', wave: '#D7ECF7', shield: '#DDF0EB',
  lighthouse: '#E5E0F5', key: '#FFF0C7', bird: '#DCEBF8', star: '#FFF1C9', anchor: '#E3EEF3'
};

const DAILY = [
  { a: 'sun', t: 'النهاردة يوم جديد، وإنت اللي بتختار تبدأه إزاي.' },
  { a: 'wave', t: 'الرغبة بتعلى وبتنزل. إنت بتفضل.' },
  { a: 'seedling', t: 'خطوة صغيرة النهاردة أحسن من خطة كبيرة بكرة.' },
  { a: 'shield', t: 'مش لازم تكسب العمر كله. كفاية تكسب اللحظة دي.' },
  { a: 'mountain', t: 'إنت أقوى من آخر مرة وقعت فيها.' },
  { a: 'bird', t: 'التعافي مش خط مستقيم. المهم تكمّل.' },
  { a: 'lighthouse', t: 'افتكر ليه بدأت. السبب ده لسه موجود.' },
  { a: 'key', t: 'كل يوم بيعدّي بيثبت إنك تقدر.' },
  { a: 'anchor', t: 'اللي بتعمله دلوقتي هتشوف أثره بكرة.' },
  { a: 'star', t: 'ارحم نفسك. إنت بتتعلم، مش بتتحاسب.' },
  { a: 'seedling', t: 'الصبر النهاردة بيشتري لك راحة بعدين.' },
  { a: 'shield', t: 'طلب المساعدة قوة، مش ضعف.' },
  { a: 'sun', t: 'اشرب ميّة، خد نفس، وكمّل.' },
  { a: 'bird', t: 'الغلطة بتعلّمك، لكن مش بتعرّفك.' }
];
const WAVEPOOL = [
  { a: 'wave', t: 'عدّيت الموجة. ده إنجاز حقيقي.' },
  { a: 'shield', t: 'الرغبة نزلت، وإنت لسه واقف.' },
  { a: 'star', t: 'كل موجة بتعدّيها بتخلّي اللي بعدها أخف.' },
  { a: 'bird', t: 'شكرًا إنك استنيت. ده كان قرار صعب.' }
];
const MILE = {
  1: { a: 'seedling', t: 'أول يوم هو أصعب خطوة، وإنت خطيتها.' },
  3: { a: 'sun', t: '3 أيام. الطريق بدأ يبان.' },
  7: { a: 'mountain', t: 'أسبوع كامل. إنت بتبني عادة جديدة.' },
  14: { a: 'lighthouse', t: 'أسبوعين. ثبات حقيقي.' },
  30: { a: 'key', t: 'شهر. إنت مش نفس الشخص اللي بدأ.' },
  60: { a: 'anchor', t: 'شهرين من الاختيار كل يوم.' },
  90: { a: 'star', t: '90 يوم. شفت نفسك بتتغيّر.' }
};

const KEY = 'rujou.v1';
const DAY = 864e5;
const STOPS = [1, 3, 7, 14, 30, 60, 90];
const TYPES = [
  { id: 'phone', label: 'الموبايل والسوشيال' },
  { id: 'habit', label: 'العادة السرية' },
  { id: 'drugs', label: 'مخدرات أو كحول' },
  { id: 'other', label: 'حاجة تانية' }
];
const MOODS = ['تعبان', 'مخنوق', 'عادي', 'كويس', 'ممتاز'];
const TRIGS = ['وحدة', 'ملل', 'ليل', 'زعل', 'ضغط', 'سهر'];

/* ================= Chat engine (rule-based, with safety rules first) ================= */

function norm(s) {
  return String(s).replace(/[ً-ْـ]/g, '').replace(/[أإآ]/g, 'ا').replace(/ى/g, 'ي').replace(/ة/g, 'ه').toLowerCase();
}
const L = (arr) => arr.map(norm);
const K_CRISIS = L(['انتحر', 'اموت', 'انهي حياتي', 'اقتل نفسي', 'اذي نفسي', 'اوذي نفسي', 'مش عايز اعيش', 'مش عايزه اعيش', 'اخلص من حياتي', 'ايذاء نفسي', 'اجرح نفسي']);
const K_MED = L(['رعشه', 'رعشة', 'تشنج', 'هلوس', 'نوبه', 'صرع', 'ارتعاش', 'اعراض الانسحاب', 'انسحاب', 'اغماء', 'مش قادر اتنفس']);
const K_RELAPSE = L(['رجعت', 'انتكست', 'وقعت', 'غلطت', 'فشلت', 'ضيعت']);
const K_URGE = L(['مخنوق', 'مضايق', 'متضايق', 'مش قادر', 'هرجع', 'نفسي ارجع', 'عايز ارجع', 'زهقان', 'ضغط', 'هتجنن', 'مش قادر ابطل', 'الرغبه', 'نفسي في']);
const K_NIGHT = L(['ليل', 'مش عارف انام', 'سهران', 'ارق']);
const K_LONELY = L(['وحيد', 'لوحدي', 'مفيش حد', 'وحده']);
const K_POS = L(['كويس', 'عديت', 'نضيف', 'تمام', 'فخور', 'احسن']);
const has = (s, list) => list.some((k) => s.includes(k));

const DEFAULTS = [
  'فاهمك. احكيلي أكتر: إيه اللي حصل قبل ما تحس كده بشوية؟',
  'أنا سامعك. إيه أكتر حاجة تقيلة عليك دلوقتي؟',
  'خد نفس الأول. وبعدين قولي، الإحساس ده بدأ إمتى؟'
];

function botReply(text) {
  const s = norm(text);
  if (has(s, K_CRISIS)) {
    return { kind: 'crisis', text: 'كلامك مهم، وأنا قلقان عليك. لو ممكن تؤذي نفسك دلوقتي، اتصل بالإسعاف 123 أو كلّم حد جنبك فورًا. ولو في حد تثق فيه، قوله إنك محتاجه دلوقتي. مش لازم تعدّي ده لوحدك.', actions: [{ label: 'افتح صفحة المساعدة', go: 'help' }] };
  }
  if (has(s, K_MED)) {
    return { kind: 'crisis', text: 'الأعراض دي ممكن تكون خطيرة طبيًا. لو في تشنجات أو هلوسة أو رعشة شديدة أو لخبطة، اتصل بالإسعاف 123 أو روح أقرب طوارئ فورًا. ومتوقفش فجأة عن حاجة كنت بتاخدها بانتظام من غير طبيب.', actions: [{ label: 'افتح صفحة المساعدة', go: 'help' }] };
  }
  if (has(s, K_RELAPSE)) {
    return { kind: 'care', text: 'شكرًا إنك قلتلي. اللي حصل مش بيمسح الأيام اللي عدّت ومش معناه إنك فشلت. الانتكاسة بتحصل لناس كتير في الطريق. ركّز دلوقتي على إنك تهدى وتبدأ تاني.', actions: [{ label: 'ابدأ عدّاد جديد', go: 'relapse' }, { label: 'اكتب إيه اللي حصل', go: 'journal' }] };
  }
  if (has(s, K_URGE)) {
    return { kind: 'care', text: 'أنا معاك. الرغبة زي الموجة، بتعلى وبعدين بتنزل حتى لو مفيش حاجة عملتها. جرّب نعدّيها سوا بالتنفس والمؤقت، وبعد ما تهدى نتكلم في اللي حصل.', actions: [{ label: 'افتح "مش قادر"', go: 'sos' }] };
  }
  if (has(s, K_NIGHT)) {
    return { kind: 'care', text: 'الليل بيخلّي كل حاجة أتقل. جرّب تقوم من السرير وتشرب ميّة، وسيب الموبايل بعيد عنك شوية. ولو الرغبة جت، المؤقت موجود.', actions: [{ label: 'افتح "مش قادر"', go: 'sos' }] };
  }
  if (has(s, K_LONELY)) {
    return { kind: 'care', text: 'الوحدة بتوجع فعلاً. فكّر في حد واحد تقدر تبعتله رسالة قصيرة دلوقتي، حتى لو بس "عامل إيه؟". مش لازم تحكي كل حاجة.', actions: [] };
  }
  if (has(s, K_POS)) {
    return { kind: 'care', text: 'ده يستاهل تفتخر بيه. إيه اللي ساعدك تعدّي اليوم؟ حاجة زي دي تتكتب في يومياتك عشان تفتكرها وقت الصعب.', actions: [{ label: 'اكتب في اليوميات', go: 'journal' }] };
  }
  const i = s.length % DEFAULTS.length;
  return { kind: 'care', text: DEFAULTS[i], actions: [] };
}

/* ================= Node export for tests ================= */
if (typeof module !== 'undefined') {
  module.exports = { norm, botReply, DAILY, WAVEPOOL, MILE, ART, BG, STOPS };
}
if (typeof document === 'undefined') return;

/* ================= State ================= */

function fresh() {
  return { v: 1, onboarded: false, type: 'phone', startTs: 0, checkins: [], relapses: [], best: 0, journal: [], waves: 0, seen: [], chat: [] };
}
function load() {
  try {
    const r = localStorage.getItem(KEY);
    if (r) { const o = JSON.parse(r); if (o && o.v === 1) return Object.assign(fresh(), o); }
  } catch (e) { /* storage unavailable */ }
  return fresh();
}
let S = load();
function save() { try { localStorage.setItem(KEY, JSON.stringify(S)); } catch (e) { /* ignore */ } }

const ui = { screen: 'home', sosMin: 15, ai: null, sosRun: null, sosDone: false, mood: -1, trig: [], note: '', obType: 'phone', obStart: 0, dailyOff: 0, wipe: false, thinking: false };
let sosTimer = null;
let installPrompt = null;
let lastFocus = null;

const $ = (sel) => document.querySelector(sel);
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const days = () => Math.max(0, Math.floor((Date.now() - S.startTs) / DAY));
const dkey = (ts) => { const d = new Date(ts); return d.getFullYear() + '-' + String(d.getMonth() + 1).padStart(2, '0') + '-' + String(d.getDate()).padStart(2, '0'); };
const typeLabel = () => (TYPES.find((t) => t.id === S.type) || TYPES[0]).label;

function fmtWhen(ts) {
  try { return new Date(ts).toLocaleString('ar-EG-u-nu-latn', { weekday: 'long', hour: 'numeric', minute: '2-digit' }); } catch (e) { return dkey(ts); }
}

/* ================= Icons ================= */

const ICON = {
  home: '<path d="M3 11l9-8 9 8v9a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z"/>',
  journal: '<path d="M4 4h12a3 3 0 0 1 3 3v13H7a3 3 0 0 1-3-3z"/><path d="M8 9h7M8 13h5"/>',
  chat: '<path d="M21 12a8 8 0 0 1-11.6 7.1L4 20l1-4.6A8 8 0 1 1 21 12z"/>',
  help: '<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="3.5"/><path d="M5.6 5.6l3.9 3.9M14.5 14.5l3.9 3.9M18.4 5.6l-3.9 3.9M9.5 14.5l-3.9 3.9"/>',
  back: '<path d="M9 6l6 6-6 6"/>',
  check: '<path d="M5 12.5l4.5 4.5L19 7.5"/>',
  send: '<path d="M21 3L10 14"/><path d="M21 3l-7 18-4-7-7-4z"/>',
  trash: '<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  refresh: '<path d="M20 11a8 8 0 1 0-2.3 5.7"/><path d="M20 4v7h-7"/>'
};
const ic = (n, size) => '<svg width="' + (size || 22) + '" height="' + (size || 22) + '" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + ICON[n] + '</svg>';

function stickerHTML(st) {
  return '<div class="sticker" style="--sbg:' + BG[st.a] + '"><svg viewBox="0 0 120 120" role="img" aria-label="ملصق تحفيزي">' + ART[st.a] + '</svg><p>' + esc(st.t) + '</p></div>';
}

/* ================= Screens ================= */

function backBtn(to) { return '<button class="back" data-act="go" data-v="' + to + '">' + ic('back', 18) + '<span>رجوع</span></button>'; }

function onboard() {
  const types = TYPES.map((t) => '<button class="chip' + (ui.obType === t.id ? ' on' : '') + '" data-act="obType" data-v="' + t.id + '" aria-pressed="' + (ui.obType === t.id) + '">' + t.label + '</button>').join('');
  const starts = [[0, 'النهاردة'], [7, 'من أسبوع'], [30, 'من شهر']].map((s) => '<button class="chip' + (ui.obStart === s[0] ? ' on' : '') + '" data-act="obStart" data-v="' + s[0] + '" aria-pressed="' + (ui.obStart === s[0]) + '">' + s[1] + '</button>').join('');
  return '<section class="screen ob">' +
    '<div class="logo" aria-hidden="true"><svg width="34" height="34" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"><path d="M4 17c3-8 6-8 8-3s5 4 8-6"/></svg></div>' +
    '<h1 class="display">رجوع</h1>' +
    '<p class="lead">مساحتك الآمنة للتعافي. مجاني، ومن غير ما تكتب اسمك. كل بياناتك بتتحفظ على جهازك بس.</p>' +
    '<h2 class="h2">عايز تبطّل إيه؟</h2><div class="chips">' + types + '</div>' +
    (ui.obType === 'drugs' ? '<div class="note warn">لو بتتعاطى بانتظام، كلّم طبيب قبل ما توقف فجأة. التوقف المفاجئ عن بعض المواد ممكن يكون خطر طبي.</div>' : '') +
    '<h2 class="h2">بدأت العدّاد من إمتى؟</h2><div class="chips">' + starts + '</div>' +
    '<button class="btn" data-act="begin">ابدأ رحلتك</button>' +
    '<p class="fine">التطبيق أداة مساندة وليس بديلاً عن العلاج.</p></section>';
}

function home() {
  const d = days();
  const today = dkey(Date.now());
  const done = S.checkins.includes(today);
  const next = STOPS.find((n) => n > d);
  const prev = [0].concat(STOPS).filter((n) => n <= d).pop();
  const pct = next ? Math.max(4, Math.round(((d - prev) / (next - prev)) * 100)) : 100;
  let week = '';
  for (let i = 6; i >= 0; i--) {
    const t = Date.now() - i * DAY;
    const k = dkey(t);
    const on = S.checkins.includes(k);
    week += '<div class="wd' + (on ? ' on' : '') + (i === 0 ? ' today' : '') + '"><span class="dot">' + (on ? ic('check', 14) : '') + '</span><span class="wn">' + new Date(t).getDate() + '</span></div>';
  }
  const idx = (Math.floor((Date.now() - new Date().getTimezoneOffset() * 6e4) / DAY) + ui.dailyOff) % DAILY.length;
  const mile = STOPS.map((n) => {
    const r = d >= n;
    return '<button class="chip sm' + (r ? ' on' : '') + '" data-act="mile" data-v="' + n + '"' + (r ? '' : ' disabled') + '>' + (n === 1 ? 'يوم' : n + ' يوم') + '</button>';
  }).join('');
  return '<section class="screen">' +
    '<header class="top"><div><p class="muted sm">أهلاً بيك</p><h1 class="h1">رحلتك النهاردة</h1></div><span class="pill">' + typeLabel() + '</span></header>' +
    '<div class="hero"><span class="big" id="daysNum">' + d + '</span><span class="heroSub">يوم في رحلتك</span>' +
    '<div class="bar" role="progressbar" aria-valuenow="' + pct + '" aria-valuemin="0" aria-valuemax="100"><i style="width:' + pct + '%"></i></div>' +
    '<span class="heroNote">' + (next ? 'فاضل ' + (next - d) + ' يوم على المحطة الجاية (' + next + ' يوم)' : 'وصلت لكل المحطات. كمّل.') + '</span></div>' +
    '<div class="card"><div class="week" aria-label="آخر 7 أيام">' + week + '</div>' +
    (done ? '<div class="okbox">' + ic('check') + '<span>اتأكد يومك النهاردة، كمّل</span></div>' : '<button class="btn ghost" data-act="confirm">أكّد يومك النهاردة</button>') + '</div>' +
    '<button class="sos" data-act="go" data-v="sos"><span class="sosT">مش قادر</span><span class="sosS">اضغط دلوقتي، هنعدّيها سوا</span></button>' +
    '<div class="daily"><div class="dailyHead"><h2 class="h2">ملصق النهاردة</h2><button class="icon-btn" data-act="daily" aria-label="ملصق تاني">' + ic('refresh', 20) + '</button></div>' + stickerHTML(DAILY[idx]) + '</div>' +
    '<div class="stats"><div class="stat"><b>' + Math.max(S.best, d) + '</b><span>أطول فترة (يوم)</span></div><div class="stat"><b>' + S.waves + '</b><span>موجات عدّيتها</span></div><div class="stat"><b>' + S.journal.length + '</b><span>تسجيلات</span></div></div>' +
    '<div><h2 class="h2">محطاتك</h2><div class="chips">' + mile + '</div></div>' +
    '<button class="link" data-act="go" data-v="relapse">حصلت لي انتكاسة؟</button></section>';
}

function fmtTime(sec) { return String(Math.floor(sec / 60)).padStart(2, '0') + ':' + String(sec % 60).padStart(2, '0'); }

function sos() {
  const run = ui.sosRun;
  const total = run ? run.total : ui.sosMin * 60;
  const mins = [5, 10, 15].map((m) => '<button class="chip' + (ui.sosMin === m ? ' on' : '') + '" data-act="sosMin" data-v="' + m + '" aria-pressed="' + (ui.sosMin === m) + '">' + m + ' دقيقة</button>').join('');
  let action;
  if (run) action = '<button class="btn ghost" data-act="sosStop">إيقاف</button>';
  else if (ui.sosDone) action = '<div class="okbox big2">عدّيت الموجة. ده إنجاز حقيقي.</div><button class="btn" data-act="go" data-v="home">رجوع للرئيسية</button>';
  else action = '<div class="chips center">' + mins + '</div><button class="btn" data-act="sosStart">ابدأ التنفس والمؤقت</button>';
  return '<section class="screen sosScr">' + backBtn('home') +
    '<h1 class="h1 lg">إنت قادر تعدّي اللحظة دي</h1>' +
    '<p class="lead sm2">الرغبة زي الموجة، بتعلى وبعدين بتنزل. استنى معاها شوية ومتحاربهاش.</p>' +
    '<div class="breath"><div class="orb" id="orb" style="transform:scale(' + (ui.sosDone ? 1 : 0.62) + ')"><span id="sosTime" dir="ltr">' + fmtTime(run ? Math.max(0, Math.ceil((run.endTs - Date.now()) / 1000)) : (ui.sosDone ? 0 : total)) + '</span></div></div>' +
    '<p class="phase" id="sosPhase" aria-live="polite">' + (ui.sosDone ? 'عدّيت الموجة' : (run ? 'شهيق من الأنف' : 'جاهز؟ اضغط ابدأ')) + '</p>' +
    '<div class="bar light" aria-hidden="true"><i id="sosBar" style="width:' + (ui.sosDone ? 100 : 0) + '%"></i></div>' +
    action +
    '<div class="card"><h2 class="h2">وإنت مستني:</h2><ol class="tips"><li>اشرب كوباية ميّة.</li><li>سيب الموبايل واطلع من الأوضة.</li><li>كلّم حد تثق فيه أو افتح الشات.</li></ol></div>' +
    '<button class="btn ghost" data-act="go" data-v="chat">كلّم الشات</button></section>';
}

function insights() {
  const J = S.journal;
  if (J.length < 3) return '<div class="note">بعد 3 تسجيلات، هنا هتظهر أنماطك: إيه اللي بيحرّكك وإمتى.</div>';
  const cnt = {};
  J.forEach((e) => (e.trig || []).forEach((t) => { cnt[t] = (cnt[t] || 0) + 1; }));
  const top = Object.keys(cnt).sort((a, b) => cnt[b] - cnt[a]).slice(0, 2);
  const hard = J.filter((e) => e.mood <= 1);
  const night = hard.filter((e) => { const h = new Date(e.ts).getHours(); return h >= 21 || h < 5; });
  let out = '';
  if (top.length) out += '<li>أكتر المحفزات عندك: <b>' + top.map(esc).join(' و ') + '</b>.</li>';
  if (hard.length >= 2 && night.length / hard.length >= 0.5) out += '<li>معظم الأوقات الصعبة بتيجي بالليل. جهّز خطة لوقت ما بتنام.</li>';
  if (!out) out = '<li>كمّل تسجّل، الأنماط بتوضح مع الوقت.</li>';
  return '<div class="card"><h2 class="h2">أنماطك</h2><ul class="tips">' + out + '</ul></div>';
}

function journal() {
  const moods = MOODS.map((m, i) => '<button class="chip' + (ui.mood === i ? ' on' : '') + '" data-act="mood" data-v="' + i + '" aria-pressed="' + (ui.mood === i) + '">' + m + '</button>').join('');
  const trigs = TRIGS.map((t) => '<button class="chip' + (ui.trig.includes(t) ? ' on' : '') + '" data-act="trig" data-v="' + t + '" aria-pressed="' + ui.trig.includes(t) + '">' + t + '</button>').join('');
  const list = S.journal.slice().reverse().slice(0, 30).map((e) =>
    '<article class="entry"><div class="eh"><b>' + MOODS[e.mood] + '</b><span class="muted sm">' + esc(fmtWhen(e.ts)) + '</span><button class="icon-btn" data-act="delEntry" data-v="' + e.id + '" aria-label="حذف التسجيل">' + ic('trash', 18) + '</button></div>' +
    ((e.trig || []).length ? '<p class="tg">' + e.trig.map(esc).join(' · ') + '</p>' : '') +
    (e.note ? '<p class="en">' + esc(e.note) + '</p>' : '') + '</article>').join('');
  return '<section class="screen"><h1 class="h1">يومياتك</h1>' +
    '<div><h2 class="h2">حاسس بإيه دلوقتي؟</h2><div class="chips">' + moods + '</div></div>' +
    '<div><h2 class="h2">إيه اللي حرّكك؟ (اختار أكتر من واحد)</h2><div class="chips">' + trigs + '</div></div>' +
    '<div class="field"><label for="note" class="h2">اكتب اللي في بالك (اختياري)</label><textarea id="note" rows="3" placeholder="مثال: حسّيت بملل بعد الشغل...">' + esc(ui.note) + '</textarea></div>' +
    '<button class="btn" data-act="saveEntry"' + (ui.mood < 0 ? ' disabled' : '') + '>احفظ التسجيل</button>' +
    insights() +
    '<div><h2 class="h2">آخر التسجيلات</h2>' + (list || '<p class="muted">لسه مفيش تسجيلات. أول تسجيل بيخلّيك تفهم نفسك أكتر.</p>') + '</div></section>';
}

function msgHTML(m) {
  const acts = (m.actions || []).map((a) => '<button class="btn sm3 ' + (a.go === 'sos' ? '' : 'ghost') + '" data-act="go" data-v="' + a.go + '">' + esc(a.label) + '</button>').join('');
  const call = m.kind === 'crisis' ? '<a class="btn danger" href="tel:123">اتصل بالإسعاف 123</a>' : '';
  return '<div class="msg ' + (m.from === 'me' ? 'me' : 'bot') + (m.kind === 'crisis' ? ' crisis' : '') + '"><span>' + esc(m.text) + '</span>' + call + (acts ? '<div class="macts">' + acts + '</div>' : '') + '</div>';
}
function chat() {
  if (!S.chat.length) S.chat.push({ from: 'bot', text: 'أهلاً، أنا هنا معاك في أي وقت تحس فيه إنك مخنوق أو مش قادر تبطّل. احكيلي إيه اللي حاصل؟', kind: 'care', actions: [] });
  const quick = ['أنا مخنوق', 'نفسي أرجع للعادة', 'عدّيت يوم كويس'].map((q) => '<button class="chip sm" data-act="quick" data-v="' + q + '">' + q + '</button>').join('');
  return '<section class="screen chatScr"><header><h1 class="h1">الشات</h1>'+(ui.ai===true?'<p class="muted sm">مساعد ذكاء اصطناعي، مش إنسان ومش بديل عن طبيب أو معالج. رسايلك بتتبعت لخدمة خارجية عشان يرد عليك.</p>':'<p class="muted sm">مساعد بسيط بردود جاهزة. لو الاتصال متاح هيتحوّل لمساعد ذكاء اصطناعي، ومش بديل عن طبيب أو معالج.</p>')+'</header>' +
    '<div class="msgs" id="msgs" role="log" aria-live="polite">' + S.chat.map(msgHTML).join('') + (ui.thinking ? '<div class="msg bot"><span>...</span></div>' : '') + '</div>' +
    '<div class="chips">' + quick + '</div>' +
    '<form id="chatForm" class="cform"><input id="chatInput" type="text" autocomplete="off" placeholder="اكتب هنا..." aria-label="رسالتك"><button class="send" type="submit" aria-label="إرسال">' + ic('send') + '</button></form></section>';
}

function help() {
  return '<section class="screen"><h1 class="h1">مساعدة وطوارئ</h1>' +
    '<div class="card coral"><h2 class="h2">لو في خطر دلوقتي</h2><p>لو بتفكر تؤذي نفسك أو حد تاني، اتصل بالإسعاف أو كلّم حد جنبك فورًا.</p><a class="btn danger" href="tel:123">اتصل بالإسعاف 123</a></div>' +
    '<div class="card"><h2 class="h2">خطوط دعم</h2>' +
    '<div class="row"><div><b>خط علاج الإدمان</b><span class="muted sm num" dir="ltr">16023</span></div><a class="btn sm3" href="tel:16023">اتصل</a></div>' +
    '<div class="row"><div><b>خط الصحة النفسية</b><span class="muted sm num" dir="ltr">08008880700</span></div><a class="btn sm3" href="tel:08008880700">اتصل</a></div>' +
    '<p class="fine">الأرقام دي لازم تتأكد منها قبل ما التطبيق يتنشر للناس.</p></div>' +
    '<div class="card"><h2 class="h2">تنبيه طبي</h2><p>التوقف المفاجئ عن الكحول والترامادول والمهدئات ممكن يكون خطر طبي. كلّم طبيب قبل ما توقف.</p></div>' +
    '<div class="card"><h2 class="h2">بياناتك</h2><p>اليوميات والعدّاد محفوظين على جهازك بس، ومفيش حساب ولا اسم. رسايل الشات الذكي بتتبعت لخدمة ذكاء اصطناعي عشان ترد، ومش بنخزّنها.</p>' +
    (installPrompt ? '<button class="btn ghost" data-act="install">ثبّت التطبيق على موبايلك</button>' : '') +
    '<button class="btn ghost danger-o" data-act="wipe">' + (ui.wipe ? 'اضغط تاني للتأكيد: مسح كل بياناتي' : 'مسح كل بياناتي') + '</button></div>' +
    '<p class="fine">التطبيق أداة مساندة وليس بديلاً عن العلاج. لو محتاج علاج متخصص، دوّر على مركز أو طبيب معتمد.</p></section>';
}

function relapse() {
  return '<section class="screen">' + backBtn('home') +
    '<h1 class="h1 lg">حصل، وده مش آخر الطريق</h1>' +
    '<p class="lead">الانتكاسة بتحصل لناس كتير في التعافي، ومش معناها إنك فشلت. الأيام اللي عدّت كانت حقيقية، والتعلّم منها بيفضل معاك.</p>' +
    '<div class="spacer"></div>' +
    '<button class="btn" data-act="reset">ابدأ عدّاد جديد</button>' +
    '<button class="btn ghost" data-act="go" data-v="journal">اكتب إيه اللي حصل</button>' +
    '<button class="btn ghost" data-act="go" data-v="chat">كلّم الشات</button></section>';
}

const SCREENS = { home, sos, journal, chat, help, relapse };
const NAV = [['home', 'الرئيسية'], ['journal', 'يوميات'], ['chat', 'الشات'], ['help', 'مساعدة']];

function render() {
  const sc = S.onboarded ? ui.screen : 'onboard';
  $('#screen').innerHTML = sc === 'onboard' ? onboard() : SCREENS[sc]();
  const showNav = S.onboarded && ['home', 'journal', 'chat', 'help'].includes(sc);
  const nav = $('#nav');
  nav.hidden = !showNav;
  nav.querySelector('.navin').innerHTML = NAV.map((n) => '<button class="nb' + (n[0] === sc ? ' on' : '') + '" data-act="go" data-v="' + n[0] + '"' + (n[0] === sc ? ' aria-current="page"' : '') + '>' + ic(n[0], 24) + '<span>' + n[1] + '</span></button>').join('');
  document.getElementById('app').classList.toggle('nonav', !showNav);
  if (sc === 'chat') { const m = $('#msgs'); if (m) m.scrollTop = m.scrollHeight; }
}

function go(screen) {
  if (ui.screen === 'sos' && screen !== 'sos') { stopSosTimer(); ui.sosRun = null; ui.sosDone = false; }
  ui.screen = screen;
  ui.wipe = false;
  render();
  window.scrollTo(0, 0);
  if (screen === 'home') setTimeout(checkMilestones, 250);
}

/* ================= Stickers modal and milestones ================= */

function showSticker(st, kicker) {
  $('#mKicker').textContent = kicker || '';
  $('#mBody').innerHTML = stickerHTML(st);
  lastFocus = document.activeElement;
  $('#modal').hidden = false;
  $('#mClose').focus();
}
function closeModal() {
  $('#modal').hidden = true;
  if (lastFocus && lastFocus.focus) { try { lastFocus.focus(); } catch (e) { /* ignore */ } }
}
function checkMilestones() {
  if (!S.onboarded || ui.screen !== 'home' || !$('#modal').hidden) return;
  const d = days();
  const pending = STOPS.filter((n) => d >= n && !S.seen.includes(n));
  if (!pending.length) return;
  S.seen = S.seen.concat(pending);
  save();
  const top = pending[pending.length - 1];
  showSticker(MILE[top], 'محطة جديدة: ' + (top === 1 ? 'يوم' : top + ' يوم'));
}

/* ================= SOS timer ================= */

function stopSosTimer() { if (sosTimer) { clearInterval(sosTimer); sosTimer = null; } }
function sosStart() {
  const total = ui.sosMin * 60;
  ui.sosRun = { total, endTs: Date.now() + total * 1000 };
  ui.sosDone = false;
  render();
  stopSosTimer();
  sosTimer = setInterval(sosTick, 250);
  sosTick();
}
function sosTick() {
  const r = ui.sosRun;
  if (!r) return;
  const left = Math.max(0, Math.ceil((r.endTs - Date.now()) / 1000));
  const el = r.total - left;
  const t = $('#sosTime'); if (t) t.textContent = fmtTime(left);
  const b = $('#sosBar'); if (b) b.style.width = Math.min(100, (el / r.total) * 100) + '%';
  const idx = Math.floor((el % 12) / 4);
  const p = $('#sosPhase'); if (p) p.textContent = ['شهيق من الأنف', 'احبس نفسك', 'زفير ببطء'][idx];
  const o = $('#orb'); if (o) o.style.transform = 'scale(' + [1, 1, 0.62][idx] + ')';
  if (left <= 0) sosFinish();
}
function sosFinish() {
  stopSosTimer();
  ui.sosRun = null;
  ui.sosDone = true;
  S.waves += 1;
  save();
  try { if (navigator.vibrate) navigator.vibrate([200, 100, 200]); } catch (e) { /* ignore */ }
  render();
  showSticker(WAVEPOOL[S.waves % WAVEPOOL.length], 'موجة جديدة عدّيتها');
}

/* ================= Chat ================= */

async function askAI(t) {
  const history = S.chat.slice(-12).map((m) => ({ role: m.from === 'me' ? 'user' : 'assistant', content: m.text }));
  const ctl = new AbortController();
  const timer = setTimeout(() => ctl.abort(), 20000);
  try {
    const res = await fetch('/.netlify/functions/chat', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ history, type: S.type, days: days() }),
      signal: ctl.signal
    });
    if (!res.ok) throw new Error('http ' + res.status);
    const d = await res.json();
    if (!d || !d.reply) throw new Error('empty');
    ui.ai = true;
    return { kind: d.kind === 'crisis' ? 'crisis' : 'care', text: d.reply, actions: Array.isArray(d.actions) ? d.actions : [] };
  } catch (e) {
    ui.ai = false;
    return botReply(t);
  } finally {
    clearTimeout(timer);
  }
}

async function sendChat(text) {
  const t = String(text || '').trim();
  if (!t || ui.thinking) return;
  S.chat.push({ from: 'me', text: t });
  ui.thinking = true;
  render();
  // Safety rules run on the phone first, so a crisis reply never waits on the network.
  const local = botReply(t);
  const reply = local.kind === 'crisis' ? local : await askAI(t);
  S.chat.push({ from: 'bot', text: reply.text, kind: reply.kind, actions: reply.actions || [] });
  if (S.chat.length > 60) S.chat = S.chat.slice(-60);
  ui.thinking = false;
  save();
  if (ui.screen === 'chat') { render(); const i = $('#chatInput'); if (i) i.focus(); }
}

/* ================= Events ================= */

document.addEventListener('click', (e) => {
  const el = e.target.closest('[data-act]');
  if (!el || el.disabled) return;
  const act = el.getAttribute('data-act');
  const v = el.getAttribute('data-v');
  switch (act) {
    case 'go': go(v); break;
    case 'obType': ui.obType = v; render(); break;
    case 'obStart': ui.obStart = Number(v); render(); break;
    case 'begin':
      S.onboarded = true; S.type = ui.obType; S.startTs = Date.now() - ui.obStart * DAY;
      S.seen = STOPS.filter((n) => n <= ui.obStart); save(); ui.screen = 'home'; render(); break;
    case 'confirm': { const k = dkey(Date.now()); if (!S.checkins.includes(k)) S.checkins.push(k); save(); render(); break; }
    case 'daily': ui.dailyOff += 1; render(); break;
    case 'mile': showSticker(MILE[Number(v)], 'محطة ' + (Number(v) === 1 ? 'يوم' : v + ' يوم')); break;
    case 'sosMin': ui.sosMin = Number(v); render(); break;
    case 'sosStart': sosStart(); break;
    case 'sosStop': stopSosTimer(); ui.sosRun = null; render(); break;
    case 'mood': ui.mood = Number(v); render(); break;
    case 'trig': ui.trig = ui.trig.includes(v) ? ui.trig.filter((x) => x !== v) : ui.trig.concat(v); render(); break;
    case 'saveEntry':
      if (ui.mood < 0) break;
      S.journal.push({ id: String(Date.now()), ts: Date.now(), mood: ui.mood, trig: ui.trig.slice(), note: ui.note.trim() });
      ui.mood = -1; ui.trig = []; ui.note = ''; save(); render(); break;
    case 'delEntry': S.journal = S.journal.filter((x) => x.id !== v); save(); render(); break;
    case 'quick': sendChat(v); break;
    case 'reset':
      S.relapses.push(Date.now()); S.best = Math.max(S.best, days()); S.startTs = Date.now(); S.seen = []; save();
      ui.screen = 'home'; render(); break;
    case 'wipe':
      if (!ui.wipe) { ui.wipe = true; render(); break; }
      try { localStorage.removeItem(KEY); } catch (err) { /* ignore */ }
      S = fresh(); ui.wipe = false; ui.screen = 'home'; ui.mood = -1; ui.trig = []; ui.note = ''; render(); break;
    case 'install':
      if (installPrompt) { installPrompt.prompt(); installPrompt = null; render(); } break;
    case 'closeModal': closeModal(); break;
    default: break;
  }
});

document.addEventListener('input', (e) => { if (e.target.id === 'note') ui.note = e.target.value; });
document.addEventListener('submit', (e) => {
  if (e.target.id === 'chatForm') {
    e.preventDefault();
    const i = $('#chatInput');
    const val = i ? i.value : '';
    sendChat(val);
  }
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !$('#modal').hidden) closeModal(); });
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState === 'visible') {
    if (ui.sosRun) sosTick();
    if (ui.screen === 'home' && S.onboarded) { render(); checkMilestones(); }
  }
});
window.addEventListener('beforeinstallprompt', (e) => { e.preventDefault(); installPrompt = e; if (ui.screen === 'help') render(); });

/* ================= Boot ================= */

document.documentElement.lang = 'ar';
document.documentElement.dir = 'rtl';
render();
setTimeout(checkMilestones, 400);
setInterval(() => { if (document.visibilityState === 'visible' && ui.screen === 'home' && S.onboarded) { const n = $('#daysNum'); if (n) n.textContent = days(); } }, 60000);
try { if ('serviceWorker' in navigator && /^https?:/.test(location.protocol)) navigator.serviceWorker.register('sw.js').catch(() => {}); } catch (e) { /* ignore */ }
})();
