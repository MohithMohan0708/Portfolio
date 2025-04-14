import React from 'react';
import './Certifications.css';
import theme_pattern from '../../assets/theme_pattern.svg';

const certifications = [
    {
        title: "CS50's Intro to Programming with Python",
        org: "Harvard | edX",
        year: "2024",
        link: "https://cs50.harvard.edu/certificates/your-certificate-id" // replace with actual
    },
    {
        title: "Google AI for Anyone",
        org: "Google | edX",
        year: "2024",
        link: "https://credentials.edx.org/credentials/abcdef123456/" // replace with actual
    },
    {
        title: "NPTEL Cloud Computing",
        org: "NPTEL | IIT",
        year: "2024",
        link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL24CS24S1470000487" // example
    },
    {
        title: "NPTEL Programming in Java",
        org: "NPTEL | IIT",
        year: "2023",
        link: "https://archive.nptel.ac.in/noc/Ecertificate/?q=NPTEL23CS24S1450000383"  // example
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
