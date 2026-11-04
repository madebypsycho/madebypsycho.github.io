/**
 * PSYCHO LABS — OFFICIAL SITE SCRIPT
 * Underground Independent Software Studio
 * Includes: Theme Toggle (Dark/Light), Mobile Navigation, Contact Forms & Interactions
 */

document.addEventListener('DOMContentLoaded', () => {
  initTheme();
  initMobileNav();
  initContactForms();
  initStickerInteractions();
});

/* --------------------------------------------------------------------------
   1. Theme Management (Dark / Light Mode)
   -------------------------------------------------------------------------- */
function initTheme() {
  const savedTheme = localStorage.getItem('psycho_theme');
  const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialTheme = savedTheme || (prefersDark ? 'dark' : 'light');

  applyTheme(initialTheme);

  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
      const nextTheme = currentTheme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  });
}

function applyTheme(theme) {
  document.documentElement.setAttribute('data-theme', theme);
  localStorage.setItem('psycho_theme', theme);

  // Update theme toggle buttons (icons & labels)
  document.querySelectorAll('.theme-toggle-btn').forEach(btn => {
    const sunIcon = btn.querySelector('.theme-icon-sun');
    const moonIcon = btn.querySelector('.theme-icon-moon');
    const label = btn.querySelector('.theme-toggle-label');

    if (theme === 'dark') {
      if (sunIcon) sunIcon.style.display = 'inline-block';
      if (moonIcon) moonIcon.style.display = 'none';
      if (label) label.textContent = 'Light';
      btn.setAttribute('title', 'Switch to Light Mode');
    } else {
      if (sunIcon) sunIcon.style.display = 'none';
      if (moonIcon) moonIcon.style.display = 'inline-block';
      if (label) label.textContent = 'Dark';
      btn.setAttribute('title', 'Switch to Dark Mode');
    }
  });

  // Switch header mascot image for maximum contrast
  document.querySelectorAll('.theme-mascot-img').forEach(img => {
    img.src = theme === 'dark' ? 'assets/images/header-mascot-dark.png' : 'assets/images/header-mascot.png';
  });
}

/* --------------------------------------------------------------------------
   2. Mobile Navigation Drawer Toggle
   -------------------------------------------------------------------------- */
function initMobileNav() {
  const toggleBtn = document.querySelector('.mobile-nav-toggle');
  const drawer = document.querySelector('.mobile-drawer');
  if (!toggleBtn || !drawer) return;

  toggleBtn.addEventListener('click', () => {
    const isOpen = drawer.classList.contains('open');
    if (isOpen) {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    } else {
      drawer.classList.add('open');
      toggleBtn.setAttribute('aria-expanded', 'true');
    }
  });

  // Close when clicking any drawer link (except theme button)
  drawer.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
      drawer.classList.remove('open');
      toggleBtn.setAttribute('aria-expanded', 'false');
    });
  });
}

/* --------------------------------------------------------------------------
   3. Contact Form Submission & Feedback
   -------------------------------------------------------------------------- */
function initContactForms() {
  const forms = document.querySelectorAll('.contact-form-element');

  forms.forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();

      const nameInput = form.querySelector('[name="name"]');
      const emailInput = form.querySelector('[name="email"]');
      const messageInput = form.querySelector('[name="message"]');
      const feedbackEl = form.parentElement.querySelector('.form-feedback-message');
      const submitBtn = form.querySelector('button[type="submit"]');

      if (!nameInput || !emailInput || !messageInput) return;

      const originalBtnText = submitBtn ? submitBtn.innerHTML : 'Send Message';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = 'Sending...';
      }

      // Simulate quick transmission
      setTimeout(() => {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnText;
        }

        form.reset();

        if (feedbackEl) {
          feedbackEl.style.display = 'block';
          feedbackEl.innerHTML = `
            <strong>⚡ MESSAGE TRANSMITTED</strong><br>
            Thank you for reaching out to Psycho Labs. We have received your note and will review it shortly.
          `;
          feedbackEl.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }
      }, 500);
    });
  });
}

/* --------------------------------------------------------------------------
   4. Subtle Sticker Interactive Physics / Tilt
   -------------------------------------------------------------------------- */
function initStickerInteractions() {
  const stickers = document.querySelectorAll('.sticker, .sticker-feature-card, .philosophy-card');

  stickers.forEach(el => {
    el.addEventListener('mouseenter', () => {
      const randomTilt = (Math.random() * 4 - 2).toFixed(1);
      el.style.transition = 'transform 0.15s ease';
      el.style.transform = `translate(-3px, -3px) rotate(${randomTilt}deg)`;
    });

    el.addEventListener('mouseleave', () => {
      el.style.transform = '';
    });
  });
}
