import React, { FC } from "react";
import PreviewCompatibleImage from "../components/PreviewCompatibleImage";
import { HTMLContent } from "../components/Content";
import { GatsbyImageProps } from "gatsby-image";

export interface AboutProps {
  title: string;
  imageInfo: {
    alt: string;
    image?: { childImageSharp: GatsbyImageProps } | string;
  };
  content: string;
}

const About: FC<AboutProps> = ({ title, imageInfo, content }) => (
  <section className="section section--gradient">
    <div className="container">
      <div className="columns">
        <div className="column">
          <div className="section">
            <h2 className="title is-size-3 has-text-weight-bold is-bold-light">
              {title}
            </h2>

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
