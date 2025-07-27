import React from 'react';
import './Certifications.css';

const certifications = [
    {
        title: "CS50's Intro to Programming with Python",
        org: "Harvard University",
        platform: "edX",
        year: "2024",
        link: "https://certificates.cs50.io/958ca610-914e-4ddd-8bb7-39e06e2cfd4b.pdf?size=letter",
        skills: ["Python", "Programming", "Problem Solving"],
        icon: "fab fa-python"
    },
    {
        title: "Google AI for Anyone",
        org: "Google",
        platform: "edX", 
        year: "2024",
        link: "https://credentials.edx.org/credentials/abcdef123456/",
        skills: ["AI", "Machine Learning", "Google AI"],
        icon: "fas fa-brain"
    },
    {
        title: "NPTEL Cloud Computing",
        org: "Indian Institute of Technology",
        platform: "NPTEL",
        year: "2024", 
        link: "https://archive.nptel.ac.in/noc/B2C/candidate_login/candidate_scores.php?courseid=noc24-cs118",
        skills: ["Cloud Computing", "AWS", "Distributed Systems"],
        icon: "fas fa-cloud"
    },
    {
        title: "NPTEL Programming in Java",
        org: "Indian Institute of Technology",
        platform: "NPTEL",
        year: "2023",
        link: "https://archive.nptel.ac.in/noc/B2C/candidate_login/candidate_scores.php?courseid=noc24-cs43",
        skills: ["Java", "OOP", "Programming"],
        icon: "fab fa-java"
    }
];

const Certifications = () => {
    return (
        <div className="certifications" id="certifications">
            <div className="certifications-title">
                <h1>My Certifications</h1>
            </div>
            
            <div className="certifications-container">
                {certifications.map((cert, index) => (
                    <div key={index} className="certification-card">
                        <div className="cert-header">
                            <div className="cert-icon">
                                <i className={cert.icon}></i>
                            </div>
                            <div className="cert-year">{cert.year}</div>
                        </div>
                        
                        <div className="cert-content">
                            <h2>{cert.title}</h2>
                            <div className="cert-org">
                                <span className="org-name">{cert.org}</span>
                                <span className="platform">via {cert.platform}</span>
                            </div>
                            
                            <div className="cert-skills">
                                {cert.skills.map((skill, skillIndex) => (
                                    <span key={skillIndex} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                        
                        <div className="cert-footer">
                            <a 
                                href={cert.link} 
                                target="_blank" 
                                rel="noopener noreferrer" 
                                className="cert-link"
                            >
                                <span>View Certificate</span>
                                <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                                    <path d="M7 17L17 7M17 7H7M17 7V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </a>
                        </div>
                        
                        <div className="cert-overlay"></div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certifications;