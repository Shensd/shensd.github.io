import React from "react";

/**
 * HalfSlide is used for information, creates a half slide on the page
 * @param backgroundColor background color of slide
 * @param children text content for inner card
 */
class Slide extends React.Component {
    render() {
        return(
            <div className="slide" style={{
                backgroundColor: this.props.backgroundColor
            }}>
                {this.props.children}
            </div>
        );
    }
} 

export default Slide;