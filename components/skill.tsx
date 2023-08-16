//Plan: This page will have a function called SkillCard, which will accept image, title and description. On its passing, it will return a card having all those details and i will align them here and this <skill> will be called on LayoutGroup.tsx

import SkillCard from "./skillcard";
import { skillsData } from "@/lib/data";
import img4 from "@/lib/assets/flutter.svg";

// Skeleton: skillcard(title='Python', image='filepath', desc='Python is used to do this.')

import React from "react";

export default function Skill() {
  return (
    <section className=""> 
      <div className="flex flex-row gap-9">{SkillCard("Flutter", img4)}
      </div>
    </section>
  );
}


