import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="about-title">
                <h1>About me</h1>
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <div className="education-tree">
                        <div className="edu-branch">
                            <div className="edu-point">
                                <h3>B.Tech in CSE (AI & ML)</h3>
                                <p>Anits College, 2022 - 2026</p>
                                <span>Current CGPA: 9.5</span>
                            </div>
                            <span className="edu-line"></span>
                        </div>
                        <div className="edu-branch">
                            <div className="edu-point">
                                <h3>Intermediate (MPC)</h3>
                                <p>Bhashyam Junior College, 2020 - 2022</p>
                                <span>Percentage: 97%</span>
                            </div>
                            <span className="edu-line"></span>
                        </div>
                        <div className="edu-branch">
                            <div className="edu-point">
                                <h3>SSC</h3>
                                <p>Bhashyam School, 2019 - 2020</p>
                                <span>Percentage: 98%</span>
                            </div>
                            <span className="edu-line"></span> {/* Add this line to show the dot for SSC */}
                        </div>
                    </div>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>I’m a dedicated Full-Stack Developer with a passion for creating seamless digital experiences. With skills in front-end and back-end technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB, I enjoy building responsive, functional, and user-friendly web applications.</p>
                        <p>What sets me apart is my sincerity and commitment. I believe in putting my heart and soul into every task, ensuring it’s done with care and precision. Loyal, trustworthy, and hardworking, I strive to deliver quality results that truly make a difference.</p>
                    </div>
                    <div className="about-skills">
                        <div className="about-skill">
                            <p>HTML & CSS</p><hr style={{ width: "50%" }} />
                        </div>
                        <div className="about-skill">
                            <p>React Js</p><hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>JavaScript</p><hr style={{ width: "70%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Java</p><hr style={{ width: "60%" }} />
                        </div>
                        <div className="about-skill">
                            <p>Python</p><hr style={{ width: "50%" }} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="about-socials">
                <a href="https://github.com/MohithMohan0708" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-github"></i>
                    <span>GitHub</span>
                </a>
                <div className="divider"></div>

                <a href="https://www.linkedin.com/in/mohithmohankumar-kancharla/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-linkedin"></i>
                    <span>LinkedIn</span>
                </a>
                <div className="divider"></div>

                <a href="https://leetcode.com/u/MohithMohanKumarKancharla/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fas fa-code"></i>
                    <span>LeetCode</span>
                </a>
                <div className="divider"></div>

                <a href="https://www.hackerrank.com/dashboard" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-hackerrank"></i>
                    <span>HackerRank</span>
                </a>
            </div>
        </div>
    )
}

export default About
