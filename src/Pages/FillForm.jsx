import React from "react";
import "./FillForm.css";

const FillForm = ({ formData, setFormData, nextStep }) => {
  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleEducationChange = (level, field, value) => {
    setFormData({
      ...formData,
      education: {
        ...formData.education,
        [level]: {
          ...formData.education[level],
          [field]: value,
        },
      },
    });
  };

  const handleSkillToggle = (type, skill) => {
    const selected = formData.skill[type];
    const updated = selected.includes(skill)
      ? selected.filter((s) => s !== skill)
      : [...selected, skill];

    setFormData({
      ...formData,
      skill: {
        ...formData.skill,
        [type]: updated,
      },
    });
  };

  const handleProjectChange = (index, field, value) => {
    const updatedProjects = [...formData.projects];
    updatedProjects[index] = { ...updatedProjects[index], [field]: value };
    setFormData({ ...formData, projects: updatedProjects });
  };

  const addNewProject = () => {
    setFormData({
      ...formData,
      projects: [
        ...formData.projects,
        {
          title: "",
          description: "",
          language: "",
          links: "",
          image: "",
        },
      ],
    });
  };

  const removeProject = (index) => {
    if (formData.projects.length <= 1) return; // Keep at least one project
    const updatedProjects = formData.projects.filter((_, i) => i !== index);
    setFormData({ ...formData, projects: updatedProjects });
  };

  const handleContactChange = (field, value) => {
    setFormData({
      ...formData,
      contact: {
        ...formData.contact,
        [field]: value,
      },
    });
  };

  return (
    <div className="form-container">
      <h2>Basic Info</h2>
      <div className="form-group">
        <input
          name="Name"
          placeholder="Full Name"
          value={formData.Name}
          onChange={handleInputChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <input
          name="Bio"
          placeholder="Professional Title/Bio"
          value={formData.Bio}
          onChange={handleInputChange}
          className="form-input"
        />
      </div>
      <div className="form-group">
        <textarea
          name="About"
          placeholder="About yourself"
          value={formData.About}
          onChange={handleInputChange}
          className="form-textarea"
          rows="4"
        />
      </div>

      <h2>Education</h2>

      <div className="education-section">
        <h3>Secondary School (10th)</h3>
        <div className="form-row">
          <input
            placeholder="School Name"
            value={formData.education.secondarySchool.schoolName}
            onChange={(e) =>
              handleEducationChange(
                "secondarySchool",
                "schoolName",
                e.target.value
              )
            }
            className="form-input"
          />
          <input
            placeholder="Passing Year"
            value={formData.education.secondarySchool.passingYear}
            onChange={(e) =>
              handleEducationChange(
                "secondarySchool",
                "passingYear",
                e.target.value
              )
            }
            className="form-input"
          />
        </div>
        <div className="form-row">
          <input
            placeholder="Board"
            value={formData.education.secondarySchool.board}
            onChange={(e) =>
              handleEducationChange("secondarySchool", "board", e.target.value)
            }
            className="form-input"
          />
          <input
            placeholder="Percentage"
            value={formData.education.secondarySchool.percentage}
            onChange={(e) =>
              handleEducationChange(
                "secondarySchool",
                "percentage",
                e.target.value
              )
            }
            className="form-input"
          />
        </div>
      </div>

      <div className="education-section">
        <h3>High School (12th)</h3>
        <div className="form-row">
          <input
            placeholder="College Name"
            value={formData.education.highschool.collegeName}
            onChange={(e) =>
              handleEducationChange("highschool", "collegeName", e.target.value)
            }
            className="form-input"
          />
          <input
            placeholder="Passing Year"
            value={formData.education.highschool.passingYear}
            onChange={(e) =>
              handleEducationChange("highschool", "passingYear", e.target.value)
            }
            className="form-input"
          />
        </div>
        <div className="form-row">
          <input
            placeholder="Board"
            value={formData.education.highschool.board}
            onChange={(e) =>
              handleEducationChange("highschool", "board", e.target.value)
            }
            className="form-input"
          />
          <input
            placeholder="Percentage"
            value={formData.education.highschool.percentage}
            onChange={(e) =>
              handleEducationChange("highschool", "percentage", e.target.value)
            }
            className="form-input"
          />
        </div>
      </div>

      <div className="education-section">
        <h3>Graduation</h3>
        <div className="form-row">
          <input
            placeholder="College Name"
            value={formData.education.graduation.collegeName}
            onChange={(e) =>
              handleEducationChange("graduation", "collegeName", e.target.value)
            }
            className="form-input"
          />
          <input
            placeholder="Passing Year"
            value={formData.education.graduation.passingYear}
            onChange={(e) =>
              handleEducationChange("graduation", "passingYear", e.target.value)
            }
            className="form-input"
          />
        </div>
        <div className="form-row">
          <input
            placeholder="University"
            value={formData.education.graduation.universityName}
            onChange={(e) =>
              handleEducationChange(
                "graduation",
                "universityName",
                e.target.value
              )
            }
            className="form-input"
          />
          <input
            placeholder="Percentage"
            value={formData.education.graduation.percentage}
            onChange={(e) =>
              handleEducationChange("graduation", "percentage", e.target.value)
            }
            className="form-input"
          />
        </div>
      </div>

      <div className="education-section">
        <h3>Post Graduation</h3>
        <div className="form-row">
          <input
            placeholder="College Name"
            value={formData.education.postGraduation.collegeName}
            onChange={(e) =>
              handleEducationChange(
                "postGraduation",
                "collegeName",
                e.target.value
              )
            }
            className="form-input"
          />
          <input
            placeholder="Passing Year"
            value={formData.education.postGraduation.passingYear}
            onChange={(e) =>
              handleEducationChange(
                "postGraduation",
                "passingYear",
                e.target.value
              )
            }
            className="form-input"
          />
        </div>
        <div className="form-row">
          <input
            placeholder="University"
            value={formData.education.postGraduation.universityName}
            onChange={(e) =>
              handleEducationChange(
                "postGraduation",
                "universityName",
                e.target.value
              )
            }
            className="form-input"
          />
          <input
            placeholder="Percentage"
            value={formData.education.postGraduation.percentage}
            onChange={(e) =>
              handleEducationChange(
                "postGraduation",
                "percentage",
                e.target.value
              )
            }
            className="form-input"
          />
        </div>
      </div>

      <h2>Skills</h2>
      <div className="skills-section">
        <div className="skills-column">
          <h3>Tech Skills</h3>
          <div className="skills-grid">
            {formData.skill.techSkill.map((skill) => (
              <label key={skill} className="skill-checkbox">
                <input
                  type="checkbox"
                  checked={formData.skill.selectedTechSkills.includes(skill)}
                  onChange={() =>
                    handleSkillToggle("selectedTechSkills", skill)
                  }
                />
                {skill}
              </label>
            ))}
          </div>
        </div>
        <div className="skills-column">
          <h3>Soft Skills</h3>
          <div className="skills-grid">
            {formData.skill.softSkills.map((skill) => (
              <label key={skill} className="skill-checkbox">
                <input
                  type="checkbox"
                  checked={formData.skill.selectedSoftSkills.includes(skill)}
                  onChange={() =>
                    handleSkillToggle("selectedSoftSkills", skill)
                  }
                />
                {skill}
              </label>
            ))}
          </div>
        </div>
      </div>

      <h2>Projects</h2>
      {formData.projects.map((project, index) => (
        <div key={index} className="project-card">
          <div className="project-header">
            <h3>Project {index + 1}</h3>
            {formData.projects.length > 1 && (
              <button
                onClick={() => removeProject(index)}
                className="remove-project-btn"
              >
                Remove
              </button>
            )}
          </div>
          <div className="form-group">
            <input
              placeholder="Project Title"
              value={project.title}
              onChange={(e) =>
                handleProjectChange(index, "title", e.target.value)
              }
              className="form-input"
            />
          </div>
          <div className="form-group">
            <textarea
              placeholder="Description"
              value={project.description}
              onChange={(e) =>
                handleProjectChange(index, "description", e.target.value)
              }
              className="form-textarea"
              rows="3"
            />
          </div>
          <div className="form-row">
            <input
              placeholder="Technologies Used"
              value={project.language}
              onChange={(e) =>
                handleProjectChange(index, "language", e.target.value)
              }
              className="form-input"
            />
            <input
              placeholder="Project Link"
              value={project.links}
              onChange={(e) =>
                handleProjectChange(index, "links", e.target.value)
              }
              className="form-input"
            />
          </div>
          <div className="form-group">
            <input
              placeholder="Image URL (optional)"
              value={project.image}
              onChange={(e) =>
                handleProjectChange(index, "image", e.target.value)
              }
              className="form-input"
            />
          </div>
        </div>
      ))}

      <button onClick={addNewProject} className="add-project-btn">
        + Add Another Project
      </button>

      <h2>Contact Info</h2>
      <div className="form-row">
        <input
          placeholder="Email"
          value={formData.contact.email}
          onChange={(e) => handleContactChange("email", e.target.value)}
          className="form-input"
        />
        <input
          placeholder="Phone"
          value={formData.contact.phone}
          onChange={(e) => handleContactChange("phone", e.target.value)}
          className="form-input"
        />
      </div>
      <div className="form-row">
        <input
          placeholder="Location"
          value={formData.contact.location}
          onChange={(e) => handleContactChange("location", e.target.value)}
          className="form-input"
        />
        <input
          placeholder="GitHub/LinkedIn"
          value={formData.contact.message}
          onChange={(e) => handleContactChange("message", e.target.value)}
          className="form-input"
        />
      </div>

      <button onClick={nextStep} className="submit-btn">
        Review Information
      </button>
    </div>
  );
};

export default FillForm;
