// Download.jsx
import React from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

const Download = ({ formData, reset, selectedTemplate }) => {
  const {
    Name = "Your Name",
    Bio = "",
    About = "",
    education = {},
    skill = { selectedTechSkills: [], selectedSoftSkills: [] },
    projects = [],
    contact = {},
  } = formData || {};

  // Utility: escape HTML to avoid injection / broken templates
  const escapeHtml = (unsafe) => {
    if (unsafe === undefined || unsafe === null) return "";
    return String(unsafe)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  };

  // Build education HTML (semantic)
  const generateEducationHTML = (edu = education) => {
    const parts = [];

    if (edu.secondarySchool?.schoolName) {
      parts.push(`
        <article class="edu-item">
          <h4>Secondary School (10th)</h4>
          <p class="muted">${escapeHtml(
            edu.secondarySchool.schoolName
          )} • ${escapeHtml(edu.secondarySchool.board || "")} • ${escapeHtml(
        edu.secondarySchool.passingYear || ""
      )}</p>
          <p class="muted">Percentage: ${escapeHtml(
            edu.secondarySchool.percentage || "-"
          )}</p>
        </article>
      `);
    }

    if (edu.highschool?.collegeName) {
      parts.push(`
        <article class="edu-item">
          <h4>High School (12th)</h4>
          <p class="muted">${escapeHtml(
            edu.highschool.collegeName
          )} • ${escapeHtml(edu.highschool.board || "")} • ${escapeHtml(
        edu.highschool.passingYear || ""
      )}</p>
          <p class="muted">Percentage: ${escapeHtml(
            edu.highschool.percentage || "-"
          )}</p>
        </article>
      `);
    }

    if (edu.graduation?.collegeName) {
      parts.push(`
        <article class="edu-item">
          <h4>Graduation</h4>
          <p class="muted">${escapeHtml(
            edu.graduation.collegeName
          )} • ${escapeHtml(
        edu.graduation.universityName || ""
      )} • ${escapeHtml(edu.graduation.passingYear || "")}</p>
          <p class="muted">Percentage: ${escapeHtml(
            edu.graduation.percentage || "-"
          )}</p>
        </article>
      `);
    }

    if (edu.postGraduation?.collegeName) {
      parts.push(`
        <article class="edu-item">
          <h4>Post Graduation</h4>
          <p class="muted">${escapeHtml(
            edu.postGraduation.collegeName
          )} • ${escapeHtml(
        edu.postGraduation.universityName || ""
      )} • ${escapeHtml(edu.postGraduation.passingYear || "")}</p>
          <p class="muted">Percentage: ${escapeHtml(
            edu.postGraduation.percentage || "-"
          )}</p>
        </article>
      `);
    }

    if (parts.length === 0) return `<p>No education details provided.</p>`;
    return parts.join("\n");
  };

  // Build projects HTML and collect image URLs
  const gatherProjectAssetsAndHTML = (projList = projects) => {
    if (!Array.isArray(projList) || projList.length === 0) {
      return { html: "<p>No projects listed yet.</p>", images: [] };
    }

    const images = [];
    const html = projList
      .map((p, i) => {
        const title = escapeHtml(p.title || `Project ${i + 1}`);
        const desc = escapeHtml(p.description || "");
        const tech = escapeHtml(p.language || "");
        const link = p.links ? escapeHtml(p.links) : "";
        const imageUrl = p.image || ""; // expected to be a URL (optional)

        if (imageUrl)
          images.push({
            url: imageUrl,
            name: `project-${i + 1}${getExtensionFromUrl(imageUrl) || ".jpg"}`,
          });

        return `
          <article class="project-card">
            <div class="project-media">
              ${
                imageUrl
                  ? `<img alt="${title}" src="assets/${sanitizeFilename(
                      imageUrl,
                      `project-${i + 1}`
                    )}" />`
                  : `<div class="placeholder">No image</div>`
              }
            </div>
            <div class="project-body">
              <h3>${title}</h3>
              ${desc ? `<p>${desc}</p>` : ""}
              ${
                tech
                  ? `<p class="muted"><strong>Technologies:</strong> ${tech}</p>`
                  : ""
              }
              ${
                link
                  ? `<p><a href="${link}" target="_blank" rel="noopener noreferrer">${link}</a></p>`
                  : ""
              }
            </div>
          </article>
        `;
      })
      .join("\n");

    return { html, images };
  };

  // Helpers for image naming
  const getExtensionFromUrl = (url) => {
    try {
      const u = new URL(url);
      const path = u.pathname;
      const match = path.match(/\.(jpg|jpeg|png|gif|webp|svg)$/i);
      return match ? match[0] : "";
    } catch (e) {
      return "";
    }
  };

  const sanitizeFilename = (urlOrName, fallback) => {
    if (!urlOrName) return fallback || "asset";
    // try to extract last path segment
    try {
      const u = new URL(urlOrName);
      let name =
        u.pathname.split("/").filter(Boolean).pop() || fallback || "asset";
      // remove querystring from filename
      name = name.split("?")[0].split("#")[0];
      // basic sanitize
      return name.replace(/[^\w.\-]/g, "_");
    } catch (e) {
      return String(fallback || urlOrName).replace(/[^\w.\-]/g, "_");
    }
  };

  // Template CSS (single file). It's kept readable and well commented.
  const portfolioCSS = `/* style.css - generated portfolio CSS */
:root{
  --bg: #f7f8fb;
  --card: #ffffff;
  --muted: #6b7280;
  --accent: #0ea5a4;
  --text: #0f172a;
  --max-width: 1100px;
}
*{box-sizing:border-box}
html,body{height:100%}
body{
  margin:0;
  font-family: Inter, system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
  background:var(--bg);
  color:var(--text);
  -webkit-font-smoothing:antialiased;
  -moz-osx-font-smoothing:grayscale;
  line-height:1.5;
}

/* NAVBAR */
.nav {
  background: #0f172a;
  color: #fff;
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:12px 18px;
  position:sticky;
  top:0;
  z-index:50;
}
.nav .brand{font-weight:700; font-size:1.05rem; display:flex; gap:10px; align-items:center}
.nav nav-links{display:flex}
.nav .links{display:flex; gap:14px; list-style:none; margin:0; padding:0}
.nav .links a{color:inherit; text-decoration:none; font-size:0.95rem; opacity:0.95}
.nav .links a:hover{color:var(--accent)}

/* Mobile toggle */
.nav .mobile-toggle{display:none; background:transparent; border:0; color:inherit; font-size:1.1rem}

/* HEADER HERO */
.header-hero{
  text-align:center;
  padding:60px 20px;
  background:linear-gradient(135deg,var(--accent),#2563eb);
  color:#fff;
}
.header-hero h1{margin:0; font-size:2.3rem; letter-spacing:0.2px}
.header-hero p{margin:12px auto 0; max-width:900px; opacity:0.95}

/* PAGE CONTAINER */
.container{max-width:var(--max-width); margin:32px auto; padding:0 18px}

/* LAYOUT GRID for About + Quick-contacts */
.top-grid{display:grid; grid-template-columns: 1fr 320px; gap:20px; align-items:start}
.card{background:var(--card); border-radius:10px; padding:18px; box-shadow:0 6px 18px rgba(2,6,23,0.06)}
.muted{color:var(--muted); font-size:0.95rem}

/* SKILLS */
.skills{display:flex; gap:8px; flex-wrap:wrap}
.skill-tag{background:#eef2f7; padding:6px 10px; border-radius:999px; font-size:0.9rem}

/* EDUCATION & PROJECTS */
.edu-item + .edu-item{margin-top:12px}
.project-card{display:flex; gap:16px; align-items:flex-start; margin-bottom:16px; border-radius:8px; overflow:hidden}
.project-media img{width:220px; height:140px; object-fit:cover; display:block}
.project-media .placeholder{width:220px; height:140px; display:flex; align-items:center; justify-content:center; background:#f3f4f6; color:var(--muted)}
.project-body{flex:1}

/* FOOTER */
footer{padding:22px; text-align:center; color:var(--muted); font-size:0.95rem; margin-top:40px}

/* Small screens */
@media (max-width:900px){
  .top-grid{grid-template-columns:1fr; gap:14px}
  .project-media img, .project-media .placeholder{width:140px; height:100px}
}

/* Print friendly */
@media print{
  .nav, .mobile-toggle { display:none !important }
  body{background:white}
}
`;

  // Build main HTML template (semantic, accessible)
  const generateHTML = () => {
    const safeName = escapeHtml(Name);
    const safeBio = escapeHtml(Bio);
    const safeAbout = escapeHtml(About);

    const educationHTML = generateEducationHTML();
    const { html: projectsHTML, images: projectImages } =
      gatherProjectAssetsAndHTML(projects);

    // build skills
    const techSkills = (skill?.selectedTechSkills || [])
      .map((s) => `<span class="skill-tag">${escapeHtml(s)}</span>`)
      .join("");
    const softSkills = (skill?.selectedSoftSkills || [])
      .map((s) => `<span class="skill-tag">${escapeHtml(s)}</span>`)
      .join("");

    // contact
    const contactEmail = contact?.email
      ? `<a href="mailto:${escapeHtml(contact.email)}">${escapeHtml(
          contact.email
        )}</a>`
      : "-";
    const contactPhone = contact?.phone
      ? `<a href="tel:${escapeHtml(contact.phone)}">${escapeHtml(
          contact.phone
        )}</a>`
      : "-";
    const contactLocation = contact?.location
      ? `${escapeHtml(contact.location)}`
      : "-";

    // Small JS: mobile nav toggle + smooth scroll
    const inlineScript = `
(function(){
  // Mobile nav toggle
  const btn = document.getElementById('nav-toggle');
  const navLinks = document.getElementById('nav-links');
  if(btn && navLinks){
    btn.addEventListener('click', function(){ navLinks.classList.toggle('open') });
  }
  // Smooth scroll polyfill
  document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
      const t = document.querySelector(this.getAttribute('href'));
      if(t){ e.preventDefault(); t.scrollIntoView({behavior:'smooth', block:'start'}); }
    })
  });
})();
`;

    // Compose HTML
    return {
      html: `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width,initial-scale=1" />
  <title>${safeName} · Portfolio</title>
  <meta name="description" content="${safeBio || "Portfolio"}" />
  <link rel="stylesheet" href="style.css" />
