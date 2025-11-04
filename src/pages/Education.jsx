import React from "react";
import AnimatedSection from "../components/AnimatedSection";

const education = [
  {
    degree: "B.Tech — Electronics & Communication Engineering",
    institution: "Vishnu Institute of Technology, Bhimavaram",
    period: "2021 – 2025",
    details: "CGPA: 8.09",
  },
  {
    degree: "Board of Intermediate Education, AP",
    institution: "Sri Chaitanya Junior College",
    period: "2019 – 2021",
    details: "Marks: 954",
  },
  {
    degree: "Secondary School Certificate",
    institution: "SRSM Z.P. High School, Mandasa (Srikakulam)",
    period: "2018 – 2019",
    details: "Marks: 9.5 / 10",
  }
];

export default function Education() {
  return (
    <AnimatedSection className="page">
      <div className="container">
        <h2 className="section-title">Education</h2>
        <div className="cards">
          {education.map(e => (
            <div key={e.institution} className="card edu-card">
              <div className="card-title">{e.degree}</div>
              <div className="card-meta">{e.institution} — {e.period}</div>
              <div className="card-body muted">{e.details}</div>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
