import { GatsbyImageProps } from "gatsby-image";

export type ChildImageSharp = GatsbyImageProps;

export interface ImageInfo {
  alt?: string;
  image?: { childImageSharp: GatsbyImageProps } | string;
  childImageSharp?: ChildImageSharp;
}
