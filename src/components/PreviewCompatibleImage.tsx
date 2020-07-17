import React, { FC } from "react";
import Img, { GatsbyImageProps } from "gatsby-image";

export interface PreviewCompatibleImageProps {
  imageInfo: {
    alt?: string;
    image?: { childImageSharp: GatsbyImageProps } | string;
    childImageSharp?: GatsbyImageProps;
  };
}

const PreviewCompatibleImage: FC<PreviewCompatibleImageProps> = ({
  imageInfo,
}) => {
  const imageStyle = { borderRadius: "5px" };
  const { alt = "", childImageSharp, image } = imageInfo;

  if (typeof image === "object" && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    );
  }

  if (childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />;
  }

  if (!!image && typeof image === "string")
    return <img style={imageStyle} src={image} alt={alt} />;

  return null;
};

export default PreviewCompatibleImage;
