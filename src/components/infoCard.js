import React from 'react';

class InfoCard extends React.Component {
    render() {
        return (
            <div className={"info-section " + this.props.className} style={{
                backgroundColor : this.props.backgroundColor,
                float : this.props.side
            }}>
                <div className="info-card">
                    {this.props.children}
                </div>
            </div> 
        )
    }
}

export default InfoCard;