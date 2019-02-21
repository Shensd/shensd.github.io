import React from "react";
import PropTypes from "prop-types";

/**
 * Create a jumbotron, used for side welcomer
 * 
 * @param name welcomer title 
 * @param description welcomer description
 * @param children should be image icons that link somewhere else
 */
class Jumbotron extends React.Component {
    render() {
        return(
            <div className="jumbotron">
                <div className="intro-container">
                    <h1 className="header-1">{this.props.name}</h1>
                    <br />
                    <h3>{this.props.description}</h3>
                    <div className="iconLinks">
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
};

Jumbotron.propTypes = {
    name: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired
};

export default Jumbotron;