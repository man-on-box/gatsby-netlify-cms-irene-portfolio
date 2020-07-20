import { useStaticQuery, graphql } from "gatsby";
import { FluidObject } from "gatsby-image";

export interface PortfolioItem {
  fields: {
    slug: string;
  };
  frontmatter: {
    title: string;
    subheading: string;
    templateKey: string;
    image: {
      childImageSharp: {
        fluid: FluidObject;
      };
    };
  };
  html: string;
  id: string;
}

export const usePortfolioData = () => {
  const { allMarkdownRemark } = useStaticQuery(
    graphql`
      query PortfolioItemQuery {
        allMarkdownRemark(
          sort: { order: DESC, fields: [frontmatter___date] }
          filter: { frontmatter: { templateKey: { eq: "portfolio-item" } } }
        ) {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                subheading
                templateKey
                image {
                  childImageSharp {
                    fluid(maxWidth: 500, quality: 80) {
                      ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              html
            }
          }
        }
      }
    `
  );

  const nodeArray = allMarkdownRemark.edges as any[];
  const mappedArray = nodeArray.map((obj) => obj.node) as PortfolioItem[];

  return mappedArray;
};
