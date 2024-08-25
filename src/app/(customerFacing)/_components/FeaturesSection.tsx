"use client";

import { motion } from "framer-motion";

export default function FeaturesSection() {
  return (
    <section className="w-2/3 mx-auto flex flex-col justify-center items-center py-16">
      <div className="text-center pb-16">
        <h1 className="text-5xl font-bold text-black pb-8">
          The Fastest Way to Level Up in REVIT
        </h1>
        <p className="text-2xl text-gray-700 mt-4">
          Become a hero in Revit Architecture with our expert guidance!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 w-2/3">
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-xl text-black font-semibold">
            Access the latest and most current tutorials, specifically tailored
            for the newest version, Revit 2025
          </p>
        </motion.div>
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-xl text-black font-semibold">
            With over 20 hours of in-depth videos covering all tools and
            options, you will gain full proficiency in Revit.
          </p>
        </motion.div>
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-xl text-black font-semibold">
            The freedom to watch videos, wherever and whenever you want, in the
            comfort of your own space
          </p>
        </motion.div>
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-xl text-black font-semibold">
            Enjoy lifetime access to all tutorials, including all updates, so
            you can watch and rewatch them as many times as you need
          </p>
        </motion.div>
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-xl text-black font-semibold">
            Challenge yourself with quizzes and exercises to test your knowledge
            as you go
          </p>
        </motion.div>
        <motion.div
          className="text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={{
            hidden: { opacity: 0, scale: 0.9 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
          <p className="text-xl text-black font-semibold">
            A platform where you can ask your questions and receive answers from
            a private and professional community
          </p>
        </motion.div>
      </div>
    </section>
  );
}
