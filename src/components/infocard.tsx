import React from 'react';
import './infocard.css';

const InfoCard = ({ children, title, direction="left" } : {children : any, title?: string, direction?: string}) => {
    return (
        <div className={`info-card info-card-${direction}`} >
            <h2>{title}</h2>
            {children}
        </div>
    )
};

export default InfoCard;