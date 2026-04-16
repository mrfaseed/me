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
// CLEAR MOBILE MENU
// ================================================
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const bar1 = document.getElementById('bar-1');
const bar2 = document.getElementById('bar-2');
const bar3 = document.getElementById('bar-3');
const mobileLinks = document.querySelectorAll('.mobile-link');

function toggleMobileMenu() {
  if (!mobileMenu) return;
  const isHidden = mobileMenu.classList.contains('hidden');
  
  if (!isHidden) {
    // Close menu
    mobileMenu.classList.add('opacity-0', 'pointer-events-none');
    setTimeout(() => mobileMenu.classList.add('hidden'), 300);
    // Reset hamburger
    if (bar1) bar1.classList.remove('translate-y-2', 'rotate-45');
    if (bar2) bar2.classList.remove('opacity-0');
    if (bar3) bar3.classList.remove('-translate-y-2', '-rotate-45');
    document.body.style.overflow = '';
  } else {
    // Open menu
    mobileMenu.classList.remove('hidden');
    // small delay for transition to take effect
    requestAnimationFrame(() => {
        mobileMenu.classList.remove('opacity-0', 'pointer-events-none');
    });
    // Animate hamburger
    if (bar1) bar1.classList.add('translate-y-2', 'rotate-45');
    if (bar2) bar2.classList.add('opacity-0');
    if (bar3) bar3.classList.add('-translate-y-2', '-rotate-45');
    document.body.style.overflow = 'hidden';
  }
}

if (mobileBtn) {
  mobileBtn.addEventListener('click', toggleMobileMenu);
}

if (mobileLinks) {
  mobileLinks.forEach((link) => {
    link.addEventListener('click', () => {
      if (!mobileMenu.classList.contains('hidden')) {
        toggleMobileMenu();
      }
    });
  });
}

// Close on Escape key
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && mobileMenu && !mobileMenu.classList.contains('hidden')) {
    toggleMobileMenu();
  }
});

// ================================================
// GLOBAL LOADER (from loader.html)
// ================================================
window.addEventListener("load", () => {
  const loader = document.getElementById("loader");
  if (loader) {
    // 1) Implode Animation SVG (from loader.html)
    setTimeout(() => {
      loader.classList.add("hide");
    }, 2300);

    // 2) Fade out the entire loader background afterward (700ms after implode starts = 3000ms)
    setTimeout(() => {
      loader.classList.add("fade-out");
    }, 3000);
  }
});
