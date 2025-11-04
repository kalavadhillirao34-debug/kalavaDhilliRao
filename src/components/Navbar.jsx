import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X, Mail, Github, Linkedin } from "lucide-react";
import { motion } from "framer-motion";
import profileData from "../data/profile";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const nav = [
    { to: "/", label: "Home" },
    { to: "/skills", label: "Skills" },
    { to: "/projects", label: "Projects" },
    { to: "/education", label: "Education" },
    { to: "/accolades", label: "Accolades" },
    { to: "/contact", label: "Contact" },
  ];

  return (
    <header className="navbar">
      <div className="nav-inner">
        <Link to="/" className="brand" onClick={() => setOpen(false)}>
          <div className="brand-photo">
            <img src={profileData.photoUrl} alt={`${profileData.name} headshot`} />
          </div>
          <div className="brand-text">
            <div className="brand-name">{profileData.name}</div>
            <div className="brand-title">{profileData.title}</div>
          </div>
        </Link>

        <nav className={`nav-links ${open ? "open" : ""}`}>
          {nav.map((n) => (
            <NavLink
              key={n.to}
              to={n.to}
              className={({ isActive }) => (isActive ? "nav-link active" : "nav-link")}
              onClick={() => setOpen(false)}
            >
              {n.label}
              <motion.span
                layoutId={n.to}
                className="nav-underline"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <a className="icon" href={`mailto:${profileData.email}`} aria-label="Email">
            <Mail />
          </a>
          <a className="icon" href={`https://github.com/${profileData.github}`} aria-label="Github" target="_blank" rel="noreferrer">
            <Github />
          </a>
          <a className="icon" href={`https://www.linkedin.com/in/${profileData.linkedin}`} aria-label="LinkedIn" target="_blank" rel="noreferrer">
            <Linkedin />
          </a>

          <button className="menu-btn" onClick={() => setOpen((s) => !s)} aria-label="Toggle menu">
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  );
}
