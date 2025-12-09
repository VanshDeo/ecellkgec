import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import styles from "./styles.module.scss";

const TeamStudents = () => {
  const container = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const height = useTransform(scrollYProgress, [0, 0.9], [50, 0]);
  return (
    <div ref={container} className="flex flex-col my-8">
      <h2 className="text-5xl font-bold text-center text-[#F7931E] mb-6">Team Students</h2>
      <div className="grid grid-cols-1 grid-rows-4 gap-6 p-10 sm:grid-cols-2 sm:grid-rows-2">
        <div className="rounded-xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 p-6 bg-white border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Web Development</h3>
          <div className="flex flex-wrap justify-around gap-4">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-2 border-2 border-[#F7931E]">
                <img src="https://res.cloudinary.com/dduwbdgc1/image/upload/v1742483230/1711610217052_noz59d.jpg" alt="Student 1" className="w-full h-full object-cover" />
              </div>
              <p className="font-medium">Student 1</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-2 border-2 border-[#F7931E]">
                <img src="https://res.cloudinary.com/dduwbdgc1/image/upload/v1742478807/Debayan_Pradhan_da_fc2qbq.jpg" alt="Student 2" className="w-full h-full object-cover" />
              </div>
              <p className="font-medium">Student 2</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 p-6 bg-white border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Design</h3>
          <div className="flex flex-wrap justify-around gap-4">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-2 border-2 border-[#F7931E]">
                <img src="https://res.cloudinary.com/dduwbdgc1/image/upload/v1742478783/Abhishek_Banerjee_da_rkk8lx.jpg" alt="Student 3" className="w-full h-full object-cover" />
              </div>
              <p className="font-medium">Student 3</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-2 border-2 border-[#F7931E]">
                <img src="https://res.cloudinary.com/dduwbdgc1/image/upload/v1742484306/1666294931975_uwoa1a.jpg" alt="Student 4" className="w-full h-full object-cover" />
              </div>
              <p className="font-medium">Student 4</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 p-6 bg-white border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">Content</h3>
          <div className="flex flex-wrap justify-around gap-4">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-2 border-2 border-[#F7931E]">
                <img src="https://res.cloudinary.com/dduwbdgc1/image/upload/v1742483768/1721279648217_kbzklz.jpg" alt="Student 5" className="w-full h-full object-cover" />
              </div>
              <p className="font-medium">Student 5</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-2 border-2 border-[#F7931E]">
                <img src="https://res.cloudinary.com/dduwbdgc1/image/upload/v1742484009/1704141443548_zegpma.jpg" alt="Student 6" className="w-full h-full object-cover" />
              </div>
              <p className="font-medium">Student 6</p>
            </div>
          </div>
        </div>
        
        <div className="rounded-xl shadow-lg hover:shadow-xl hover:shadow-yellow-500/30 transition-all duration-300 p-6 bg-white border border-gray-200">
          <h3 className="text-xl font-semibold mb-4 text-gray-800">PR & Sponsorship</h3>
          <div className="flex flex-wrap justify-around gap-4">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-2 border-2 border-[#F7931E]">
                <img src="https://res.cloudinary.com/dduwbdgc1/image/upload/v1742478819/Rekden_Lama_da_2_zwlrvl.jpg" alt="Student 7" className="w-full h-full object-cover" />
              </div>
              <p className="font-medium">Student 7</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-2 border-2 border-[#F7931E]">
                <img src="https://res.cloudinary.com/dduwbdgc1/image/upload/v1742478823/sayak_jana_da_j4o87v.jpg" alt="Student 8" className="w-full h-full object-cover" />
              </div>
              <p className="font-medium">Student 8</p>
            </div>
          </div>
        </div>
      </div>
      <motion.div style={{ height }} className={styles.circleContainer}>
        <div className={styles.circle}></div>
      </motion.div>
    </div>
  );
};

export default TeamStudents;
