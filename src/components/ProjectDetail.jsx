import React, { useEffect, useRef, useState, useCallback } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import projectsData from '../data/projectsData.js';
import '../styles/projectDetail.css';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projectsData.find((p) => p.slug === slug);

  const heroRef = useRef(null);
  const containerRef = useRef(null);
  const [scrollY, setScrollY] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const [activeSection, setActiveSection] = useState(0);

  // ── Page enter animation ──
  useEffect(() => {
    window.scrollTo(0, 0);
    const timer = setTimeout(() => setIsLoaded(true), 100);
    return () => clearTimeout(timer);
  }, [slug]);

  // ── Scroll tracking for parallax & reveals ──
  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // ── Scroll-reveal observer ──
  useEffect(() => {
    const elements = document.querySelectorAll('.pd-reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('pd-visible');
          }
        });
      },
      { threshold: 0.15 }
    );
    elements.forEach((el) => observer.observe(el));
    return () => elements.forEach((el) => observer.unobserve(el));
  }, [isLoaded]);



  if (!project) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Project Not Found</h1>
          <button
            onClick={() => navigate('/')}
            className="px-6 py-3 bg-primary rounded-full text-white font-bold hover:shadow-lg transition-all"
          >
            Go Back Home
          </button>
        </div>
      </div>
    );
  }

  const heroParallax = scrollY * 0.4;
  const heroOpacity = Math.max(0, 1 - scrollY / 600);

  return (
    <div
      ref={containerRef}
      className={`pd-container ${isLoaded ? 'pd-loaded' : ''}`}
    >
      {/* ═══════ BACK BUTTON ═══════ */}
      <button
        onClick={() => navigate('/')}
        className="pd-back-btn"
        style={{ '--accent': project.color }}
      >
        <span className="material-symbols-rounded">arrow_back</span>
        <span>Back</span>
      </button>

      {/* ═══════ HERO SECTION ═══════ */}
      <section
        ref={heroRef}
        className="pd-hero"
        style={{
          '--accent': project.color,
          '--hero-bg': project.heroGradient,
        }}
      >
        {/* Parallax background layers */}
        <div
          className="pd-hero-bg"
          style={{ transform: `translateY(${heroParallax}px)`, opacity: heroOpacity }}
        >
          <div className="pd-hero-gradient"></div>
        </div>

        {/* Content wrapper */}
        <div className="pd-hero-content">
          <div className="pd-hero-badge">
            <span
              className="pd-hero-dot"
              style={{ background: project.color }}
            ></span>
            {project.projectType}
          </div>

          <h1 className="pd-hero-title">{project.title}</h1>
          <p className="pd-hero-tagline">{project.tagline}</p>

          {/* Meta chips */}
          <div className="pd-hero-meta">
            <div className="pd-meta-chip">
              <span className="material-symbols-rounded">calendar_month</span>
              {project.year}
            </div>
            <div className="pd-meta-chip">
              <span className="material-symbols-rounded">timer</span>
              {project.duration}
            </div>
            <div className="pd-meta-chip">
              <span className="material-symbols-rounded">group</span>
              {project.teamSize}
            </div>
            <div className="pd-meta-chip" style={{ color: project.color, borderColor: `${project.color}44` }}>
              <span className="material-symbols-rounded" style={{ color: project.color }}>
                {project.status === 'Live & In Use' ? 'radio_button_checked' : 'check_circle'}
              </span>
              {project.status}
            </div>
          </div>

          {/* Large rotating icon */}
          <div className="pd-hero-icon-wrap">
            <div
              className="pd-hero-icon"
              style={{
                '--glow': project.color,
              }}
            >
              <span className="material-symbols-rounded">{project.icon}</span>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="pd-scroll-indicator" style={{ opacity: heroOpacity }}>
          <span className="material-symbols-rounded">expand_more</span>
        </div>
      </section>

      {/* ═══════ MAIN CONTENT ═══════ */}
      <main className="pd-main" style={{ '--accent': project.color }}>

        {/* ── OVERVIEW ── */}
        <section className="pd-section pd-reveal pd-reveal-up">
          <div className="pd-section-label">
            <span className="material-symbols-rounded" style={{ color: project.color }}>info</span>
            Overview
          </div>
          <div className="pd-overview-card">
            <p className="pd-overview-text">{project.overview}</p>
            {project.client && (
              <div className="pd-client-badge">
                <span className="material-symbols-rounded">business</span>
                <span>
                  Built for{' '}
                  {project.clientUrl ? (
                    <a
                      href={project.clientUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ color: project.color }}
                    >
                      {project.client}
                    </a>
                  ) : (
                    <strong>{project.client}</strong>
                  )}
                </span>
              </div>
            )}
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="pd-section pd-reveal pd-reveal-up">
          <div className="pd-section-label">
            <span className="material-symbols-rounded" style={{ color: project.color }}>stars</span>
            Key Features
          </div>
          <div className="pd-features-grid">
            {project.features.map((feature, i) => (
              <div
                key={i}
                className="pd-feature-card pd-reveal pd-reveal-scale"
                style={{ '--delay': `${i * 0.1}s` }}
              >
                <div className="pd-feature-icon" style={{ '--accent': project.color }}>
                  <span className="material-symbols-rounded">{feature.icon}</span>
                </div>
                <h3 className="pd-feature-title">{feature.title}</h3>
                <p className="pd-feature-desc">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── TECH STACK ── */}
        <section className="pd-section pd-reveal pd-reveal-up">
          <div className="pd-section-label">
            <span className="material-symbols-rounded" style={{ color: project.color }}>code</span>
            Tech Stack
          </div>
          <div className="pd-tech-grid">
            {project.techStack.map((tech, i) => (
              <div
                key={i}
                className="pd-tech-card pd-reveal pd-reveal-left"
                style={{ '--delay': `${i * 0.12}s` }}
              >
                <div className="pd-tech-emoji">
                  <span className="material-symbols-rounded">{tech.icon}</span>
                </div>
                <div className="pd-tech-info">
                  <div className="pd-tech-header">
                    <h3 className="pd-tech-name">{tech.name}</h3>
                    <span className="pd-tech-role" style={{ color: project.color }}>{tech.role}</span>
                  </div>
                  <p className="pd-tech-desc">{tech.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── ARCHITECTURE ── */}
        <section className="pd-section pd-reveal pd-reveal-up">
          <div className="pd-section-label">
            <span className="material-symbols-rounded" style={{ color: project.color }}>account_tree</span>
            Architecture
          </div>
          <div className="pd-arch-card">
            <p className="pd-arch-desc">{project.architecture.description}</p>
            <div className="pd-arch-layers">
              {project.architecture.layers.map((layer, i) => (
                <div
                  key={i}
                  className="pd-arch-layer pd-reveal pd-reveal-right"
                  style={{
                    '--delay': `${i * 0.15}s`,
                    '--accent': project.color,
                  }}
                >
                  <div className="pd-arch-number" style={{ color: project.color }}>
                    {String(i + 1).padStart(2, '0')}
                  </div>
                  <div className="pd-arch-content">
                    <h4 className="pd-arch-name">{layer.name}</h4>
                    <p className="pd-arch-detail">{layer.detail}</p>
                  </div>
                  {i < project.architecture.layers.length - 1 && (
                    <div className="pd-arch-connector" style={{ background: project.color }}></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CHALLENGES ── */}
        <section className="pd-section pd-reveal pd-reveal-up">
          <div className="pd-section-label">
            <span className="material-symbols-rounded" style={{ color: project.color }}>psychology</span>
            Challenges & Solutions
          </div>
          <div className="pd-challenges-grid">
            {project.challenges.map((item, i) => (
              <div
                key={i}
                className="pd-challenge-card pd-reveal pd-reveal-scale"
                style={{ '--delay': `${i * 0.1}s`, '--accent': project.color }}
              >
                <div className="pd-challenge-problem">
                  <span className="material-symbols-rounded pd-challenge-icon pd-challenge-icon-problem">warning</span>
                  <div>
                    <span className="pd-challenge-label">Problem</span>
                    <p className="pd-challenge-text">{item.problem}</p>
                  </div>
                </div>
                <div className="pd-challenge-divider" style={{ background: `linear-gradient(to right, ${project.color}, transparent)` }}></div>
                <div className="pd-challenge-solution">
                  <span className="material-symbols-rounded pd-challenge-icon pd-challenge-icon-solution" style={{ color: project.color }}>lightbulb</span>
                  <div>
                    <span className="pd-challenge-label" style={{ color: project.color }}>Solution</span>
                    <p className="pd-challenge-text">{item.solution}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ── LEARNINGS ── */}
        <section className="pd-section pd-reveal pd-reveal-up">
          <div className="pd-section-label">
            <span className="material-symbols-rounded" style={{ color: project.color }}>school</span>
            What I Learned
          </div>
          <div className="pd-learnings-card">
            {project.learnings.map((learning, i) => (
              <div
                key={i}
                className="pd-learning-item pd-reveal pd-reveal-left"
                style={{ '--delay': `${i * 0.08}s` }}
              >
                <div className="pd-learning-bullet" style={{ background: project.color }}></div>
                <p>{learning}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── BOTTOM NAV ── */}
        <section className="pd-bottom-nav pd-reveal pd-reveal-up">
          <button
            onClick={() => navigate('/')}
            className="pd-bottom-back"
            style={{ '--accent': project.color }}
          >
            <span className="material-symbols-rounded">arrow_back</span>
            Back to Portfolio
          </button>

          {/* Navigate to next / prev project */}
          <div className="pd-project-nav">
            {projectsData.map((p, i) => (
              <button
                key={p.slug}
                onClick={() => {
                  if (p.slug === slug) {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  } else {
                    setIsLoaded(false);
                    setTimeout(() => {
                      navigate(`/project/${p.slug}`);
                      window.scrollTo(0, 0);
                    }, 300);
                  }
                }}
                className={`pd-project-nav-dot ${p.slug === slug ? 'active' : ''}`}
                style={{ '--dot-color': p.color }}
                title={p.title}
              >
                <span className="material-symbols-rounded">{p.icon}</span>
              </button>
            ))}
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectDetail;
