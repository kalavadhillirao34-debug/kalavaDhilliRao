import React from "react";
import { motion } from "framer-motion";
import AnimatedSection from "../components/AnimatedSection";
import profile from "../data/profile";
import { Mail, FileText } from "lucide-react";
import bgVideo from "../assets/bg-video.mp4";

export default function Home() {
  return (
    <AnimatedSection
      className="page home-page"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* 🔹 Background Video */}
      <video
        className="background-video"
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🔹 Dark overlay for readability */}
      <div className="video-overlay" />

      {/* 🔹 Main Content */}
      <div className="container hero">
        <motion.div
          className="hero-left"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <motion.img
            className="hero-pic"
            src={profile.photoUrl}
            alt={`${profile.name} headshot`}
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 100 }}
          />
        </motion.div>

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
        >
          <h1 className="hero-title">{profile.name}</h1>
          <div className="hero-subtitle">{profile.title}</div>
          <p className="hero-summary">{profile.summary}</p>

          <div className="hero-ctas">
            <a className="btn primary" href={`mailto:${profile.email}`}>
              <Mail /> <span>Contact</span>
            </a>

            <a
              className="btn ghost"
              href={profile.resumeUrl}
              target="_blank"
              rel="noreferrer"
            >
              <FileText /> <span>Resume</span>
            </a>
          </div>

          <p
            className="subtle"
            style={{ marginTop: "10px", color: "var(--muted)" }}
          >
            Open for collaborations & freelance work
          </p>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}
