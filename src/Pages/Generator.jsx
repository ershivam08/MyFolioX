import React, { useState } from 'react';
import './Generate.css';

export default function Generator() {
    const [formData, setFormData] = useState({
        Name: '',
        Bio: '',
        About: '',
        education: {
            secondarySchool: {
                schoolName: '',
                passingYear: '',
                board: '',
                percentage: ''
            },
            highschool: {
                collegeName: '',
                passingYear: '',
                board: '',
                percentage: ''
            },
            graduation: {
                collegeName: '',
                passingYear: '',
                universityName: '',
                percentage: ''
            },
            postGraduation: {
                collegeName: '',
                passingYear: '',
                universityName: '',
                percentage: ''
            }
        },
        skill: {
            techSkill: [
                'HTML', 'CSS', 'JavaScript', 'React', 'NextJs', 'NodeJs', 'ExpressJs',
                'MongoDb', 'MySQL', 'C', 'C++', 'Java', 'Python', 'DSA', 'SpringBoot',
                'Flutter', 'FireBase', 'Kotlin', 'git', 'github', 'Docker', 'Kubernetes'
            ],
            selectedTechSkills: [],
            softSkills: [
                'Good Communication', 'Team Management', 'Time Management',
                'Fast Learner', 'Adaptability'
            ],
            selectedSoftSkills: []
        },
        projects: [
            {
                title: '',
                description: '',
                language: '',
                links: '',
                image: ''
            }
        ],
        contact: {
            name: '',
            email: '',
            phone: '',
            location: '',
            message: '',
            links: '',
            glinks: '',
            ilinks: '',
            lLinks: '',
            tLinks: '',
            subject: ''
        }
    });

    // Generic function to update nested state
    const updateNestedValue = (path, value) => {
        setFormData(prev => {
            const newState = { ...prev };
            let temp = newState;

            for (let i = 0; i < path.length - 1; i++) {
                temp[path[i]] = { ...temp[path[i]] };
                temp = temp[path[i]];
            }

            temp[path[path.length - 1]] = value;
            return newState;
        });
    };

    // Handle skill selection
    const handleSkillChange = (type, skill, isChecked) => {
        setFormData(prev => {
            const selectedKey = type === 'tech' ? 'selectedTechSkills' : 'selectedSoftSkills';
            const skillsArray = [...prev.skill[selectedKey]];
            
            if (isChecked) {
                skillsArray.push(skill);
            } else {
                const index = skillsArray.indexOf(skill);
                if (index > -1) {
                    skillsArray.splice(index, 1);
                }
            }

            return {
                ...prev,
                skill: {
                    ...prev.skill,
                    [selectedKey]: skillsArray
                }
            };
        });
    };

    // Handle project changes
    const handleProjectChange = (index, field, value) => {
        setFormData(prev => {
            const updatedProjects = [...prev.projects];
            updatedProjects[index] = {
                ...updatedProjects[index],
                [field]: value
            };
            return {
                ...prev,
                projects: updatedProjects
            };
        });
    };

    // Add new project
    const addProject = () => {
        setFormData(prev => ({
            ...prev,
            projects: [
                ...prev.projects,
                {
                    title: '',
                    description: '',
                    language: '',
                    links: '',
                    image: ''
                }
            ]
        }));
    };

    // Remove project
    const removeProject = (index) => {
        setFormData(prev => ({
            ...prev,
            projects: prev.projects.filter((_, i) => i !== index)
        }));
    };

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Data:', formData);
        // Here you would typically send the data to an API
        alert('Resume data saved successfully!');
    };

    return (
        <div className="resume-generator">
            <h1>Generate Portfolio</h1>
            <form onSubmit={handleSubmit}>
                {/* Basic Information Section */}
                <section className="form-section">
                    <h2>Basic Information</h2>
                    <div className="form-group">
                        <label>Full Name</label>
                        <input
                            type="text"
                            value={formData.Name}
                            onChange={(e) => updateNestedValue(['Name'], e.target.value)}
                            placeholder="Enter your full name"
                        />
                    </div>
                    <div className="form-group">
                        <label>Bio (Short Summary)</label>
                        <textarea
                            value={formData.Bio}
                            onChange={(e) => updateNestedValue(['Bio'], e.target.value)}
                            placeholder="Brief summary about yourself"
                            rows="3"
                        />
                    </div>
                    <div className="form-group">
                        <label>About Me</label>
                        <textarea
                            value={formData.About}
                            onChange={(e) => updateNestedValue(['About'], e.target.value)}
                            placeholder="Detailed introduction about yourself"
                            rows="5"
                        />
                    </div>
                </section>

                {/* Education Section */}
                <section className="form-section">
                    <h2>Education</h2>
                    
                    <div className="education-level">
                        <h3>Secondary School (10th)</h3>
                        <div className="form-group">
                            <label>School Name</label>
                            <input
                                type="text"
                                value={formData.education.secondarySchool.schoolName}
                                onChange={(e) => updateNestedValue(['education', 'secondarySchool', 'schoolName'], e.target.value)}
                                placeholder="School name"
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Passing Year</label>
                                <input
                                    type="text"
                                    value={formData.education.secondarySchool.passingYear}
                                    onChange={(e) => updateNestedValue(['education', 'secondarySchool', 'passingYear'], e.target.value)}
                                    placeholder="Year"
                                />
                            </div>
                            <div className="form-group">
                                <label>Board</label>
                                <input
                                    type="text"
                                    value={formData.education.secondarySchool.board}
                                    onChange={(e) => updateNestedValue(['education', 'secondarySchool', 'board'], e.target.value)}
                                    placeholder="Board name"
                                />
                            </div>
                            <div className="form-group">
                                <label>Percentage/GPA</label>
                                <input
                                    type="text"
                                    value={formData.education.secondarySchool.percentage}
                                    onChange={(e) => updateNestedValue(['education', 'secondarySchool', 'percentage'], e.target.value)}
                                    placeholder="Percentage or GPA"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="education-level">
                        <h3>High School (12th)</h3>
                        <div className="form-group">
                            <label>College Name</label>
                            <input
                                type="text"
                                value={formData.education.highschool.collegeName}
                                onChange={(e) => updateNestedValue(['education', 'highschool', 'collegeName'], e.target.value)}
                                placeholder="College name"
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Passing Year</label>
                                <input
                                    type="text"
                                    value={formData.education.highschool.passingYear}
                                    onChange={(e) => updateNestedValue(['education', 'highschool', 'passingYear'], e.target.value)}
                                    placeholder="Year"
                                />
                            </div>
                            <div className="form-group">
                                <label>Board</label>
                                <input
                                    type="text"
                                    value={formData.education.highschool.board}
                                    onChange={(e) => updateNestedValue(['education', 'highschool', 'board'], e.target.value)}
                                    placeholder="Board name"
                                />
                            </div>
                            <div className="form-group">
                                <label>Percentage/GPA</label>
                                <input
                                    type="text"
                                    value={formData.education.highschool.percentage}
                                    onChange={(e) => updateNestedValue(['education', 'highschool', 'percentage'], e.target.value)}
                                    placeholder="Percentage or GPA"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="education-level">
                        <h3>Graduation</h3>
                        <div className="form-group">
                            <label>College Name</label>
                            <input
                                type="text"
                                value={formData.education.graduation.collegeName}
                                onChange={(e) => updateNestedValue(['education', 'graduation', 'collegeName'], e.target.value)}
                                placeholder="College name"
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Passing Year</label>
                                <input
                                    type="text"
                                    value={formData.education.graduation.passingYear}
                                    onChange={(e) => updateNestedValue(['education', 'graduation', 'passingYear'], e.target.value)}
                                    placeholder="Year"
                                />
                            </div>
                            <div className="form-group">
                                <label>University Name</label>
                                <input
                                    type="text"
                                    value={formData.education.graduation.universityName}
                                    onChange={(e) => updateNestedValue(['education', 'graduation', 'universityName'], e.target.value)}
                                    placeholder="University name"
                                />
                            </div>
                            <div className="form-group">
                                <label>Percentage/GPA</label>
                                <input
                                    type="text"
                                    value={formData.education.graduation.percentage}
                                    onChange={(e) => updateNestedValue(['education', 'graduation', 'percentage'], e.target.value)}
                                    placeholder="Percentage or GPA"
                                />
                            </div>
                        </div>
                    </div>

                    <div className="education-level">
                        <h3>Post Graduation (if applicable)</h3>
                        <div className="form-group">
                            <label>College Name</label>
                            <input
                                type="text"
                                value={formData.education.postGraduation.collegeName}
                                onChange={(e) => updateNestedValue(['education', 'postGraduation', 'collegeName'], e.target.value)}
                                placeholder="College name"
                            />
                        </div>
                        <div className="form-row">
                            <div className="form-group">
                                <label>Passing Year</label>
                                <input
                                    type="text"
                                    value={formData.education.postGraduation.passingYear}
                                    onChange={(e) => updateNestedValue(['education', 'postGraduation', 'passingYear'], e.target.value)}
                                    placeholder="Year"
                                />
                            </div>
                            <div className="form-group">
                                <label>University Name</label>
                                <input
                                    type="text"
                                    value={formData.education.postGraduation.universityName}
                                    onChange={(e) => updateNestedValue(['education', 'postGraduation', 'universityName'], e.target.value)}
                                    placeholder="University name"
                                />
                            </div>
                            <div className="form-group">
                                <label>Percentage/GPA</label>
                                <input
                                    type="text"
                                    value={formData.education.postGraduation.percentage}
                                    onChange={(e) => updateNestedValue(['education', 'postGraduation', 'percentage'], e.target.value)}
                                    placeholder="Percentage or GPA"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section className="form-section">
                    <h2>Skills</h2>
                    
                    <div className="skills-container">
                        <div className="skills-column">
                            <h3>Technical Skills</h3>
                            <div className="skills-checkbox-group">
                                {formData.skill.techSkill.map((skill, index) => (
                                    <label key={`tech-${index}`} className="skill-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={formData.skill.selectedTechSkills.includes(skill)}
                                            onChange={(e) => handleSkillChange('tech', skill, e.target.checked)}
                                        />
                                        {skill}
                                    </label>
                                ))}
                            </div>
                        </div>
                        
                        <div className="skills-column">
                            <h3>Soft Skills</h3>
                            <div className="skills-checkbox-group">
                                {formData.skill.softSkills.map((skill, index) => (
                                    <label key={`soft-${index}`} className="skill-checkbox">
                                        <input
                                            type="checkbox"
                                            checked={formData.skill.selectedSoftSkills.includes(skill)}
                                            onChange={(e) => handleSkillChange('soft', skill, e.target.checked)}
                                        />
                                        {skill}
                                    </label>
                                ))}
                            </div>
                        </div>
                    </div>
                </section>

                {/* Projects Section */}
                <section className="form-section">
                    <h2>Projects</h2>
                    {formData.projects.map((project, index) => (
                        <div key={index} className="project-card">
                            <h3>Project {index + 1}</h3>
                            <button 
                                type="button" 
                                className="remove-project" 
                                onClick={() => removeProject(index)}
                                disabled={formData.projects.length === 1}
                            >
                                Remove
                            </button>
                            
                            <div className="form-group">
                                <label>Project Title</label>
                                <input
                                    type="text"
                                    value={project.title}
                                    onChange={(e) => handleProjectChange(index, 'title', e.target.value)}
                                    placeholder="Project title"
                                />
                            </div>
                            
                            <div className="form-group">
                                <label>Description</label>
                                <textarea
                                    value={project.description}
                                    onChange={(e) => handleProjectChange(index, 'description', e.target.value)}
                                    placeholder="Project description"
                                    rows="3"
                                />
                            </div>
                            
                            <div className="form-row">
                                <div className="form-group">
                                    <label>Technologies Used</label>
                                    <input
                                        type="text"
                                        value={project.language}
                                        onChange={(e) => handleProjectChange(index, 'language', e.target.value)}
                                        placeholder="Languages/technologies"
                                    />
                                </div>
                                <div className="form-group">
                                    <label>Project Link</label>
                                    <input
                                        type="text"
                                        value={project.links}
                                        onChange={(e) => handleProjectChange(index, 'links', e.target.value)}
                                        placeholder="URL or repository link"
                                    />
                                </div>
                            </div>
                            
                            <div className="form-group">
                                <label>Image URL (optional)</label>
                                <input
                                    type="text"
                                    value={project.image}
                                    onChange={(e) => handleProjectChange(index, 'image', e.target.value)}
                                    placeholder="URL to project image"
                                />
                            </div>
                        </div>
                    ))}
                    
                    <button type="button" className="add-project" onClick={addProject}>
                        Add Another Project
                    </button>
                </section>

                {/* Contact Information Section */}
                <section className="form-section">
                    <h2>Contact Information</h2>
                    <div className="form-row">
                        <div className="form-group">
                            <label>Email</label>
                            <input
                                type="email"
                                value={formData.contact.email}
                                onChange={(e) => updateNestedValue(['contact', 'email'], e.target.value)}
                                placeholder="Your email"
                            />
                        </div>
                        <div className="form-group">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                value={formData.contact.phone}
                                onChange={(e) => updateNestedValue(['contact', 'phone'], e.target.value)}
                                placeholder="Phone number"
                            />
                        </div>
                    </div>
                    
                    <div className="form-group">
                        <label>Location</label>
                        <input
                            type="text"
                            value={formData.contact.location}
                            onChange={(e) => updateNestedValue(['contact', 'location'], e.target.value)}
                            placeholder="Your location"
                        />
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <label>GitHub Profile</label>
                            <input
                                type="url"
                                value={formData.contact.glinks}
                                onChange={(e) => updateNestedValue(['contact', 'glinks'], e.target.value)}
                                placeholder="GitHub URL"
                            />
                        </div>
                        <div className="form-group">
                            <label>LinkedIn Profile</label>
                            <input
                                type="url"
                                value={formData.contact.lLinks}
                                onChange={(e) => updateNestedValue(['contact', 'lLinks'], e.target.value)}
                                placeholder="LinkedIn URL"
                            />
                        </div>
                    </div>
                    
                    <div className="form-row">
                        <div className="form-group">
                            <label>Twitter Profile</label>
                            <input
                                type="url"
                                value={formData.contact.tLinks}
                                onChange={(e) => updateNestedValue(['contact', 'tLinks'], e.target.value)}
                                placeholder="Twitter URL"
                            />
                        </div>
                        <div className="form-group">
                            <label>Instagram Profile</label>
                            <input
                                type="url"
                                value={formData.contact.ilinks}
                                onChange={(e) => updateNestedValue(['contact', 'ilinks'], e.target.value)}
                                placeholder="Instagram URL"
                            />
                        </div>
                    </div>
                </section>

                <div className="form-actions">
                    <button type="submit" className="submit-btn">Final Submit</button>
                </div>
            </form>
        </div>
    );
}