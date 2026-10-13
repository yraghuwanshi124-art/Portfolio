
import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../assets/assets/assets';
import ProjectCard from './ProjectCard';

const Projects = () => {
    const containerVariants = {
        hidden: {},
        visible: {
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 55,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            y: 0,
            scale: 1,
            transition: {
                duration: 0.65,
                ease: 'easeOut',
            },
        },
    };

    return (
        <section
            id="project"
            className="relative overflow-hidden bg-[#0c0b12] py-24 text-white sm:py-28"
        >
            {/* Background glow effects */}
            <div className="pointer-events-none absolute -left-32 top-40 h-72 w-72 rounded-full bg-purple-700/15 blur-[120px]" />
            <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[120px]" />

            <div className="container relative z-10 mx-auto mt-4 px-6">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium tracking-wide text-purple-300">
                        MY RECENT WORK
                    </span>

                    <h2 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl">
                        My{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                            Projects
                        </span>
                    </h2>

                    <p className="mx-auto max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                        A collection of projects where I turn ideas into
                        practical experiences through software development.
                    </p>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 90 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mx-auto mt-7 h-1 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"
                    />
                </motion.div>

                {/* Project cards */}
                {projects.length > 0 ? (
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.08 }}
                        className="mx-auto grid max-w-6xl grid-cols-1 gap-8 md:grid-cols-2"
                    >
                        {projects.map((data, index) => (
                            <motion.article
                                key={data.title || index}
                                variants={cardVariants}
                                whileHover={{
                                    y: -8,
                                    transition: { duration: 0.25 },
                                }}
                                className="group relative flex h-full flex-col overflow-hidden rounded-2xl"
                            >
                                {/* Hover glow */}
                                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-purple-500/50 via-transparent to-fuchsia-500/30 opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />

                                {/* Card content */}
                                <div className="relative flex h-full flex-col overflow-hidden rounded-2xl border border-white/[0.08] bg-[#13121b] transition-colors duration-300 group-hover:border-purple-500/40">
                                    {/* Project details */}
                                    <div className="flex-1">
                                        <ProjectCard {...data} />
                                    </div>

                                    {/* Project links */}
                                    {(data.github || data.demo) && (
                                        <div className="flex flex-wrap gap-3 border-t border-white/[0.07] p-5">
                                            {data.github && (
                                                <motion.a
                                                    href={data.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileTap={{ scale: 0.97 }}
                                                    className="flex min-h-11 flex-1 items-center justify-center rounded-lg border border-purple-500/50 bg-purple-500/5 px-4 py-3 text-sm font-semibold text-purple-300 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500 hover:text-white"
                                                    aria-label={`View ${data.title || 'project'} source code on GitHub`}
                                                >
                                                    View Source Code
                                                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                                                        ↗
                                                    </span>
                                                </motion.a>
                                            )}

                                            {data.demo && (
                                                <motion.a
                                                    href={data.demo}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    whileTap={{ scale: 0.97 }}
                                                    className="flex min-h-11 flex-1 items-center justify-center rounded-lg bg-gradient-to-r from-purple-600 to-violet-600 px-4 py-3 text-sm font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:from-purple-500 hover:to-fuchsia-500"
                                                    aria-label={`Open ${data.title || 'project'} live demo`}
                                                >
                                                    Live Demo
                                                    <span className="ml-2 transition-transform duration-300 group-hover:translate-x-1">
                                                        ↗
                                                    </span>
                                                </motion.a>
                                            )}
                                        </div>
                                    )}
                                </div>
                            </motion.article>
                        ))}
                    </motion.div>
                ) : (
                    <p className="py-10 text-center text-gray-400">
                        Projects will be displayed here soon.
                    </p>
                )}

                {/* Bottom message */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mt-14 text-center text-sm text-gray-500"
                >
                    Every project is another step forward in my development journey.
                </motion.p>
            </div>
        </section>
    );
};

export default Projects;
