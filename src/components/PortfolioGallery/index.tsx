import React, { FC } from "react";
import cx from "classnames";
import { usePortfolioData } from "./usePortfolioData";
import { getAlternatingColumnSizes } from "./lib/getAlternatingColumnSizes";
import { PortfolioItem } from "./_partials/PortfolioItem";
import styles from "./index.module.scss";

const PortfolioGallery: FC = () => {
  const portfolioItems = usePortfolioData();
  console.log(portfolioItems);
  const { getColumnSizeClassName } = getAlternatingColumnSizes();
  return (
    <div className={cx("section", styles.section)}>
      <div className="container">
        <div className="columns is-multiline">
          {portfolioItems.map(
            ({ frontmatter: { title, subheading, image } }) => (
              <PortfolioItem
                key={title}
                className={getColumnSizeClassName()}
                title={title}
                subheading={subheading}
                image={image}
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export { PortfolioGallery };
