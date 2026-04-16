import React, { useEffect, useState } from 'react';
import Nav from './components/Nav.jsx';
import Home from './components/Home.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';
import Loader from './components/Loader.jsx';

const App = () => {
  const [loading, setLoading] = useState(true);

  // Start scroll-reveal observer only after loader exits
  // so the reveal animations play when the user actually sees the content
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
      {loading && <Loader onComplete={() => setLoading(false)} />}

      <Nav />
      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-24 relative overflow-hidden md:overflow-visible">
        <Home isLoaded={!loading} />
        <Projects />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
