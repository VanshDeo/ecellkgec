'use client';

import { useState, useEffect } from 'react';
import styles from './styles.module.scss';
import Picture1 from '../../../public/images/10.jpg';
import Image from 'next/image';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import EgnitionLetterAnimation from '../EgnitionLetterAnimation';

export default function EgnitionImageAnimation() {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    const [isMobile, setIsMobile] = useState(false);

    // Check window size on mount and whenever window resizes
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // Mobile breakpoint
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Initial check

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    // Scale and opacity transforms for the image
    const scale = useTransform(
        scrollYProgress,
        [0, 1],
        isMobile ? [0.9, 1] : [0.5, 1] // Scale from 0.7 to 1 for mobile, and from 0.5 to 1 for larger screens
    );
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 1]);

    return (
        <div ref={container} className={styles.container}>
            {/* Animated Letters */}
            <div className={styles.letterAnimation}>
                <EgnitionLetterAnimation />
            </div>
            <motion.div style={{ scale, opacity }} className={`${styles.imageContainer} ${isMobile? " " : "rounded-t-3xl" }`}>
                <Image
                    src={Picture1}
                    fill
                    alt="Silencio"
                    placeholder="blur"
                />
            </motion.div>
        </div>
    );
}
