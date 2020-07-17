import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import { About } from "../screens/About";

const AboutPage = ({ data: { markdownRemark } }) => {
  const { frontmatter, html } = markdownRemark;

  const imageInfo = {
    image: frontmatter.image,
    alt: frontmatter.alt,
  };

  return (
    <Layout>
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
