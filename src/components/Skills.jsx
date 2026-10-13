
import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../assets/assets/assets';

const Skills = () => {
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
            y: 60,
            scale: 0.92,
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
            id="skills"
            className="relative overflow-hidden bg-[#0c0b12] py-24 text-white sm:py-28"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-700/15 blur-[120px]" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-violet-600/15 blur-[120px]" />

            <div className="container relative z-10 mx-auto px-6">
                {/* Section heading */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: 'easeOut' }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium tracking-wide text-purple-300">
                        WHAT I WORK WITH
                    </span>

                    <h2 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl">
                        My{' '}
                        <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                            Skills
                        </span>
                    </h2>

                    <p className="mx-auto max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                        Technologies, tools, and concepts I explore to build
                        creative solutions and improve my development skills.
                    </p>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 90 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mx-auto mt-7 h-1 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"
                    />
                </motion.div>

                {/* Skill cards */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.1 }}
                    className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
                >
                    {skills.map((data, index) => {
                        const SkillIcon = data.icon;

                        return (
                            <motion.div
                                key={data.title || index}
                                variants={cardVariants}
                                whileHover={{
                                    y: -10,
                                    scale: 1.02,
                                    transition: { duration: 0.25 },
                                }}
                                className="group relative h-full"
                            >
                                {/* Card glow */}
                                <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-purple-500/40 via-transparent to-fuchsia-500/30 opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />

                                {/* Card */}
                                <div className="relative h-full min-h-56 rounded-2xl border border-white/[0.08] bg-[#13121b] p-7 transition-colors duration-300 group-hover:border-purple-500/40">
                                    {/* Icon */}
                                    <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-3xl text-purple-400 transition-all duration-300 group-hover:scale-110 group-hover:border-purple-400/40 group-hover:bg-purple-500/20 group-hover:text-purple-300">
                                        <SkillIcon />
                                    </div>

                                    {/* Title */}
                                    <h3 className="mb-3 text-xl font-semibold text-white transition-colors duration-300 group-hover:text-purple-300">
                                        {data.title}
                                    </h3>

                                    {/* Description */}
                                    <p className="text-sm leading-7 text-gray-400">
                                        {data.description}
                                    </p>

                                    {/* Bottom accent */}
                                    <div className="mt-6 h-[2px] w-10 rounded-full bg-purple-500/60 transition-all duration-300 group-hover:w-20 group-hover:bg-fuchsia-400" />
                                </div>
                            </motion.div>
                        );
                    })}
                </motion.div>

                {/* Bottom note */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mt-12 text-center text-sm text-gray-500"
                >
                    Always learning. Always building. Always improving.
                </motion.p>
            </div>
        </section>
    );
};

export default Skills;
