// ════════════════════════════════════════════════════════════════════════════
//  SAVE / LOAD PROGRESS  (localStorage)
// ════════════════════════════════════════════════════════════════════════════

const SAVE_KEY = 'manual_iqxpeax_progress';

/** Save current progress to localStorage */
function saveProgress() {
  const data = {
    currentPage:  currentPage,
    visited:      Array.from(visitedPages),
    savedAt:      new Date().toISOString(),
  };
  try {
    localStorage.setItem(SAVE_KEY, JSON.stringify(data));
    showToast();
    markVisitedNav();
  } catch (e) {
    console.warn('Save failed:', e);
  }
}

/** Load saved progress from localStorage */
function loadProgress() {
  try {
    const raw = localStorage.getItem(SAVE_KEY);
    if (!raw) return;
    const data = JSON.parse(raw);
    if (Array.isArray(data.visited)) {
      data.visited.forEach(i => visitedPages.add(i));
    }
    if (typeof data.currentPage === 'number') {
      // small delay so pages are built first
      setTimeout(() => {
        goToPage(data.currentPage);
        markVisitedNav();
      }, 100);
    }
  } catch (e) {
    console.warn('Load failed:', e);
  }
}

/** Put a subtle visited mark on nav dots */
function markVisitedNav() {
  document.querySelectorAll('.nav-item').forEach(el => {
    const idx = parseInt(el.dataset.index);
    if (visitedPages.has(idx)) el.classList.add('visited');
  });
}

/** Show the save toast */
function showToast() {
  const toast = document.getElementById('saveToast');
  if (!toast) return;
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2200);
}

/** Auto-save every 2 minutes */
setInterval(saveProgress, 2 * 60 * 1000);

/** Load on startup (after DOM is ready) */
window.addEventListener('load', () => {
  loadProgress();
});
