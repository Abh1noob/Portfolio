import React from "react";
import { skillsData } from "@/lib/data";
import Skillcard from "./skillcard";

export default function Skills() {
  return (
    <section className="text-center">
      <ul className="absolute top-11 flex items-center gap-4 flex-wrap">
        {skillsData.map((skill, index) => (
          <li key={index} className="font-bold text-slate-50"></li>
        ))}
      </ul>
    </section>
  );
}
