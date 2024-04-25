import React from "react";
import "./skills.css";
import { skills } from "../../Data";

export const Skills = () => {
  return (
    <section className="skills section" id="skills">
      <h2 className="section__title text-cs">PROFESSIONAL SKILLS</h2>
      <span className="section__subtitle">My Technical Level</span>
      <div className="skills__container container grid">
        {skills.map(({ name, percentage, description }, index) => {
          return (
            <div className="skills__item" key={index}>
              <div className="skills__titles">
                <h3 className="skills__name">{name}</h3>
                <span className="skills__number">
                  {percentage}
                  <span>%</span>
                </span>
              </div>
              <p className="skills__description">{description}</p>
              <div className="skills__bar">
                <span
                  className="skills__percentage"
                  style={{ width: `${percentage}%` }}
                >
                  <span></span>
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
