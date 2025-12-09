'use client';

import { motion } from 'framer-motion';
import ModernEventCard from './index';

// Sample event data
const eventData = [
  {
    id: '1',
    title: 'BizQuiz Competition',
    date: 'Oct 15, 2023',
    time: '2:00 PM - 5:00 PM',
    location: 'Main Auditorium',
    description: 'BizQuiz is an electrifying, fast-paced quiz designed to challenge your knowledge of the corporate world, startups, market trends, famous entrepreneurs, brand strategies, and financial concepts.',
    image: '/images/6.jpg',
    category: 'Competition',
    attendees: 120,
    featured: true,
    registrationLink: '/register/bizquiz',
    slug: 'bizquiz-competition'
  },
  {
    id: '2',
    title: 'Cipher: Decode to Win',
    date: 'Oct 18, 2023',
    time: '10:00 AM - 12:30 PM',
    location: 'Conference Hall B',
    description: 'Cipher is a crossword puzzle competition testing your knowledge in various fields of business and entrepreneurship. Crack the codes, solve the puzzles, and demonstrate your business acumen!',
    image: '/images/5.jpg',
    category: 'Puzzle',
    attendees: 85,
    registrationLink: '/register/cipher',
    slug: 'cipher-decode-win'
  },
  {
    id: '3',
    title: 'AdSpoof Challenge',
    date: 'Oct 22, 2023',
    time: '3:00 PM - 6:00 PM',
    location: 'Creative Studio',
    description: 'AdSpoof challenges participants to craft humorous, exaggerated, or unconventional advertisements for fictional or real products. The goal? To entertain, persuade, and impress with out-of-the-box thinking!',
    image: '/images/7.jpg',
    category: 'Creative',
    attendees: 95,
    featured: true,
    registrationLink: '/register/adspoof',
    slug: 'adspoof-challenge'
  }
];

const EventCardGrid = () => {
  return (
    <section className="bg-gradient-to-b from-neutral-950 to-gray-900 py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold text-[#F7931E] mb-3">UPCOMING EVENTS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F7931E] to-yellow-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-300 max-w-3xl mx-auto text-lg">
            Join us for exciting entrepreneurial events designed to ignite your creativity,
            expand your knowledge, and connect you with like-minded innovators.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {eventData.map((event, index) => (
            <motion.div 
              key={event.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <ModernEventCard {...event} />
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-transparent border-2 border-[#F7931E] text-[#F7931E] hover:bg-[#F7931E]/10 px-8 py-3 rounded-lg font-semibold transition-colors duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
          >
            View All Events
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default EventCardGrid;
