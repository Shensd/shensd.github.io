import React from 'react';

const Since = ({ children } : {children : number}) => {
    return (
        <p>{(new Date().getFullYear()) - children}  years experience ({children})</p>
    )
};

export default Since;