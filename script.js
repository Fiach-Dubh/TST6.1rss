const root = document.documentElement;
const themeToggle = document.getElementById('themeToggle');

let savedTheme;
try { savedTheme = localStorage.getItem('satoshiTimesTheme'); } catch (_) { /* Storage is optional. */ }
if (savedTheme === 'light' || savedTheme === 'dark') {
  root.dataset.theme = savedTheme;
}

function setButtonLabel() {
  if (!themeToggle) return;
  themeToggle.textContent = root.dataset.theme === 'dark' ? 'Light mode' : 'Dark mode';
}

setButtonLabel();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    root.dataset.theme = next;
    try { localStorage.setItem('satoshiTimesTheme', next); } catch (_) { /* Keep the active theme. */ }
    setButtonLabel();
  });
}

// A plain XML feed works without JavaScript; this only adds a copy shortcut.
const feedUrl = document.getElementById('feed-url');
const copyFeed = document.getElementById('copy-feed');
const copyFeedStatus = document.getElementById('copy-feed-status');

if (feedUrl && copyFeed && copyFeedStatus) {
  copyFeed.hidden = false;
  copyFeed.addEventListener('click', async () => {
    try {
      if (!navigator.clipboard || !navigator.clipboard.writeText) throw new Error('Clipboard unavailable');
      await navigator.clipboard.writeText(feedUrl.value);
      copyFeedStatus.textContent = 'Feed address copied. Paste it into your RSS reader.';
    } catch (_) {
      feedUrl.focus();
      feedUrl.select();
      copyFeedStatus.textContent = 'Feed address selected. Use your browser’s Copy command, then paste it into your RSS reader.';
    }
  });
}
