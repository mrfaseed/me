import React from 'react';

const Footer = () => {
  return (
    <footer className="border-t border-white/5 mt-12 py-10 bg-black/50">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-textMuted text-sm">© 2024 Faseed. Crafted with passion.</p>
        <div className="flex gap-6 text-sm font-medium text-textMuted">
          <a href="https://github.com/mrfaseed" className="hover:text-white transition-colors">GitHub</a>
          <a href="https://www.linkedin.com/in/mohamedfaseed/" className="hover:text-white transition-colors">LinkedIn</a>
          <a href="https://x.com/mrfaseed" className="hover:text-white transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
