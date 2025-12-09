"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function AnimatedCards() {
  const cards = [
    {
      id: 1,
      title: "Adspoof",
      description: "AdSpoof challenges participants to craft humorous, exaggerated, or unconventional advertisements for fictional or real products. The goal? To entertain, persuade, and impress with out-of-the-box thinking and sharp marketing instincts!",
      image: "/images/7.jpg?height=400&width=300",
      color: "from-yellow-400 to-orange-500",
    },
    {
      id: 2,
      title: "Smart Features",
      description: "Extempore, it is an impromptu speech that the candidate is required to make on a topic given there and then. The candidate needs to speak for 1 minute nonstop and based on the speech the judgment is made.",
      image: "/images/8.jpg?height=400&width=300",
      color: "from-pink-500 to-purple-600",
    },
    {
      id: 3,
      title: "Business Pitch",
      description: "Present your innovative business idea in a compelling 3-minute pitch. Convince our panel of industry experts why your solution is market-ready, scalable, and worthy of investment. The best pitch wins mentorship and seed funding!",
      image: "/images/9.jpg?height=400&width=300",
      color: "from-cyan-500 to-blue-600",
    },
  ]

  return (
    <div className="container mx-auto px-4 pb-20 pt-16 bg-neutral-900">
      <h2 className="text-5xl font-bold text-center mb-16 text-[#F7931E] tracking-tight">EVENTS</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 items-stretch max-w-6xl mx-auto">
        {cards.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </div>
    </div>
  )
}

function Card({ card }: { card: { id: number; title: string; description: string; image: string; color: string } }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      className="relative h-[450px] rounded-2xl overflow-hidden group cursor-pointer shadow-xl shadow-black/20"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: card.id * 0.1 }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
    >
      {/* Card image with gradient overlay */}
      <div className="absolute inset-0 w-full h-full">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${card.color} opacity-80 transition-opacity duration-300 ${
            isHovered ? "opacity-95" : ""
          } z-10`}
        />
        <img
          src={card.image || "/placeholder.svg"}
          alt={card.title}
          className="w-full h-full object-cover transition-transform duration-700 ease-out scale-100 group-hover:scale-110"
        />
      </div>

      {/* Card content */}
      <div className="absolute inset-0 flex flex-col justify-between p-8 text-white z-20">
        <motion.div
          className="space-y-2"
          animate={{ y: isHovered ? -8 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <div className="w-12 h-1 bg-white rounded-full opacity-70"></div>
          <h3 className="text-3xl font-bold tracking-tight">{card.title}</h3>
        </motion.div>

        <motion.div
          className="space-y-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.4 }}
        >
          <p className="text-sm leading-relaxed text-white/90 font-medium">{card.description}</p>
          <div className="inline-flex items-center space-x-2 font-medium px-4 py-2 bg-white/20 backdrop-blur-sm rounded-lg w-fit transition-colors duration-300 hover:bg-white/30">
            <span>Learn more</span>
            <ArrowRight className="w-4 h-4" />
          </div>
        </motion.div>
      </div>
    </motion.div>
  )
}

