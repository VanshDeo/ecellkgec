"use client";
import { AboutText, AboutHead } from "@/utils/data/About";

interface AboutProps {
  Head?: string;
  Text?: string;
}

export default function About({ Head, Text }: AboutProps) {
  return (
    <div className="gap-4 w-full flex flex-col justify-center items-center h-fit py-40" id="about">
      <div className="sm:block hidden w-[4px] h-[100px] bg-[#F7931E]"></div>
      <div className="text-5xl font-bold font-sans text-[#F7931E]">
        {Head || AboutHead}
      </div>
      <div className="text-black w-4/5 font-thin text-center text-lg md:text-xl font-sans">
        {Text || AboutText}
      </div>
    </div>
  );
}

