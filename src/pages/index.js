import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

import Jumbotron from "../components/jumbotron";
import ImageIcon from "../components/imageIcon";
import Slide from "../components/slide";
import Image from "../components/image";
import InfoCard from "../components/infoCard.js";

const bgSecondary = "#f9acd4";
const bgPrimary = "#87f6ff";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={["jack hance","portfolio","jack hance information","hance"]} />
    <Jumbotron name="Jack Hance" description="Software Developer">
        <a href="https://github.com/Shensd" target="_blank" rel="noopener noreferrer">
            <ImageIcon name="github" />
        </a>
        <a href="mailto:jack@hance.xyz" target="_blank" rel="noopener noreferrer">
            <ImageIcon name="mail" />
        </a>
    </Jumbotron>
    <Slide backgroundColor={bgPrimary}>
        <InfoCard backgroundColor={bgPrimary}>
            <h1>About Me</h1>
            <p>
                Hi, I'm Jack, I'm a software developer. 
                <br/>
                I am currently a freshman at 
                North Dakota State University majoring in Computer Science. I have a background
                in front-end development, back-end development, web server administration, and penitration testing.
            </p>
            <br/>
            <hr/>
            <br/>
            <h1>Experience</h1>
            <p><strong>C++</strong>, 2 years experience (2017 - present)</p>
            <p><strong>HTML5/CSS3/Javascript</strong>, 4 years experience (2015 - present)</p>
            <p><strong>Javascript/Typescript/Node.js</strong>, 3 years experience (2016 - present)</p>
            <p><strong>Java</strong>, 3 years experience (2016 - present)</p>
            <p><strong>Apache2/Linux Remote Management</strong>, 3 years experience (2016 - present)</p>
            <p><strong>Penetration Testing</strong>, 1 Year of Experience (2019)</p>
            <br/>
            <hr/>
            <br/>
            <h1>What I've Made</h1>
            <h3><a href="https://github.com/Shensd/psbb" target="_blank" rel="noopener noreferrer">PSBB</a> - A Webserver for the Modern Era</h3>
            <p>
                PSBB is an HTTP server built from scratch in C++, 
                it has support for serving many file types with blazing fast speed.
            </p>
            <br/>
            <h3><a href="https://github.com/Shensd/TohruBot" target="_blank" rel="noopener noreferrer">Tohru Bot</a>  - The Only&trade; Discord Bot</h3>
            <p>
                Tohru Bot is a chat bot for <a href="https://discordapp.com/" target="_blank" rel="noopener noreferrer">Discord,</a> a
                text and voice chat platform. It has chat commands for both fun and server moderation.
                <br/>
                Tohru Bot has it's own website, which can be seen at <a href="https://tohru.fun" rel="noopener noreferrer">tohru.fun</a>
            </p>
            <br/>
            <hr/>
            <br/>
            <h1>School</h1>
            <p>
                <strong>BS Computer Science</strong>, North Dakota State University, Fargo, ND, Expected May 2021
            </p>
            <ul>
                <li>Recognized as a student of distinction within the NDSU Department of Computer Science</li>
                <li>Course taught using Java</li>
            </ul>
            <br/>
            <hr/>
            <br/>
            <p><strong>Club Officer</strong>, NDSU Cybersecurity Student Assocation</p>
            <p>
                The NDSU Cybersecurity Student Association is a club dedicated to peer learning oriented towards cybersecurity. Club members participate in student lead lessons and compete in hacking competitions. The club also focuses on team programming and the technology along with it.
            </p>
            <ul>
                <li>Learned leadership skills through leading lessons and organizing meetings</li>
                <li>Self and peer taught in many areas of cybersecurity </li>
                <li>Worked in a team environment on several software development projects</li>
            </ul>
        </InfoCard>
    </Slide>
  </Layout>
);

export default IndexPage;
