"use client";
import { AboutText, AboutHead } from "@/utils/data/About";
import { motion } from "framer-motion";

interface AboutProps {
  Head?: string;
  Text?: string;
}

export default function EgnitionAbout({ Head, Text }: AboutProps) {
  return (
    <div className="w-full flex flex-col justify-center items-center py-24 bg-white" id="egnition-about">
      <motion.div 
        className="w-[4px] h-[100px] bg-gradient-to-b from-[#F7931E] to-yellow-500 hidden sm:block"
        initial={{ height: 0 }}
        whileInView={{ height: 100 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      />
      
      <motion.div 
        className="text-5xl font-bold font-sans bg-gradient-to-r from-[#F7931E] to-yellow-600 bg-clip-text text-transparent py-3 mt-6"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        {Head || AboutHead}
      </motion.div>
      
      <motion.div 
        className="max-w-4xl mx-auto text-gray-700 w-4/5 text-center text-lg md:text-xl font-sans leading-relaxed mt-8"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        viewport={{ once: true }}
      >
        {Text || AboutText}
      </motion.div>
      
      <motion.div 
        className="flex gap-6 mt-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.button
          className="px-8 py-3 bg-[#F7931E] text-white font-semibold rounded-lg shadow-lg hover:bg-[#e6851c] transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Learn More
        </motion.button>
        
        <motion.button
          className="px-8 py-3 border-2 border-[#F7931E] text-[#F7931E] font-semibold rounded-lg hover:bg-[#F7931E]/10 transition-all duration-300"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          Register Now
        </motion.button>
      </motion.div>
    </div>
  );
}