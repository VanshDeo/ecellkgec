import EsummitAbout from "@/components/EsummitAbout";
import EsummitEvents from "@/components/EsummitEvents";
import EsummitGallery from "@/components/EsummitGallery";
import EsummitImageAnimation from "@/components/EsummitImageAnimation";
import EsummitSpeakers from "@/components/EsummitSpeakers/Index";
import StickyFooterContent from "@/components/StickyFooterContent";
import { NextPage } from "next";

const Esummit: NextPage = () => {
  return (
    <>
      <EsummitImageAnimation />
      <EsummitAbout/>
      <EsummitEvents/>
      <EsummitSpeakers/>
      <EsummitGallery/>
      <StickyFooterContent/>
    </>
  );
};

export default Esummit;

