import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import projectsData from '../data/projectsData.js';

const CommandPalette = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const inputRef = useRef(null);
  const navigate = useNavigate();

  // ── Keyboard Listeners to Open/Close ──
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
      if (e.key === 'Escape' && isOpen) {
        e.preventDefault();
        setIsOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen]);

  // ── Focus & Lock Scroll on Open ──
  useEffect(() => {
    if (isOpen) {
      setQuery('');
      setSelectedIndex(0);
      // Small timeout to allow render before focusing
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [isOpen]);

  // ── Define Actions ──
  const actions = [
    { id: 'home', title: 'Home', icon: 'home', section: 'Navigation', action: () => { navigate('/'); window.scrollTo(0,0); } },
    { id: 'projects', title: 'Work & Projects', icon: 'work', section: 'Navigation', action: () => { navigate('/#projects'); } },
    { id: 'about', title: 'About Me', icon: 'person', section: 'Navigation', action: () => { navigate('/#about'); } },
    { id: 'contact', title: 'Contact', icon: 'mail', section: 'Navigation', action: () => { navigate('/#contact'); } },
    
    // Quick Actions
    { id: 'copy-email', title: 'Copy Email Address', icon: 'content_copy', section: 'Actions', color: '#14b8a6', action: () => { navigator.clipboard.writeText('faseedmohamed6@gmail.com'); alert('Email copied to clipboard!'); } },
    { id: 'github', title: 'Open GitHub', icon: 'code', section: 'Actions', color: '#f8fafc', action: () => window.open('https://github.com/mrfaseed', '_blank') },
    { id: 'linkedin', title: 'Open LinkedIn', icon: 'work_history', section: 'Actions', color: '#3b82f6', action: () => window.open('https://linkedin.com/in/mrfaseed', '_blank') },

    // Dynamic Projects
    ...projectsData.map(p => ({
      id: `proj-${p.slug}`,
      title: p.title,
      icon: p.icon,
      section: 'Projects',
      color: p.color,
      action: () => { navigate(`/project/${p.slug}`); window.scrollTo(0,0); }
    }))
  ];

  // ── Filtering Logic ──
  const filteredActions = query === '' 
    ? actions 
    : actions.filter(action => action.title.toLowerCase().includes(query.toLowerCase()));

  // ── Keyboard Navigation (Up/Down/Enter) ──
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!isOpen) return;
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1) % filteredActions.length);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 + filteredActions.length) % filteredActions.length);
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredActions[selectedIndex]) {
          filteredActions[selectedIndex].action();
          setIsOpen(false);
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, filteredActions, selectedIndex]);

  // ── Auto-Scroll to Selected Item ──
  useEffect(() => {
    if (isOpen) {
      const selectedEl = document.getElementById(`palette-item-${selectedIndex}`);
      if (selectedEl) {
        selectedEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
      }
    }
  }, [selectedIndex, isOpen]);

  // ── Group by Section ──
  const groupedActions = filteredActions.reduce((acc, action) => {
    if (!acc[action.section]) acc[action.section] = [];
    acc[action.section].push(action);
    return acc;
  }, {});

  let globalIndex = 0; // Tracks absolute index for selection highlight

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div 
            className="fixed inset-0 bg-[#0a0a0c]/80 backdrop-blur-md z-[99998]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setIsOpen(false)}
          />

          {/* Palette Modal */}
          <div className="fixed inset-0 z-[99999] flex items-start justify-center pt-[10vh] md:pt-[15vh] px-4 pointer-events-none">
            <motion.div 
              className="w-full max-w-[600px] bg-[#0a0a0c] border border-white/[0.08] rounded-2xl shadow-[0_0_40px_rgba(0,0,0,0.8)] overflow-hidden pointer-events-auto flex flex-col"
              initial={{ opacity: 0, scale: 0.98, y: -20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: -10 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
            >
              
              {/* Search Header */}
              <div className="flex items-center px-4 md:px-6 py-4 border-b border-white/[0.06] bg-white/[0.02]">
                <span className="material-symbols-rounded text-gray-500 mr-3 text-2xl">search</span>
                <input
                  ref={inputRef}
                  type="text"
                  className="flex-1 bg-transparent border-none outline-none text-lg text-white placeholder-gray-500 w-full"
                  placeholder="Type a command or search..."
                  value={query}
                  onChange={(e) => {
                    setQuery(e.target.value);
                    setSelectedIndex(0);
                  }}
                />
                <div className="hidden md:flex items-center gap-2">
                  <kbd className="font-mono text-[10px] text-gray-400 bg-white/5 px-2 py-1 rounded border border-white/10">ESC</kbd>
                </div>
              </div>

              {/* Results Area */}
              <div className="max-h-[350px] overflow-y-auto p-2 scrollbar-hide">
                {filteredActions.length === 0 ? (
                  <div className="py-14 text-center flex flex-col items-center">
                    <span className="material-symbols-rounded text-4xl text-gray-600 mb-3">search_off</span>
                    <p className="text-gray-400 text-sm">No results found for <span className="text-white font-medium">"{query}"</span></p>
                  </div>
                ) : (
                  Object.keys(groupedActions).map((section) => (
                    <div key={section} className="mb-2 last:mb-0">
                      <div className="px-4 py-2 mt-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
                        {section}
                      </div>
                      
                      {groupedActions[section].map((action) => {
                        const currentIndex = globalIndex++;
                        const isSelected = currentIndex === selectedIndex;
                        
                        return (
                          <div
                            id={`palette-item-${currentIndex}`}
                            key={action.id}
                            className={`group flex items-center px-4 py-3 mx-2 my-1 rounded-xl cursor-pointer transition-colors duration-150 ${
                              isSelected 
                                ? 'bg-white/[0.06] border border-white/10' 
                                : 'bg-transparent border border-transparent hover:bg-white/[0.03]'
                            }`}
                            onMouseEnter={() => setSelectedIndex(currentIndex)}
                            onClick={() => {
                              action.action();
                              setIsOpen(false);
                            }}
                          >
                            {/* Icon */}
                            <div className={`flex items-center justify-center w-8 h-8 rounded-lg mr-4 transition-colors ${
                              isSelected ? 'bg-white/10' : 'bg-white/[0.03] group-hover:bg-white/5'
                            }`}>
                              <span 
                                className="material-symbols-rounded text-[18px]" 
                                style={{ color: isSelected ? (action.color || '#fff') : '#9ca3af' }}
                              >
                                {action.icon}
                              </span>
                            </div>
                            
                            {/* Title */}
                            <span className={`flex-1 text-sm font-medium transition-colors ${
                              isSelected ? 'text-white' : 'text-gray-400 group-hover:text-gray-200'
                            }`}>
                              {action.title}
                            </span>
                            
                            {/* Enter Indicator */}
                            {isSelected && (
                              <span className="hidden md:flex items-center text-[10px] text-gray-400 gap-1">
                                Enter <span className="material-symbols-rounded text-[14px]">keyboard_return</span>
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  ))
                )}
              </div>

              {/* Footer */}
              <div className="hidden md:flex items-center px-6 py-3 border-t border-white/[0.06] bg-white/[0.01] text-[10px] text-gray-500">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1"><kbd className="bg-white/5 px-1 py-0.5 rounded border border-white/10">↑</kbd><kbd className="bg-white/5 px-1 py-0.5 rounded border border-white/10">↓</kbd> Navigate</span>
                  <span className="flex items-center gap-1"><kbd className="bg-white/5 px-1 py-0.5 rounded border border-white/10">↵</kbd> Select</span>
                </div>
              </div>

            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CommandPalette;
