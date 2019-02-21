import React from "react";
import { StaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";
import PropTypes from "prop-types";

const Image = ({ name }) => (
    <StaticQuery
        query={imageQuery}
        render={
            (data) => {
                return(<Img fluid={data[name].childImageSharp.fluid} />);
            }
        }
    />
);

const imageQuery = graphql`
    query {
        softpostfutureBanner: file(relativePath: { eq: "softpostfuture.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        softpostfutureIcon: file(relativePath: { eq: "softpostfuture-icon.png" }) {
            childImageSharp {
                fluid(maxWidth: 512) {
                    ...GatsbyImageSharpFluid
                }
            }
        }

        softpostfutureNorb: file(relativePath: { eq: "softpostfuture-norb.png" }) {
            childImageSharp {
                fluid {
                    ...GatsbyImageSharpFluid
                }
            }
        }
    }`;

Image.propTypes = {
    name: PropTypes.string.isRequired
};

export default Image;
