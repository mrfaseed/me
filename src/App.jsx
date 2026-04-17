import React, { useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Loader from './components/Loader.jsx';
import ProjectDetail from './components/ProjectDetail.jsx';
import Privacy from './components/PrivacyTerms.jsx';
import ScrollEnergy from './components/ScrollEnergy.jsx';


// ── Scroll-to-top on route change ──
const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

// ── Main portfolio layout (home page) ──
const PortfolioHome = ({ loading }) => {

  useEffect(() => {
    if (loading) return;

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

    return () => {
      revealElements.forEach((el) => revealObserver.unobserve(el));
    };
  }, [loading]);

  return (
    <>
      <Nav />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-24 relative overflow-hidden md:overflow-visible">
        <Home isLoaded={!loading} />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

const App = () => {

  // 🔥 check if user already saw loader
  const [loading, setLoading] = useState(() => {
    return !localStorage.getItem("hasVisited");
  });

  // when loader finishes → remember user
  const handleLoaderComplete = () => {
    localStorage.setItem("hasVisited", "true");
    setLoading(false);
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <ScrollEnergy />


      <Routes>

        {/* 🏠 HOME */}
        <Route
          path="/"
          element={
            loading ? (
              <Loader onComplete={handleLoaderComplete} />
            ) : (
              <PortfolioHome loading={loading} />
            )
          }
        />

        {/* 📄 PROJECT DETAIL */}
        <Route
          path="/project/:slug"
          element={
            <>
              <Nav />
              <ProjectDetail />
              <Footer />
            </>
          }
        />

        {/* 🔒 PRIVACY PAGE */}
        <Route
          path="/privacy-terms"
          element={
            <>
              <Nav />
              <Privacy />
              <Footer />
            </>
          }
        />

      </Routes>
    </BrowserRouter>
  );
};

export default App;