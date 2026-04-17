const toggleDark = document.getElementById('toggleDark');
const body = document.body;
const sections = document.querySelectorAll('section');

function setTheme(theme) {
  if (theme === 'dark') {
    body.classList.add('dark');
  } else {
    body.classList.remove('dark');
  }
  localStorage.setItem('theme', theme);
  updateToggleText();
}

function updateToggleText() {
  const isDark = body.classList.contains('dark');
  toggleDark.textContent = isDark ? '☀️ Modo claro' : '🌙 Modo escuro';
}

const savedTheme = localStorage.getItem('theme');
if (savedTheme) {
  setTheme(savedTheme);
} else {
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  setTheme(prefersDark ? 'dark' : 'light');
}

toggleDark.addEventListener('click', () => {
  setTheme(body.classList.contains('dark') ? 'light' : 'dark');
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, {
  threshold: 0.15,
});

sections.forEach((section) => {
  section.style.opacity = '0';
  section.style.transform = 'translateY(40px)';
  section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
  observer.observe(section);
});