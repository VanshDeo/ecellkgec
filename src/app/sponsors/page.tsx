import React from "react";
import { company } from "@/assets/images/sponsor/Index";
import Image from "next/image";
import StickyFooterContent from "@/components/StickyFooterContent";

const Sponsors = () => {
  return (
    <>
      <div className="w-full h-screen py-20 space-y-10">
          <h2 className="text-center text-[#F7931E] text-5xl font-bold">PREVIOUS SPONSORS</h2>
        <div className="grid grid-cols-2 gap-4 p-4 sm:grid-cols-4">
          {company.map((sponsor, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md flex justify-center items-center"
            >
              <Image
                src={sponsor.logo}
                alt={sponsor.name}
                width={150}
                height={150}
              />
            </div>
          ))}
        </div>
        <StickyFooterContent/>
      </div>
    </>
  );
};

export default Sponsors;
