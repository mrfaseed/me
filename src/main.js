// Import styles — Vite processes Tailwind via PostCSS
import './style.css';

// Import HTML partials as raw strings (Vite build-time, zero runtime cost)
import navHtml from './components/nav.html?raw';
import homeHtml from './components/home.html?raw';
import projectsHtml from './components/projects.html?raw';
import contactHtml from './components/contact.html?raw';
import footerHtml from './components/footer.html?raw';

// ================================================
// INJECT HTML COMPONENTS
// ================================================
document.getElementById('nav-root').innerHTML = navHtml;
document.getElementById('home-root').innerHTML = homeHtml;
document.getElementById('projects-root').innerHTML = projectsHtml;
document.getElementById('contact-root').innerHTML = contactHtml;
document.getElementById('footer-root').innerHTML = footerHtml;

// ================================================
// HERO TEXT ANIMATIONS
// ================================================

// H1 — Split into characters for wave reveal
const heroWave = document.querySelector('.hero-wave');
if (heroWave) {
  const text = heroWave.textContent.trim();
  heroWave.innerHTML = '';
  heroWave.style.perspective = '600px';

  let charIndex = 0;
  for (const char of text) {
    if (char === ' ') {
      const space = document.createElement('span');
      space.className = 'char-space';
      heroWave.appendChild(space);
    } else {
      const span = document.createElement('span');
      span.className = 'char';
      span.textContent = char;
      // Stagger: 50ms per character for smooth wave
      span.style.animationDelay = `${0.1 + charIndex * 0.05}s`;
      heroWave.appendChild(span);
      charIndex++;
    }
  }
}

// H2 — Trigger gradient flow animation
const heroGradient = document.querySelector('.hero-gradient');
if (heroGradient) {
  // Small delay so it starts after the H1 wave begins
  requestAnimationFrame(() => {
    heroGradient.classList.add('animate-in');
  });
}

// ================================================
// SCROLL REVEAL OBSERVER
// ================================================
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  },
  { threshold: 0.1 }
);

revealElements.forEach((el) => revealObserver.observe(el));

// ================================================
// BENTO CARD MOUSE GLOW TRACKING
// ================================================
const bentoCards = document.querySelectorAll('.bento-card');
bentoCards.forEach((card) => {
  card.addEventListener('mousemove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty('--mouse-x', `${x}px`);
    card.style.setProperty('--mouse-y', `${y}px`);
  });
});

// ================================================
// MOBILE HAMBURGER MENU
// ================================================
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mobileNav = document.getElementById('mobileNav');
const mobileNavBackdrop = document.getElementById('mobileNavBackdrop');
const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

function toggleMobileNav() {
  const isOpen = mobileNav.classList.toggle('open');
  hamburgerBtn.classList.toggle('active');
  hamburgerBtn.setAttribute('aria-expanded', isOpen);
  document.body.style.overflow = isOpen ? 'hidden' : '';
}

hamburgerBtn.addEventListener('click', toggleMobileNav);
mobileNavBackdrop.addEventListener('click', toggleMobileNav);

// Close on link click
mobileNavLinks.forEach((link) => {
  link.addEventListener('click', () => {
    if (mobileNav.classList.contains('open')) {
      toggleMobileNav();
    }
  });
});

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileNav.classList.contains('open')) {
    toggleMobileNav();
  }
});
