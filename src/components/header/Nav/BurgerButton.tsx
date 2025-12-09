import React from 'react';
import { motion } from 'framer-motion';

interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  color?: string;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen, onClick, color = "black" }) => {
  // Ensure the button is visible with proper contrast regardless of background
  const textColor = color === "black" ? "bg-slate-800" : "bg-white";
  
  return (
    <button 
      onClick={onClick}
      className="flex flex-col justify-center items-center w-10 h-10 rounded-md focus:outline-none md:hidden z-50 relative"
      aria-label={isOpen ? "Close menu" : "Open menu"}
    >
      {/* Add a subtle background to ensure visibility on all backgrounds */}
      <span className="absolute inset-0 rounded-md bg-opacity-10 hover:bg-opacity-20 transition-all duration-300"></span>
      
      <motion.div
        className={`w-6 h-0.5 ${textColor} mb-1.5 rounded-full`}
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 8 : 0
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className={`w-6 h-0.5 ${textColor} mb-1.5 rounded-full`}
        animate={{
          opacity: isOpen ? 0 : 1
        }}
        transition={{ duration: 0.3 }}
      />
      <motion.div
        className={`w-6 h-0.5 ${textColor} rounded-full`}
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -8 : 0
        }}
        transition={{ duration: 0.3 }}
      />
    </button>
  );
};

export default BurgerButton;
