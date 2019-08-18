import React from 'react';

const ListItem = ({children, title} : {children : any, title? : string}) => {
    return (
        <div className="list-item">
            <h3 className="list-item-title">{title}</h3>
            {children}
        </div>
    )
}

export default ListItem;