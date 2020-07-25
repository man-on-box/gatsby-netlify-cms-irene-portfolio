import React, { FC } from "react";
import Img from "gatsby-image";
import { ImageInfo } from "types/ImageInfo";

export interface PreviewCompatibleImageProps {
  imageInfo: ImageInfo;
  style?: React.CSSProperties;
}

const PreviewCompatibleImage: FC<PreviewCompatibleImageProps> = ({
  imageInfo,
  style = {},
}) => {
  const imageStyle = { borderRadius: "5px", ...style };
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
    return (
      <img
        style={{ objectFit: "cover", ...imageStyle }}
        src={image}
        alt={alt}
      />
    );

  return null;
};

export { PreviewCompatibleImage };
export default PreviewCompatibleImage;
