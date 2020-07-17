export interface ImageInfo {
  alt: string;
  image?: { childImageSharp: GatsbyImageProps } | string;
  childImageSharp?: GatsbyImageProps;
}
