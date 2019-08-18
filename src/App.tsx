import React from 'react';
import './App.css';

import PositionCarousel from './animations/positioncarousel';

import InfoCard from './components/infocard';
import ListItem from './components/listitem';

const App: React.FC = () => {
    return (
        <div className="App">
            <div className="nameplate">
                <h1>Hi, I'm Jack</h1>
                <PositionCarousel preface="I'm a... " titles={["Software Developer", "Hacker", "Student", "Circuit Bender", "Researcher"]}/>
            </div>
            <InfoCard title="Experience">
                <ListItem title="Cybersecurity">
                    <p style={{fontWeight : "bold"}}>National Cyber Summit CTF 2019</p>
                    <p>
                        Team captain of NDSU Cyber Bison Gold, which placed 2nd out of some number of teams
                    </p>
                    <p style={{fontWeight : "bold"}}>National Cyber League</p>
                    <p>
                        Something something NCL team and individual two seasons they went pretty good
                    </p>
                </ListItem>
                <ListItem title="Software Development">
                    <div className="cluster">
                        <div className="cluster-panel">
                            <p style={{fontWeight : "bold"}}>C++</p>
                            <p>
                                x Years experience
                            </p>
                            <p style={{fontWeight : "bold"}}>Python</p>
                            <p>
                                x Years experience
                            </p>
                            <p style={{fontWeight : "bold"}}>Java</p>
                            <p>
                                x Years experience
                            </p>
                        </div>
                        <div className="cluster-panel">
                            <p style={{fontWeight : "bold"}}>HTML/CSS/Javascript</p>
                            <p>
                                x Years experience
                            </p>
                            <p style={{fontWeight : "bold"}}>Node.js/Typescript</p>
                            <p>
                                x Years experience
                            </p>
                        </div>
                    </div>
                </ListItem>
                <ListItem title="Technologies">
                    <div className="cluster">
                        <div className="cluster-panel">
                            <p style={{fontWeight : "bold"}}>Linux</p>
                            <p>
                                x Years experience
                            </p>
                        </div>
                        <div className="cluster-panel">
                            <p style={{fontWeight : "bold"}}>Apache2</p>
                            <p>
                                x Years experience
                            </p>
                        </div>
                    </div>
                </ListItem>
                <ListItem title="Research">
                    <p style={{fontWeight : "bold"}}>Undergraduate Research</p>
                    <p>
                        Use of Novelty Detection Techniques on Bash History for Identification of Same Source Generation in Post Attack Forensic Analysis
                    </p>
                </ListItem>
            </InfoCard>

            <InfoCard title="Education">
                I am currently attending my sophomore year of college at North Dakota State University
            </InfoCard>

            <InfoCard title="What I've Made">

            </InfoCard>

            <InfoCard title="About Myself">

            </InfoCard>
        </div>
    );
}

export default App;
