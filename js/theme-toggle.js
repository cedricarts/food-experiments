const root = document.documentElement;
const toggle = document.getElementById('themeToggle');
const savedTheme = localStorage.getItem('theme');

if (savedTheme) {
  root.setAttribute('data-theme', savedTheme);
}

const syncPressedState = () => {
  const isDark = root.getAttribute('data-theme') === 'dark';
  toggle.setAttribute('aria-pressed', String(isDark));
};

syncPressedState();

toggle.addEventListener('click', () => {
  const nextTheme = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
  root.setAttribute('data-theme', nextTheme);
  localStorage.setItem('theme', nextTheme);
  syncPressedState();
});
