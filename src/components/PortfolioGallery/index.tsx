import React, { FC } from "react";
import cx from "classnames";
import { usePortfolioData } from "./usePortfolioData";
import { getAlternatingColumnSizes } from "./lib/getAlternatingColumnSizes";
import { PortfolioItem } from "./_partials/PortfolioItem";
import styles from "./index.module.scss";

const PortfolioGallery: FC = () => {
  const portfolioItems = usePortfolioData();
  const { getColumnSizeClassName } = getAlternatingColumnSizes();

  return (
    <div className={cx("section", styles.section)}>
      <div className="container">
        <div className="columns is-multiline">
          {portfolioItems.length < 1 && "No portfolio items to be rendered"}
          {portfolioItems.map(
            ({
              frontmatter: { title, subheading, image },
              fields: { slug },
            }) => (
              <PortfolioItem
                key={title}
                className={getColumnSizeClassName()}
                title={title}
                subheading={subheading}
                image={image}
                slug={slug}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export { PortfolioGallery };
