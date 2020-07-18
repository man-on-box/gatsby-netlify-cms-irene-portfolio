import React, { FC } from "react";
import cx from "classnames";
// import { PreviewCompatibleImage } from '@components/PreviewCompatibleImage'
import { usePortfolioData } from "./usePortfolioData";
import styles from "./index.module.scss";

const PortfolioGallery: FC = () => {
  const data = usePortfolioData();
  console.log(data[0].id);
  return (
    <div className={cx("section", styles.section)}>
      <div className="container">
        <div className="tile is-ancestor"></div>
      </div>
    </div>
  );
};

export { PortfolioGallery };
