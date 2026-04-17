import React, { useEffect, useState, Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import Loader from './components/Loader.jsx';
import ScrollEnergy from './components/ScrollEnergy.jsx';
import CustomCursor from './components/CustomCursor.jsx';
import NotFound from './components/NotFound.jsx';

import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import About from './components/About.jsx';
import Contact from './components/Contact.jsx';
import CommandPalette from './components/CommandPalette.jsx';

// Lazy loaded components for performance (only for separate routes)
const ProjectDetail = lazy(() => import('./components/ProjectDetail.jsx'));
const Privacy = lazy(() => import('./components/PrivacyTerms.jsx'));

// ── Smart Scroll-to-Hash / Top on route change ──
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Small timeout to ensure DOM is rendered (especially with Suspense)
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);

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

// Animated route wrapper
const AnimatedRoutes = ({ loading, handleLoaderComplete }) => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        {/* 🏠 HOME */}
        <Route
          path="/"
          element={
            loading ? (
              <Loader onComplete={handleLoaderComplete} />
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
              >
                <PortfolioHome loading={loading} />
              </motion.div>
            )
          }
        />

        {/* 📄 PROJECT DETAIL */}
        <Route
          path="/project/:slug"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Nav />
              <Suspense fallback={<div className="min-h-screen bg-[#0a0a0c]"></div>}>
                <ProjectDetail />
              </Suspense>
              <Footer />
            </motion.div>
          }
        />

        {/* 🔒 PRIVACY PAGE */}
        <Route
          path="/privacy-terms"
          element={
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
            >
              <Nav />
              <Suspense fallback={<div className="min-h-screen bg-[#0a0a0c]"></div>}>
                <Privacy />
              </Suspense>
              <Footer />
            </motion.div>
          }
        />

        {/* ❌ 404 NOT FOUND */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
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
      <ScrollManager />
      <ScrollEnergy />
      <CustomCursor />
      <CommandPalette />
      
      <AnimatedRoutes loading={loading} handleLoaderComplete={handleLoaderComplete} />
      
    </BrowserRouter>
  );
};

export default App;