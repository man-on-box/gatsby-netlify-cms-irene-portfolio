import React from "react";
import { graphql } from "gatsby";
import { Helmet } from "react-helmet";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import { About } from "../screens/About/index.tsx";

const AboutPage = ({ data: { markdownRemark } }) => {
  const { frontmatter, html } = markdownRemark;

  const imageInfo = {
    image: frontmatter.image,
    alt: frontmatter.alt,
  };

  return (
    <Layout>
      <Helmet title="Who is Irene?" />
      <About
        contentComponent={HTMLContent}
        title={frontmatter.title}
        imageInfo={imageInfo}
        content={html}
      />
    </Layout>
  );
};

export default AboutPage;

export const aboutPageQuery = graphql`
  query AboutPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
      }
    }
  }
`;
