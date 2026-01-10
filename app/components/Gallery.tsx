'use client';

import { motion } from 'framer-motion';

const photos = [
    { id: 1, title: 'Harvest Glow', src: '/images/photography/sweet%20corn.JPG' },
    { id: 2, title: 'Sacred Serenity', src: '/images/photography/idol.JPG' },
    { id: 4, title: 'Blooms in Sun', src: '/images/photography/Hibiscus.JPG' },
    { id: 5, title: 'Architectural Echoes', src: '/images/photography/hall.JPG' },
    { id: 6, title: 'Floral Symphony', src: '/images/photography/flowers.JPG' },
    { id: 7, title: 'Candid Grace', src: '/images/photography/girl.JPG' },
    { id: 8, title: 'Golden Hour', src: '/images/photography/Door.JPG' },
    { id: 9, title: 'Wander', src: '/images/photography/boy.jpg' },
    { id: 3, title: "Artisan's Touch", src: '/images/photography/Pottery.jpg' },
];

export default function Gallery() {
    return (
        <section id="gallery" className="section-padding bg-olive relative overflow-hidden">
            <div className="absolute inset-0 z-0">
                <div className="absolute inset-0 bg-[repeating-linear-gradient(0deg,transparent,transparent_40px,rgba(13,13,13,0.03)_40px,rgba(13,13,13,0.03)_42px),repeating-linear-gradient(90deg,transparent,transparent_40px,rgba(13,13,13,0.03)_40px,rgba(13,13,13,0.03)_42px)]" />
            </div>

            <div className="container-neo relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-100px' }}
                    transition={{ duration: 0.6 }}
                    className="mb-14"
                >
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-10">
                        <div className="inline-block bg-cream border-5 border-charcoal shadow-[8px_8px_0_#0D0D0D] px-8 py-4 self-start">
                            <h2 className="heading-section text-charcoal after:bg-terracotta">Photography</h2>
                        </div>
                        <p className="text-cream/90 text-lg max-w-md font-medium">
                            Capturing life&apos;s fleeting moments through my lens. A selection of my favorite shots.
                        </p>
                    </div>
                </motion.div>

                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {photos.map((photo, index) => (
                        <motion.div
                            key={photo.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.4, delay: index * 0.05 }}
                            className="break-inside-avoid neo-card overflow-hidden group cursor-default bg-cream"
                        >
                            <div className="relative border-b-5 border-charcoal overflow-hidden bg-charcoal/10">
                                <img
                                    src={photo.src}
                                    alt={photo.title}
                                    className="w-full h-auto object-cover transition-all duration-500 img-secure"
                                    onContextMenu={(e) => e.preventDefault()}
                                    onDragStart={(e) => e.preventDefault()}
                                />

                                <motion.div
                                    initial={{ opacity: 0 }}
                                    whileHover={{ opacity: 1 }}
                                    className="absolute inset-0 bg-charcoal/60 flex items-center justify-center"
                                >
                                    <div className="text-center p-4">
                                        <span className="text-cream font-black text-xl block uppercase tracking-tight">
                                            {photo.title}
                                        </span>
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                    className="mt-14 text-center"
                >
                    <a 
                        href="https://www.instagram.com/chaaya_grahanam?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="neo-btn neo-btn-secondary inline-flex items-center gap-3"
                    >
                        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                        </svg>
                        Follow on Instagram
                    </a>
                </motion.div>
            </div>
        </section>
    );
}
