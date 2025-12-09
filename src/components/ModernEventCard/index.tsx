'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Calendar, Clock, MapPin, ArrowRight, Users, Award } from 'lucide-react';
import Link from 'next/link';

interface EventCardProps {
  id: string;
  title: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
  category: string;
  attendees?: number;
  featured?: boolean;
  registrationLink?: string;
  slug?: string;
}

const ModernEventCard = ({
  // id,
  title,
  date,
  time,
  location,
  description,
  image,
  category,
  attendees,
  featured = false,
  registrationLink,
  slug
}: EventCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="w-full h-[450px] bg-gray-900 rounded-2xl overflow-hidden relative group"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -5 }}
    >
      {/* Background image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div
          className={`absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent transition-opacity duration-300 ${
            isHovered ? 'opacity-90' : 'opacity-70'
          }`}
        />
      </div>

      {/* Category badge */}
      {category && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-[#F7931E] px-3 py-1.5 rounded-full text-white text-xs font-medium tracking-wide uppercase">
            {category}
          </span>
        </div>
      )}

      {/* Featured badge */}
      {featured && (
        <div className="absolute top-4 right-4 z-10">
          <motion.div
            className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full"
            initial={{ scale: 1 }}
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ repeat: Infinity, duration: 2 }}
          >
            <Award className="w-4 h-4 text-yellow-400" />
            <span className="text-white text-xs font-medium">Featured</span>
          </motion.div>
        </div>
      )}

      {/* Content */}
      <div className="absolute bottom-0 left-0 w-full p-6 z-10">
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isHovered ? -20 : 0 }}
          transition={{ duration: 0.3 }}
        >
          {/* Title */}
          <motion.h3
            className={`text-2xl font-bold text-white mb-2 ${
              isHovered ? 'text-[#F7931E]' : ''
            } transition-colors duration-300`}
          >
            {title}
          </motion.h3>

          {/* Event details */}
          <div className="flex flex-wrap gap-4 mb-4">
            <div className="flex items-center text-gray-300">
              <Calendar className="w-4 h-4 mr-1.5" />
              <span className="text-sm">{date}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <Clock className="w-4 h-4 mr-1.5" />
              <span className="text-sm">{time}</span>
            </div>
            <div className="flex items-center text-gray-300">
              <MapPin className="w-4 h-4 mr-1.5" />
              <span className="text-sm">{location}</span>
            </div>
            {attendees && (
              <div className="flex items-center text-gray-300">
                <Users className="w-4 h-4 mr-1.5" />
                <span className="text-sm">{attendees} attendees</span>
              </div>
            )}
          </div>
        </motion.div>

        {/* Description and buttons - shown on hover */}
        <motion.div
          className="space-y-4"
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isHovered ? 1 : 0,
            height: isHovered ? 'auto' : 0,
          }}
          transition={{ duration: 0.3 }}
        >
          <p className="text-gray-300 text-sm line-clamp-3">
            {description}
          </p>
          
          <div className="flex gap-3">
            {registrationLink && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href={registrationLink} 
                  className="bg-[#F7931E] text-white px-5 py-2 rounded-lg inline-flex items-center font-medium text-sm"
                >
                  Register Now
                </Link>
              </motion.div>
            )}
            
            {slug && (
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Link 
                  href={`/events/${slug}`}
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white px-5 py-2 rounded-lg inline-flex items-center font-medium text-sm gap-1.5 transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            )}
          </div>
        </motion.div>
        
        {/* Progress bar for timeline visualization */}
        <motion.div
          className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#F7931E] to-yellow-500"
          initial={{ width: 0 }}
          animate={{ width: isHovered ? '100%' : '30%' }}
          transition={{ duration: 0.5 }}
        />
      </div>
    </motion.div>
  );
};

export default ModernEventCard;
