import React from "react";
import AnimatedSection from "../components/AnimatedSection";

const achievements = [
  'Best Project — "Hope After Floods" (1st / 130 teams).',
  "Solved 200+ DSA problems on GeeksforGeeks & LeetCode.",
  "Anchor — campus events (public speaking).",
  "Winner — College-level Kabaddi tournament.",
];

const publications = [
  'Published research paper on 7th International conference of Electronics Communication and Aerospace Technology (ICECA)'
];

const softSkills = [
  "Time Management",
  "Adaptability",
  "Analytical Thinking",
  "Team Collaboration",
  "Clear stakeholder communication",
];

const languages = ["English", "Hindi", "Telugu"];

export default function Accolades() {
  return (
    <AnimatedSection className="page">
      <div className="container">
        <h2 className="section-title">Accolades & Recognition</h2>

        <div className="grid-4">
          <div className="card small">
            <h4>Achievements</h4>
            <ul>{achievements.map((a,i)=> <li key={i}>{a}</li>)}</ul>
          </div>

          <div className="card small">
            <h4>Publications</h4>
            <ul>{publications.map((p,i)=> <li key={i}>{p}</li>)}</ul>
          </div>

          <div className="card small">
            <h4>Professional strengths</h4>
            <ul>{softSkills.map((s,i)=> <li key={i}>{s}</li>)}</ul>
          </div>

          <div className="card small">
            <h4>Languages</h4>
            <ul>{languages.map((l,i)=> <li key={i}>{l}</li>)}</ul>
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}
