"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { Timer, BarChartBig } from "lucide-react";

export default function Header() {
  return (
    <motion.div
      className="flex flex-col items-center text-center space-y-1"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <Link href="/">
        <motion.span
          whileHover={{ scale: 1.1, rotate: 1 }}
          whileTap={{ scale: 0.95 }}
          className="text-5xl md:text-5xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent transition-all duration-700"
        >
          TimeTrailer
        </motion.span>
      </Link>

      <motion.p
        className="text-lg text-gray-500 dark:text-gray-300 font-bold mt-2 flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <Timer />
        Track Time.
        <BarChartBig />
        Track Life.
      </motion.p>
    </motion.div>
  );
}
