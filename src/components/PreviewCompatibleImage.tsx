import React, { FC } from "react";
import Img from "gatsby-image";
import { ImageInfo } from "types/ImageInfo";

export interface PreviewCompatibleImageProps {
  imageInfo: ImageInfo | null;
  style?: React.CSSProperties;
}

const isPlainImage = (image: any): string | undefined => {
  if (typeof image === null) return undefined;
  if (image && typeof image === "string") return image;
  if (image && typeof image === "object" && image.image === "string")
    return image.image;
  return undefined;
};

const PreviewCompatibleImage: FC<PreviewCompatibleImageProps> = ({
  imageInfo = {},
  style = {},
}) => {
  if (!imageInfo) return null;

  const imageStyle = { borderRadius: "5px", ...style };
  const { alt = "", childImageSharp, image } = imageInfo;

  if (!image) return null;

  if (typeof image === "object" && !!image.childImageSharp) {
    return (
      <Img style={imageStyle} fluid={image.childImageSharp.fluid} alt={alt} />
    );
  }

  if (childImageSharp) {
    return <Img style={imageStyle} fluid={childImageSharp.fluid} alt={alt} />;
  }
  console.log("what", isPlainImage(image));

  if (isPlainImage(image))
    return (
      <img
        style={{ objectFit: "cover", ...imageStyle }}
        src={isPlainImage(image)}
        alt={alt}
      />
    );

  return null;
};

export { PreviewCompatibleImage };
export default PreviewCompatibleImage;
