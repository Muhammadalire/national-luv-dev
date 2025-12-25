import React from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

const Hero = () => {
    return (
        <section className="min-h-screen flex flex-col items-center justify-center text-center px-4 relative overflow-hidden">
            <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1, type: "spring" }}
                className="z-10"
            >
                <span className="font-script text-3xl md:text-5xl text-[#ff4d6d] block mb-4">
                    Happy National Love Day
                </span>
                <h1 className="text-6xl md:text-8xl font-bold mb-6 text-[#590d22] leading-tight">
                    To My Girl
                </h1>
                <p className="text-xl md:text-2xl text-[#800f2f] max-w-lg mx-auto font-light">
                    Better late than never, because loving you is a daily celebration.
                </p>
            </motion.div>

            {/* Floating Hearts Background */}
            <div className="absolute inset-0 pointer-events-none">
                {[...Array(12)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{
                            y: '100vh',
                            x: Math.random() * 100 + 'vw',
                            opacity: 0,
                            scale: 0.5 + Math.random() * 0.5
                        }}
                        animate={{
                            y: '-20vh',
                            opacity: [0, 1, 0],
                            rotate: Math.random() * 360
                        }}
                        transition={{
                            duration: 10 + Math.random() * 10,
                            repeat: Infinity,
                            delay: Math.random() * 10
                        }}
                        className="absolute"
                    >
                        <Heart
                            size={24 + Math.random() * 48}
                            className="text-[#ff8fa3] fill-[#ff8fa3]"
                            style={{ opacity: 0.3 }}
                        />
                    </motion.div>
                ))}
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 animate-bounce"
            >
                <span className="text-sm tracking-widest uppercase text-[#800f2f]">Scroll Down</span>
            </motion.div>
        </section>
    );
};

export default Hero;
