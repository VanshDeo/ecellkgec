'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

// Add letter variants for modern animation
const letterVariants = {
	initial: { y: 20, opacity: 0 },
	animate: (i: number) => ({
		y: 0,
		opacity: 1,
		transition: {
			delay: i * 0.1,
			type: 'spring',
			stiffness: 300,
			damping: 15,
		},
	}),
	hover: {
		scale: 1.2,
		transition: { type: 'spring', stiffness: 400, damping: 10 },
	},
};

export default function EgnitionLetterAnimation() {
    const text = "EGNITION";
    const loremText = "We believe in Inspiring young minds to think beyond boundaries, Innovate with purpose, and Ignite their Entrepreneurial Journey";
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
        const aboutSection = document.getElementById('egnition-about');
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
            >
                {letters.map((letter, index) => (
                    <motion.span
                        key={index}
                        custom={index}
                        variants={letterVariants}
                        initial="initial"
                        animate="animate"
                        whileHover="hover"
                        style={{ display: 'inline-block', color: '#FDC700' }}
                    >
                        {letter}
                    </motion.span>
                ))}
            </motion.div>

            {/* Animated Lorem Ipsum Text */}
            <motion.div
                style={{ width: '100vw', maxWidth: '1000px', textAlign: 'center', padding:"9px" }}
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

            {/* Read More Button with modern UI */}
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
                        background: 'linear-gradient(45deg, #FDC700, #F0B100)',
                        border: 'none',
                        cursor: 'pointer',
                        fontWeight: 'bold',
                        borderRadius: '8px',
                        color: '#fff',
                        boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
                    }}
                    whileHover={{
                        scale: 1.05,
                        boxShadow: '0 6px 8px rgba(0,0,0,0.15)',
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
