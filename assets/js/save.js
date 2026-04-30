// ════════════════════════════════════════
//  THEME TOGGLE
// ════════════════════════════════════════
const THEME_KEY = 'manual_theme';

function initTheme() {
  const saved = localStorage.getItem(THEME_KEY);
  // default is dark — only switch if user previously chose light
  if (saved === 'light') {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme');
  const next = (current === 'light') ? 'dark' : 'light';
  if (next === 'dark') {
    document.documentElement.removeAttribute('data-theme');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
  localStorage.setItem(THEME_KEY, next);
}

// Run immediately so no flash
initTheme();

// ════════════════════════════════════════
//  SAVE / LOAD PROGRESS
// ════════════════════════════════════════
const SAVE_KEY = 'manual_iqxpeax_v1';

function saveProgress() {
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify({
      currentPage: currentPage,
      visited: Array.from(visitedPages),
      savedAt: new Date().toISOString(),
    }));
    showToast();
    markVisitedNav();
  } catch(e) { console.warn('Save failed:', e); }
}

function loadProgress() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (Array.isArray(data.visited)) {
      data.visited.forEach(i => visitedPages.add(i));
    }
    if (typeof data.currentPage === 'number' && data.currentPage > 0) {
      setTimeout(() => { goToPage(data.currentPage); markVisitedNav(); }, 120);
    }
  } catch(e) { console.warn('Load failed:', e); }
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

// Auto-save every 2 min
setInterval(saveProgress, 120000);

window.addEventListener('load', loadProgress);
