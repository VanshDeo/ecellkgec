"use client"
import { NextPage } from 'next';
import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
      duration: 0.5,
    },
  }),
};

const Egnetion: NextPage = () => {
  const timelineRef = useRef(null);
  const isTimelineRefInView = useInView(timelineRef, { once: true });
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });
  const eventsRef = useRef(null);
  const isEventsInView = useInView(eventsRef, { once: true });

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
      className="h-full bg-gradient-to-b from-[#0e0e0e] to-[#121212] text-white"
    >
      {/* Hero Section */}
      <div ref={heroRef} className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0e0e0e] z-10"></div>
          <div className="w-full h-full bg-[url('/images/egnetion-bg.jpg')] bg-cover bg-center opacity-30"></div>
        </div>
        
        <div className="container mx-auto px-6 z-10 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mb-8"
          >
            <span className="inline-block text-sm uppercase tracking-wider text-orange-400 font-semibold mb-2">E-Cell IIT Roorkee presents</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isHeroInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8 }}
            className="text-5xl sm:text-6xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-500 to-red-600"
          >
            Egnintion 2024
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-gray-200 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed mb-10"
          >
            The premier entrepreneurship summit bringing together innovators, visionaries, and changemakers to spark the next generation of world-changing ideas.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isHeroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6, duration: 0.6 }}
          >
            <a 
              href="#events" 
              className="inline-block bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium py-3 px-8 rounded-full hover:shadow-lg hover:shadow-orange-500/20 transition-all duration-300 mr-4"
            >
              Explore Events
            </a>
            <a 
              href="#register" 
              className="inline-block bg-transparent border border-orange-500 text-orange-400 font-medium py-3 px-8 rounded-full hover:bg-orange-500/10 transition-all duration-300"
            >
              Register Now
            </a>
          </motion.div>
        </div>
        
        <motion.div
          initial={{ opacity: 0 }}
          animate={isHeroInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        >
          <div className="animate-bounce flex flex-col items-center">
            <span className="text-sm text-gray-400 mb-2">Scroll down</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="text-orange-500">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 py-20">
        {/* Events Section */}
        <div id="events" ref={eventsRef} className="mb-32">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isEventsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm uppercase tracking-wider text-orange-400 font-semibold mb-3">What's happening</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Featured Events</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Engage in a series of exciting events designed to challenge your creativity, business acumen, and problem-solving abilities.
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: "fas fa-rocket",
                title: "Startup Pitch",
                desc: "Present your groundbreaking ideas to a panel of investors and industry experts for feedback and potential funding.",
                color: "from-orange-500 to-red-500"
              },
              {
                icon: "fas fa-lightbulb",
                title: "Innovation Challenge",
                desc: "Tackle real-world problems with creative solutions in this fast-paced, collaborative innovation marathon.",
                color: "from-blue-500 to-purple-500"
              },
              {
                icon: "fas fa-code",
                title: "Hackathon",
                desc: "Code your way to victory in our 36-hour coding challenge with amazing prizes and networking opportunities.",
                color: "from-green-500 to-teal-500"
              },
              {
                icon: "fas fa-brain",
                title: "Business Workshop",
                desc: "Learn essential entrepreneurship skills from industry leaders in these interactive, hands-on workshop sessions.",
                color: "from-yellow-500 to-amber-500"
              }
            ].map((event, index) => (
              <motion.div
                key={index}
                variants={fadeInAnimationVariants}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                custom={index}
                className="bg-[#1a1a1a] rounded-xl overflow-hidden hover:translate-y-[-8px] transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-orange-900/10 group"
              >
                <div className={`h-2 bg-gradient-to-r ${event.color}`}></div>
                <div className="p-8">
                  <div className={`text-4xl bg-gradient-to-r ${event.color} bg-clip-text text-transparent mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    <i className={event.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold mb-4">{event.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {event.desc}
                  </p>
                  <button className="mt-6 text-sm font-medium text-orange-400 flex items-center group-hover:text-orange-500">
                    Learn more
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Timeline Section */}
        <motion.div
          ref={timelineRef}
          initial={{ opacity: 0 }}
          animate={isTimelineRefInView ? { opacity: 1 } : {}}
          transition={{ duration: 1 }}
          className="mb-20"
        >
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={isTimelineRefInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-sm uppercase tracking-wider text-orange-400 font-semibold mb-3">Mark your calendar</span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Event Timeline</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Join us on this exciting journey from ideation to execution with a carefully curated schedule of events.
            </p>
          </motion.div>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-500 to-red-600 rounded"></div>
            
            {/* Timeline items */}
            <div className="relative z-10">
              {[
                {
                  date: "March 15, 2024",
                  title: "Registrations Open",
                  desc: "Early bird registrations begin for all Egnintion events with special discounts for student teams.",
                  align: "right"
                },
                {
                  date: "April 10, 2024",
                  title: "Preliminary Round",
                  desc: "Initial screening of ideas and projects. Top teams advance to the next phase of the competition.",
                  align: "left"
                },
                {
                  date: "April 25, 2024",
                  title: "Workshops & Mentoring",
                  desc: "Intensive workshops and one-on-one mentoring sessions with industry experts to refine your ideas.",
                  align: "right"
                },
                {
                  date: "May 5-7, 2024",
                  title: "Main Event",
                  desc: "The grand finale where finalists present their work, network with investors, and compete for prizes.",
                  align: "left"
                }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: item.align === "left" ? -50 : 50 }}
                  animate={isTimelineRefInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.2 * index, duration: 0.7 }}
                  className={`flex items-center justify-${item.align === "left" ? "start" : "end"} mb-16 relative`}
                >
                  <div className={`w-1/2 ${item.align === "left" ? "pr-12 text-right" : "pl-12 text-left"}`}>
                    <div className="bg-[#1a1a1a] p-6 rounded-lg shadow-lg hover:shadow-orange-900/10 hover:bg-[#222222] transition-all duration-300">
                      <span className="text-orange-400 text-sm font-semibold block mb-2">{item.date}</span>
                      <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                      <p className="text-gray-400 text-sm">{item.desc}</p>
                    </div>
                  </div>

                  <div className="absolute left-1/2 transform -translate-x-1/2 flex items-center justify-center">
                    <div className="w-5 h-5 bg-white rounded-full border-4 border-orange-500"></div>
                  </div>

                  <div className={`w-1/2 ${item.align === "left" ? "pl-12" : "pr-12"}`}></div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        
        {/* Call to Action */}
        <div id="register" className="bg-[#1a1a1a] rounded-2xl p-10 md:p-16 text-center shadow-lg relative overflow-hidden">
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-600/20 to-red-600/20 z-0"></div>
          </div>
          <div className="relative z-10">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6"
            >
              Ready to ignite your entrepreneurial journey?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="text-gray-300 max-w-2xl mx-auto mb-10"
            >
              Join hundreds of innovators, entrepreneurs, and changemakers at Egnintion 2024. Don't miss your chance to be part of the next big thing!
            </motion.p>
            
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-orange-500 to-red-600 text-white font-medium py-4 px-10 rounded-full hover:shadow-lg hover:shadow-orange-500/20 transform hover:-translate-y-1 transition-all duration-300"
            >
              Register Now
            </motion.button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-[#0a0a0a] py-10 mt-20">
        <div className="container mx-auto px-6">
          <div className="text-center">
            <a href="#" className="text-2xl font-bold text-orange-500 mb-6 inline-block">Egnintion</a>
            <div className="flex justify-center space-x-6 mb-6">
              <a href="#" className="text-gray-400 hover:text-orange-400">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400">
                <i className="fab fa-instagram"></i>
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
            <p className="text-gray-500 text-sm">© 2024 Egnintion. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </motion.div>
  );
};

export default Egnetion;
