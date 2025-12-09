'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LumoraLetterAnimation() {
    const text = "LUMORA";
    const loremText = "LUMORA is the prestigious idea-pitching competition hosted by us where visionary students present innovative ideas that blend creativity, technology, and impact.";
    const [letters, setLetters] = useState<string[]>([]);
    const [words, setWords] = useState<string[]>([]);
    const [isSmallScreen, setIsSmallScreen] = useState<boolean>(false);

    useEffect(() => {
        setLetters(text.split(''));
        setWords(loremText.split(' '));

        const handleResize = () => {
            setIsSmallScreen(window.innerWidth < 768);
        };

        handleResize();  // Check on initial load
        window.addEventListener('resize', handleResize);  // Add event listener to track window resize

        return () => {
            window.removeEventListener('resize', handleResize);  // Cleanup on unmount
        };
    }, []);

    const fontSize = `max(4rem, 10vw)`;

    const handleScrollToAbout = () => {
        const aboutSection = document.getElementById('lumora-about');
        if (aboutSection) {
            aboutSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
                inline: 'nearest',
            });
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: "50vh", paddingTop: "40vh", marginBottom: isSmallScreen ? '20vh' : '5vh' }}>
            {/* Animated Letters */}
            <motion.div
                style={{ display: 'flex', fontSize: fontSize, fontWeight: 'bold' }}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
            >
                {letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        style={{ display: 'inline-block' }}
                        initial={{ y: 20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        transition={{
                            y: { type: 'spring', stiffness: 300, damping: 15, delay: index * 0.1 },
                            opacity: { delay: index * 0.1 }
                        }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>

            {/* Animated Lorem Ipsum Text */}
            <motion.div
                style={{ width: '100vw', maxWidth: '1000px', textAlign: 'center' }}
            >
                <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                    {words.map((word, index) => (
                        <motion.span
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                opacity: { delay: index * 0.1, duration: 0.5 },
                                x: { delay: index * 0.1, type: 'spring', stiffness: 300, damping: 25 }
                            }}
                            style={{
                                fontSize: isSmallScreen ? '15px' : '1rem',
                                whiteSpace: 'nowrap'
                            }}
                        >
                            {word}&nbsp;
                        </motion.span>
                    ))}
                </div>
            </motion.div>

            {/* Read More Button */}
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
                style={{ marginTop: '20px' }}
            >
                <motion.button
                    onClick={handleScrollToAbout}
                    style={{
                        padding: '10px 20px',
                        fontSize: '1rem',
                        border: '2px solid #000',
                        backgroundColor: 'transparent',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        borderRadius: '5px',
                        transition: 'all 0.3s ease',
                    }}
                    whileHover={{
                        scale: 1.1,
                        backgroundColor: '#000',
                        color: '#fff',
                    }}
                    whileTap={{
                        scale: 0.95,
                    }}
                >
                    Read More
                </motion.button>
            </motion.div>
        </div>
    );
}
