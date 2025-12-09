/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { AboutText, AboutHead } from "@/utils/data/About";

interface AboutProps {
  Head?: string;
  Text?: string;
}

export default function EsummitAbout({ Head, Text }: AboutProps) {
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
        E-Summit is the cornerstone event of EGNITION, bringing together
        aspiring entrepreneurs, industry experts, and startup enthusiasts on a
        common platform. It features keynote speeches, panel discussions,
        startup pitching sessions, and networking opportunities designed to
        equip students with the knowledge and confidence to navigate the
        entrepreneurial landscape. With insights from successful founders and
        business leaders, E-Summit fosters an environment where innovation
        thrives, ideas take shape, and future entrepreneurs find the inspiration
        to embark on their startup journey.
      </div>
    </div>
  );
}
