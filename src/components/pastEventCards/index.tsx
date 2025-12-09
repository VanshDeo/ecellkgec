// components/CardComponent.tsx
import React from "react";
import styles from "./CardComponent.module.scss";
import Image from "next/image";

type CardProps = {
  title: string;
  description: string;
  imageSrc: string;
};

const EgnitionEventCards: React.FC = () => {
  const cards: CardProps[] = [
    // {
    //   title: "Bizquiz",
    //   description:
    //     "BizQuiz is an electrifying, fast-paced quiz designed to challenge your knowledge of the corporate world, startups, market trends, famous entrepreneurs, brand strategies, and financial concepts. Each round is a thrilling test of wits, where only the sharpest minds prevail!",
    //   imageSrc: "/images/6.jpg",
    // },
    // {
    //   title: "Cipher",
    //   description:
    //     "Cipher is  A crossword puzzle competition testing your knowledge in various fields of business and entrepreneurship.",
    //   imageSrc: "/images/5.jpg",
    // },
    {
      title: "Pitchathon",
      description:
        "Pitchathon challenges participants to develop and present a comprehensive business plan that highlights their vision, market potential, and strategy for success. Whether you're an entrepreneur at heart or a business enthusiast, this is your stage to impress investors, mentors, and judges!",
      imageSrc: "/images/15.jpg",
    },
    {
      title: "Lumora",
      description:
        "LUMORA is the prestigious idea-pitching competition hosted by us where visionary students present innovative ideas that blend creativity, technology, and impact. It offers a dynamic platform to showcase solutions, gain recognition, and connect with mentors, helping young entrepreneurs turn their concepts into real-world opportunities.",
      imageSrc: "/images/13.jpg",
    },
    // {
    //   title: "Extempore",
    //   description:
    //     "Extempore, it is an impromptu speech that the candidate is required to make on a topic given there and then. The candidate needs to speak for 1 minute nonstop and based on the speech the judgment is made.",
    //   imageSrc: "/images/8.jpg",
    // },
    // {
    //   title: "INSIGNATION",
    //   description:
    //     "INSIGNATION invites designers, artists, and branding enthusiasts to conceptualize and create a powerful visual identity for a given organization or company. Whether minimalistic or elaborate, every logo must be memorable, distinctive, and impactful.",
    //   imageSrc: "/images/3.jpg",
    // },
  ];

  return (
    <div className={`${styles.container} container flex flex-wrap justify-around mx-auto w-[90vw] `}>
      {cards.map((card, index) => (
        <div
          key={index}
          className={`${styles.card} relative flex bg-white h-64 w-full sm:w-full md:w-[45%] lg:w-[45%] m-4`}
        >
          <div
            className={`${styles.imgbox} absolute top-0 left-0 w-full h-full bg-gray-800 flex justify-center items-center overflow-hidden`}
            data-text={card.title}
          >
            <Image
              src={card.imageSrc}
              alt={`Image of ${card.title}`}
              width={100}  // Define width here
              height={100} // Define height here
              className="transition-all duration-500 max-w-[100px]"
            />
          </div>
          <div className={`${styles.detail} absolute right-0 w-[calc(100%-75px)] h-full p-4 sm:p-0 flex flex-col justify-center items-start`}>
            <h3 className="mb-2 text-lg font-bold">{card.title}</h3>
            <p className="text-sm mb-4">{card.description}</p>
            {/* <a
              href="#"
              className="bg-gray-800 text-white px-4 py-2 text-sm no-underline"
            >
              Read more...
            </a> */}
          </div>
        </div>
      ))}
    </div>
  );
};

export default EgnitionEventCards;



