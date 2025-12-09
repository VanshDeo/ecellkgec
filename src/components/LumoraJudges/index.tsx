'use client'
import { FaLinkedinIn} from "react-icons/fa";  
import { useState } from "react";
import { members } from "./data"; 
import './styles.css'
import Link from "next/link";

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
        <div className="w-full h-full relative">
          <img 
            src={imgurl} 
            alt={name} 
            className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
          />
          <div className={`absolute inset-0 bg-gradient-to-t from-black/80 to-transparent ${isHovered ? 'opacity-100' : 'opacity-60'} transition-opacity duration-300`}></div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full p-5 text-white transition-all duration-300">
          <h3 className={`text-xl font-bold mt-5 transition-all duration-300 ${isHovered ? 'text-[#F7931E]' : ''}`}>
            {name}
          </h3>
          
          <p className={`text-sm mt-5 transition-all duration-300 ${isHovered ? 'opacity-100 text-white' : 'opacity-80 text-gray-200'}`}>
            {title}
          </p>
          
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
const Judges: React.FC = () => {
  return (
    <div className="bg-gradient-to-b from-neutral-900 to-gray-800 py-16">
      <div className="flex flex-col justify-center max-w-6xl mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="text-5xl font-bold text-[#F7931E] mb-3">LUMORA JUDGES</h2>
          <div className="w-24 h-1 bg-[#F7931E] mx-auto mb-6 rounded-full"></div>
        </div>
        
        <div className="w-full max-w-3xl mx-auto text-center mb-12">
          <p className="text-white text-lg">Our esteemed panel of judges brings industry expertise and sharp insight, ensuring every idea receives thoughtful evaluation and meaningful feedback.</p>
        </div>

        {/* Render all cards in a responsive grid */}
        <div className="mt-10 max-w-6xl mx-auto">
          <div className="grid gap-6 justify-center
                          grid-cols-1
                          md:grid-cols-2
                          lg:grid-cols-3">
            {members.map((member, index) => (
              <MemberComponent
                key={index}
                imgurl={member.imgurl}
                name={member.name}
                title={member.title || "Speaker"}
                linkedinUrl={member.linkedinUrl}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Judges;