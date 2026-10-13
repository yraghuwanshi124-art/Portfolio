import { motion } from "framer-motion";
import {
Code2,
Lightbulb,
Rocket,
Target,
Sparkles,
} from "lucide-react";
import profile from "../assets/assets/profile.jpeg";

const aboutCards = [
{
icon: Code2,
title: "Development",
description:
"Building responsive, modern web experiences with clean and maintainable code.",
},
{
icon: Lightbulb,
title: "Creative Thinking",
description:
"Turning ideas into practical solutions through thoughtful design and problem-solving.",
},
{
icon: Rocket,
title: "Continuous Growth",
description:
"Exploring new technologies and improving development skills through practical projects.",
},
{
icon: Target,
title: "My Focus",
description:
"Creating user-friendly applications with an emphasis on functionality and design.",
},
];

const About = () => {
return ( <section
   id="about"
   className="relative isolate overflow-hidden bg-[#0c0b12] py-24 text-white sm:py-28"
 >
{/* Background Glow */} <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"> <div className="absolute -left-40 top-20 h-80 w-80 rounded-full bg-purple-600/10 blur-[120px]" /> <div className="absolute -right-40 bottom-0 h-96 w-96 rounded-full bg-fuchsia-600/10 blur-[130px]" /> </div>


  <div className="container mx-auto max-w-7xl px-6 sm:px-10">
    {/* Section Heading */}
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      viewport={{ once: true }}
      className="mb-16 text-center"
    >
      <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-purple-400/20 bg-purple-500/10 px-4 py-2 text-sm font-medium text-purple-300">
        <Sparkles size={15} />
        A little about me
      </span>

      <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
        Get to Know{" "}
        <span className="bg-gradient-to-r from-purple-400 via-fuchsia-400 to-indigo-400 bg-clip-text text-transparent">
          Me
        </span>
      </h2>

      <p className="mx-auto mt-5 max-w-2xl text-base leading-7 text-gray-400 sm:text-lg">
        My journey, my passion, and the ideas that inspire me to build
        meaningful digital experiences.
      </p>

      <div className="mx-auto mt-7 h-1 w-20 rounded-full bg-gradient-to-r from-purple-500 to-fuchsia-500" />
    </motion.div>

    {/* Main Content */}
    <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
      {/* Animated Profile Image */}
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.88 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{
          duration: 1,
          delay: 0.15,
          ease: [0.22, 1, 0.36, 1],
        }}
        viewport={{ once: true, amount: 0.2 }}
        className="relative mx-auto w-full max-w-lg"
      >
        {/* Purple Glow */}
        <motion.div
          animate={{
            opacity: [0.4, 0.75, 0.4],
            scale: [0.96, 1.04, 0.96],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-purple-600/30 via-fuchsia-500/20 to-indigo-500/30 blur-2xl"
        />

        {/* Floating Image Card */}
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-3 shadow-2xl shadow-purple-950/30 backdrop-blur-sm"
        >
          {/* Gradient Image Border */}
          <div className="rounded-[1.6rem] bg-gradient-to-br from-purple-400 via-fuchsia-500 to-indigo-500 p-[3px]">
            <div className="relative overflow-hidden rounded-[1.45rem] bg-[#15121f]">
              <motion.img
                src={profile}
                alt="Profile portrait"
                initial={{ scale: 1.12 }}
                whileInView={{ scale: 1 }}
                transition={{
                  duration: 1.2,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.04 }}
                className="aspect-[4/5] w-full object-cover object-center"
              />

              {/* Image Bottom Gradient */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c0b12]/90 via-transparent to-transparent" />

              {/* Image Text */}
              <motion.div
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.65 }}
                viewport={{ once: true }}
                className="absolute bottom-6 left-6 right-6"
              >
                <p className="text-xs font-semibold uppercase tracking-[0.25em] text-purple-300">
                  Driven by curiosity
                </p>

                <p className="mt-2 text-xl font-bold text-white sm:text-2xl">
                  Building one idea at a time.
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Floating Developer Badge */}
        <motion.div
          initial={{ opacity: 0, x: 35, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          animate={{ y: [0, -7, 0] }}
          className="absolute -right-3 top-10 z-20 rounded-2xl border border-white/10 bg-[#171520]/95 p-3 shadow-xl backdrop-blur-xl sm:-right-7 sm:p-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/15 text-purple-300">
              <Code2 size={23} />
            </div>

            <div>
              <p className="text-sm font-bold text-white">
                Developer Mindset
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Learn · Build · Improve
              </p>
            </div>
          </div>
        </motion.div>

        {/* Floating Bottom Badge */}
        <motion.div
          initial={{ opacity: 0, x: -30, y: 20 }}
          whileInView={{ opacity: 1, x: 0, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          animate={{ y: [0, 7, 0] }}
          className="absolute -bottom-5 -left-2 z-20 rounded-2xl border border-white/10 bg-[#171520]/95 p-3 shadow-xl backdrop-blur-xl sm:-left-7 sm:p-4"
        >
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-400/10 text-green-400">
              <Sparkles size={22} />
            </div>

            <div>
              <p className="text-sm font-bold text-white">
                Always Learning
              </p>
              <p className="mt-1 text-xs text-gray-400">
                Growing every day
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* About Text */}
      <motion.div
        initial={{ opacity: 0, x: 35 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.2 }}
        className="min-w-0"
      >
        <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
          My Journey
        </p>

        <h3 className="text-3xl font-bold leading-tight sm:text-4xl">
          Passion for technology.
          <span className="mt-2 block text-gray-400">
            Focused on creating useful things.
          </span>
        </h3>

        <p className="mt-7 text-base leading-8 text-gray-400">
          My journey in software development began with an interest in
          programming, problem-solving, and understanding how technology
          can solve real-world problems. I enjoy creating modern web
          interfaces and turning ideas into interactive digital
          experiences.
        </p>

        <p className="mt-5 text-base leading-8 text-gray-400">
          I continue to strengthen my development skills through hands-on
          projects, learning new technologies, and improving my
          problem-solving abilities. My goal is to build applications
          that are useful, reliable, and enjoyable to use.
        </p>

        {/* Skill Tags */}
        <div className="mt-7 flex flex-wrap gap-3">
          {[
            "React",
            "JavaScript",
            "Tailwind CSS",
            "Web Development",
          ].map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-purple-400/20 bg-purple-500/[0.07] px-4 py-2 text-sm font-medium text-purple-200 transition-colors hover:border-purple-400/50 hover:bg-purple-500/15"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Feature Cards */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2">
          {aboutCards.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.div
                key={card.title}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.55,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.03] p-5 transition-colors duration-300 hover:border-purple-400/30 hover:bg-purple-500/[0.05]"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition-colors group-hover:bg-purple-500/20">
                  <Icon size={22} />
                </div>

                <h4 className="mb-2 text-lg font-semibold text-white">
                  {card.title}
                </h4>

                <p className="text-sm leading-7 text-gray-400">
                  {card.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </div>
  </div>
</section>


);
};

export default About;
