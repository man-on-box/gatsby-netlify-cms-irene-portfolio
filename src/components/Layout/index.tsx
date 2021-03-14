import React, { FC } from "react";
import { Helmet } from "react-helmet";
import { Footer } from "./Footer";
import { Header } from "./Header";
import "../../scss/all.sass";
import useSiteMetadata from "./useSiteMetadata";
import { withPrefix } from "gatsby";

const TemplateWrapper: FC = ({ children }) => {
  const { title, description } = useSiteMetadata();
  return (
    <div>
      <Helmet>
        <html lang="en" prefix="og: http://ogp.me/ns#" />
        <title>{title}</title>

        <meta name="description" content={description} />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href={`${withPrefix("/")}img/apple-touch-icon.png`}
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-32x32.png`}
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href={`${withPrefix("/")}img/favicon-16x16.png`}
          sizes="16x16"
        />

        <link
          rel="mask-icon"
          href={`${withPrefix("/")}img/safari-pinned-tab.svg`}
          color="#ff4400"
        />
        <meta name="theme-color" content="#fff" />

        <meta property="og:type" content="business.business" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:url" content="/" />
        <meta
          name="image"
          property="og:image"
          content={`${withPrefix("/")}img/og-image.png`}
        />
      </Helmet>
      <Header />
      <div>{children}</div>
      <Footer />
    </div>
  );
};

export default TemplateWrapper;
