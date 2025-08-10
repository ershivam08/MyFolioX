import React from "react";
import "./Review.css";

const Review = ({
  formData,
  prevStep,
  nextStep,
  selectedTemplate,
  setSelectedTemplate,
}) => {
  const { Name, Bio, About, contact, skill, projects, education } = formData;

  const skills = [
    ...(skill?.selectedTechSkills || []),
    ...(skill?.selectedSoftSkills || []),
  ];

  const templates = [
    { id: 1, name: "Professional", preview: "📄 Clean and formal design" },
    { id: 2, name: "Creative", preview: "🎨 Colorful and modern layout" },
    { id: 3, name: "Minimalist", preview: "✂️ Simple and elegant style" },
    { id: 4, name: "Academic", preview: "📚 Traditional CV format" },
    { id: 5, name: "Technical", preview: "💻 Developer-focused layout" },
  ];

  const handleTemplateSelect = (templateId) => {
    setSelectedTemplate(templateId);
  };

  const handleGenerate = () => {
    if (!selectedTemplate) {
      alert("Please select a template before generating your resume");
      return;
    }
    nextStep();
  };

  return (
    <div className="review-container">
      <h1>Review Your Information</h1>
      <p className="review-subtitle">
        Please verify all details before generating your resume
      </p>

      {/* Personal Information Section */}
      <section className="review-section">
        <h2>Personal Information</h2>
        <div className="info-grid">
          <div className="info-item">
            <strong>Full Name:</strong>
            <span>{Name || "Not provided"}</span>
          </div>
          <div className="info-item">
            <strong>Professional Title:</strong>
            <span>{Bio || "Not provided"}</span>
          </div>
          <div className="info-item">
            <strong>Email:</strong>
            <span>{contact?.email || "Not provided"}</span>
          </div>
          <div className="info-item">
            <strong>Phone:</strong>
            <span>{contact?.phone || "Not provided"}</span>
          </div>
          <div className="info-item">
            <strong>Location:</strong>
            <span>{contact?.location || "Not provided"}</span>
          </div>
          <div className="info-item">
            <strong>Portfolio/GitHub:</strong>
            <span>
              {contact?.message ? (
                <a
                  href={contact.message}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {contact.message}
                </a>
              ) : (
                "Not provided"
              )}
            </span>
          </div>
        </div>
        <div className="about-section">
          <h3>About</h3>
          <p>{About || "No about information provided"}</p>
        </div>
      </section>

      {/* Education Section */}
      <section className="review-section">
        <h2>Education</h2>

        {education?.secondarySchool?.schoolName && (
          <div className="education-item">
            <h3>Secondary School (10th)</h3>
            <div className="info-grid">
              <div className="info-item">
                <strong>School:</strong>
                <span>{education.secondarySchool.schoolName}</span>
              </div>
              <div className="info-item">
                <strong>Year:</strong>
                <span>{education.secondarySchool.passingYear}</span>
              </div>
              <div className="info-item">
                <strong>Board:</strong>
                <span>{education.secondarySchool.board}</span>
              </div>
              <div className="info-item">
                <strong>Percentage:</strong>
                <span>{education.secondarySchool.percentage}</span>
              </div>
            </div>
          </div>
        )}

        {education?.highschool?.collegeName && (
          <div className="education-item">
            <h3>High School (12th)</h3>
            <div className="info-grid">
              <div className="info-item">
                <strong>College:</strong>
                <span>{education.highschool.collegeName}</span>
              </div>
              <div className="info-item">
                <strong>Year:</strong>
                <span>{education.highschool.passingYear}</span>
              </div>
              <div className="info-item">
                <strong>Board:</strong>
                <span>{education.highschool.board}</span>
              </div>
              <div className="info-item">
                <strong>Percentage:</strong>
                <span>{education.highschool.percentage}</span>
              </div>
            </div>
          </div>
        )}

        {education?.graduation?.collegeName && (
          <div className="education-item">
            <h3>Graduation</h3>
            <div className="info-grid">
              <div className="info-item">
                <strong>College:</strong>
                <span>{education.graduation.collegeName}</span>
              </div>
              <div className="info-item">
                <strong>Year:</strong>
                <span>{education.graduation.passingYear}</span>
              </div>
              <div className="info-item">
                <strong>University:</strong>
                <span>{education.graduation.universityName}</span>
              </div>
              <div className="info-item">
                <strong>Percentage:</strong>
                <span>{education.graduation.percentage}</span>
              </div>
            </div>
          </div>
        )}

        {education?.postGraduation?.collegeName && (
          <div className="education-item">
            <h3>Post Graduation</h3>
            <div className="info-grid">
              <div className="info-item">
                <strong>College:</strong>
                <span>{education.postGraduation.collegeName}</span>
              </div>
              <div className="info-item">
                <strong>Year:</strong>
                <span>{education.postGraduation.passingYear}</span>
              </div>
              <div className="info-item">
                <strong>University:</strong>
                <span>{education.postGraduation.universityName}</span>
              </div>
              <div className="info-item">
                <strong>Percentage:</strong>
                <span>{education.postGraduation.percentage}</span>
              </div>
            </div>
          </div>
        )}
      </section>

      {/* Skills Section */}
      <section className="review-section">
        <h2>Skills</h2>
        {skills.length > 0 ? (
          <div className="skills-container">
            {skill?.selectedTechSkills?.length > 0 && (
              <div className="skills-category">
                <h3>Technical Skills</h3>
                <div className="skills-list">
                  {skill.selectedTechSkills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
            {skill?.selectedSoftSkills?.length > 0 && (
              <div className="skills-category">
                <h3>Soft Skills</h3>
                <div className="skills-list">
                  {skill.selectedSoftSkills.map((skill, index) => (
                    <span key={index} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <p>No skills added</p>
        )}
      </section>

      {/* Projects Section */}
      <section className="review-section">
        <h2>Projects</h2>
        {projects?.length > 0 ? (
          <div className="projects-container">
            {projects.map((project, index) => (
              <div key={index} className="project-item">
                <h3>
                  {project.title || `Project ${index + 1}`}
                  {project.language && (
                    <span className="project-tech">{project.language}</span>
                  )}
                </h3>
                {project.description && (
                  <p className="project-description">{project.description}</p>
                )}
                {project.links && (
                  <div className="project-link">
                    <strong>Link: </strong>
                    <a
                      href={project.links}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.links}
                    </a>
                  </div>
                )}
                {project.image && (
                  <div className="project-image-preview">
                    <strong>Image Preview: </strong>
                    <img
                      src={project.image}
                      alt={project.title || `Project ${index + 1}`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p>No projects added</p>
        )}
      </section>

      {/* Template Selection */}
      <section className="template-selection">
        <h2>Select a Template</h2>
        <div className="template-options">
          {templates.map((template) => (
            <div
              key={template.id}
              className={`template-card ${
                selectedTemplate === template.id ? "selected" : ""
              }`}
              onClick={() => handleTemplateSelect(template.id)}
            >
              <h3>{template.name}</h3>
              <p>{template.preview}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Navigation Buttons */}
      <div className="navigation-buttons">
        <button onClick={prevStep} className="back-button">
          ← Back to Edit
        </button>
        <button onClick={handleGenerate} className="generate-button">
          Generate Resume →
        </button>
      </div>
    </div>
  );
};

export default Review;
