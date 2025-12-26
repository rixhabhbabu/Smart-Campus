// Toggle Theme Function - Simple & Direct
function toggleTheme() {
  const body = document.body;
  const isDark = body.classList.toggle('dark-mode');
  localStorage.setItem('theme', isDark ? 'dark' : 'light');
  
  // Update button/icon text
  const emoji = isDark ? '☀️' : '🌙';
  const btns = document.querySelectorAll('#themeToggle');
  btns.forEach(btn => btn.textContent = emoji);
  
  const icons = document.querySelectorAll('#themeIcon');
  icons.forEach(el => el.textContent = emoji);
  
  console.log('✓ Theme switched to:', isDark ? 'DARK' : 'LIGHT', 'Body has dark-mode:', body.classList.contains('dark-mode'));
  return isDark;
}

// Expose globally
window.toggleTheme = toggleTheme;

// Initialize on page load
document.addEventListener('DOMContentLoaded', function() {
  console.log('🔧 Initializing theme...');
  
  // Restore saved theme
  // Use explicit stored preference; if none, default to light
  let saved = localStorage.getItem('theme');
  if (!saved) {
    saved = 'light';
    localStorage.setItem('theme', saved);
  }
  const isDark = saved === 'dark';

  if (isDark) {
    document.body.classList.add('dark-mode');
  } else {
    document.body.classList.remove('dark-mode');
  }

  // Update toggle icons (pages may set button text too; keep UI consistent)
  const iconForDark = '☀️';
  const iconForLight = '🌙';
  document.querySelectorAll('#themeToggle').forEach(btn => btn.textContent = isDark ? iconForDark : iconForLight);
  document.querySelectorAll('#themeIcon').forEach(el => el.textContent = isDark ? iconForDark : iconForLight);
  
  // Attach click handlers
  document.querySelectorAll('#themeToggle').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      e.stopPropagation();
      toggleTheme();
    });
  });
  
  console.log('✓ Theme initialized - Current:', saved);
});
