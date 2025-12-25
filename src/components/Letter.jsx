import React from 'react';
import { motion } from 'framer-motion';

const Letter = () => {
    return (
        <section className="section-container relative z-10">
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass-card p-8 md:p-12 transform rotate-1 hover:rotate-0 transition-transform duration-500"
                style={{ padding: '3rem' }}
            >
                <div className="max-w-3xl mx-auto" style={{ maxWidth: '48rem', marginLeft: 'auto', marginRight: 'auto' }}>
                    <h2 className="text-4xl md:text-5xl mb-8 text-center text-[#590d22]">My Letter to You</h2>

                    <div className="prose prose-lg text-[#800f2f] mx-auto leading-relaxed text-lg md:text-xl font-handwriting">
                        <p className="mb-6">
                            My Dearest,
                        </p>
                        <p className="mb-6 indent-8">
                            I know I'm a little late for the official "National Love Day," I honestly had no idea this day exists. But now that I know it does, I want to take this opportunity to express my love for you.
                        </p>
                        <p className="mb-6 indent-8">
                            You've become the most beautiful part of my reality. In a world that is often chaotic and loud, you are my quiet place, my peace, and my home. I appreciate every moment we spend together, every laugh, every smile, and every moment of silence. I appreciate everything you do for me, and I love every bit of it. I love you more than words can express.
                        </p>
                        <p className="mb-6 indent-8">
                            I love you for being you. For your laughter, your kindness, and even your stubborn moments. I love every bit of it.
                        </p>
                        <p className="mt-12 text-right font-script text-3xl">
                            Always yours,<br />
                            Ali
                        </p>
                    </div>
                </div>
            </motion.div>
        </section>
    );
};

export default Letter;
