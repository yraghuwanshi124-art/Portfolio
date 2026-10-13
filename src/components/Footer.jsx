
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className="relative overflow-hidden border-t border-purple-500/20 bg-[#0c0b12] px-6 py-8 text-white">
            {/* Top gradient line */}
            <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-purple-500 to-transparent" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: true }}
                className="container mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 sm:flex-row"
            >
                {/* Copyright */}
                <p className="text-center text-sm leading-6 text-gray-400 sm:text-left">
                    © {new Date().getFullYear()}{" "}
                    <span className="font-semibold text-purple-300">
                        Honey Aswani
                    </span>
                    . All Rights Reserved.
                </p>

                {/* Back to top */}
                <motion.button
                    type="button"
                    onClick={scrollToTop}
                    whileHover={{ y: -4 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-2 rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2.5 text-sm font-medium text-purple-300 transition-all duration-300 hover:border-purple-400 hover:bg-purple-500 hover:text-white"
                >
                    Back to Top
                    <span className="transition-transform duration-300 group-hover:-translate-y-1">
                        ↑
                    </span>
                </motion.button>
            </motion.div>

            {/* Bottom tagline */}
            <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                viewport={{ once: true }}
                className="mt-6 text-center text-xs tracking-wide text-gray-600"
            >
                Designed with passion · Built with React
            </motion.p>
        </footer>
    );
};

export default Footer;
