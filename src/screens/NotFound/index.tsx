import React, { FC } from "react";
import cx from "classnames";
import { SectionHeader } from "@components/SectionHeader";
import { PortfolioGallery } from "@components/PortfolioGallery/";
import styles from "./index.module.scss";

const NotFound: FC = () => {
  return (
    <section className={cx(styles.section, "section")}>
      <div className="container">
        <div className="section has-text-centered">
          <SectionHeader>Page not found :(</SectionHeader>
          <p>
            But maybe you would like to check out other items in my portfolio
            below?
          </p>
        </div>
      </div>
      <PortfolioGallery />
    </section>
  );
};

export { NotFound };
