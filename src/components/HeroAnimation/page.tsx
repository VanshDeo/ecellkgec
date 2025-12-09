import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Logo } from "@/utils/data/Image/Logo";

const HeroAnimation: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // Initial check
    checkIfMobile();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkIfMobile);
    
    // Cleanup
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const text = "KGEC E-CELL".split("");
  const divVariants = (targetWidth: string) => ({
    initial: { width: "100%" },
    animate: {
      width: targetWidth,
      transition: {
        duration: 1.5,
        ease: [0.6, 0.05, -0.01, 0.95], // Elastic easing
        delay: 1.3,
      },
    },
  });

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "nearest",
      });
    }
  };

  // Mobile UI Component with 3 white boxes (1/3 width each) with different heights
  const MobileHeroUI = () => {
    const containerVariants = {
      hidden: { opacity: 0 },
      visible: { 
        opacity: 1,
        transition: { 
          when: "beforeChildren",
          staggerChildren: 0.2,
          duration: 0.6
        }
      }
    };
    
    // Animation for white boxes sliding up from bottom with different delays
    const boxVariants = {
      hidden: { y: 300, opacity: 0 },
      visible: (custom: number) => ({
        y: 0,
        opacity: 1,
        transition: {
          delay: custom * 0.25,
          duration: 0.8,
          ease: "easeOut"
        }
      })
    };

    // Content animations (fade in after boxes)
    const contentVariants = {
      hidden: { opacity: 0, y: 20 },
      visible: (custom: number) => ({
        opacity: 1,
        y: 0,
        transition: {
          delay: 1.2 + (custom * 0.2),
          duration: 0.5,
          ease: "easeOut"
        }
      })
    };

    return (
      <motion.div 
        className="z-20 absolute top-0 right-0 w-full h-full bg-transparent overflow-hidden"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Content layer (on top of white boxes) - Removed spacing between elements */}
        <motion.div className="absolute z-30 w-full h-full flex flex-col items-center justify-evenly py-4 pointer-events-none">
          {/* Logo - Bigger and perfectly centered */}
          <motion.div
            className="pointer-events-auto absolute top-[30%] transform -translate-x-1/2 -translate-y-1/2 z-40 drop-shadow-xl"
            variants={contentVariants}
            custom={0}
          >
            <Image
              src={Logo}
              alt="KGEC E-Cell Logo"
              width={200}
              height={200}
              className="mx-auto filter brightness-105"
              priority
            />
          </motion.div>

          {/* Content container repositioned to make room for centered logo */}
          <div className="flex flex-col items-center justify-end h-full w-full pb-12">
            {/* Welcome Text - Positioned lower */}
            <motion.div
              className="text-center mb-1"
              variants={contentVariants}
              custom={1}
            >
              <h2 className="text-lg font-medium text-gray-800">Welcome To</h2>
              <div className="text-3xl font-bold mt-0 text-gray-700 tracking-wide">KGEC E-CELL</div>
            </motion.div>

            {/* Description and Button - Reduced spacing */}
            <motion.div
              className="flex flex-col items-center"
              variants={contentVariants}
              custom={2}
            >
              <p className="text-sm text-center w-[90%] mb-3 text-gray-700">
                KGEC E-Cell fosters entrepreneurship, innovation, and leadership among students. It provides mentorship, workshops, and networking opportunities to nurture startup ideas.
              </p>
              
              <motion.button
                onClick={handleScrollToAbout}
                className="px-5 py-1.5 text-base border-2 border-gray-500 bg-gray-700 text-white cursor-pointer font-bold rounded-md transition-all duration-300 ease-in-out pointer-events-auto"
                whileHover={{
                  scale: 1.05,
                }}
                whileTap={{ scale: 0.95 }}
              >
                Read More
              </motion.button>
            </motion.div>
          </div>
        </motion.div>

        {/* 3 white boxes with adjusted heights for tighter spacing */}
        <div className="absolute left-0 top-0 w-full h-full flex flex-row">
          {/* Left white box - increased height */}
          <motion.div
            className="h-[100%] w-1/2 bg-white absolute bottom-0 left-0 text-gray-700 font-montserrat"
            custom={1}
            variants={boxVariants}
          />
          
          {/* Middle white box - increased height */}
          <motion.div
            className="h-[60%] w-1/3 bg-white absolute bottom-0 left-1/3 text-gray-700 font-montserrat"
            custom={2}
            variants={boxVariants}
          />
          
          {/* Right white box - increased height */}
          <motion.div
            className="h-[40%] w-1/3 bg-white absolute bottom-0 left-2/3 text-gray-700 font-montserrat"
            custom={3}
            variants={boxVariants}
          />
        </div>
      </motion.div>
    );
  };

  // Return mobile UI or desktop UI based on screen width
  return isMobile ? (
    <MobileHeroUI />
  ) : (
    <div className="z-20 absolute top-0 right-0 w-full h-full flex flex-col justify-center items-start">
      <motion.div
        className="bg-white h-full flex flex-col justify-end items-start pl-[3rem]"
        variants={divVariants("40%")}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="lg:text-4xl md:text-2xl text-xl text-gray-800"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: "easeOut",
              delay: 3, // Delay for each text animation
            },
          }}
        >
          Welcome To
        </motion.div>
      </motion.div>
      <motion.div
        className="overflow-hidden bg-white h-full flex flex-col justify-center items-start pl-[3rem]"
        variants={divVariants("50%")}
        initial="initial"
        animate="animate"
      >
        <div className="2xl:text-[7rem] lg:text-[5rem] md:text-[4rem] font-bold font-sans flex space-x-[0.02rem]">
          {text.map((letter, index) => (
            <motion.span
              key={index}
              className={`inline-block text-gray-700 ${letter === " " ? "w-[1rem]" : ""} tracking-wide`}
              initial={{ opacity: 0, y: 40 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  duration: 0.2,
                  ease: "easeOut",
                  delay: index * 0.05 + 3, // Ripple effect (left to right)
                },
              }}
            >
              {letter === " " ? "\u00A0" : letter}
            </motion.span>
          ))}
        </div>
      </motion.div>
      <motion.div
        className="bg-white h-full flex flex-col justify-center items-start pl-[3rem]"
        variants={divVariants("60%")}
        initial="initial"
        animate="animate"
      >
        <motion.div
          className="w-[50vw] text-left lg:text-2xl md:text-xl flex flex-col justify-center items-start"
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              ease: "easeOut",
              delay: 3.5, // Delay for each text animation
            },
          }}
        >
          <p className="text-lg text-gray-700">
          KGEC E-Cell fosters entrepreneurship, innovation, and leadership among students. It provides mentorship, workshops, and networking opportunities to nurture startup ideas. With interactive events and expert guidance, it empowers students to transform creative concepts into successful ventures.
          </p>
        <motion.button
          onClick={handleScrollToAbout}
          className="mt-3 px-5 py-2.5 text-base border-2 border-gray-500 bg-gray-700 text-white cursor-pointer font-bold rounded-md transition-all duration-300 ease-in-out"
          whileHover={{
            scale: 1.1,
          }}
          whileTap={{
            scale: 0.95,
          }}
        >
          Read More
        </motion.button>
        </motion.div>
      
      </motion.div>
      <motion.div
          initial={{ y: "150%" }} // Start from bottom
          animate={{ y: 0 }} // End at default position
          transition={{
            type: "spring",
            damping: 25,
            delay: 1,
            duration: 1.2,
          }} // Customize the animation transition
          className="absolute right-[10%] z-[20] flex flex-col justify-center items-center"
        >
          <Image
            src={Logo}
            alt="Your Image"
            width={350}
            height={350}
            className="rounded-lg filter brightness-105"
          /></motion.div>
    </div>
  );
};

export default HeroAnimation;
