import React from 'react';
import { motion } from 'framer-motion';

const CodeskyLogo: React.FC = () => (
  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-gray-200">
    <path d="M12 2L2 7V17L12 22L22 17V7L12 2Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M2 7L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M12 22V12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M22 7L12 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
    <path d="M17 4.5L7 9.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);


const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: 'spring', stiffness: 100 }
  }
};


const Header: React.FC = () => {
  return (
    <header className="absolute top-0 left-0 w-full p-4 sm:p-6 z-20">
      <motion.div
        className="container mx-auto flex items-center"
        variants={headerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div
          className="flex items-center gap-3"
          variants={itemVariants}
        >
          <CodeskyLogo />
          <span className="font-bold text-lg hidden sm:block text-gray-200">Codesky Tz Bot</span>
        </motion.div>
      </motion.div>
    </header>
  );
};

export default Header;
