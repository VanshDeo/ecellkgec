/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { AboutText, AboutHead } from "@/utils/data/About";

interface AboutProps {
  Head?: string;
  Text?: string;
}

export default function LumoraAbout({ Head, Text }: AboutProps) {
  return (
    <div
      className="gap-4 w-full flex flex-col justify-center items-center h-fit py-20"
      id="esummit-about"
    >
      <div className="w-[4px] h-[100px] bg-[#F7931E] hidden sm:block"></div>
      <div className="text-5xl font-bold font-sans text-[#F7931E]">
        {Head || AboutHead}
      </div>
      <div className="text-black w-4/5 font-thin text-center text-lg font-sans">
      LUMORA is the prestigious idea-pitching competition hosted by us where visionary students present innovative ideas that blend creativity, technology, and impact. It offers a dynamic platform to showcase solutions, gain recognition, and connect with mentors, helping young entrepreneurs turn their concepts into real-world opportunities.
      </div>
    </div>
  );
}
