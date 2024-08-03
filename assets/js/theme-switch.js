(function() {
  const themeSwitchContainer = document.getElementById('theme-switch-container');
  const bElement = document.getElementById('b');
  const themeSwitcher = document.getElementById('theme-switcher');

  themeSwitchContainer.style.display = 'flex';

  const allowedThemes = /^(dark|light|auto)$/;
  let savedTheme = localStorage.getItem('theme');
  if (!allowedThemes.test(savedTheme)) {
    savedTheme = 'auto';
    localStorage.setItem('theme', savedTheme);
  }

  let theme;
  if (savedTheme === 'auto') {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      theme = 'dark';
    } else {
      theme = 'light';
    }
  } else {
    theme = savedTheme;
  }

  bElement.setAttribute('a', theme);
  themeSwitcher.checked = theme === 'dark';

  themeSwitcher.addEventListener('click', function() {
    const newTheme = themeSwitcher.checked ? 'dark' : 'light';
    bElement.setAttribute('a', newTheme);
    localStorage.setItem('theme', newTheme);
  });
})();