</head>
<body>
  <header class="nav" role="banner" aria-label="Primary">
    <div class="brand" aria-hidden="false">
      <strong>${safeName}</strong>
    </div>
    <button id="nav-toggle" class="mobile-toggle" aria-expanded="false" aria-controls="nav-links">☰</button>
    <nav id="nav-links" role="navigation" aria-label="Main navigation">
      <ul class="links" style="display:flex; gap:12px; align-items:center; margin:0; padding:0;">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="home" class="header-hero" role="region" aria-label="Introduction">
      <h1>${safeName}</h1>
      <p>${safeBio}</p>
      <p class="muted">Looking for internships / projects • IT Student</p>
    </section>

    <div class="container">
      <div class="top-grid" aria-live="polite">
        <section id="about" class="card" role="region" aria-label="About me">
          <h2>About Me</h2>
          <p>${safeAbout || "No about text provided."}</p>
        </section>

        <aside class="card" role="complementary" aria-label="Contact & Quick info">
          <h3>Contact</h3>
          <p class="muted">Email: ${contactEmail}</p>
          <p class="muted">Phone: ${contactPhone}</p>
          <p class="muted">Location: ${contactLocation}</p>
          <hr/>
          <h4>Skills</h4>
          <div class="skills">${
            techSkills || "<span class='muted'>No technical skills</span>"
          }</div>
          <div style="margin-top:10px" class="skills">${
            softSkills || "<span class='muted'>No soft skills</span>"
          }</div>
        </aside>
      </div>

      <section id="education" class="card" style="margin-top:20px" role="region" aria-label="Education">
        <h2>Education</h2>
        ${educationHTML}
      </section>

      <section id="skills" class="card" style="margin-top:20px" role="region" aria-label="Skills (detailed)">
        <h2>Skills</h2>
        <p class="muted">Technical and soft skills</p>
        <div style="display:flex; gap:12px; flex-wrap:wrap">${
          techSkills || ""
        }</div>
        <div style="margin-top:12px; display:flex; gap:12px; flex-wrap:wrap">${
          softSkills || ""
        }</div>
      </section>

      <section id="projects" class="card" style="margin-top:20px" role="region" aria-label="Projects">
        <h2>Projects</h2>
        ${projectsHTML}
      </section>

      <section id="contact" class="card" style="margin-top:20px" role="region" aria-label="Contact">
        <h2>Contact</h2>
        <p>Reach out via email or phone.</p>
        <p class="muted">Email: ${contactEmail}</p>
        <p class="muted">Phone: ${contactPhone}</p>
      </section>
    </div>
  </main>

  <footer>
    <p>&copy; ${new Date().getFullYear()} ${safeName}. All rights reserved.</p>
  </footer>

  <script>
    ${inlineScript}
  </script>
