import React, { FC } from "react";
import { navigate } from "gatsby";
import cx from "classnames";
import PreviewCompatibleImage from "@components/PreviewCompatibleImage";
import { GatsbyImageProps } from "gatsby-image";

import styles from "./index.module.scss";

interface PortfolioItemProps {
  className?: string;
  title: string;
  subheading: string;
  image: { childImageSharp: GatsbyImageProps };
  slug: string;
}

const PortfolioItem: FC<PortfolioItemProps> = ({
  className,
  title,
  subheading,
  image,
  slug,
}) => (
  <div
    className={cx("column", className, styles.portfolioWrapper)}
    onClick={() => navigate(slug)}
  >
    <div className={styles.portfolioContent}>
      <div className={styles.positionAbsolute}>
        <PreviewCompatibleImage
          imageInfo={image}
          style={{ width: "100%", height: "100%" }}
        />
      </div>
      <div
        className={cx("px-6 py-6", styles.positionAbsolute, styles.withOverlay)}
      >
        <p
          className={cx(
            "title is-4 has-text-weight-bold is-bold-light",
            styles.textWithBackground
          )}
        >
          {title}
        </p>
        <p className={cx(styles.textWithBackground, "subtitle is-6")}>
          {subheading}
        </p>
      </div>
    </div>
  </div>
);

export { PortfolioItem, PortfolioItemProps };
