import React from 'react';
import { motion } from 'framer-motion';

const poems = [
    {
        title: "She Walks in Beauty",
        author: "Lord Byron",
        lines: [
            "She walks in beauty, like the night",
            "Of cloudless climes and starry skies;",
            "And all that's best of dark and bright",
            "Meet in her aspect and her eyes..."
        ]
    },
    {
        title: "My Love",
        author: "Your Sweet Ali",
        lines: [
            "In your eyes, I found my home.",
            "In your heart, I found my love.",
            "In your soul, I found my mate.",
            "With you, I found my fate."
        ]
    }
];

const Poetry = () => {
    return (
        <section className="section-container">
            <h2 className="text-4xl md:text-5xl text-center mb-12 text-[#590d22]">Poetry for You</h2>

            <div className="grid md:grid-cols-2 gap-8">
                {poems.map((poem, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.8 }}
                        className="glass-card p-8 text-center"
                    >
                        <h3 className="text-2xl font-bold mb-2 text-[#800f2f]">{poem.title}</h3>
                        <p className="text-sm italic mb-6 text-[#c9184a]">- {poem.author}</p>
                        <div className="space-y-2 font-serif text-lg text-[#590d22]">
                            {poem.lines.map((line, i) => (
                                <p key={i}>{line}</p>
                            ))}
                        </div>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default Poetry;
