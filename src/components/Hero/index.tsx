"use client";
import HeroAnimation from "../HeroAnimation/page";
// import styles from "./styles.module.scss";
// import { slideUp } from "./animation";
// import { motion } from "framer-motion";
import ImageCar from "../imageCarousal/Index";
// import { heroSlides } from "@/assets/images/slides";
// import PageSection from "@/hooks/PageSection";
import { ImageArray } from "@/utils/data/ImageCarousel";
export default function Home() {
  return (
    <div className="w-[100%] h-screen">
      <ImageCar images={ImageArray} />
      <HeroAnimation />
    </div>
  );
}
