import React from 'react';
import './Certifications.css';


const certifications = [
    {
        title: "CS50's Intro to Programming with Python",
        org: "Harvard | edX",
        year: "2024",
        link: "https://certificates.cs50.io/958ca610-914e-4ddd-8bb7-39e06e2cfd4b.pdf?size=letter"
    },
    {
        title: "Google AI for Anyone",
        org: "Google | edX",
        year: "2024",
        link: "https://credentials.edx.org/credentials/abcdef123456/"
    },
    {
        title: "NPTEL Cloud Computing",
        org: "NPTEL | IIT",
        year: "2024",
        link: "https://archive.nptel.ac.in/noc/B2C/candidate_login/candidate_scores.php?courseid=noc24-cs118"
    },
    {
        title: "NPTEL Programming in Java",
        org: "NPTEL | IIT",
        year: "2023",
        link: "https://archive.nptel.ac.in/noc/B2C/candidate_login/candidate_scores.php?courseid=noc24-cs43"
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
                    <a
                        key={index}
                        className="certification-card"
                        href={cert.link}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <h2>{cert.title}</h2>
                        <p>{cert.org}</p>
                        <span>{cert.year}</span>
                    </a>
                ))}
            </div>
        </div>
    );
};

export default Certifications;
