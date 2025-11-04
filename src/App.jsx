import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import Education from "./pages/Education";
import Accolades from "./pages/Accolades";
import Contact from "./pages/Contact";

export default function App() {
  const location = useLocation();

  return (
    <div className="app-wrapper" style={{ position: "relative", overflow: "hidden" }}>
      {/* 🔹 Global Background Video */}
      <motion.video
        key="background-video"
        className="background-video"
        src="/bg-video.mp4"  // ✅ Make sure it's in your /public folder
        autoPlay
        loop
        muted
        playsInline
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
      />
      <div className="video-overlay" />

      {/* 🔹 Foreground Content */}
      <Navbar />

      <AnimatePresence mode="wait" initial={false}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/education" element={<Education />} />
          <Route path="/accolades" element={<Accolades />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>

      <Footer />
    </div>
  );
}
