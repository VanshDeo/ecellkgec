"use client";
import { motion } from "framer-motion";
import React from "react";
import EventCards from "../pastEventCards";

const PastEvents = () => {

  return (
    <section className="bg-black w-full pt-[6rem] h-fit flex flex-col justify-center items-center">
      {/* Section intro */}
      <motion.div
        initial={{ opacity: 0, y: 40 }} // Initial state (below and invisible)
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        viewport={{ once: false, margin: "0px 0px -200px 0px" }} // Trigger when 150px is in view
        transition={{ duration: 0.5, ease: "easeOut" }} // Delay for staggered effect
        className="gap-[1rem] text-white flex flex-col justify-center items-center mb-2"
      >
        <div className="text-5xl font-bold font-sans text-[#F7931E] uppercase">
          Past Events
        </div>
        <p className="w-[80%] font-thin text-center text-lg md:text-xl font-sans">
        From insightful panel discussions to hands-on workshops and high-energy pitch competitions, our past events have been a testament to innovation and entrepreneurial spirit. Each gathering has brought together industry leaders, aspiring entrepreneurs, and change-makers, fostering a culture of learning, networking, and groundbreaking ideas. Stay tuned as we continue to create more impactful experiences!
        </p>
      </motion.div>

      {/* Event Cards */}
      <EventCards/>
    </section>
  );
};

export default PastEvents;
