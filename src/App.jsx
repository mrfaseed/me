import React, { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

// Import loader styles if there's any global need, though loader is in loader.html originally.

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeLoader, setFadeLoader] = useState(false);

  useEffect(() => {
    // Reveal Observer Logic
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

    // Cleanup observer on unmount
    return () => {
        revealElements.forEach((el) => revealObserver.unobserve(el));
    };
  }, []); // Run on mount

  useEffect(() => {
    // Loader Logic port
    const timer1 = setTimeout(() => {
      setFadeLoader(true);
    }, 2300);

    const timer2 = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
    };
  }, []);

  return (
    <>
      {loading && (
        <div id="loader" className={`fixed inset-0 z-[100] bg-black flex items-center justify-center transition-opacity duration-700 ${fadeLoader ? 'opacity-0 pointer-events-none' : ''}`}>
             <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
        </div>
      )}
      
      <Nav />
      {/* Background elements are handled via tailwind classes on body, but we need the main wrapper */}
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-24 relative overflow-hidden md:overflow-visible">
        <Home />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
