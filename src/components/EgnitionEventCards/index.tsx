"use client";
import React from "react";
import Image from "next/image";

type CardProps = {
  id: number;
  title: string;
  description: string;
  imageSrc: string;
  date?: string;
  category?: string;
};

const EgnitionEventCards: React.FC = () => {
  const cards: CardProps[] = [
    {
      id: 1,
      title: "Bizquiz",
      description:
        "BizQuiz is an electrifying, fast-paced quiz designed to challenge your knowledge of the corporate world, startups, market trends, famous entrepreneurs, brand strategies, and financial concepts. Each round is a thrilling test of wits, where only the sharpest minds prevail!",
      imageSrc: "/images/6.jpg",
      date: "Oct 15, 2023",
      category: "Competition",
    },
    {
      id: 2,
      title: "Cipher",
      description:
        "Cipher is a crossword puzzle competition testing your knowledge in various fields of business and entrepreneurship. Crack the codes, solve the puzzles, and demonstrate your business acumen!",
      imageSrc: "/images/5.jpg",
      date: "Oct 18, 2023",
      // color: "from-blue-500 to-purple-600",
    },
    {
      id: 3,
      title: "AdSpoof",
      description:
        "AdSpoof challenges participants to craft humorous, exaggerated, or unconventional advertisements for fictional or real products. The goal? To entertain, persuade, and impress with out-of-the-box thinking and sharp marketing instincts!",
      imageSrc: "/images/7.jpg",
      date: "Oct 22, 2023",
      // color: "from-yellow-400 to-orange-500",
    },
    {
      id: 4,
      title: "Extempore",
      description:
        "Extempore is an impromptu speech competition where candidates speak for 1 minute nonstop on a topic given on the spot. Test your quick thinking and public speaking skills in this high-pressure, high-reward challenge!",
      imageSrc: "/images/8.jpg",
      date: "Oct 25, 2023",
      // color: "from-pink-500 to-purple-600",
    },
    {
      id: 5,
      title: "INSIGNATION",
      description:
        "INSIGNATION invites designers, artists, and branding enthusiasts to conceptualize and create a powerful visual identity for a given organization or company. Whether minimalistic or elaborate, every logo must be memorable, distinctive, and impactful.",
      imageSrc: "/images/3.jpg",
      date: "Oct 29, 2023",
      // color: "from-cyan-500 to-blue-600",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8 w-[95vw] max-w-7xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {cards.map((card, index) => (
          <div
            key={index}
            className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 hover:scale-[1.02]"
          >
            <div className="relative h-56 overflow-hidden">
              <Image
                src={card.imageSrc}
                alt={`Image of ${card.title}`}
                fill
                className="object-cover transition-transform duration-500 hover:scale-110"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black bg-opacity-30 flex items-end">
                <h3 className="text-2xl font-bold text-white px-6 py-4 bg-gradient-to-r from-black/80 to-transparent w-full">
                  {card.title}
                </h3>
              </div>
              
              {/* Date and category tags */}
              <div className="absolute top-4 right-4 left-4 flex justify-between">
                {card.category && (
                  <span className="bg-orange-600/90 text-white px-3 py-1 rounded-md text-xs uppercase font-semibold tracking-wider">
                    {card.category}
                  </span>
                )}
                {card.date && (
                  <span className="bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-md text-sm font-medium">
                    {card.date}
                  </span>
                )}
              </div>
            </div>
            <div className="p-6">
              <p className="text-gray-300 mb-4 leading-relaxed">{card.description}</p>
              <div className="flex justify-end">
                <button className="bg-[#F7931E] hover:bg-[#e08016] text-white font-medium py-2 px-4 rounded-md transition-colors duration-300">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EgnitionEventCards;



