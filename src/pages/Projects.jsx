import React from "react";
import AnimatedSection from "../components/AnimatedSection";

const projects = [
  {
    title: "Hope After Floods",
    year: "2024",
    description:
      "A web platform to coordinate flood relief: volunteer coordination, resource tracking, and requests management. Implemented with React + Firebase; UX optimised for rapid deployment during emergencies.",
    notes: "Best Project — 1st place at Vishnu Institute of Technology (130 teams).",
  },
  {
    title: "Stay Your Way",
    year: "2024",
    description:
      "End-to-end accommodation marketplace connecting travelers and hosts, with trust/verification flow and secure booking. Built with React, Node.js and Firestore.",
    notes: "",
  },
  {
    title: "Weather Forecasting Webpage",
    year: "2024",
    description:
      "Responsive tool with realtime API integration to display weather for user-requested locations, useful for travel planning.",
    notes: "",
  },
  {
    title: "Smart Helmet (IoT)",
    year: "2023",
    description:
      "Helmet detection + alcohol sensing prototype. Vehicle ignition enabled only when helmet presence and safe alcohol threshold are satisfied.",
    notes: "Published at ICECA 2023.",
  }
];

export default function Projects() {
  return (
    <AnimatedSection className="page">
      <div className="container">
        <h2 className="section-title">Selected Projects</h2>
        <div className="cards">
          {projects.map(p => (
            <article key={p.title} className="card project-card">
              <div className="card-head">
                <div className="card-title">{p.title}</div>
                <div className="card-meta">{p.year}</div>
              </div>
              <p className="card-body">{p.description}</p>
              {p.notes && <div className="card-notes">{p.notes}</div>}
            </article>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
}
