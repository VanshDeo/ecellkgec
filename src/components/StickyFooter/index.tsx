"use client"

import React, { useRef, useEffect, useState } from 'react';
import StickyFooterContent from '../StickyFooterContent';

const StickyFooter: React.FC = () => {
  const [footerHeight, setFooterHeight] = useState(800); // Default height
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Adjust height dynamically based on content size
    if (contentRef.current) {
      const contentHeight = contentRef.current.offsetHeight;
      setFooterHeight(contentHeight);
    }

    // Add resize event listener to adjust height on window resize
    const handleResize = () => {
      if (contentRef.current) {
        const contentHeight = contentRef.current.offsetHeight;
        setFooterHeight(contentHeight);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div
      className="relative overflow-visible bg-gray-800"
      style={{
        height: `${footerHeight}px`,
        clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)",
      }}
    >
      <div
        className="relative overflow-visible"
        style={{ height: `calc(100vh + ${footerHeight}px)`, top: `-${footerHeight}px` }}
      >
        <div
          ref={contentRef}
          className="sticky"
          style={{ top: `calc(100vh - ${footerHeight}px)`, height: `${footerHeight}px` }}
        >
          <div className='relative bottom-0 h-full w-full bg-gray-800'>
          <StickyFooterContent />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StickyFooter;
