//Plan: This page will have a function called SkillCard, which will accept image, title and description. On its passing, it will return a card having all those details and i will align them here and this <skill> will be called on LayoutGroup.tsx
"use client"
import SkillCard from "./skillcard";
import { skillsData } from "@/lib/data";
import { delay, motion } from "framer-motion";

// Skeleton: skillcard(title='Python', image='filepath', desc='Python is used to do this.')

import React from "react";

export default function Skill() {
  return (
    <section className="max-w-[100vw]">
      <h1 className="font-bold text-slate-950 mb-10 text-[2.5rem] flex justify-center">Skills</h1>
      <ul className="flex flex-wrap justify-start gap-[15rem] pl-5">
        {skillsData.map((skill) => (
          <motion.li key={skill.name} className=""
          initial={{y:100, opacity:0}}
          animate={{y:0, opacity:1}}
          transition={{delay: 0.1}}>
              {SkillCard(skill.name , skill.image)}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
