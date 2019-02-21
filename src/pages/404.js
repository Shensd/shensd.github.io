import React from "react";

import Layout from "../components/layout";
import SEO from "../components/seo";

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <h1>404, PAGE NOT FOUND</h1>
    <p>I'm not really sure how you got here considering this is a single page website.</p>
  </Layout>
);

export default NotFoundPage;
