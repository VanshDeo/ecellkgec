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
    className="custom-arrow absolute -left-[40px] top-1/2 transform -translate-y-1/2"
    onClick={onClick}
  >
    <FaChevronLeft size={50} color="#aaa" className="hover:text-[#F7931E] transition-colors" />
  </div>
);

// Custom arrow component for next
const CustomNextArrow: React.FC<{ onClick?: React.MouseEventHandler<HTMLDivElement> }> = ({ onClick }) => (
  <div
    className="custom-arrow absolute -right-[40px] top-1/2 transform -translate-y-1/2"
    onClick={onClick}
  >
    <FaChevronRight size={50} color="#aaa" className="hover:text-[#F7931E] transition-colors" />
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
    <div className="flex justify-center px-4 py-2">
      <div 
        className="speaker-card relative w-72 h-[340px] rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl bg-gradient-to-b from-gray-900 to-black"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Image with gradient overlay */}
        <div className="speaker-image-container w-full h-full relative">
          <img 
            src={imgurl} 
            alt={name} 
            className="speaker-image w-full h-full object-cover"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent transition-opacity duration-300 ${isHovered ? 'opacity-90' : 'opacity-75'}`}></div>
        </div>
        
        {/* Content container */}
        <div className="absolute bottom-0 left-0 w-full p-5 text-white speaker-content">
          <h3 className={`text-xl font-bold transition-all duration-300 ${isHovered ? 'transform -translate-y-3 text-[#F7931E]' : ''}`}>
            {name}
          </h3>
          
          <p className={`text-sm transition-all duration-300 ${isHovered ? 'opacity-100 text-white' : 'opacity-80 text-gray-300'}`}>
            {title}
          </p>
          
          {/* LinkedIn icon */}
          <div className={`mt-4 transition-all duration-500 ${isHovered ? 'opacity-100 transform translate-y-0' : 'opacity-0 transform translate-y-4'}`}>
            <Link href={linkedinUrl} target="_blank" rel="noopener noreferrer" className="inline-block">
              <div className="bg-[#F7931E]/90 hover:bg-[#F7931E] p-2.5 rounded-full backdrop-blur-sm transition-all duration-300 hover:scale-110">
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
    <div className="bg-gradient-to-b from-neutral-900 to-gray-800 py-20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-5xl font-bold text-[#F7931E] mb-3">EGNITION SPEAKERS</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-[#F7931E] to-yellow-500 mx-auto mb-8 rounded-full"></div>
        </div>
        
        <div className="w-full max-w-3xl mx-auto text-center mb-12">
          <p className="text-white text-lg leading-relaxed">Industry experts and innovators who ignite inspiration at our Egnition events, sharing valuable insights and expertise.</p>
        </div>

        <div className="mt-12 relative mx-10">
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
