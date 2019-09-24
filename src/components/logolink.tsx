import React from "react";

import "./logolink.css";

const LogoLink = ({logo, link} : {logo: string, link: string}) => {
    return (
        <div className="logo-link">
            <a href={link}>
                <img src={logo} className="logo-link-img" />
            </a>
        </div>
    );
}

export default LogoLink;