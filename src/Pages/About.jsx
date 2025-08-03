import React from "react";
import "./About.css";
import { Link } from "react-router-dom";

export default function About() {
  return (
    <section className="about-page">
      <div className="about-container">
        <h1 className="about-title">About <span>MyFolioX</span></h1>
        <p className="about-description">
          MyFolioX is your one-click solution to build a professional, fully responsive developer portfolio without writing a single line of code. Whether you're a student, fresher, or professional — design, preview, and download your dream portfolio in seconds.
        </p>

        <div className="features">
          <div className="feature-box">
            <h3>🚀 Instant Generation</h3>
            <p>Fill a simple form and get a fully built HTML/CSS/JS portfolio ready to deploy.</p>
          </div>
          <div className="feature-box">
            <h3>🎨 Multiple Templates</h3>
            <p>Choose from beautifully crafted templates tailored for developers.</p>
          </div>
          <div className="feature-box">
            <h3>📥 Download & Deploy</h3>
            <p>Download your portfolio as a ZIP and host it anywhere — GitHub Pages, Netlify, Vercel & more.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
