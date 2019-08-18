import React from 'react';

const InfoCard = ({ children, title } : {children : any, title?: string}) => {
    return (
        <div className="info-card">
            <h2>{title}</h2>
            {children}
        </div>
    )
};

export default InfoCard;