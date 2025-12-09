"use client"; // Make it a client-side component

import Image from "next/image";
import { galleryItems2 } from "@/utils/data/GalleryItems2";

const LumoraGallery = () => {
  const imagesToShow = galleryItems2.slice(0, 6); // Get the first 6 images

  return (
    <div className="w-full flex gap-[2rem] flex-col justify-center items-center md:p-16 p-4">
      <h2 className="text-center text-5xl font-bold relative text-[#F7931E]">
        GALLERY
      </h2>
      <div className="w-full h-fit grid gap-[0.2rem] md:gap-[2rem] grid-cols-2 lg:grid-cols-4 grid-rows-auto">
        {imagesToShow.map((image) => (
          <div
            key={image.id}
            className={`w-full h-full relative ${
              image.id === 3 || image.id === 4
                ? "col-span-2 row-span-2"
                : "col-span-1 row-span-1"
            }`}
          >
            <Image
              alt="gallery image"
              src={image.imageNew}
              width={500}
              height={500}
              className="w-full h-full rounded-lg object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LumoraGallery;
