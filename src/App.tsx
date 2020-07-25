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
                <PositionCarousel preface="" titles={["Developer", "Hacker", "Student", "Researcher"]}/>
                <div className="logo-bar">
                    <LogoLink logo={LogoGithub} link="https://github.com/Shensd"></LogoLink>
                    <LogoLink logo={LogoMail} link="mailto:jack@hance.xyz"></LogoLink>
                </div>
            </Jumbotron>
            <div className="cards">
                <InfoCard>
                    <h2>Education</h2>
                        <p><b>BS Computer Science,</b> North Dakota State University, Expected Fall 2021</p>
                        <p>
                            I am currently attending my junior year at North Dakota State University, the computer science 
                            course is heavily focused on Java, but also includes the use of languages such as C# and C.
                        </p>
                        <ul>
                            <li>Recognized as a student of distinction within the NDSU Department of Computer Science</li>
                            <li>Placed on the Dean’s List each of the four semesters completed</li>
                        </ul>
                    <h2>Experience</h2>
                        <p><b>JES2 Development Intern,</b> IBM, June 2020 to Present</p>
                        <p>
                            JES2 is a component of z/OS, an enterprise mainframe operating system developed by IBM. JES2's 
                            functionality within z/OS is to act as a core manager for batch jobs executed on the system, 
                            and as such, working with JES2 requires an all-encompassing understanding of the mainframe ecosystem.  
                            This internship allowed me to work with mainframes and many of their associated technologies, 
                            such as z/OS, z/VM, and ISPF. It also allowed me to work with several IBM languages, those being 
                            HLASM, JCL, and others internal to IBM. I had no experience with the style of computing that 
                            mainframes require before this internship, so it has been a wonderful opportunity to be given 
                            a solid familiarity with the system.
                        </p>
                    <ul>
                        <li>Gained experience and familiarity with the mainframe ecosystem</li>
                        <li>Worked with many different technologies including HLASM, Z/VM, Z/OS, and ISPF</li>
                    </ul>
                    <h2>Extracurricular</h2>
                        <p><b>President,</b> NDSU Cybersecurity Student Association, May 2020 to Present</p>
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
                        <p><b>Cybersecurity Research Experience for Undergraduates, </b> North Dakota State University, June 2019 - August 2019</p>
                        <p>
                            The Research Experience for Undergraduates is a program sponsored by the National Science Foundation to encourage
                            research to be conducted by undergraduate students in a growing number of different fields. I participated in the
                            NDSU hosted Cybersecurity REU and developed, conducted, and wrote about the use of machine learning in post attack 
                            forensic analysis. My project was specifically about the use of unsupervised learning on profiling users by Bash 
                            history.
                        </p>
                    <h2>Achievements</h2>
                        <p><b>Cyber Skyline’s NCL Regular Season Spring 2020 CTF Competition,</b> placed 16th of 5300+ players</p>
                        <p>
                            A Capture the Flag competition is a competition in where players are given a wide array of hacking challenges with the 
                            goal of having players use many different cybersecurity skills to solve problems to get an end "flag." An example of a 
                            basic challenge would be to use an SQLI vulnerability to leak a database that holds a specific string that is the final 
                            flag. Cyber Skyline's NCL CTF competition consisted of categories including cryptography, reverse engineering, log analysis, 
                            password cracking, web application exploitation, and several others. In the individual section of the competition, 
                            I placed 16th out of 5,357 players nationwide.
                        </p>
                        <p><b>2019 National Cyber Summit Cyber Cup Challenge,</b> placed 2nd out of 10+ college teams</p>
                        <p>
                            The National Cyber Summit Cyber Cup Challenge is a team-based CTF taking place live during the Annual National Cyber Summit conference. 
                            I was the team captain of a team consisting of 4 members. We worked as a team to solve cybersecurity problems in several different 
                            categories, with a strong focus on web application exploitation.
                        </p>
                    <h2>Technologies</h2>
                    <div className="langs">
                        <div className="lang-box">
                            <h3>C++</h3>
                            <p>3 years experience (2017)</p>
                            <p>
                                My primary development language is C++, I tend to use it largely with networking and hardware
                                but have also used it with libraries such as OpenGL. Some specific projects created with C++
                                would include things like PSBB, an HTTP web server written from scratch using raw sockets, and 
                                an <a href="https://github.com/Shensd/HID5455-Arduino" target="_blank" rel="noopener noreferrer">Arduino library for working with the HID5455 family of RFID scanners.</a>
                            </p>
                            <ul>
                                <li>Hardware</li>
                                <li>Networking</li>
                                <li>Graphics</li>
                            </ul>
                        </div>
                        <div className="lang-box">
                            <h3>Javascript/Typescript/Node.js</h3>
                            <p>4 years experience (2016)</p>
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
                    </div>
                    <div className="langs">
                        <div className="lang-box">
                            <h3>Python</h3>
                            <p>3 years experience (2017)</p>
                            <p>
                                I have used python extensively in networking, web scraping, and general-purpose scripting. 
                                I also use it for automation of scripts for applications in daily use and penetration testing, 
                                an example of this being <a href="https://github.com/Shensd/icecold" target="_blank" rel="noopener noreferrer">icecold</a>, 
                                a website wordlist generator. I utilized the python machine learning library Scikit-Learn 
                                for the machine learning aspect of my paper <em>Use of Novelty Detection on Bash History for 
                                Identification of Similar Source Generation in Post Attack Forensic Analysis.</em>
                            </p>
                            <ul>
                                <li>Machine Learning</li>
                                <li>Networking</li>
                                <li>Automation</li>
                            </ul>
                        </div>
                        <div className="lang-box">
                            <h3>Penetration Testing</h3>
                            <p>2 years experience (2018)</p>
                            <p>
                            I have participated in a large number of cybersecurity competitions, both in a team and individual 
                            settings. These have included more game-like hacking such as capture the flag competitions, but 
                            also more real-world such as the Collegiate Penetration Testing Competition, which is a team-based 
                            competition where a pentest is performed on a mock business's architecture and a final penetration 
                            testing report is written. My area of interest in penetration testing lies heavily in reverse 
                            engineering of both desktop binaries and the deobfuscation of web scripts. 
                            </p>
                            <ul>
                                <li>Web Application Exploitation</li>
                                <li>Reverse Engineering</li>
                                <li>Cryptanalysis</li>
                            </ul>
                        </div>
                    </div>
                    <div className="langs">
                        <div className="lang-box">
                            <h3>HTML5/CSS3/Javascript</h3>
                            <p>5 years experience (2015)</p>
                            <p>
                                I have used front end web development technologies frequently throughout my career as a 
                                developer, and I find myself very comfortable using them across a variety of applications.
                                My strength within this area is bringing design ideas to life in the form of websites. 
                                Some websites I have created in the past include <a href="https://tohru.fun" rel="noopener noreferrer" target="_blank">tohru.fun</a> and <a href="https://insomniactf.com" rel="noopener noreferrer" target="_blank">insomniactf.com</a>.
                            </p>
                            <ul>
                                <li>Interfaces</li>
                                <li>User Experience</li>
                                <li>Animations</li>
                            </ul>
                        </div>
                        <div className="lang-box">
                            <h3>Apache2/Linux Remote Management</h3>
                            <p>4 years experience (2016)</p>
                            <p>
                                I have hosted and managed several low traffic websites for multiple years, all of which being
                                hosted on Linux machines with Apache2 as a backend. An example of this can be seen 
                                at <a href="https://insomniactf.com" rel="noopener noreferrer" target="_blank">insomniactf.com</a>.
                            </p>
                            <ul>
                                <li>Server Management</li>
                                <li>Linux Proficiency</li>
                                <li>Web Server Security</li>
                            </ul>
                        </div>
                    </div>
                </InfoCard>
            </div>
            <div className="footer-spiral">
                <img src={AniSpiral} alt="Spiral Animation Footer" className="img-spiral"/>
            </div>
            <div className="footer"><p>Jack Hance 2020</p></div>
        </div>
    );
}

export default App;
