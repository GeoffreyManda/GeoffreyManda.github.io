// Dark/Light Mode Toggle
(function() {
  const themeToggle = document.getElementById('theme-toggle');
  const html = document.documentElement;

  // Check for saved theme preference or default to 'light'
  const currentTheme = localStorage.getItem('theme') || 'light';
  html.setAttribute('data-theme', currentTheme);

  // Update toggle button state
  function updateToggleButton() {
    const theme = html.getAttribute('data-theme');
    if (theme === 'dark') {
      themeToggle.classList.add('dark');
    } else {
      themeToggle.classList.remove('dark');
    }
  }

  updateToggleButton();

  // Toggle theme
  themeToggle.addEventListener('click', function() {
    const currentTheme = html.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    html.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    updateToggleButton();
  });
})();
