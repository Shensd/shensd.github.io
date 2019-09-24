import React from 'react';
import './App.css';

import PositionCarousel from './animations/positioncarousel';

import InfoCard from './components/infocard';
import Jumbotron from './components/jumbotron';
import LogoLink from './components/logolink';

import NameplateCPP from './res/nameplates/cpp-nameplate.png';

import Logo from "./res/spiral-mini.png";

const App: React.FC = () => {
    return (
        <div className="App">
            <Jumbotron>
                <h1>Jack Hance</h1>
                <PositionCarousel preface="" titles={["Software Developer", "Hacker", "Student", "Circuit Bender", "Researcher"]}/>
                <LogoLink logo={Logo} link="http://google.com"></LogoLink>
            </Jumbotron>

            <div className="cards">
                <InfoCard title="Education">
                <p><b>BS Computer Science</b> - North Dakota State University, Expected May 2021</p>
                <p>
                    I am currently attending my sophomore year at North Dakota State University, the computer science 
                    course is heavily focused on Java, but also includes use of languages such as C# and C.
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
                    <img src={NameplateCPP} alt="C++ Nameplate" className="lang-nameplate"/>
                <h2>What I've Made</h2>
                </InfoCard>
            </div>
        </div>
    );
}

export default App;
