
import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
    FaEnvelope,
    FaGithub,
    FaInstagram,
    FaLinkedin,
    FaMapMarkerAlt,
    FaPhoneAlt,
} from "react-icons/fa";

const Contacts = () => {
    const form = useRef(null);
    const [sending, setSending] = useState(false);
    const [sent, setSent] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");

    const sendEmail = async (e) => {
        e.preventDefault();

        const currentForm = form.current;
        if (!currentForm || sending) return;

        const name = currentForm.name.value.trim();
        const email = currentForm.email.value.trim();
        const message = currentForm.message.value.trim();

        setSent(false);
        setErrorMessage("");

        // Name validation
        if (name.length < 2) {
            setErrorMessage("Please enter a name with at least 2 characters.");
            currentForm.name.focus();
            return;
        }

        // Email validation
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {
            setErrorMessage("Please enter a valid email address.");
            currentForm.email.focus();
            return;
        }

        // Message validation
        if (message.length < 10) {
            setErrorMessage("Your message must contain at least 10 characters.");
            currentForm.message.focus();
            return;
        }

        setSending(true);

        try {
            await emailjs.sendForm(
                "service_pxqppxe",
                "template_ita013e",
                currentForm,
                "8il5j4lChl5ZpHCK9"
            );

            setSent(true);
            currentForm.reset();
        } catch (error) {
            console.error("Email sending failed:", error);
            setErrorMessage(
                "Your message could not be sent. Please try again."
            );
        } finally {
            setSending(false);
        }
    };

    const contactInfo = [
        {
            icon: FaMapMarkerAlt,
            title: "Location",
            value: "Indore, Madhya Pradesh, India",
        },
        {
            icon: FaEnvelope,
            title: "Email Address",
            value: "aswanihoney8347@gmail.com",
        },
        {
            icon: FaPhoneAlt,
            title: "Phone Number",
            value: "62606XXXXX",
        },
    ];

    const socialLinks = [
        {
            icon: FaGithub,
            label: "GitHub",
            url: "https://github.com/honeyAswani",
        },
        {
            icon: FaLinkedin,
            label: "LinkedIn",
            url: "https://www.linkedin.com/in/honey-aswani-3a0889336/",
        },
        {
            icon: FaInstagram,
            label: "Instagram",
            url: "https://www.instagram.com/_honeyaswani_2806/",
        },
    ];

    const inputClasses =
        "w-full rounded-xl border border-white/10 bg-[#0c0b12] px-4 py-3.5 text-white placeholder-gray-500 outline-none transition-all duration-300 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20";

    return (
        <section
            id="contacts"
            className="relative overflow-hidden bg-[#0c0b12] px-6 py-24 text-white sm:py-28"
        >
            {/* Background glow */}
            <div className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-purple-700/15 blur-[120px]" />
            <div className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-fuchsia-600/10 blur-[120px]" />

            <div className="container relative z-10 mx-auto max-w-6xl">
                {/* Heading */}
                <motion.div
                    initial={{ opacity: 0, y: 35 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.3 }}
                    className="mb-16 text-center"
                >
                    <span className="mb-4 inline-block rounded-full border border-purple-500/30 bg-purple-500/10 px-4 py-2 text-sm font-medium tracking-wide text-purple-300">
                        LET'S CONNECT
                    </span>

                    <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                        Get In{" "}
                        <span className="bg-gradient-to-r from-purple-400 via-violet-400 to-fuchsia-400 bg-clip-text text-transparent">
                            Touch
                        </span>
                    </h2>

                    <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
                        Have a project in mind, an opportunity to share, or
                        just want to connect? I'd love to hear from you.
                    </p>

                    <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: 90 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="mx-auto mt-7 h-1 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500"
                    />
                </motion.div>

                {/* Contact content */}
                <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-2 lg:gap-14">
                    {/* Left: Contact form */}
                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.15 }}
                        className="relative"
                    >
                        <div className="absolute -inset-[1px] rounded-2xl bg-gradient-to-br from-purple-500/30 via-transparent to-fuchsia-500/20 opacity-70 blur-sm" />

                        <div className="relative rounded-2xl border border-white/[0.08] bg-[#13121b] p-6 sm:p-8">
                            <div className="mb-7">
                                <h3 className="text-2xl font-bold">
                                    Send Me a Message
                                </h3>

                                <p className="mt-2 text-sm leading-6 text-gray-400">
                                    Fill out the form below and I'll get back
                                    to you as soon as possible.
                                </p>
                            </div>

                            <form
                                ref={form}
                                onSubmit={sendEmail}
                                className="space-y-6"
                            >
                                {/* Name */}
                                <div>
                                    <label
                                        htmlFor="name"
                                        className="mb-2 block text-sm font-semibold text-gray-200"
                                    >
                                        Your Name
                                    </label>

                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        placeholder="Enter your full name"
                                        autoComplete="name"
                                        maxLength={100}
                                        required
                                        className={inputClasses}
                                    />
                                </div>

                                {/* Email */}
                                <div>
                                    <label
                                        htmlFor="email"
                                        className="mb-2 block text-sm font-semibold text-gray-200"
                                    >
                                        Email Address
                                    </label>

                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        placeholder="you@example.com"
                                        autoComplete="email"
                                        maxLength={254}
                                        required
                                        className={inputClasses}
                                    />
                                </div>

                                {/* Message */}
                                <div>
                                    <label
                                        htmlFor="message"
                                        className="mb-2 block text-sm font-semibold text-gray-200"
                                    >
                                        Your Message
                                    </label>

                                    <textarea
                                        id="message"
                                        name="message"
                                        rows={5}
                                        placeholder="Tell me about your project or idea..."
                                        minLength={10}
                                        maxLength={3000}
                                        required
                                        className={`${inputClasses} resize-y`}
                                    />
                                </div>

                                {/* Error message */}
                                {errorMessage && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        role="alert"
                                        className="rounded-lg border border-red-500/20 bg-red-500/10 p-3 text-sm text-red-300"
                                    >
                                        {errorMessage}
                                    </motion.p>
                                )}

                                {/* Success message */}
                                {sent && (
                                    <motion.p
                                        initial={{ opacity: 0, y: 8 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        role="status"
                                        className="rounded-lg border border-green-500/20 bg-green-500/10 p-3 text-sm text-green-300"
                                    >
                                        Message sent successfully! Thank you
                                        for reaching out.
                                    </motion.p>
                                )}

                                {/* Submit button */}
                                <motion.button
                                    type="submit"
                                    disabled={sending}
                                    whileHover={
                                        !sending ? { scale: 1.01 } : {}
                                    }
                                    whileTap={
                                        !sending ? { scale: 0.98 } : {}
                                    }
                                    className="flex w-full items-center justify-center gap-3 rounded-xl bg-gradient-to-r from-purple-600 to-violet-600 px-6 py-4 font-semibold text-white shadow-lg shadow-purple-900/20 transition-all duration-300 hover:from-purple-500 hover:to-fuchsia-500 disabled:cursor-not-allowed disabled:opacity-60"
                                >
                                    {sending ? (
                                        <>
                                            <span className="h-5 w-5 animate-spin rounded-full border-2 border-white/30 border-t-white" />
                                            Sending Message...
                                        </>
                                    ) : (
                                        <>
                                            Send Message
                                            <span aria-hidden="true">↗</span>
                                        </>
                                    )}
                                </motion.button>

                                <p className="text-center text-xs leading-5 text-gray-500">
                                    Your details will be used to respond to
                                    your message.
                                </p>
                            </form>
                        </div>
                    </motion.div>

                    {/* Right: Contact information */}
                    <motion.div
                        initial={{ opacity: 0, x: 40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
                        viewport={{ once: true, amount: 0.15 }}
                        className="space-y-5 lg:pt-2"
                    >
                        <div className="mb-7">
                            <span className="text-sm font-semibold uppercase tracking-[0.2em] text-purple-400">
                                Contact Information
                            </span>

                            <h3 className="mt-3 text-2xl font-bold sm:text-3xl">
                                Let's start a conversation
                            </h3>

                            <p className="mt-3 max-w-lg leading-7 text-gray-400">
                                I'm always open to discussing development
                                projects, collaboration opportunities, and
                                new ideas.
                            </p>
                        </div>

                        {/* Contact detail cards */}
                        {contactInfo.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.12,
                                    }}
                                    viewport={{ once: true, amount: 0.2 }}
                                    whileHover={{
                                        x: 5,
                                        transition: { duration: 0.2 },
                                    }}
                                    className="group flex items-center gap-5 rounded-2xl border border-white/[0.08] bg-[#13121b] p-5 transition-colors duration-300 hover:border-purple-500/40 sm:p-6"
                                >
                                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-purple-500/20 bg-purple-500/10 text-xl text-purple-400 transition-all duration-300 group-hover:bg-purple-500 group-hover:text-white">
                                        <Icon />
                                    </div>

                                    <div className="min-w-0">
                                        <h4 className="mb-1 font-semibold text-white">
                                            {item.title}
                                        </h4>

                                        <p className="break-words text-sm leading-6 text-gray-400 sm:text-base">
                                            {item.value}
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}

                        {/* Social links */}
                        <div className="rounded-2xl border border-white/[0.08] bg-[#13121b] p-6 sm:p-7">
                            <h4 className="text-lg font-bold text-white">
                                Follow Me
                            </h4>

                            <p className="mt-2 text-sm leading-6 text-gray-400">
                                Connect with me and follow my development
                                journey.
                            </p>

                            <div className="mt-5 flex flex-wrap gap-4">
                                {socialLinks.map((social) => {
                                    const Icon = social.icon;

                                    return (
                                        <motion.a
                                            key={social.label}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            aria-label={social.label}
                                            title={social.label}
                                            whileHover={{
                                                y: -5,
                                                scale: 1.06,
                                            }}
                                            whileTap={{ scale: 0.95 }}
                                            className="flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/[0.03] text-xl text-purple-400 transition-colors duration-300 hover:border-purple-500/40 hover:bg-purple-500 hover:text-white"
                                        >
                                            <Icon />
                                        </motion.a>
                                    );
                                })}
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Footer note */}
                <motion.p
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    viewport={{ once: true }}
                    className="mt-16 text-center text-sm text-gray-500"
                >
                    Thanks for visiting my portfolio. I look forward to
                    connecting with you!
                </motion.p>
            </div>
        </section>
    );
};

export default Contacts;
