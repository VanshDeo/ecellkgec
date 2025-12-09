// components/CardComponent.tsx
import React from "react";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  imageSrc: string;
  color?: string; // Added optional "color" property
};

const EsummitEventCards: React.FC = () => {
  const cards: CardProps[] = [
    {
      title: "Cipher",
      description:
        "Cipher is  A crossword puzzle competition testing your knowledge in various fields of business and entrepreneurship.",
      imageSrc: "/images/5.jpg",
    },
    {
      title: "Stock War",
      description:
        "Stock War is designed to simulate the fast-paced world of stock trading, where participants engage in virtual trading scenarios, making real-time decisions to maximize their portfolio's value. Whether you're a seasoned trader or a beginner, this competition is your chance to experience the adrenaline rush of the stock market!",
      imageSrc: "/images/3.jpg",
    },
    {
        title: "Bizquiz",
        description:
          "BizQuiz is an electrifying, fast-paced quiz designed to challenge your knowledge of the corporate world, startups, market trends, famous entrepreneurs, brand strategies, and financial concepts. Each round is a thrilling test of wits, where only the sharpest minds prevail!",
        imageSrc: "/images/6.jpg",
    },
  {
    title: "Chase the case",
    description:
      "Pitchathon challenges participants to develop and present a comprehensive business plan that highlights their vision, market potential, and strategy for success. Whether you’re an entrepreneur at heart or a business enthusiast, this is your stage to impress investors, mentors, and judges!",
    imageSrc: "/images/6.jpg",
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

export default EsummitEventCards;
