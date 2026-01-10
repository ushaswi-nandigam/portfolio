'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import Image from 'next/image';

export default function Hero() {
    const laptopRef = useRef<HTMLDivElement | null>(null);
    const cameraRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const laptop = laptopRef.current;
        const camera = cameraRef.current;

        if (laptop && camera) {
            gsap.set(laptop, {
                y: -500,
                opacity: 0,
                scale: 0.5,
                rotation: -12,
            });

            gsap.set(camera, {
                y: 500,
                opacity: 0,
                scale: 0.5,
                rotation: 12,
            });

            gsap.to(laptop, {
                y: 0,
                opacity: 1,
                scale: 1,
                rotation: -12,
                duration: 1.2,
                ease: 'back.out(1.2)',
                delay: 0.5,
            });

            gsap.to(camera, {
                y: 0,
                opacity: 1,
                scale: 1,
                rotation: 12,
                duration: 1.2,
                ease: 'back.out(1.2)',
                delay: 0.7,
            });

            gsap.to(laptop, {
                y: '-=15',
                duration: 2.5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: 1.7,
            });

            gsap.to(camera, {
                y: '+=15',
                duration: 3,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut',
                delay: 1.9,
            });
        }

        return () => {
            if (laptop) gsap.killTweensOf(laptop);
            if (camera) gsap.killTweensOf(camera);
        };
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center pt-24 relative overflow-hidden bg-cream">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_40px,rgba(13,13,13,0.03)_40px,rgba(13,13,13,0.03)_42px),repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(13,13,13,0.03)_40px,rgba(13,13,13,0.03)_42px)]" />
                <img
                    src="/images/bg.png?v=2"
                    alt="Background"
                    className="w-full h-full object-cover opacity-15 img-secure"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                />
            </div>



            <div
                ref={laptopRef}
                className="absolute hidden lg:block left-[2%] top-[22%] z-10 opacity-0"
            >
                <div className="relative">
                    <Image
                        src="/images/laptop.png"
                        alt="Laptop"
                        width={280}
                        height={280}
                        className="object-contain drop-shadow-xl img-secure"
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                    />
                </div>
            </div>

            <div
                ref={cameraRef}
                className="absolute hidden lg:block right-[0%] bottom-[10%] z-10 opacity-0"
            >
                <div className="relative">
                    <Image
                        src="/images/camera.png"
                        alt="Camera"
                        width={320}
                        height={320}
                        className="object-contain drop-shadow-xl img-secure"
                        onContextMenu={(e) => e.preventDefault()}
                        onDragStart={(e) => e.preventDefault()}
                    />
                </div>
            </div>

            <div className="container-neo text-center relative z-20">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                >
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, rotate: -3 }}
                        animate={{ opacity: 1, scale: 1, rotate: -2 }}
                        transition={{ delay: 0.2, type: 'spring' }}
                        className="inline-block mb-12"
                    >
                        <span className="inline-block bg-mustard text-charcoal text-2xl md:text-3xl font-code font-bold px-8 py-4 border-5 border-charcoal shadow-[8px_8px_0px_#0D0D0D] hover:shadow-[12px_12px_0px_#E94E1B] hover:-translate-y-1 hover:-translate-x-1 transition-all duration-200">
                            Hello, World!
                        </span>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.4, type: 'spring' }}
                        className="mb-14"
                    >
                            <h1 className="heading-display text-5xl sm:text-7xl md:text-8xl text-charcoal leading-tight flex flex-wrap justify-center items-center gap-x-4">
                                <span className="font-serif font-black inline-block relative top-[0.05em] leading-none">I</span>
                                <span className="relative inline-block font-jetbrains text-terracotta text-6xl sm:text-8xl md:text-9xl tracking-tighter scale-[0.99]">
                                    Code
                                    <motion.span
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ delay: 0.8, duration: 0.6 }}
                                        className="absolute bottom-2 left-0 h-5 bg-mustard/60 -z-10"
                                    />
                                </span>
                                <span className="font-serif font-black inline-block relative top-[0.05em] leading-none">&</span>
                                <span className="relative inline-block font-cursive text-olive text-4xl sm:text-6xl md:text-7xl scale-[1.13]">
                                    Capture
                                    <motion.span
                                        initial={{ width: 0 }}
                                        animate={{ width: '100%' }}
                                        transition={{ delay: 1.2, duration: 0.6 }}
                                        className="absolute bottom-2 left-0 h-5 bg-olive/30 -z-10"
                                    />
                                </span>
                            </h1>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.9 }}
                        className="flex flex-col sm:flex-row gap-5 justify-center items-center"
                    >
                        <a href="#projects" className="neo-btn text-base px-8 py-4">
                            View Projects
                        </a>
                        <a href="#gallery" className="neo-btn neo-btn-olive text-base px-8 py-4" style={{ backgroundColor: 'var(--olive)' }}>
                            See Photos
                        </a>
                    </motion.div>
                </motion.div>
            </div>


        </section>
    );
}
