'use client';

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Hero from "@/components/Hero";
import Sponsers from "@/components/sponsors/Index";
import ScrollGallery from "@/components/horizontal-gallery/Index";
import Index from "@/components/preloader/page";
import MotoSection from "@/components/MotoSection/page";
import About from "@/components/About/About";
import Events from "@/components/Events/Events";
import Testimonials from "@/components/testimonials/Index";
import Speakers from "@/components/speakers/Index";
import StickyFooterContent from "@/components/StickyFooterContent";
import PreloadingpageCopy from "./preload/page";
import PastEvents from "@/components/pastEvents";

export default function Home() {
  const [isPreloadVisible, setIsPreloadVisible] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // First, allow the initial loading animation to play
    const loadingTimeout = setTimeout(() => {
      setIsLoading(false);
      
      // Then after loading animation completes, handle the preloader fade out
      const preloaderTimeout = setTimeout(() => {
        setIsPreloadVisible(false);
        document.body.style.overflow = 'auto';
        window.scrollTo(0, 0);
      }, 1000); // Delay after loading animation completes
      
      return () => clearTimeout(preloaderTimeout);
    }, 2000); // Shortened main loading time

    return () => {
      clearTimeout(loadingTimeout);
      document.body.style.overflow = 'auto';
    };
  }, []);

  return (
    <div className="w-full h-fit">
      {/* <AnimatePresence mode="wait">
        {isLoading && <Index />}
      </AnimatePresence> */}
      
      {isPreloadVisible && (
        <motion.div
          className="fixed z-50 w-full h-full bg-black"
          initial={{ opacity: 1 }}
          animate={{ opacity: isLoading ? 1 : 0 }}
          transition={{ 
            duration: 1, 
            ease: [0.22, 1, 0.36, 1], 
          }}
          onAnimationComplete={() => {
            if (!isLoading) setIsPreloadVisible(false);
          }}
        >
          <PreloadingpageCopy />
        </motion.div>
      )}

      {!isLoading && !isPreloadVisible && (
        <>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.8, 
              ease: [0.22, 1, 0.36, 1]
            }}
          >
            <Hero />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <About />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <MotoSection />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1] 
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Events />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <PastEvents />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Sponsers />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <ScrollGallery />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Testimonials />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <Speakers />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ 
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1]
            }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <StickyFooterContent />
          </motion.div>
        </>
      )}
    </div>
  );
}
