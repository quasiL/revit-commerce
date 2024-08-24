"use client"

import { motion } from "framer-motion";
import Image from 'next/image';

export default function IntroSection() {
  return (
    <section className="">
      <div className="flex items-center w-2/3 mx-auto my-32">
        <div className="w-2/6">
          <motion.div        
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <h1 className="text-7xl font-bold whitespace-nowrap pb-16">REVIT 2025</h1>
          </motion.div>
          <motion.div        
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <h1 className="text-6xl font-bold whitespace-nowrap pb-16">Master Like a PRO</h1>
          </motion.div>
          <motion.div        
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
            }}
          >
            <p className="text-gray-700 mt-6">
                Empower yourself to become a confident and skilled professional, 
                capable of tackling any project with ease and efficiency
            </p>
          </motion.div>
          </div>
          <div className="relative w-4/6">
          <Image
            src="/building.webp"
            width={2000}
            height={760}
            className="hidden md:block"
            alt="Model building"
          />
        </div>
      </div>
      <div className="w-2/3 mx-auto py-16">
        <motion.div
          className="h-[4px] bg-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
          variants={{
              hidden: { opacity: 0, scale: 0.9 },
              visible: { opacity: 1, scale: 1 },
          }}
        >
        </motion.div> 
      </div>
    </section>
  );
}