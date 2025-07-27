import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="about-title">
                <h1>About Me</h1>
            </div>
            
            <div className="about-sections">
                <div className="about-left">
                    <div className="education-section">
                        <h2 className="section-title">My Journey</h2>
                        <div className="education-tree">
                            <div className="edu-branch">
                                <div className="edu-point">
                                    <div className="edu-icon">🎓</div>
                                    <div className="edu-content">
                                        <h3>B.Tech in CSE (AI & ML)</h3>
                                        <p>Anits College</p>
                                        <span className="edu-year">2022 - 2026</span>
                                        <div className="edu-badge">CGPA: 9.5</div>
                                    </div>
                                </div>
                                <span className="edu-line"></span>
                            </div>
                            <div className="edu-branch">
                                <div className="edu-point">
                                    <div className="edu-icon">📚</div>
                                    <div className="edu-content">
                                        <h3>Intermediate (MPC)</h3>
                                        <p>Bhashyam Junior College</p>
                                        <span className="edu-year">2020 - 2022</span>
                                        <div className="edu-badge">97%</div>
                                    </div>
                                </div>
                                <span className="edu-line"></span>
                            </div>
                            <div className="edu-branch">
                                <div className="edu-point">
                                    <div className="edu-icon">🏫</div>
                                    <div className="edu-content">
                                        <h3>SSC</h3>
                                        <p>Bhashyam School</p>
                                        <span className="edu-year">2019 - 2020</span>
                                        <div className="edu-badge">98%</div>
                                    </div>
                                </div>
                                <span className="edu-line"></span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="about-right">
                    <div className="about-content-card">
                        <h2 className="section-title">Who I Am</h2>
                        <div className="about-para">
                            <p>I'm a dedicated <strong>Full-Stack Developer</strong> with a passion for creating seamless digital experiences. With expertise in front-end and back-end technologies like HTML, CSS, JavaScript, React, Node.js, and MongoDB, I enjoy building responsive, functional, and user-friendly web applications.</p>
                            <p>What sets me apart is my <em>sincerity and commitment</em>. I believe in putting my heart and soul into every task, ensuring it's done with care and precision. Loyal, trustworthy, and hardworking, I strive to deliver quality results that truly make a difference.</p>
                        </div>
                    </div>
                    
                    <div className="skills-card">
                        <h2 className="section-title">Technical Skills</h2>
                        <div className="about-skills">
                            <div className="about-skill">
                                <div className="skill-info">
                                    <span className="skill-name">HTML & CSS</span>
                                    <span className="skill-percent">90%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: "90%" }}></div>
                                </div>
                            </div>
                            <div className="about-skill">
                                <div className="skill-info">
                                    <span className="skill-name">React.js</span>
                                    <span className="skill-percent">85%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: "85%" }}></div>
                                </div>
                            </div>
                            <div className="about-skill">
                                <div className="skill-info">
                                    <span className="skill-name">JavaScript</span>
                                    <span className="skill-percent">75%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: "75%" }}></div>
                                </div>
                            </div>
                            <div className="about-skill">
                                <div className="skill-info">
                                    <span className="skill-name">Java</span>
                                    <span className="skill-percent">85%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: "85%" }}></div>
                                </div>
                            </div>
                            <div className="about-skill">
                                <div className="skill-info">
                                    <span className="skill-name">Python</span>
                                    <span className="skill-percent">70%</span>
                                </div>
                                <div className="skill-bar">
                                    <div className="skill-progress" style={{ width: "70%" }}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div className="social-connect-section">
                <h2 className="section-title">Let's Connect</h2>
                <div className="about-socials">
                    <a href="https://github.com/MohithMohan0708" target="_blank" rel="noopener noreferrer" className="social-card">
                        <div className="social-icon">
                            <i className="fab fa-github"></i>
                        </div>
                        <div className="social-info">
                            <span className="social-name">GitHub</span>
                            <span className="social-desc">View my repositories</span>
                        </div>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/mohithmohankumar-kancharla/" target="_blank" rel="noopener noreferrer" className="social-card">
                        <div className="social-icon">
                            <i className="fab fa-linkedin"></i>
                        </div>
                        <div className="social-info">
                            <span className="social-name">LinkedIn</span>
                            <span className="social-desc">Professional network</span>
                        </div>
                    </a>
                    
                    <a href="https://leetcode.com/u/MohithMohanKumarKancharla/" target="_blank" rel="noopener noreferrer" className="social-card">
                        <div className="social-icon">
                            <i className="fas fa-code"></i>
                        </div>
                        <div className="social-info">
                            <span className="social-name">LeetCode</span>
                            <span className="social-desc">Coding challenges</span>
                        </div>
                    </a>
                    
                    <a href="https://www.hackerrank.com/dashboard" target="_blank" rel="noopener noreferrer" className="social-card">
                        <div className="social-icon">
                            <i className="fab fa-hackerrank"></i>
                        </div>
                        <div className="social-info">
                            <span className="social-name">HackerRank</span>
                            <span className="social-desc">Skill assessments</span>
                        </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default About