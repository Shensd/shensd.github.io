import React from "react";
import "./jumbotron.css"

const Jumbotron = ({ children } : {children : any}) => {
    return (
        <div className="jumbotron">
            <div className="content">
                {children}
            </div>
        </div>
    )
};

export default Jumbotron;