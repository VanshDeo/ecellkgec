import { motion } from 'framer-motion'

const MotoSection = () => {
  return (
    <div className="relative w-full h-[70vh] overflow-hidden flex flex-col justify-center items-center">
      <div className="MotoSection absolute top-0 left-0 w-full h-full bg-fixed z-[-10]" />
      <div className="w-full h-full bg-black/60 absolute top-0 right-0 z-[-10]" />

      <motion.div
        className="z-[20] gap-[1rem] h-full w-full flex flex-col justify-center items-center"
        initial={{ opacity: 0, y: 40 }} 
        whileInView={{ opacity: 1, y: 0 }} 
        viewport={{ once: false, margin: "0px 0px -200px 0px" }} 
        transition={{ duration: 0.5, ease: "easeOut" }} 
      >
        <div className="text-5xl font-bold font-sans text-[#F7931E]">
          OUR MOTTO
        </div>
        <div className="text-white w-[80%] font-thin text-center text-lg md:text-xl font-sans">
          
<p className='font-bold'>"Illuminate. Inculcate. Invigorate."</p>
<br />
At EGNITION&apos;24, we believe in inspiring young minds to think beyond boundaries, innovate with purpose, and ignite their entrepreneurial journey. Our goal is to cultivate a culture of creativity, resilience, and leadership, empowering students to transform their ideas into reality. Through collaboration, mentorship, and hands-on experiences, we strive to shape the next generation of trailblazers who will drive change and redefine the future of entrepreneurship.

        </div>
      </motion.div>
    </div>
  );
};

export default MotoSection;
