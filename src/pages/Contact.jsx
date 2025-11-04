import React from "react";
import AnimatedSection from "../components/AnimatedSection";
import profile from "../data/profile";

export default function Contact() {
  return (
    <AnimatedSection className="page">
      <div className="container contact-page">
        <h2 className="section-title">Contact</h2>

        <div className="contact-grid">
          <div className="card contact-card">
            <h4>Direct</h4>
            <div className="muted">{profile.email}</div>
            <div className="muted">{profile.phone}</div>

            <div style={{marginTop:12}}>
              <a className="btn primary" href={`mailto:${profile.email}`}>Email</a>
              <a className="btn ghost" href={`tel:${profile.phone}`}>Call</a>
            </div>
          </div>

          <form className="card contact-form"
            onSubmit={(e)=>{
              e.preventDefault();
              const form = e.target;
              const name = form.name.value || "Contact";
              const message = form.message.value || "";
              const subject = encodeURIComponent(`${name} — Website inquiry`);
              const body = encodeURIComponent(message);
              window.location.href = `mailto:${profile.email}?subject=${subject}&body=${body}`;
            }}>
            <label className="label">Name</label>
            <input name="name" className="input" required/>
            <label className="label">Email</label>
            <input name="email" className="input" required/>
            <label className="label">Message</label>
            <textarea name="message" className="input textarea" rows={6} required/>
            <div className="form-actions">
              <button className="btn primary" type="submit">Send</button>
              <button className="btn ghost" type="reset">Reset</button>
            </div>
          </form>
        </div>
      </div>
    </AnimatedSection>
  );
}
