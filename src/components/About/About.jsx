import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

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
                                <p>Anits College, 2021 - 2025</p>
                                <span>Current CGPA: 8.5</span>
                            </div>
                            <span className="edu-line"></span>
                        </div>
                        <div className="edu-branch">
                            <div className="edu-point">
                                <h3>Intermediate (MPC)</h3>
                                <p>Sri Chaitanya, 2019 - 2021</p>
                                <span>Percentage: 94%</span>
                            </div>
                            <span className="edu-line"></span>
                        </div>
                        <div className="edu-branch">
                            <div className="edu-point">
                                <h3>SSC</h3>
                                <p>St. Mary’s High School, 2018 - 2019</p>
                                <span>Percentage: 95%</span>
                            </div>
                            <span className="edu-line"></span> {/* Add this line to show the dot for SSC */}
                        </div>
                    </div>
                </div>
                <div className="about-right">
                    <div className="about-para">
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Magnam fuga molestias illo placeat incidunt culpa laudantium esse velit assumenda reiciendis consectetur, omnis quos atque voluptates id ut temporibus aut! Voluptatum!</p>
                        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eaque incidunt commodi quis est accusamus earum, magnam nisi aut quidem aliquam dolore laboriosam qui soluta pariatur provident quisquam odit harum nulla!</p>
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

                <a href="https://www.linkedin.com/in/mohithmohan0708/" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-linkedin"></i>
                    <span>LinkedIn</span>
                </a>
                <div className="divider"></div>

                <a href="https://leetcode.com/your_username" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fas fa-code"></i>
                    <span>LeetCode</span>
                </a>
                <div className="divider"></div>

                <a href="https://www.hackerrank.com/your_username" target="_blank" rel="noopener noreferrer" className="social-icon">
                    <i className="fab fa-hackerrank"></i>
                    <span>HackerRank</span>
                </a>
            </div>
        </div>
    )
}

export default About
