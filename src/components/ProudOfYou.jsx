import React from 'react';
import { motion } from 'framer-motion';

const ProudOfYou = () => {
    return (
        <section className="section-container pb-20">
            <motion.div
                initial={{ opacity: 0, x: -100 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
                className="glass-card p-10 md:p-14 border-l-8 border-[#c9184a]"
            >
                <h2 className="text-4xl md:text-5xl mb-6 text-[#590d22]">Why I'm So Proud of You</h2>

                <p className="text-lg md:text-xl text-[#800f2f] leading-loose">
                    Baby, looking at you fills me with so much pride. I've watched you handle challenges with grace, chase your dreams with passion, and treat others with a kindness that is rare in this world.
                    You are constantly growing, constantly evolving, and becoming an even more amazing version of yourself every single day.
                    I am so proud of the woman you are, the woman you are becoming, and everything you have achieved.
                    Keep shining, because your light inspires me more than you'll ever know.
                </p>
            </motion.div>
        </section>
    );
};

export default ProudOfYou;
