"use client"

import { motion } from "framer-motion";

export default function Separator() {
  return (
    <div className="mx-auto flex flex-col justify-center items-center pt-2">
        <motion.div
        className="w-2/3 h-[4px] bg-black"
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
  );
}