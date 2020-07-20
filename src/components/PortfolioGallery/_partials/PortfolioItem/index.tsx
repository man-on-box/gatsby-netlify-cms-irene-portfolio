import React, { FC } from "react";
import { navigate } from "gatsby";
import cx from "classnames";
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
      <div className={cx("px-6 py-6", styles.withOverlay)}>
        <p
          className={cx(
            styles.textWithBackground,
            "title is-4 has-text-weight-bold is-bold-light"
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
