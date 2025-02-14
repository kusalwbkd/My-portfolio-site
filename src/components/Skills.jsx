import React from "react";
import SectionTitle from "./SectionTitle";
import { skills } from "../assets/data";
import SkillsCard from "./SkillsCard";

const Skills = () => {
  return (
    <section className="py-20 align-element" id="skills">
      <SectionTitle text="Tech Stack" />
      
      <div className="py-16 grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {skills.map((skill, index) => (
          <div
            key={skill.id}
            className="transition-transform duration-300 hover:-translate-y-2"
          >
            <SkillsCard {...skill} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
