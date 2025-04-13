import React from 'react'
import './About.css'
import theme_pattern from '../../assets/theme_pattern.svg'
import profile_img from '../../assets/about_profile.svg'

const About = () => {
    return (
        <div className='about' id='about'>
            <div className="about-title">
                <h1>About me</h1>
                <img src={theme_pattern} alt="" />
            </div>
            <div className="about-sections">
                <div className="about-left">
                    <img src={profile_img} alt="" />
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
            <div className="about-acheivements">
                <div className="about-acheivement">
                    <h1>10+</h1>
                    <p>YEARS OF EXPERINCE</p>
                </div>
                <hr />
                <div className="about-acheivement">
                    <h1>90+</h1>
                    <p>PROJECTS COMPLETED</p>
                </div>
                <hr />
                <div className="about-acheivement">
                    <h1>15+</h1>
                    <p>HAPPY CLIENTS</p>
                </div>
            </div>
        </div>
    )
}

export default About
