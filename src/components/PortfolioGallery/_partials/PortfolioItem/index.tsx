import React, { FC } from "react";
import cx from "classnames";
import {
  PreviewCompatibleImage,
  PreviewCompatibleImageProps,
} from "@components/PreviewCompatibleImage";
import { GatsbyImageProps } from "gatsby-image";

import styles from "./index.module.scss";

interface PortfolioItemProps {
  className?: string;
  title: string;
  subheading: string;
  image: { childImageSharp: GatsbyImageProps };
}

const PortfolioItem: FC<PortfolioItemProps> = ({
  className,
  title,
  subheading,
  image,
}) => {
  image.childImageSharp;
  return (
    <div className={cx("column", className, styles.portfolioWrapper)}>
      <div
        className={styles.portfolioContent}
        style={{
          backgroundImage: `url(${
            image.childImageSharp && !Array.isArray(image.childImageSharp.fluid)
              ? image.childImageSharp?.fluid?.src
              : image
          })`,
        }}
      >
        <div className={styles.overlay}></div>
        <h3>{title}</h3>
        <p>{subheading}</p>
      </div>
    </div>
  );
};

export { PortfolioItem, PortfolioItemProps };
