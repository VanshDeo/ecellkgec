// import Hero from '@/components/Hero';
import About from "@/components/About/About";
import Events from "@/components/Events/Events";
import Hero from "@/components/Hero";
import StickyFooter from "@/components/StickyFooter";
import { NextPage } from "next";
// import Head from 'next/head';
// import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <>
      <div>
        <Hero />
        <About/>
        <Events/>
        <StickyFooter/>
      </div>
    </>
  );
};

export default Home;
