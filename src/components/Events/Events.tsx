"use client";

import Rounded from "@/components/roundedButton/Index";
import "./styles.css";
import { EventMainText, EventsKGEC } from "@/utils/data/Events";
import { motion } from "framer-motion";
import React, { useState } from "react";

const Events = () => {
  // Function to get the first 10 words from the text
  const getFirst10Words = (text: string) => {
    const words = text.split(" ");
    return words.slice(0, 40).join(" ") + (words.length > 60 ? "..." : "");
  };

  return (
    <section
      className="bg-black w-full py-[6rem] h-fit flex flex-col justify-center items-center"
      id="events"
    >
      {/* Section intro */}
      <motion.div
        initial={{ opacity: 0, y: 40 }} // Initial state (below and invisible)
        whileInView={{ opacity: 1, y: 0 }} // Animate when in view
        viewport={{ once: false, margin: "0px 0px -200px 0px" }} // Trigger when 150px is in view
        transition={{ duration: 0.5, ease: "easeOut" }} // Delay for staggered effect
        className="gap-[1rem] text-white flex flex-col justify-center items-center mb-8"
      >
        <div className="text-5xl font-bold font-sans text-[#F7931E]">
          EVENTS
        </div>
        <p className="w-[80%] font-thin text-center text-lg md:text-xl font-sans">
          {EventMainText}
        </p>
      </motion.div>

      {/* Event Cards */}
      <div className="w-[80%] h-fit flex flex-col md:flex-row justify-center gap-8">
        {EventsKGEC.map((event, index) => {
          const [showFullText, setShowFullText] = useState(false);
          const toggleText = () => setShowFullText(!showFullText);

          return (
            <motion.div
              key={index}
              className="flex flex-col gap-[1rem] justify-center items-center bg-[#171717] py-6 rounded-2xl shadow-[0_0_15px_3px] shadow-[#171717] w-full h-fit"
              initial={{ opacity: 0, y: 40 }} // Initial state (below and invisible)
              whileInView={{ opacity: 1, y: 0 }} // Animate when in view
              viewport={{ once: false, margin: "0px 0px -200px 0px" }} // Trigger when 150px is in view
              transition={{ duration: 0.5, ease: "easeOut" }} // Delay for staggered effect
            >
              <span className="text-2xl text-[#F7931E] font-semibold">
                {event.Name}
              </span>
              <span className="text-center font-thin text-white w-[95%] md:w-[90%]">
                {showFullText
                  ? event.TextContent
                  : getFirst10Words(event.TextContent)}

                {event.TextContent.split(" ").length > 60 && (
                  <button onClick={toggleText} className="read-more-button">
                    {showFullText ? "Read Less" : "Read More"}
                  </button>
                )}
              </span>

              {/* Button for redirection */}
              <a href={event.page}>
                <Rounded className="button-container">
                  <span className="relative z-10">Go To Event</span>
                </Rounded>
              </a>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Events;
