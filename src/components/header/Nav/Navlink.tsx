"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion } from "framer-motion";

const NavLink = ({ 
  link, 
  color = "black",
  isBurgerOpen = false,
  onBurgerClick = () => {}
}: { 
  link: { url: string; title: string }; 
  color?: string;
  isBurgerOpen?: boolean;
  onBurgerClick?: () => void;
}) => {
  const pathName = usePathname();
  const router = useRouter();
  const isActive = pathName === link.url;
  
  // Simplified special page detection
  const specialPaths = ['/egnition', '/esummit', '/teams'];
  const isSpecialPage = specialPaths.some(path => pathName.toLowerCase().includes(path));
  const isSpecialLink = specialPaths.some(path => link.url.toLowerCase().includes(path));
  
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    router.push(link.url);
    if (isBurgerOpen) {
      onBurgerClick();
    }
  };
  
  // Determine the appropriate colors based on context - fixed to ensure black text on white backgrounds
  const getTextColor = () => {
    // Force black text on special pages with white backgrounds
    if (isSpecialPage || isSpecialLink) return "text-slate-800";
    
    // For active links on regular pages
    if (isActive) {
      return color === "black" ? "text-slate-800" : "text-white";
    }
    
    // For inactive links, directly use the color prop
    return color === "black" ? "text-slate-800" : "text-white";
  };
  
  const getHoverTextColor = () => {
    // Force black hover text on white backgrounds
    if (isSpecialPage || isSpecialLink || color === "black") {
      return "group-hover:text-slate-900";
    }
    return "group-hover:text-white";
  };

  const getBgColor = () => {
    if (isActive) {
      // Light background for links on special pages
      return isSpecialPage || isSpecialLink || color === "black"
        ? "bg-gray-100" 
        : "bg-blue-600";
    }
    return "";
  };

  const getHoverBgColor = () => {
    // Light hover background for links on special pages
    return isSpecialPage || isSpecialLink || color === "black"
      ? "group-hover:bg-gray-200" 
      : "group-hover:bg-blue-500";
  };

  return (
    <Link 
      href={link.url}
      className="relative px-4 py-2 group transition-all duration-300 rounded-md mx-1"
      onClick={handleClick}
    >
      <span className={`relative z-10 font-medium transition-colors duration-300 ${getTextColor()} ${getHoverTextColor()}`}>
        {link.title}
      </span>
      
      {isActive ? (
        <motion.span 
          layoutId="navbar-indicator"
          className={`absolute inset-0 ${getBgColor()} rounded-md -z-10 shadow-md`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />
      ) : (
        <span 
          className={`absolute inset-0 rounded-md -z-10 opacity-0 transition-all duration-300 ${getHoverBgColor()} group-hover:opacity-100 shadow-sm`} 
        />
      )}
    </Link>
  );
};

export default NavLink;