</body>
</html>
`,
      images: projectImages,
    };
  };

  // Choose template wrapper (if you want different templates later, switch here)
  const generateTemplate = () => {
    // For now, all templates use the same layout; you can extend switch(selectedTemplate) for variations.
    return generateHTML();
  };

  // Main download handler: builds the zip and includes project images if any
  const handleDownload = async () => {
    try {
      const zip = new JSZip();
      const { html, images } = generateTemplate();

      // add index + css
      zip.file("index.html", html);
      zip.file("style.css", portfolioCSS);

      // fetch & add images under assets/
      if (images && images.length > 0) {
        const assets = zip.folder("assets");
        // fetch each image
        const fetches = images.map(async (img) => {
          try {
            // fetch as blob
            const resp = await fetch(img.url, { mode: "cors" });
            if (!resp.ok) throw new Error("Failed to fetch image: " + img.url);
            const blob = await resp.blob();
            const filename = sanitizeFilename(img.url, img.name || "asset");
            assets.file(filename, blob);
          } catch (err) {
            // skip failed images (do not block download)
            console.warn("Image fetch failed:", img.url, err);
          }
        });

        await Promise.all(fetches);
      }

      // generate zip and save
      const content = await zip.generateAsync({ type: "blob" });
      const fileName = `${(Name || "portfolio").replace(
        /\s+/g,
        "_"
      )}_portfolio.zip`;
      saveAs(content, fileName);
    } catch (err) {
      console.error("Download failed", err);
      alert("Failed to create ZIP. Check console for details.");
    }
  };

  // Small helper to return template name for UI
  const getTemplateName = (id) => {
    switch (Number(id)) {
      case 1:
        return "Professional";
      case 2:
        return "Creative";
      case 3:
        return "Minimalist";
      case 4:
        return "Academic";
      case 5:
        return "Technical";
      default:
        return "Professional";
    }
  };

  return (
    <div
      style={{
        padding: 24,
        maxWidth: 900,
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <h2 style={{ marginBottom: 10 }}>{Name || "Your Portfolio"}</h2>
      <p style={{ marginTop: 0, marginBottom: 16 }}>
        {Bio || "Generated portfolio"}
      </p>

      <div
        style={{
          display: "flex",
          gap: 12,
          justifyContent: "center",
          marginBottom: 18,
        }}
      >
        <button
          onClick={handleDownload}
          style={{
            padding: "10px 18px",
            backgroundColor: "#0ea5a4",
            color: "#fff",
            border: "none",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 15,
          }}
        >
          Download Portfolio (ZIP)
        </button>

        <button
          onClick={reset}
          style={{
            padding: "10px 18px",
            backgroundColor: "#f3f4f6",
            color: "#0f172a",
            border: "1px solid #e5e7eb",
            borderRadius: 8,
            cursor: "pointer",
            fontSize: 15,
          }}
        >
          Create Another
        </button>
      </div>

      <div style={{ color: "#6b7280", fontSize: 14 }}>
        Template: <strong>{getTemplateName(selectedTemplate)}</strong>
      </div>
    </div>
  );
};

export default Download;
