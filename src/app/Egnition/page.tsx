import EgnitionAbout from '@/components/EgnitionAbout';
import EginitionEvents from '@/components/EgnitionEvents';
import EgnitionGallery from '@/components/EgnitionGallery';
import EgnitionImageAnimation from '@/components/EgnitionImageAnimation';
import EgnitionSpeakers from '@/components/EgnitionSpeakers/Index';
import EventCardGrid from '@/components/ModernEventCard/EventCardGrid';
import StickyFooterContent from '@/components/StickyFooterContent';
import { NextPage } from 'next';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Egnition - E-Cell Annual Flagship Event',
  description: 'Egnition is the annual flagship event by E-Cell, bringing together entrepreneurs, innovators, and business leaders.',
};

const Egnition: NextPage = () => {
  return (
    // <div className="bg-white min-h-screen overflow-hidden">
    //   {/* Hero Section */}
    //   <section>
    //     <EgnitionImageAnimation />
    //   </section>
      
    //   {/* About Section */}
    //   <section>
    //     <EgnitionAbout />
    //   </section>
      
    //   {/* Modern Event Cards Section */}
    //   <section className="relative z-10">
    //     <EventCardGrid />
    //   </section>
      
    //   {/* Events Section */}
    //   <section className="relative z-10">
    //     <EginitionEvents />
    //   </section>
      
    //   {/* Speakers Section */}
    //   <section className="relative z-10">
    //     <EgnitionSpeakers />
    //   </section>
      
    //   {/* Gallery Section */}
    //   <section>
    //     <EgnitionGallery />
    //   </section>
      
    //   {/* Footer */}
    //   <section>
    //     <StickyFooterContent />
    //   </section>
    // </div>
    <>
    <EgnitionImageAnimation />
    <EgnitionAbout />
    <EventCardGrid />
    <EginitionEvents />
    <EgnitionSpeakers />
    <EgnitionSpeakers />
    <EgnitionGallery />
    <StickyFooterContent />
    </>
  );
};

export default Egnition;