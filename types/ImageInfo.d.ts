import { GatsbyImageProps } from "gatsby-image";

export interface ImageInfo {
  alt: string;
  image?: { childImageSharp: GatsbyImageProps } | string;
  childImageSharp?: GatsbyImageProps;
}
