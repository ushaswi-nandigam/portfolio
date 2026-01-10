'use client';

import { motion } from 'framer-motion';

export default function About() {
    return (
        <section id="about" className="section-padding bg-mustard relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_40px,rgba(13,13,13,0.03)_40px,rgba(13,13,13,0.03)_42px),repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(13,13,13,0.03)_40px,rgba(13,13,13,0.03)_42px)]" />
            </div>

            <div className="container-neo relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-16"
                >
                    <div className="inline-block bg-cream border-5 border-charcoal shadow-[8px_8px_0_#0D0D0D] px-8 py-4">
                        <h2 className="heading-section text-charcoal after:bg-terracotta">About Me</h2>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-10 items-start">
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="neo-card p-5 bg-cream">
                            <div className="aspect-square bg-olive/20 border-5 border-charcoal flex items-center justify-center relative overflow-hidden group">
                                <img
                                    src="/images/Nandigam%20Ushaswi_2300031874.JPG"
                                    alt="Nandigam Ushaswi"
                                    className="w-full h-full object-cover transition-all duration-500 img-secure"
                                    onContextMenu={(e) => e.preventDefault()}
                                    onDragStart={(e) => e.preventDefault()}
                                />
                            </div>
                        </div>
                        <div className="absolute -bottom-5 -right-5 w-full h-full border-5 border-charcoal -z-10 bg-terracotta" />
                        <motion.div
                            initial={{ rotate: 0 }}
                            whileHover={{ rotate: 6 }}
                            className="absolute -top-4 -right-4 bg-cream border-4 border-charcoal shadow-[4px_4px_0_#0D0D0D] px-4 py-2 rotate-3"
                        >
                            <span className="font-bold text-charcoal text-sm uppercase">That&apos;s me!</span>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-100px' }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="space-y-6"
                    >
                        <div className="neo-card p-8 bg-cream">
                            <h3 className="text-2xl font-black text-charcoal mb-5 uppercase tracking-tight">
                                Bridging Code & Creativity
                            </h3>
                            <p className="text-charcoal/85 text-lg leading-relaxed mb-5">
                                I&apos;m a Computer Science student who enjoys turning ideas into clean, well-designed, and functional applications.
                                When I step away from the keyboard, I step behind a camera, using photography to explore creativity, detail, and depth.
                            </p>
                            <p className="text-charcoal/85 text-lg leading-relaxed">
                                If I&apos;m awake late at night, I&apos;m either training an AI model, wiring an LLM into an application, or crafting visuals in Lightroom.
                                Seeing the world as a series of frames has shaped how I think, blending technical precision with creative vision,
                                whether I&apos;m developing a website or capturing the perfect shot.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-5">
                            <motion.div
                                whileHover={{ y: -5, x: -5 }}
                                className="neo-card p-5 bg-terracotta text-cream"
                            >
                                <span className="text-4xl font-black block">3+</span>
                                <span className="font-bold uppercase text-sm tracking-wide">Years Coding</span>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5, x: -5 }}
                                className="neo-card p-5 bg-olive text-cream"
                            >
                                <span className="text-4xl font-black block">100+</span>
                                <span className="font-bold uppercase text-sm tracking-wide">Photos Taken</span>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5, x: -5 }}
                                className="neo-card p-5 bg-charcoal text-cream"
                            >
                                <span className="text-4xl font-black block">3+</span>
                                <span className="font-bold uppercase text-sm tracking-wide">Projects Built</span>
                            </motion.div>
                            <motion.div
                                whileHover={{ y: -5, x: -5 }}
                                className="neo-card p-5 bg-cream"
                            >
                                <span className="text-4xl font-black block text-terracotta">∞</span>
                                <span className="font-bold uppercase text-sm tracking-wide text-charcoal">Versions Ahead</span>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
