
import React from "react";
import { motion } from "framer-motion";
import { workData } from "../assets/assets/assets";

function Experience() {
    return (
        <section
            id="experience"
            className="relative overflow-hidden bg-[#0c0b12] px-6 py-24 text-white sm:py-28"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute -left-32 top-32 h-72 w-72 rounded-full bg-purple-700/15 blur-[120px]" />
            <div className="pointer-events-none absolute -right-32 bottom-20 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[120px]" />

            <div className="container relative z-10 mx-auto max-w-6xl">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-20 text-center"
                >
                    <span className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium tracking-wide text-purple-300">
                        MY PROFESSIONAL JOURNEY
                    </span>

                    <h2 className="mb-5 text-4xl font-bold tracking-tight sm:text-5xl">
                        Work{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                            Experience
                        </span>
                    </h2>

                    <p className="mx-auto max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                        My learning journey and experience in frontend
                        development, React, and problem solving.
                    </p>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 90 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mx-auto mt-7 h-1 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"
                    />
                </motion.div>

                {/* Timeline */}
                {workData.length > 0 ? (
                    <div className="relative">
                        {/* Timeline line */}
                        <div className="absolute bottom-0 left-[7px] top-0 w-px bg-gradient-to-b from-purple-500 via-violet-500/50 to-fuchsia-500/10 md:left-1/2 md:-translate-x-1/2" />

                        <div className="space-y-12 md:space-y-16">
                            {workData.map((item, index) => {
                                const isLeft = index % 2 === 0;

                                const dotColor =
                                    item.color === "pink"
                                        ? "bg-fuchsia-400"
                                        : item.color === "blue"
                                        ? "bg-blue-400"
                                        : "bg-purple-400";

                                return (
                                    <motion.div
                                        key={`${item.company}-${item.role}-${index}`}
                                        initial={{
                                            opacity: 0,
                                            x: isLeft ? -45 : 45,
                                            y: 20,
                                        }}
                                        whileInView={{
                                            opacity: 1,
                                            x: 0,
                                            y: 0,
                                        }}
                                        transition={{
                                            duration: 0.7,
                                            delay: 0.1,
                                            ease: "easeOut",
                                        }}
                                        viewport={{
                                            once: true,
                                            amount: 0.15,
                                        }}
                                        className={`relative flex pl-9 md:pl-0 ${
                                            isLeft
                                                ? "md:justify-start"
                                                : "md:justify-end"
                                        }`}
                                    >
                                        {/* Timeline dot */}
                                        <div className="absolute left-[7px] top-8 -translate-x-1/2 md:left-1/2">
                                            <motion.div
                                                initial={{ scale: 0 }}
                                                whileInView={{ scale: 1 }}
                                                transition={{
                                                    duration: 0.4,
                                                    delay: 0.2,
                                                }}
                                                viewport={{ once: true }}
                                                className={`relative h-4 w-4 rounded-full border-[3px] border-[#0c0b12] ${dotColor}`}
                                            >
                                                <span className="absolute -inset-2 animate-ping rounded-full bg-purple-500/20" />
                                            </motion.div>
                                        </div>

                                        {/* Experience card */}
                                        <motion.div
                                            whileHover={{
                                                y: -6,
                                                transition: {
                                                    duration: 0.25,
                                                },
                                            }}
                                            className="group relative w-full md:w-[44%]"
                                        >
                                            {/* Hover glow */}
                                            <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-purple-500/40 via-transparent to-fuchsia-500/30 opacity-0 blur-sm transition duration-500 group-hover:opacity-100" />

                                            <div className="relative h-full rounded-2xl border border-white/[0.08] bg-[#13121b]/95 p-6 backdrop-blur-xl transition-colors duration-300 group-hover:border-purple-500/40 sm:p-7">
                                                {/* Top row */}
                                                <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
                                                    <div>
                                                        <span className="mb-3 inline-flex rounded-lg border border-purple-500/20 bg-purple-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-purple-300">
                                                            Experience {String(index + 1).padStart(2, "0")}
                                                        </span>

                                                        <h3 className="text-xl font-bold leading-snug text-white transition-colors duration-300 group-hover:text-purple-300 sm:text-2xl">
                                                            {item.role}
                                                        </h3>
                                                    </div>

                                                    <span className="w-fit shrink-0 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-xs font-medium text-purple-300 sm:text-sm">
                                                        {item.duration}
                                                    </span>
                                                </div>

                                                {/* Company */}
                                                <h4 className="mb-4 flex items-center gap-2 text-lg font-semibold text-gray-200">
                                                    <span className="h-2 w-2 shrink-0 rounded-full bg-purple-400" />
                                                    {item.company}
                                                </h4>

                                                {/* Description */}
                                                <p className="text-sm leading-7 text-gray-400 sm:text-base">
                                                    {item.description}
                                                </p>

                                                {/* Bottom accent */}
                                                <div className="mt-6 h-[2px] w-12 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500 transition-all duration-300 group-hover:w-24" />
                                            </div>
                                        </motion.div>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </div>
                ) : (
                    <p className="py-10 text-center text-gray-400">
                        Experience details will be displayed here soon.
                    </p>
                )}

                {/* Footer text */}
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center text-sm text-gray-500"
                >
                    Every experience is an opportunity to learn, build, and grow.
                </motion.p>
            </div>
        </section>
    );
}

export default Experience;
