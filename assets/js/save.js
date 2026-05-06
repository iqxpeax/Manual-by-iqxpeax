// ── Theme ────────────────────────────────────────────────────
const THEME_KEY = 'manual_theme';

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'light') document.documentElement.setAttribute('data-theme', 'light');
}

function toggleTheme() {
  const isLight = document.documentElement.getAttribute('data-theme') === 'light';
  if (isLight) {
    document.documentElement.removeAttribute('data-theme');
    localStorage.setItem(THEME_KEY, 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem(THEME_KEY, 'light');
  }
}

initTheme();

// ── Save / Load progress ─────────────────────────────────────
const SAVE_KEY = 'manual_iqxpeax_v2';

function saveProgress() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify({
      currentPage: currentPage,
      visited: Array.from(visitedPages),
      savedAt: new Date().toISOString(),
    }));
    showToast();
    markVisitedNav();
  } catch(e) {}
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (Array.isArray(data.visited)) data.visited.forEach(i => visitedPages.add(i));
    if (typeof data.currentPage === 'number' && data.currentPage > 0) {
      setTimeout(() => { goToPage(data.currentPage); markVisitedNav(); }, 150);
    }
  } catch(e) {}
}

function markVisitedNav() {
  document.querySelectorAll('.nav-item').forEach(el => {
    if (visitedPages.has(parseInt(el.dataset.index))) el.classList.add('visited');
  });
}

function showToast() {
  const t = document.getElementById('saveToast');
  if (!t) return;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), 2200);
}

setInterval(saveProgress, 120000);
window.addEventListener('load', loadProgress);
