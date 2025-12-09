"use client";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import styles from "./styles.module.scss";
import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import Nav from "./Nav";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Rounded from "../roundedButton/Index";

export default function Header() {
  const header = useRef<HTMLDivElement>(null);
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();
  const button = useRef(null);

  useEffect(() => {
    if (isActive) setIsActive(false);
  }, [pathname]);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    
    // Make the burger button visible from the start instead of hiding it
    gsap.set(button.current, { scale: 1 });
    
    // No longer need the scroll trigger for the button appearance
    // since we want it visible from the first section
    
    // Keep the header behavior for scroll effect
    gsap.to(header.current, {
      scrollTrigger: {
        trigger: document.documentElement,
        start: 0,
        end: window.innerHeight,
        onLeave: () => {
          header.current?.classList.add('scrolled');
        },
        onEnterBack: () => {
          header.current?.classList.remove('scrolled');
        },
      },
    });
  }, []);

  return (
    <div className="w-[100%] z-50 nav">
      {/* Hide the header with navigation links */}
      <div ref={header} className={`${styles.header} hidden`}>
        {/* ...existing code... */}
      </div>
      
      {isActive && (
        <div className={styles.navButton}>
          <Rounded
            onClick={() => {
              setIsActive(!isActive);
            }}
            className={`${styles.button}`}
          >
            <div
              className={`${styles.burger} ${
                isActive ? styles.burgerActive : ""
              }`}
            ></div>
          </Rounded>
        </div>
      )}
      
      {/* Make the burger button visible from the first section */}
      <div ref={button} className={styles.headerButtonContainer}>
        <Rounded
          onClick={() => {
            setIsActive(!isActive);
          }}
          className={`${styles.button}`}
        >
          <div
            className={`${styles.burger} ${
              isActive ? styles.burgerActive : ""
            }`}
          ></div>
        </Rounded>
      </div>
      
      <AnimatePresence mode="wait">{isActive && <Nav />}</AnimatePresence>
    </div>
  );
}
