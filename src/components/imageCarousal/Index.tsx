"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image, { StaticImageData } from "next/image";

type ImageCarouselProps = {
  images: StaticImageData[];
};

export default function ImageCarousel({ images }: ImageCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [images.length]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? "100%" : "-100%",
    }),
    center: {
      x: 0,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? "-100%" : "100%",
    }),
  };

  return (
    <div className="relative flex flex-col justify-center items-center Image-carousel z-20 lg:z-[-1] w-full h-screen overflow-hidden">
      {/* Yellow overlay with darker tone */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-50/10 to-yellow-800/20 z-10"></div>

      {/* Triangle 1 - Top-left area - responsive scaling */}
      <motion.div
        className="absolute top-[15%] left-[8%] sm:top-20 sm:left-[10%] z-10 rotate-45 scale-[0.5] xs:scale-[0.6] sm:scale-[0.8] md:scale-90 lg:scale-100"
        initial={{ opacity: 0, y: -20 }}
        animate={{
          opacity: 0.6,
          y: 0,
          transition: {
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3,
              ease: "easeInOut",
            },
          },
        }}
        transition={{ delay: 3, duration: 1 }}
      >
        <div
          className="w-0 h-0 
                   border-l-[180px] border-l-amber-500/50
                   border-t-[120px] border-t-transparent
                   border-b-[120px] border-b-transparent"
        />
      </motion.div>

      {/* Triangle 2 - Upper-right area */}
      <motion.div
        className="absolute top-[8%] right-[18%] z-10 rotate-[-15deg]"
        initial={{ opacity: 0, y: 20 }}
        animate={{
          opacity: 0.4,
          y: 0,
          transition: {
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4,
              ease: "easeInOut",
              delay: 0.5,
            },
          },
        }}
        transition={{ delay: 3.2, duration: 1 }}
      >
        <div
          className="w-0 h-0 
                   border-l-[100px] border-l-yellow-600/40
                   border-t-[70px] border-t-transparent
                   border-b-[70px] border-b-transparent"
        />
      </motion.div>

      {/* Triangle 3 - Center-left */}
      <motion.div
        className="absolute top-[40%] left-[15%] z-10 rotate-[-60deg]"
        initial={{ opacity: 0, y: -10 }}
        animate={{
          opacity: 0.3,
          y: 0,
          transition: {
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 5,
              ease: "easeInOut",
              delay: 1,
            },
          },
        }}
        transition={{ delay: 3.4, duration: 1 }}
      >
        <div
          className="w-0 h-0 
                   border-l-[80px] border-l-amber-700/30
                   border-t-[60px] border-t-transparent
                   border-b-[60px] border-b-transparent"
        />
      </motion.div>

      {/* Triangle 5 - Bottom-center */}
      <motion.div
        className="absolute bottom-[20%] left-[40%] z-10 rotate-[15deg]"
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: 0.35,
          x: 0,
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 5.5,
              ease: "easeInOut",
            },
          },
        }}
        transition={{ delay: 3.8, duration: 1 }}
      >
        <div
          className="w-0 h-0 
                   border-l-[90px] border-l-amber-600/30
                   border-t-[65px] border-t-transparent
                   border-b-[65px] border-b-transparent"
        />
      </motion.div>

      {/* Triangle 6 - Middle-right */}
      <motion.div
        className="absolute top-[35%] right-[12%] z-10 rotate-[-45deg]"
        initial={{ opacity: 0, y: 25 }}
        animate={{
          opacity: 0.45,
          y: 0,
          transition: {
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3.7,
              ease: "easeInOut",
              delay: 0.7,
            },
          },
        }}
        transition={{ delay: 4, duration: 1 }}
      >
        <div
          className="w-0 h-0 
                   border-l-[110px] border-l-yellow-500/35
                   border-t-[75px] border-t-transparent
                   border-b-[75px] border-b-transparent"
        />
      </motion.div>

      {/* Triangle 7 - Center right, small */}
      <motion.div
        className="absolute top-[55%] right-[30%] z-10 rotate-[30deg]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 0.25,
          scale: 1,
          transition: {
            scale: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 6,
              ease: "easeInOut",
              delay: 1.2,
            },
          },
        }}
        transition={{ delay: 4.2, duration: 1 }}
      >
        <div
          className="w-0 h-0 
                   border-l-[60px] border-l-amber-800/25
                   border-t-[45px] border-t-transparent
                   border-b-[45px] border-b-transparent"
        />
      </motion.div>

      {/* Triangle 8 - Bottom left - adjusted positioning */}
      <motion.div
        className="absolute bottom-[15%] left-[12%] z-10 rotate-[120deg]"
        initial={{ opacity: 0, x: -10 }}
        animate={{
          opacity: 0.3,
          x: 0,
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 5.2,
              ease: "easeInOut",
              delay: 0.9,
            },
          },
        }}
        transition={{ delay: 4.4, duration: 1 }}
      >
        <div
          className="w-0 h-0 
                   border-l-[50px] border-l-amber-400/30
                   border-t-[40px] border-t-transparent
                   border-b-[40px] border-b-transparent"
        />
      </motion.div>

      {/* New triangle - Bottom left corner, pointing right */}
      <motion.div
        className="absolute bottom-[8%] left-[25%] z-10 rotate-[15deg]"
        initial={{ opacity: 0, y: 15 }}
        animate={{
          opacity: 0.45,
          y: 0,
          transition: {
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4.3,
              ease: "easeInOut",
              delay: 1.1,
            },
          },
        }}
        transition={{ delay: 4.9, duration: 1 }}
      >
        <div
          className="w-0 h-0 
                   border-l-[70px] border-l-yellow-500/40
                   border-t-[50px] border-t-transparent
                   border-b-[50px] border-b-transparent"
        />
      </motion.div>

      {/* New triangle - Bottom left area, smaller, pointing down */}
      <motion.div
        className="absolute bottom-[30%] left-[5%] z-10 rotate-[-75deg]"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: 0.35,
          scale: 1,
          transition: {
            scale: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 5.5,
              ease: "easeInOut",
              delay: 0.8,
            },
          },
        }}
        transition={{ delay: 5.1, duration: 1 }}
      >
        <div
          className="w-0 h-0 
                   border-l-[40px] border-l-amber-600/35
                   border-t-[35px] border-t-transparent
                   border-b-[35px] border-b-transparent"
        />
      </motion.div>

      {/* New triangle - Bottom left area, medium size, pointing up */}
      <motion.div
        className="absolute bottom-[45%] left-[20%] z-10 rotate-[60deg]"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: 0.4,
          y: 0,
          transition: {
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4,
              ease: "easeInOut",
              delay: 1.3,
            },
          },
        }}
        transition={{ delay: 5.3, duration: 1 }}
      >
        <div
          className="w-0 h-0 
                   border-l-[65px] border-l-yellow-600/30
                   border-t-[50px] border-t-transparent
                   border-b-[50px] border-b-transparent"
        />
      </motion.div>

      {/* Triangle 9 - Bottom right */}
      <motion.div
        className="absolute bottom-[25%] right-[15%] z-10 rotate-[150deg]"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: 0.4,
          scale: 1,
          transition: {
            scale: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4.8,
              ease: "easeInOut",
              delay: 1.5,
            },
          },
        }}
        transition={{ delay: 4.6, duration: 1 }}
      >
        <div
          className="w-0 h-0 
                   border-l-[70px] border-l-yellow-700/35
                   border-t-[55px] border-t-transparent
                   border-b-[55px] border-b-transparent"
        />
      </motion.div>

      {/* Triangle 10 - Dead center, small */}
      <motion.div
        className="absolute top-[45%] left-[48%] -translate-x-1/2 -translate-y-1/2 z-10 rotate-[75deg]"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 0.35,
          scale: 1,
          transition: {
            scale: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 5,
              ease: "easeInOut",
              delay: 0.3,
            },
          },
        }}
        transition={{ delay: 4.8, duration: 1 }}
      >
        <div
          className="w-0 h-0 
                   border-l-[40px] border-l-amber-300/40
                   border-t-[30px] border-t-transparent
                   border-b-[30px] border-b-transparent"
        />
      </motion.div>

      {/* New Triangle - Top right corner */}
      <motion.div
        className="absolute top-[12%] right-[5%] z-10 rotate-[-60deg]"
        initial={{ opacity: 0, scale: 0.7 }}
        animate={{
          opacity: 0.5,
          scale: 1,
          transition: {
            scale: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4.2,
              ease: "easeInOut",
              delay: 0.5,
            },
          },
        }}
        transition={{ delay: 3.5, duration: 1 }}
      >
        <div
          className="w-0 h-0 
                   border-l-[85px] border-l-amber-500/40
                   border-t-[60px] border-t-transparent
                   border-b-[60px] border-b-transparent"
        />
      </motion.div>

      {/* New Triangle - Upper right area */}
      <motion.div
        className="absolute top-[28%] right-[22%] z-10 rotate-[45deg]"
        initial={{ opacity: 0, y: -15 }}
        animate={{
          opacity: 0.35,
          y: 0,
          transition: {
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 5.3,
              ease: "easeInOut",
              delay: 1.2,
            },
          },
        }}
        transition={{ delay: 4.1, duration: 1 }}
      >
        <div
          className="w-0 h-0 
                   border-l-[70px] border-l-yellow-600/35
                   border-t-[50px] border-t-transparent
                   border-b-[50px] border-b-transparent"
        />
      </motion.div>

      {/* New Triangle - Middle right area */}
      <motion.div
        className="absolute top-[65%] right-[8%] z-10 rotate-[15deg]"
        initial={{ opacity: 0, x: 20 }}
        animate={{
          opacity: 0.4,
          x: 0,
          transition: {
            x: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 4.5,
              ease: "easeInOut",
              delay: 0.8,
            },
          },
        }}
        transition={{ delay: 3.9, duration: 1 }}
      >
        <div
          className="w-0 h-0 
                   border-l-[95px] border-l-amber-600/30
                   border-t-[65px] border-t-transparent
                   border-b-[65px] border-b-transparent"
        />
      </motion.div>

      {/* New Triangle - Lower right area */}
      <motion.div
        className="absolute bottom-[38%] right-[18%] z-10 rotate-[-105deg]"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{
          opacity: 0.45,
          scale: 1,
          transition: {
            scale: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 5.8,
              ease: "easeInOut",
              delay: 1.1,
            },
          },
        }}
        transition={{ delay: 4.3, duration: 1 }}
      >
        <div
          className="w-0 h-0 
                   border-l-[60px] border-l-yellow-500/45
                   border-t-[45px] border-t-transparent
                   border-b-[45px] border-b-transparent"
        />
      </motion.div>

      {/* New Triangle - Bottom right corner */}
      <motion.div
        className="absolute bottom-[5%] right-[25%] z-10 rotate-[210deg]"
        initial={{ opacity: 0, y: 15 }}
        animate={{
          opacity: 0.5,
          y: 0,
          transition: {
            y: {
              repeat: Infinity,
              repeatType: "reverse",
              duration: 3.9,
              ease: "easeInOut",
              delay: 0.7,
            },
          },
        }}
        transition={{ delay: 3.7, duration: 1 }}
      >
        <div
          className="w-0 h-0 
                   border-l-[75px] border-l-amber-400/40
                   border-t-[55px] border-t-transparent
                   border-b-[55px] border-b-transparent"
        />
      </motion.div>

      <AnimatePresence initial={false} custom={1}>
        <motion.div
          key={currentIndex}
          custom={1}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "tween", duration: 0.5 },
          }}
          className="absolute w-full h-full"
        >
          <Image
            src={images[currentIndex]}
            alt={`Slide ${currentIndex + 1}`}
            layout="fill"
            objectFit="cover"
            priority
            className="w-full"
          />
          {/* Additional darker overlay for images */}
          <div className="absolute inset-0 bg-black opacity-30 z-[1]"></div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
