import React from "react";
import profileData from "../data/profile";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div>© {new Date().getFullYear()} {profileData.name}</div>
        <div className="footer-right">Built with disciplined engineering — available for consulting</div>
      </div>
    </footer>
  );
}
