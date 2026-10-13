import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowRight,
  Download,
  Sparkles,
  Code2,
} from "lucide-react";
import profile from "../assets/assets/profile.jpeg";

function Hero() {
return ( <section
   id="home"
   className="relative isolate flex min-h-screen items-center overflow-hidden bg-[#09090f] pt-28 pb-16 text-white"
 >
{/* Background Effects */} <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"> <div className="absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-[120px]" /> <div className="absolute right-0 top-1/3 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-[110px]" /> <div className="absolute -bottom-40 left-0 h-96 w-96 rounded-full bg-indigo-500/10 blur-[120px]" />

    <div
      className="absolute inset-0 opacity-[0.06]"
      style={{
        backgroundImage:
          "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
        backgroundSize: "55px 55px",
      }}
    />
  </div>

  <div className="container mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-16 px-6 md:px-10 lg:grid-cols-2 lg:gap-12">
    {/* Left Content */}
    <motion.div
      initial={{ opacity: 0, x: -35 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="relative z-10 text-center lg:text-left"
    >
      {/* Availability Badge */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="mb-8 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm text-purple-200 shadow-lg shadow-purple-950/20"
      >
        <Sparkles size={16} className="text-purple-400" />
        <span>Turning ideas into digital experiences</span>
        <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
      </motion.div>

      <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-gray-400">
        Hello, I'm
      </p>

      <h1 className="text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl xl:text-7xl">
        Honey
        <br />
        <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
          Aswani.
        </span>
      </h1>

      <div className="mt-6 flex min-h-[64px] items-center justify-center text-xl font-semibold text-gray-200 sm:text-2xl lg:justify-start lg:text-3xl">
        <Code2 className="mr-3 shrink-0 text-purple-400" size={27} />

        <TypeAnimation
          sequence={[
            "Frontend Developer",
            1800,
            "MERN Stack Developer",
            1800,
            "Web Developer",
            1800,
            "Creative Problem Solver",
            1800,
          ]}
          wrapper="span"
          speed={45}
          deletionSpeed={55}
          repeat={Infinity}
        />
      </div>

      <p className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-400 sm:text-lg lg:mx-0">
        I create modern, responsive, and user-friendly web experiences
        using React, JavaScript, and modern web technologies. I enjoy
        turning creative ideas into clean, functional interfaces.
      </p>

      {/* Action Buttons */}
      <div className="mt-9 flex flex-col items-stretch justify-center gap-4 sm:flex-row sm:items-center lg:justify-start">
        <motion.a
          href="#project"
          whileHover={{ scale: 1.04, y: -3 }}
          whileTap={{ scale: 0.97 }}
          className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-fuchsia-600 px-7 py-4 font-semibold text-white shadow-lg shadow-purple-900/30 transition-shadow hover:shadow-purple-500/30"
        >
          Explore My Work
          <ArrowRight
            size={19}
            className="transition-transform group-hover:translate-x-1"
          />
        </motion.a>

        <motion.a
          href="#contacts"
          whileHover={{ scale: 1.04, y: -3 }}
          whileTap={{ scale: 0.97 }}
          className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/[0.04] px-7 py-4 font-semibold text-gray-200 backdrop-blur-md transition-colors hover:border-purple-400/50 hover:bg-purple-500/10"
        >
          <Download size={18} />
          Let's Connect
        </motion.a>
      </div>

      {/* Social Links */}
      <div className="mt-9 flex items-center justify-center gap-4 lg:justify-start">
        <span className="text-sm text-gray-500">Find me on</span>

<a
  href=" https://github.com/honeyAswani"
  target="_blank"
  rel="noreferrer"
  aria-label="GitHub"
  className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-gray-300 transition-all hover:-translate-y-1 hover:border-purple-400/40 hover:text-purple-300"
>
  GitHub
</a>

<a
  href="https://www.linkedin.com/in/honey-aswani-3a0889336/"
  target="_blank"
  rel="noreferrer"
  aria-label="LinkedIn"
  className="rounded-xl border border-white/10 bg-white/[0.04] p-3 text-gray-300 transition-all hover:-translate-y-1 hover:border-purple-400/40 hover:text-purple-300"
>
  LinkedIn
</a>
      </div>
    </motion.div>

    {/* Right Profile Section */}
    <motion.div
      initial={{ opacity: 0, scale: 0.85, x: 25 }}
      animate={{ opacity: 1, scale: 1, x: 0 }}
      transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
      className="relative mx-auto flex w-full max-w-md items-center justify-center lg:max-w-none"
    >
      {/* Outer Glow */}
      <div className="absolute h-72 w-72 rounded-full bg-purple-600/20 blur-[70px] sm:h-96 sm:w-96" />

      {/* Decorative Orbit */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 24, repeat: Infinity, ease: "linear" }}
        className="absolute h-[310px] w-[310px] rounded-full border border-dashed border-purple-400/20 sm:h-[410px] sm:w-[410px]"
      >
        <span className="absolute left-8 top-10 h-3 w-3 rounded-full bg-fuchsia-400 shadow-lg shadow-fuchsia-400/60" />
        <span className="absolute bottom-12 right-5 h-2.5 w-2.5 rounded-full bg-purple-300 shadow-lg shadow-purple-400/60" />
      </motion.div>

      {/* Profile Image Ring */}
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="relative z-10 h-64 w-64 rounded-full bg-gradient-to-br from-purple-400 via-fuchsia-500 to-indigo-500 p-[3px] shadow-[0_0_60px_rgba(168,85,247,0.25)] sm:h-80 sm:w-80 lg:h-[350px] lg:w-[350px]"
      >
        <div className="h-full w-full overflow-hidden rounded-full border-[7px] border-[#111019] bg-[#15121f]">
          <img
            src={profile}
            alt="Honey Aswani - Developer"
            className="h-full w-full object-cover"
          />
        </div>
      </motion.div>

      {/* Floating Tech Card */}
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-1 top-12 z-20 rounded-2xl border border-white/10 bg-[#171520]/90 p-3 shadow-xl backdrop-blur-xl sm:left-0 sm:p-4"
      >
        <div className="flex items-center gap-3">
          <div className="rounded-xl bg-purple-500/15 p-2.5 text-purple-300">
            <Code2 size={23} />
          </div>
          <div>
            <p className="text-sm font-bold text-white">Clean Code</p>
            <p className="mt-1 text-xs text-gray-400">Built with passion</p>
          </div>
        </div>
      </motion.div>

      {/* Floating Experience Card */}
      <motion.div
        animate={{ y: [0, 9, 0] }}
        transition={{
          duration: 4.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -right-1 bottom-12 z-20 rounded-2xl border border-white/10 bg-[#171520]/90 p-3 shadow-xl backdrop-blur-xl sm:right-0 sm:p-4"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-green-400/10 text-xl text-green-400">
            ✦
          </div>
          <div>
            <p className="text-sm font-bold text-white">Creative Mind</p>
            <p className="mt-1 text-xs text-gray-400">Always learning</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  </div>
</section>


);
}

export default Hero;
