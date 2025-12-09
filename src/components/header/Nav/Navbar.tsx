"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import NavLink from './Navlink';
import BurgerButton from './BurgerButton';
import { motion, AnimatePresence } from 'framer-motion';

const links = [
  { url: '/', title: 'Home' },
  { url: '/about', title: 'About' },
  { url: '/Egnition', title: 'Egnition' },
  { url: '/esummit', title: 'E-Summit' },
  { url: '/Lumora', title: 'Lumora' },
  { url: '/teams', title: 'Team' },
  { url: '/contact', title: 'Contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const pathname = usePathname();
  
  // Check if we're on a special page that needs a different navbar style
  const specialPaths = ['/egnition', '/esummit', '/teams'];
  const isSpecialPage = specialPaths.some(path => pathname.toLowerCase().includes(path));
  
  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  // Close mobile menu when changing routes
  useEffect(() => {
    setIsBurgerOpen(false);
  }, [pathname]);
  
  const toggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };
  
  // Dynamic styling based on page context and scroll state
  const navbarBg = isScrolled
    ? isSpecialPage
      ? 'bg-white/90 backdrop-blur-md shadow-md'
      : 'bg-slate-900/90 backdrop-blur-md shadow-md'
    : 'bg-transparent';
  
  // Fix text color logic to ensure black text on white backgrounds
  // and ensure burger button is visible in all sections
  const textColor = isSpecialPage 
    ? 'black' 
    : 'white';  // Simplified since both conditions lead to 'white'

  // Mobile menu animation variants
  const mobileMenuVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.4, 
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05
      }
    },
    exit: { 
      opacity: 0, 
      y: -10,
      transition: { 
        duration: 0.3,
        ease: [0.22, 1, 0.36, 1],
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -10 }
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBg}`}>
      <div className="container mx-auto px-4 py-3">
        <nav className="flex justify-between items-center">
          <Link href="/" className="text-xl font-bold flex items-center transition-transform hover:scale-105 duration-300">
            <img 
              src="/logo.png" 
              alt="E-Cell Logo" 
              className="h-10 w-auto mr-2" 
            />
            <span className={textColor === 'black' ? 'text-slate-800' : 'text-white'}>
              E-Cell IIT Roorkee
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-1">
            {links.map((link) => (
              <NavLink 
                key={link.url} 
                link={link} 
                color={textColor}
              />
            ))}
          </div>
          
          {/* Burger Menu Button - Ensure always visible with proper styling */}
          <div className="relative md:hidden z-50">
            <BurgerButton 
              isOpen={isBurgerOpen} 
              onClick={toggleBurger} 
              color={textColor}
            />
          </div>
          
          {/* Mobile Menu */}
          <AnimatePresence>
            {isBurgerOpen && (
              <motion.div
                variants={mobileMenuVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className={`fixed inset-0 top-16 z-40 ${isSpecialPage ? 'bg-white' : 'bg-slate-900'} flex flex-col items-center pt-10`}
              >
                {links.map((link, index) => (
                  <motion.div 
                    key={link.url} 
                    className="my-3 w-full text-center"
                    variants={menuItemVariants}
                    custom={index}
                  >
                    {/* Explicitly set color based on the background */}
                    <NavLink 
                      link={link} 
                      color={isSpecialPage ? "black" : "white"}
                      isBurgerOpen={isBurgerOpen}
                      onBurgerClick={toggleBurger}
                    />
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
