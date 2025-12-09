"use client";
import React, { useState } from "react";
import './styles.css'; 
import { FaTwitterSquare } from "react-icons/fa";

const UserCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="user-card w-96 bg-gray-400 text-white rounded-lg border-2 border-black flex flex-col items-center justify-center p-6 space-y-4 overflow-hidden">
      <div
        className={`avatar ${isHovered ? "scale-up" : ""}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <img src="/images/background.jpg" alt="user"/>
      </div>
      <p
        className={`name ${isHovered ? "move-up" : ""}`}
      >
        Name
      </p>
      <div className={`icon ${isHovered ? "icon-visible move-up" : ""}`}><FaTwitterSquare className="w-10 h-10"/></div>
    </div>
  );
};

export default UserCard;
