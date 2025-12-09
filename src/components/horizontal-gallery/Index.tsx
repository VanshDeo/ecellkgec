"use client";
import { Key, useEffect, useRef, useState } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import Lenis from "@studio-freight/lenis";
import { useTransform, useScroll, motion } from "framer-motion";

const images = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
  "10.jpg",
  "11.jpg",
  "12.jpg",
  "13.jpg",
  "14.jpg",
  "15.jpg",
];

interface Dimension {
  width: number;
  height: number;
}

export default function ScrollGallery() {
  const gallery = useRef<HTMLDivElement | null>(null);
  const [dimension, setDimension] = useState<Dimension>({
    width: 0,
    height: 0,
  });

  const { scrollYProgress } = useScroll({
    target: gallery,
    offset: ["start end", "end start"],
  });
  const { height } = dimension;
  const y = useTransform(scrollYProgress, [0, 1], [0, height * 2]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, height * 3.3]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, height * 1.25]);
  const y4 = useTransform(scrollYProgress, [0, 1], [0, height * 3]);

  useEffect(() => {
    const lenis = new Lenis();

    const raf = (time: number) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };

    const resize = () => {
      setDimension({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", resize);
    requestAnimationFrame(raf);
    resize();

    return () => {
      window.removeEventListener("resize", resize);
    };
  }, []);

  const getColumnCount = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 480) return 1;
      if (width < 640) return 2;
      if (width < 768) return 2;
      if (width < 1024) return 3;
      return 4;
    }
    return 2;
  };

  const columnCount = getColumnCount();

  const getColumnHeight = () => {
    if (typeof window !== "undefined") {
      const width = window.innerWidth;
      if (width < 480) return 220;
      if (width < 640) return 240;
      if (width < 768) return 260;
      if (width < 1024) return 280;
      return 300;
    }
    return 260;
  };

  return (
    <main className={styles.main}>
      <div className={`${styles.spacer} pt-6 xs:pt-7 sm:pt-8 md:pt-6 lg:pt-4 xl:pt-0`}></div>
      <div
        ref={gallery}
        className={`${styles.gallery} grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 xs:gap-1.5 sm:gap-2 md:gap-2.5 px-1 xs:px-1.5 sm:px-2 md:px-3 lg:px-4 grid-rows-1`}
        style={{ minHeight: `${getColumnHeight() * 3}px` }}
      >
        <Column
          images={[images[1], images[2], images[3]]}
          y={y as unknown as number}
          height={getColumnHeight()}
        />
        
        {columnCount >= 2 && (
          <Column
            images={[images[4], images[5], images[6], images[0]]}
            y={y2 as unknown as number}
            height={getColumnHeight()}
          />
        )}
        
        {columnCount >= 3 && (
          <Column
            images={[images[7], images[8], images[9], images[10]]}
            y={y3 as unknown as number}
            height={getColumnHeight()}
          />
        )}
        
        {columnCount >= 4 && (
          <Column
            images={[images[11], images[12], images[13]]}
            y={y4 as unknown as number}
            height={getColumnHeight()}
          />
        )}
      </div>
      <div className={styles.spacer}></div>
    </main>
  );
}

const Column = ({ images, y, height = 260 }: { images: string[]; y: number; height?: number }) => {
  return (
    <motion.div className={`${styles.column} mb-1 xs:mb-1.5 sm:mb-2`} style={{ y }}>
      {images.map((src, i: Key) => {
        return (
          <div 
            key={i} 
            className={`${styles.imageContainer} mb-1 xs:mb-1.5 sm:mb-2 rounded-md xs:rounded-lg overflow-hidden`}
            style={{ height: `${height}px` }}
          >
            <Image src={`/images/${src}`} alt="image" fill className="object-cover" />
          </div>
        );
      })}
    </motion.div>
  );
};
