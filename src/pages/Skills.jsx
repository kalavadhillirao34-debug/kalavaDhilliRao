import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import "../portfolio.css";

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.15, duration: 0.6, ease: "easeOut" },
  }),
};

const skills = [
  {
    title: "Programming & Software",
    description:
      "Expertise in building full-stack applications and engineering solutions using modern languages and frameworks.",
    items: ["Java", "Python", "SQL", "JavaScript", "React.js", "Node.js"],
  },
  {
    title: "Systems & Architecture",
    description:
      "Experienced in backend architecture, RESTful API design, and scalable system integration.",
    items: ["Express.js", "API Design", "Cloud Integration", "Database Management"],
  },
  {
    title: "Tools & Platforms",
    description:
      "Skilled in using modern development and collaboration tools for version control, analytics, and automation.",
    items: ["GitHub", "Excel", "Firebase", "VS Code", "Postman"],
  },
  {
    title: "AI & Creative",
    description:
      "Combining technical depth with creativity through AI-powered content creation, scripting, and video editing.",
    items: ["AI Video Creation", "Script Writing", "Video Editing"],
  },
  {
    title: "Soft Skills",
    description:
      "Leadership qualities honed through years of experience guiding teams, managing deadlines, and fostering innovation.",
    items: ["Analytical Thinking", "Adaptability", "Team Collaboration", "Communication"],
  },
  {
    title: "Languages",
    description:
      "Multilingual professional with strong communication and cross-cultural collaboration skills.",
    items: ["English", "Telugu", "Hindi"],
  },
];

export default function Skills() {
  return (
    <AnimatedSection>
      <div className="skills-container">
        <motion.div
          className="skills-header"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="skills-title">Professional Expertise</h1>
          <p className="skills-intro">
            With over 30 years of experience in engineering and software development, I’ve built a balanced
            skill set that blends technical mastery, creative innovation, and team leadership across evolving technologies.
          </p>
        </motion.div>

        <div className="skills-grid">
          {skills.map((skill, i) => (
            <motion.div
              className="skill-card"
              key={i}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={i}
            >
              <h2 className="skill-title">{skill.title}</h2>
              <p className="skill-description">{skill.description}</p>
              <div className="skill-items">
                {skill.items.map((item, j) => (
                  <span key={j} className="skill-badge">
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
