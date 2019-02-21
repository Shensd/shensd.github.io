import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";

/**
 * Get a fixed image icon from the list of pre-requested icons
 * @param name name of the icon
 */
const ImageIcon = ({ name }) => (
    <StaticQuery
        query={iconQuery}
        render={
            (data) => {
                return(<Img fixed={data[name].childImageSharp.fixed} />);
            }
        }
    />
);

const iconQuery = graphql`
    query {
        github: file(relativePath: { eq: "github.png" }) {
            childImageSharp {
                fixed(width: 45) {
                    ...GatsbyImageSharpFixed
                }
            }
        }

        mail: file(relativePath: { eq: "mail.png" }) {
            childImageSharp {
                fixed(width: 41) {
                    ...GatsbyImageSharpFixed
                }
            }
        }
    }`;

ImageIcon.propTypes = {
    name: PropTypes.string.isRequired
};

export default ImageIcon;
