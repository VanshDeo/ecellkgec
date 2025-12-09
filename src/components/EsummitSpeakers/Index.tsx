'use client'
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight, FaLinkedinIn} from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from "react";
import { members } from "./data"; 
import './styles.css'
import Link from "next/link";

// Custom arrow component for previous
const CustomPrevArrow: React.FC<{ onClick?: React.MouseEventHandler<HTMLDivElement> }> = ({ onClick }) => (
  <div
    className="custom-arrow absolute -left-[35px] top-1/2 transform -translate-y-1/2"
    onClick={onClick}
  >
    <FaChevronLeft size={50} color="gray" />
  </div>
);

// Custom arrow component for next
const CustomNextArrow: React.FC<{ onClick?: React.MouseEventHandler<HTMLDivElement> }> = ({ onClick }) => (
  <div
    className="custom-arrow absolute -right-[35px] top-1/2 transform -translate-y-1/2"
    onClick={onClick}
  >
    <FaChevronRight size={50} color="gray" />
  </div>
);

// Member component
interface MemberComponentProps {
  imgurl: string;
  name: string;
  title: string;
  linkedinUrl: string;
}

const MemberComponent: React.FC<MemberComponentProps> = ({
  imgurl,
  name,
  title,
  linkedinUrl
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex justify-center px-4">
      <div 
        className="speaker-card relative w-72 h-80 rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl hover:shadow-yellow-500/30 border border-gray-200 bg-white"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image with gradient overlay */}
        <div className="w-full h-full relative">
          <img 
            src={imgurl} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-${isHovered ? '100' : '60'} transition-opacity duration-300`}></div>
        </div>
        
        {/* Content container */}
        <div className="absolute bottom-0 left-0 w-full p-5 text-white transition-all duration-300">
          <h3 className={`text-xl font-bold transition-all duration-300 ${isHovered ? 'transform -translate-y-2 text-[#F7931E]' : ''}`}>
            {name}
          </h3>
          
          <p className={`text-sm transition-all duration-300 ${isHovered ? 'opacity-100 text-white' : 'opacity-80 text-gray-200'}`}>
            {title}
          </p>
          
          {/* LinkedIn icon */}
          <div className={`mt-3 transition-all duration-300 ${isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
            <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
              <div className="bg-[#F7931E]/80 hover:bg-[#F7931E] p-2 rounded-full backdrop-blur-sm transition-colors">
                <FaLinkedinIn className="w-5 h-5 text-white" />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

// Speakers component
const Speakers: React.FC = () => {
  const sliderSettings = {
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      {
        breakpoint: 2224,
        settings: { slidesToShow: 4, slidesToScroll: 1 },
      },
      {
        breakpoint: 1100,
        settings: { slidesToShow: 3, slidesToScroll: 1 },
      },
      {
        breakpoint: 900,
        settings: { slidesToShow: 2, slidesToScroll: 1 },
      },
      {
        breakpoint: 500,
        settings: { slidesToShow: 1, slidesToScroll: 1 },
      },
    ],
  };

  return (
    <div className="bg-gradient-to-b from-neutral-900 to-gray-800 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-5xl font-bold text-[#F7931E] mb-3">EGNITION SPEAKERS</h2>
          <div className="w-24 h-1 bg-[#F7931E] mx-auto mb-6 rounded-full"></div>
        </div>
        
        <div className="w-full max-w-3xl mx-auto text-center mb-12">
          <p className="text-white text-lg">Industry experts and innovators who ignite inspiration at our Egnition events, sharing valuable insights and expertise.</p>
        </div>

        <div className="mt-10 relative">
          <Slider {...sliderSettings} className="px-5">
            {members.map((member, index) => (
              <MemberComponent
                key={index}
                imgurl={member.imgurl}
                name={member.name}
                title={member.title || "Speaker"}
                linkedinUrl={member.linkedinUrl}
              />
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
