"use client";

import React from "react";
import Lottie from "lottie-react";
import { color, delay, motion } from "framer-motion";
import animationData from "@/lib/animation_bot.json";
import { AiFillGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import { Tilt_Prism } from "next/font/google";

const tilt = Tilt_Prism({
  subsets: ["latin"],
});

export default function About() {
  return (
    <>
      <div className="text-[#B4F5F5] absolute top-[15rem] left-[5rem]">
        <motion.p
          className="text-xl"
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
        >
          Hello, I am
        </motion.p>
        <motion.p
          className={`${tilt.className} text-7xl drop-shadow-2xl text-red-600`}
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.1 }}
        >
          Abhinav Ganeshan
        </motion.p>
        <motion.p
          className="text-base mt-5 drop-shadow-2xl"
          initial={{ x: -150, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          I'm a student studying Computer Science at VIT Vellore, interested in
          making <br />
          and learning cool stuff in field of Computers and Microprocessors like
          Arduino <br />
          <br />
          I thrive on challenges, constantly seeking opportunities to expand my
          horizons. <br />
          When I'm not immersed in coding or solving problems, you'll find me
          exploring <br />
          the world travelling or getting updated on latest tech around the
          world
        </motion.p>
        <motion.div
          className="flex items-center mt-[3rem] gap-4"
          initial={{ y: -150, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          <a target="_blank" href="https://github.com/Abh1noob">
            <AiFillGithub className="w-8 h-8 hover:scale-150 hover:fill-[#000000] transition active:scale-100" />
          </a>
          <a target="_blank" href="https://www.linkedin.com/in/abhinav-gk/">
            <AiFillLinkedin className="w-8 h-8 hover:scale-150 hover:fill-[#0A66C2] transition active:scale-100" />
          </a>
        </motion.div>
      </div>
      <motion.div
        className="absolute top-[10rem] right-[5rem]"
        initial={{ y: 150, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <Lottie
          animationData={animationData}
          className="hover:scale-90 transition"
        />
      </motion.div>
      <motion.h1
        className="absolute bottom-0 text-slate-950 left-1/2 -translate-x-1/2"
        initial={{ y: 150, x:'-50%', opacity: 0 }}
        animate={{ y: 0, x:'-50%', opacity: 1 }}
        transition={{ delay: 1 }}
      >
        Website under development, will keep pushing code
      </motion.h1>
    </>
  );
}
