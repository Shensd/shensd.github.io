import React from "react";

const LogoLink = ({logo, link} : {logo: string, link: string}) => {
    return (
        <div className="logo-link">
            <a href={link}>
                <img src={logo} />
            </a>
        </div>
    );
}

export default LogoLink;