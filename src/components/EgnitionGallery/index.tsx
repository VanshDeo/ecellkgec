"use client"; 

import Image from "next/image";
import { galleryItems } from "@/utils/data/GalleryItems";
import { useState } from "react";
import { motion } from "framer-motion";

const EgnitionGallery = () => {
  const imagesToShow = galleryItems.slice(0, 6);
  const [hoveredImage, setHoveredImage] = useState<number | null>(null);

  return (
    <div className="w-full flex gap-[2rem] flex-col justify-center items-center py-20 bg-gradient-to-b from-gray-100 to-gray-200">
      <div className="text-center mb-10">
        <motion.h2 
          className="text-center text-5xl font-bold relative text-[#F7931E]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          GALLERY
        </motion.h2>
        <motion.div 
          className="w-24 h-1 bg-gradient-to-r from-[#F7931E] to-yellow-500 mx-auto mt-3 rounded-full"
          initial={{ width: 0 }}
          whileInView={{ width: 96 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        />
      </div>
      
      <motion.div 
        className="w-full max-w-7xl px-4 h-fit grid gap-4 md:gap-6 grid-cols-2 lg:grid-cols-4 grid-rows-auto"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8, staggerChildren: 0.1 }}
        viewport={{ once: true, margin: "-100px" }}
      >
        {imagesToShow.map((image) => (
          <motion.div
            key={image.id}
            className={`w-full h-full relative overflow-hidden rounded-xl ${
              image.id === 3 || image.id === 4
                ? "col-span-2 row-span-2"
                : "col-span-1 row-span-1"
            }`}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            onMouseEnter={() => setHoveredImage(image.id)}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className="w-full h-full aspect-square md:aspect-auto">
              <Image
                alt="gallery image"
                src={image.imageNew}
                width={800}
                height={800}
                className={`w-full h-full rounded-lg object-cover transition-transform duration-700 ${
                  hoveredImage === image.id ? "scale-110" : "scale-100"
                }`}
              />
            </div>
            
            {/* Overlay effect on hover */}
            <div 
              className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end justify-start p-4 transition-opacity duration-300 ${
                hoveredImage === image.id ? "opacity-100" : "opacity-0"
              }`}
            >
              <div className="text-white">
                <h3 className="text-lg font-bold">Egnition {image.id}</h3>
                <p className="text-sm text-gray-300">Entrepreneurial moments captured</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
      
      <motion.button
        className="mt-8 px-8 py-3 bg-[#F7931E] text-white font-semibold rounded-lg shadow-lg hover:bg-[#e6851c] transition-all duration-300"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        viewport={{ once: true }}
      >
        View Full Gallery
      </motion.button>
    </div>
  );
};

export default EgnitionGallery;
