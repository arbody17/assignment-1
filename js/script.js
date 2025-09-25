(function(){
  const root = document.documentElement;
  const themeToggle = document.getElementById('themeToggle');
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');

  // Smooth scroll
  document.querySelectorAll('a[href^="#"]').forEach(a => {
    a.addEventListener('click', (e) => {
      const id = a.getAttribute('href');
      if(id.length > 1){
        const target = document.querySelector(id);
        if(target){
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          if (navLinks && navLinks.getAttribute('aria-expanded') === 'true') {
            navLinks.setAttribute('aria-expanded', 'false');
          }
        }
      }
    });
  });

  // Mobile nav
  if(menuToggle && navLinks){
    menuToggle.addEventListener('click', () => {
      const expanded = navLinks.getAttribute('aria-expanded') === 'true';
      navLinks.setAttribute('aria-expanded', String(!expanded));
      menuToggle.setAttribute('aria-expanded', String(!expanded));
    });
  }

  // Theme toggle
  const stored = localStorage.getItem('theme');
  if(stored) root.setAttribute('data-theme', stored);

  function setTheme(next){
    root.setAttribute('data-theme', next);
    localStorage.setItem('theme', next);
    themeToggle.setAttribute('aria-pressed', String(next === 'dark'));
  }

  if(themeToggle){
    themeToggle.addEventListener('click', () => {
      const current = root.getAttribute('data-theme') || 'auto';
      const next = current === 'dark' ? 'light' : 'dark';
      setTheme(next);
    });
  }

  // Greeting
  const greeting = document.getElementById('greeting');
  if(greeting){
    const h = new Date().getHours();
    const msg = h < 12 ? 'Good morning' : (h < 18 ? 'Good afternoon' : 'Good evening');
    greeting.textContent = msg;
  }

  // Footer year
  const yearEl = document.getElementById('year');
  if(yearEl){ yearEl.textContent = new Date().getFullYear(); }

  // Contact form validation
  const form = document.getElementById('contactForm');
  if(form){
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      let ok = true;
      form.querySelectorAll('.error').forEach(el => el.textContent = '');

      if(!form.name.value.trim()){
        ok = false; form.name.nextElementSibling.textContent = 'Please enter your name.';
      }
      if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.value)){
        ok = false; form.email.nextElementSibling.textContent = 'Enter a valid email.';
      }
      if(form.message.value.trim().length < 5){
        ok = false; form.message.nextElementSibling.textContent = 'Please write a longer message.';
      }

      if(ok){
        alert('✅ Thanks! This is a demo form only.');
        form.reset();
      }
    });
  }
})();
