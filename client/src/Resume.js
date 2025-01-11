import React from "react";
import "./Resume.css";
import resume_data from "./ResumeData.json";

const Resume = () => {
    const {
        personal_information,
        educations,
        personal_projects,
        skills,
        work_experience,
    } = resume_data;
    return (
        <div className="resume">
            <header className="header">
                <h1>{personal_information.name}</h1>
                <p>{personal_information.address} | {personal_information.phone} | {personal_information.email}</p>
            </header>
            <section className="section">
                <h2>Education</h2>
                <div className="education">
                    {educations.map((education, index) => (
                        <div key={index}>
                            <h3>{education.degree}</h3>
                            <p>{education.institution} | {education.start_date} - {education.end_date}</p>
                            <p>GPA: {education.gpa}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="section">
                <h2>Skills</h2>
                <div className="skills">
                    {skills.map((category, index) => (
                        <div key={index} className="skill-category">
                            <p>
                                {category.category_name}:{" "}
                                {category.skills.map((skill, idx) => (
                                    <span key={idx}>
                                        {skill}
                                        {idx < category.skills.length - 1 && ", "}
                                    </span>
                                ))}
                            </p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="section">
                <h2>Work Experience</h2>
                <div className="work-experience">
                    {work_experience.map((job, index) => (
                        <div key={index} className="job">
                            <h3>{job.title}</h3>
                            <p>{job.company}| {job.duration}</p>
                            <p>{job.description}</p>
                        </div>
                    ))}
                </div>
            </section>
            <section className="section">
                <h2>Projects</h2>
                <div className="projects">
                    {personal_projects.map((project, index) => (
                        <div key={index}>
                            <h3>{project.title}</h3>
                            <p>{project.description}</p>
                            {project.source_code_link ? <p>Source Code: <a>{project.source_code_link}</a></p> : ""}
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Resume;