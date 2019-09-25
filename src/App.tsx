import React from 'react';
import './App.css';

import PositionCarousel from './animations/positioncarousel';

import InfoCard from './components/infocard';
import Jumbotron from './components/jumbotron';
import LogoLink from './components/logolink';

import LogoGithub from "./res/logos/logo-github.png";
import LogoMail from "./res/logos/logo-mail.png";

import AniSpiral from './res/animations/spiral-single.gif';

const App: React.FC = () => {
    return (
        <div className="App">
            <Jumbotron>
                <h1>Jack Hance</h1>
                <PositionCarousel preface="" titles={["Developer", "Hacker", "Student", "Circuit Bender", "Researcher"]}/>
                <div className="logo-bar">
                    <LogoLink logo={LogoGithub} link="https://github.com/Shensd"></LogoLink>
                    <LogoLink logo={LogoMail} link="mailto:jack@hance.xyz"></LogoLink>
                </div>
            </Jumbotron>
            <div className="cards">
                <InfoCard>
                    <h2>Education</h2>
                    <p><b>BS Computer Science</b> - North Dakota State University, Expected May 2021</p>
                    <p>
                        I am currently attending my sophomore year at North Dakota State University, the computer science 
                        course is heavily focused on Java, but also includes the use of languages such as C# and C.
                    </p>
                    <ul>
                        <li>Recognized as a student of distinction within the NDSU Department of Computer Science</li>
                        <li>Placed on the dean’s list for fall and spring semesters of freshman year</li>
                    </ul>
                    <h2>Extracurricular</h2>
                        <p><b>Club Officer</b> - NDSU Cybersecurity Student Association</p>
                        <p>
                            The NDSU Cybersecurity Student Association is a club dedicated to peer learning oriented towards cybersecurity. 
                            Club members participate in student lead lessons and compete in hacking competitions. The club also focuses on 
                            team programming and technology along with it.
                        </p>
                        <ul>
                            <li>Learned leadership skills through leading lessons and organizing meetings</li>
                            <li>Self and peer taught in many areas of cybersecurity </li>
                            <li>Worked in a team environment on several software development projects</li>
                        </ul>
                    <h2>Research</h2>
                        <p><b>NDSU Cybersecurity Research Experience for Undergraduates</b></p>
                        <p>
                            The Research Experience for Undergraduates is a program sponsored by the National Science Foundation to encourage
                            research to be conducted by undergraduate students in a growing number of different fields. I participated in the
                            NDSU hosted Cybersecurity REU and developed, conducted, and wrote about the use of machine learning in post attack 
                            forensic analysis. My project was specifically about the use of unsupervised learning on profiling users by Bash 
                            history. This project is currently in the process of being published by IEEE.
                        </p>
                    <h2>Experience</h2>
                    <div className="langs">
                        <div className="lang-box">
                            <h3>C++</h3>
                            <p>2 years experience (2017)</p>
                            <p>
                                My primary development language is C++, I tend to use it largely with networking and hardware
                                but have also used it with libraries such as OpenGL. Some specific projects created with C++
                                would include things like PSBB, an HTTP web server written from scratch using raw sockets, and 
                                an Arduino library for working with the HID5455 family of RFID scanners.
                            </p>
                            <ul>
                                <li>Hardware</li>
                                <li>Networking</li>
                                <li>Graphics</li>
                            </ul>
                        </div>
                        <div className="lang-box">
                            <h3>HTML5/CSS3/Javascript</h3>
                            <p>4 years experience (2015)</p>
                            <p>
                                I have used front end web development technologies frequently throughout my career as a 
                                developer, and I find myself very comfortable using them across a variety of applications.
                                My strength within this area is bringing design ideas to life in the form of websites. 
                                Some websites I have created in the past include <a href="https://tohru.fun" rel="noopener noreferrer" target="_blank">thoru.fun</a> and <a href="https://insomniactf.com" rel="noopener noreferrer" target="_blank">insomniactf.com</a>.
                            </p>
                            <ul>
                                <li>Interfaces</li>
                                <li>User Experience</li>
                                <li>Animations</li>
                            </ul>
                        </div>
                    </div>
                    <div className="langs">
                        <div className="lang-box">
                            <h3>Javascript/Typescript/Node.js</h3>
                            <p>3 years experience (2016)</p>
                            <p>
                                I have used Node.js and companion languages in many different applications, but the area of which
                                I have done the most development is the creation of chat bots for social applications such as <a rel="noopener noreferrer" target="_blank" href="https://discord.gg">Discord</a>, which is a voice and chat application platform with rich
                                support for text and voice chat bots. An example of my work in this area can be seen in <a href="https://tohru.fun" rel="noopener noreferrer" target="_blank">Tohru Bot</a>,
                                a music and moderation bot for general server use.
                            </p>
                            <ul>
                                <li>Chat Bots</li>
                                <li>Networking</li>
                                <li>Back End Web Development</li>
                            </ul>
                        </div>
                        <div className="lang-box">
                            <h3>Python</h3>
                            <p>2 years experience (2017)</p>
                            <p>
                                I have used python extensively in both networking and machine learning. I also use it for automation
                                of scripts for applications in daily use and penetration testing. I professionally wrote python
                                for the machine learning aspect of my paper <em>Use of Novelty Detection on Bash History for 
                                Identification of Similar Source Generation in Post Attack Forensic Analysis</em>, it is currently
                                in the process of being published by IEEE.
                            </p>
                            <ul>
                                <li>Machine Learning</li>
                                <li>Networking</li>
                                <li>Automation</li>
                            </ul>
                        </div>
                    </div>
                    <div className="langs">
                        <div className="lang-box">
                            <h3>Apache2/Linux Remote Management</h3>
                            <p>3 years experience (2016)</p>
                            <p>
                                I have hosted and managed several low traffic websites for multiple years, all of which being
                                hosted on Linux machines with Apache2 as a backend. Some examples of these can be seen 
                                at <a href="https://insomniactf.com" rel="noopener noreferrer" target="_blank">insomniactf.com</a> and <a href="https://686f7065.pw/" rel="noopener noreferrer" target="_blank">686f7065.pw</a>.
                            </p>
                            <ul>
                                <li>Server Management</li>
                                <li>Linux Proficiency</li>
                                <li>Web Server Security</li>
                            </ul>
                        </div>
                        <div className="lang-box">
                            <h3>Penetration Testing</h3>
                            <p>1 year experience (2019)</p>
                            <p>
                                I have participated in a large amount of cybersecurity competitions, both in a team and individual settings. 
                                Some highlights of placement are top 2% of 4000+ participants in Cyber Skyline’s NCL Regular Season 2019 CTF Competition and
                                2nd place out of 10+ college teams in the 2019 National Cyber Summit Cyber Cup Challenge. I have found and reported 
                                critical security exploits in ecommerce websites, of which I unfortunately cannot discuss the details here.
                            </p>
                            <ul>
                                <li>Web Application Exploitation</li>
                                <li>Reverse Engineering</li>
                                <li>Cryptanalysis</li>
                            </ul>
                        </div>
                    </div>
                </InfoCard>
            </div>
            <div className="footer-spiral">
                <img src={AniSpiral} alt="Spiral Animation Footer" className="img-spiral"/>
            </div>
            <div className="footer"><p>Jack Hance 2019</p></div>
        </div>
    );
}

export default App;
