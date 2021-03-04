import React from "react";

import "./logolink.css";

const LogoLink = ({logo, link} : {logo: string, link: string}) => {
    return (
        <div className="logo-link">
            <a  rel="noopener noreferrer" target="_blank" href={link}>
                <img src={logo} className="logo-link-img" alt={link} />
            </a>
        </div>
    );
}

export default LogoLink;