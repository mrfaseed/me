import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import useSEO from '../hooks/useSEO';

const NotFound = () => {
  useSEO({
    title: "404 - Page Not Found",
    description: "The page you are looking for has drifted into an unknown sector of cyberspace.",
    url: "https://mohamedfaseed.vercel.app/404"
  });

  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div 
      className="min-h-screen bg-[#0a0a0c] flex flex-col items-center justify-center relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background Glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[100px] opacity-50 mix-blend-screen" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-purple-500/10 rounded-full blur-[80px] opacity-40 mix-blend-screen" />
      </div>

      <div className="z-10 flex flex-col items-center text-center px-6">
        <motion.h1 
          className="text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 mb-6"
          initial={{ y: 50, filter: 'blur(10px)' }}
          animate={{ y: 0, filter: 'blur(0px)' }}
          transition={{ type: 'spring', stiffness: 100, delay: 0.1 }}
        >
          404
        </motion.h1>
        
        <motion.h2 
          className="text-2xl md:text-3xl font-medium text-white mb-4"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          Signal Lost in the Void
        </motion.h2>
        
        <motion.p 
          className="text-gray-400 max-w-md mb-10"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          The page you're looking for has drifted into an unknown sector of cyberspace.
        </motion.p>
        
        <motion.button
          onClick={() => navigate('/')}
          className="group relative px-8 py-4 bg-white/5 border border-white/10 rounded-full text-white font-medium overflow-hidden transition-all hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(34,211,238,0.2)]"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <span className="relative z-10 flex items-center gap-2">
            <span className="material-symbols-rounded text-lg">home</span>
            Return to Base
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 translate-y-[100%] group-hover:translate-y-[0%] transition-transform duration-300" />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default NotFound;
