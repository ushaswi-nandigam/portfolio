'use client';

import { motion } from 'framer-motion';

const projects = [
    {
        title: 'Distributor AI',
        description: 'An intelligent distribution agent core built with Gemini and FastAPI for seamless operations.',
        tags: ['Python', 'FastAPI', 'Gemini', 'Next.js'],
        bgColor: 'bg-terracotta',
        number: '01',
        github: 'https://github.com/ushaswi-nandigam/distributor-agent-core.git',
    },
    {
        title: 'QuickBite',
        description: 'A robust food ordering platform developed using React and SpringBoot for high-performance handling.',
        tags: ['React.js', 'Java', 'MySQL', 'SpringBoot'],
        bgColor: 'bg-olive',
        number: '02',
        github: 'https://github.com/ushaswi-nandigam/quickbite.git',
    },
    {
        title: 'CXR Interpretation using AI',
        description: 'AI-powered chest X-ray interpretation system utilizing Neural Networks and DenseNet121 architecture.',
        tags: ['Python', 'Neural Networks', 'Densenet121'],
        bgColor: 'bg-charcoal',
        number: '03',
        github: 'https://github.com/ushaswi-nandigam/cxr-interpretation-using-ai.git',
    },
    {
        title: 'Job Portal',
        description: 'A full-stack job portal connecting employers and candidates with advanced search and management.',
        tags: ['React.js', 'Java', 'MySQL', 'SpringBoot'],
        bgColor: 'bg-mustard',
        number: '04',
        github: 'https://github.com/ushaswi-nandigam/kljobportal.git',
    },
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding bg-cream relative overflow-hidden">
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
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div className="inline-block bg-charcoal border-5 border-charcoal shadow-[8px_8px_0_#E94E1B] px-8 py-4">
                            <h2 className="heading-section text-cream after:bg-mustard">Projects</h2>
                        </div>
                        <p className="text-charcoal/80 text-lg max-w-md font-medium">
                            A selection of projects showcasing my skills from machine learning to full-stack web apps.
                        </p>
                    </div>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <motion.article
                            key={project.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-50px' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="neo-card p-0 overflow-hidden group"
                        >
                            <div className={`${project.bgColor} p-6 border-b-5 border-charcoal relative`}>
                                <div className="flex items-start justify-between gap-4 relative z-10">
                                    <h3 className="text-2xl font-black text-cream uppercase tracking-tight group-hover:underline decoration-4 underline-offset-4">
                                        {project.title}
                                    </h3>
                                    <div className="w-12 h-12 bg-cream border-4 border-charcoal shadow-[3px_3px_0_#0D0D0D] flex items-center justify-center text-xl flex-shrink-0 group-hover:rotate-12 transition-transform">
                                        <span>💻</span>
                                    </div>
                                </div>
                            </div>

                            <div className="p-6 bg-cream">
                                <p className="text-charcoal/85 mb-5 leading-relaxed text-base">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.tags.map((tag) => (
                                        <span key={tag} className="neo-tag text-xs">
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <div className="flex gap-4">
                                    <a
                                        href={project.github}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-2 font-bold text-charcoal uppercase text-sm border-3 border-charcoal px-4 py-2 bg-sand hover:bg-charcoal hover:text-cream transition-colors shadow-[3px_3px_0_#0D0D0D] hover:shadow-[5px_5px_0_#0D0D0D] hover:-translate-x-[2px] hover:-translate-y-[2px]"
                                    >
                                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                                            <path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0112 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z" />
                                        </svg>
                                        Code
                                    </a>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
}
