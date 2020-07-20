import React, { FC } from "react";
import cx from "classnames";
import PreviewCompatibleImage from "@components/PreviewCompatibleImage";
import { Content } from "@components/Content";
import { SectionHeader } from "@components/SectionHeader";
import { ImageInfo } from "types/ImageInfo";
import styles from "./index.module.scss";

interface PortfolioItemProps {
  title: string;
  subheading: string;
  imageInfo: ImageInfo;
  content: string;
  contentComponent?: React.FC<any>;
}

const PortfolioItem: FC<PortfolioItemProps> = ({
  title,
  subheading,
  imageInfo,
  content,
  contentComponent,
}) => {
  const PageContent = contentComponent || Content;

  return (
    <section className={cx(styles.section, "section")}>
      <div className="container">
        <div className="columns">
          <div className="column">
            <SectionHeader className="has-text-centered">{title}</SectionHeader>
            <p className={cx(styles.subheading, "subtitle is-4 mt-5")}>
              {subheading}
            </p>
            <PageContent
              className="content has-text-justified"
              content={content}
            />
          </div>
          <div className="column">
            <PreviewCompatibleImage imageInfo={imageInfo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export { PortfolioItem, PortfolioItemProps };
