"use client";
import { motion } from "framer-motion";
import React from "react";
import EventCards from "../EsummitEventCards";

const EsummitEvents = () => {
  return (
    <section className="bg-gradient-to-b from-black to-gray-900 w-full pt-[6rem] pb-[4rem] h-fit flex flex-col justify-center items-center">
      {/* Section intro */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, margin: "0px 0px -200px 0px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="gap-[1.5rem] text-white flex flex-col justify-center items-center mb-12"
      >
        <div className="text-5xl md:text-6xl font-bold font-sans text-[#F7931E] relative">
          Events
          <span className="absolute -bottom-3 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-[#F7931E]"></span>
        </div>
        <p className="w-[80%] max-w-3xl font-light text-center text-lg md:text-xl font-sans text-gray-200 mt-4">
          With insights from successful founders and business leaders, E-Summit fosters an environment where innovation thrives, ideas take shape, and future entrepreneurs find the inspiration to embark on their startup journey.
        </p>
      </motion.div>

      {/* Event Cards */}
      <EventCards/>
    </section>
  );
};

export default EsummitEvents;
