import React, { FC } from "react";
import cx from "classnames";
import PreviewCompatibleImage from "@components/PreviewCompatibleImage";
import { HTMLContent } from "@components/Content";
import { SectionHeader } from "@components/SectionHeader";
import { ImageInfo } from "types/ImageInfo";
import styles from "./index.module.scss";

export interface AboutProps {
  title: string;
  imageInfo: ImageInfo;
  content: string;
}

const About: FC<AboutProps> = ({ title, imageInfo, content }) => (
  <section className={cx(styles.section, "section")}>
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="section">
            <SectionHeader>{title}</SectionHeader>

            <HTMLContent className="content" content={content} />
          </div>
        </div>
        <div className="column">
          <PreviewCompatibleImage imageInfo={imageInfo} />
        </div>
      </div>
    </div>
  </section>
);

export { About };
