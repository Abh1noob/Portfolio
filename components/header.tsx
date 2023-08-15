"use client";

import React from "react";
import { motion } from "framer-motion";
import { links } from "@/lib/data";
import Link from "next/link";

export default function Header() {
  return (
    <header className="z-[999] relative text-[#]">
      <motion.div
        className="fixed flex top-0.5 left-1/2 h-[4.5rem] w-full rounded-none border border-white border-opacity-40 bg-white bg-opacity-80 shadow-lg shadow-black/[0.03] backdrop-blur-[0.5rem] sm:top-6 sm:h-[3.25rem] sm:w-[36rem] sm:rounded-full"
        initial={{ y: -150, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      ></motion.div>

      <nav className="flex fixed top-[1.7rem]  items-center left-1/2 h-12 -translate-x-1/2 py-2">
        <ul className="flex gap-10">
          {links.map((link) => (
            <motion.li
              key={link.hash}
              initial={{ y: -150, x: "", opacity: 0 }}
              animate={{ y: 0, x: "", opacity: 1 }}
            >
              <Link href={link.hash}className="hover:text-[#F5B4B4]">{link.name}</Link>
            </motion.li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
