'use client';
import { motion, useScroll, useTransform, MotionValue } from "framer-motion";
import { useEffect, useRef } from "react";
import Lenis from 'lenis';

// Defining the type for scrollYProgress
interface SectionProps {
  scrollYProgress: MotionValue<number>;
}

export default function EsummitCardsAnimation() {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"]
  });

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
  }, []);

  return (
    <main ref={container} className="relative h-[200vh]">
      <Section1 scrollYProgress={scrollYProgress} />
      <Section2 scrollYProgress={scrollYProgress} />
    </main>
  );
}

const Section1: React.FC<SectionProps> = ({ scrollYProgress }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 0]);

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-0 h-screen bg-[#C72626] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
    >
      <p>Section 1 - Scroll Perspective</p>
      <p>Content for section 1.</p>
    </motion.div>
  );
};

const Section2: React.FC<SectionProps> = ({ scrollYProgress }) => {
    const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
    const rotate = useTransform(scrollYProgress, [0, 1], [0, 0])

  return (
    <motion.div
      style={{ scale, rotate }}
      className="sticky top-[100vh] h-screen bg-[#0077b6] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
    >
      <p>Section 2 - Scroll Transition</p>
      <p>Content for section 2.</p>
    </motion.div>
  );
};

// const Section3: React.FC<SectionProps> = ({ scrollYProgress }) => {
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.9]);
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, 5]);

//   return (
//     <motion.div
//       style={{ scale, rotate }}
//       className="sticky top-[200vh] h-screen bg-[#FF6F61] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
//     >
//       <p>Section 3 - Scroll Dynamics</p>
//       <p>Content for section 3.</p>
//     </motion.div>
//   );
// };

// const Section4: React.FC<SectionProps> = ({ scrollYProgress }) => {
//   const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
//   const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

//   return (
//     <motion.div
//       style={{ scale, rotate }}
//       className="sticky top-[300vh] h-screen bg-[#6A4C93] text-[3.5vw] flex flex-col items-center justify-center text-white pb-[10vh]"
//     >
//       <p>Section 4 - Continuous Scroll</p>
//       <p>Content for section 4.</p>
//     </motion.div>
//   );
// };
