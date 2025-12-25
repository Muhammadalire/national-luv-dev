import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const prayers = [
    "May your heart always be as light as a feather and as full as the ocean.",
    "I pray that every tear you shed is replaced by a thousand smiles.",
    "May the universe always conspire to bring you happiness, safety, and peace.",
    "I pray that our bond grows stronger with every passing day, protected from all harm."
];

const Prayers = () => {
    return (
        <section className="section-container relative">
            <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
                <Sparkles size={400} />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="glass-card p-10 md:p-16 text-center max-w-4xl mx-auto border-2 border-[#ffb3c1]"
            >
                <h2 className="text-4xl md:text-5xl mb-10 text-[#590d22]">My Prayers for You</h2>

                <div className="space-y-8">
                    {prayers.map((prayer, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="relative"
                        >
                            <p className="text-xl md:text-2xl font-light text-[#800f2f] italic">
                                "{prayer}"
                            </p>
                            {index < prayers.length - 1 && (
                                <div className="w-12 h-1 bg-[#ffb3c1] mx-auto mt-6 rounded-full opacity-50"></div>
                            )}
                        </motion.div>
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

export default Prayers;
