import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import { HTMLContent } from "../components/Content";
import { PortfolioItem } from "../screens/PortfolioItem/index.tsx";

const PortfolioItemPage = ({ data: { markdownRemark } }) => {
  const { frontmatter, html } = markdownRemark;

  const imageInfo = {
    image: frontmatter.image,
    alt: frontmatter.alt,
  };

  return (
    <Layout>
      <PortfolioItem
        contentComponent={HTMLContent}
        title={frontmatter.title}
        subheading={frontmatter.subheading}
        imageInfo={imageInfo}
        content={html}
        galleryImages={frontmatter.galleryImages || []}
      />
    </Layout>
  );
};

export default PortfolioItemPage;

export const PortfolioItemPageQuery = graphql`
  query PortfolioItemById($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        subheading
        image {
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        alt
        galleryImages {
          childImageSharp {
            fluid(maxWidth: 500, quality: 85) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
