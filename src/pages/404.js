import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Jumbotron from "../components/jumbotron";

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not found" />
        <Jumbotron>
            <h1>404, PAGE NOT FOUND</h1>
            <p>I'm not really sure how you got here considering this is a single page website.</p>

            <p><a href="/">Home</a></p>
        </Jumbotron>
    </Layout>
);

export default NotFoundPage;
