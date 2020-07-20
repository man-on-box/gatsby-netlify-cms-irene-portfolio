import React from "react";
import { PortfolioItem } from "@screens/PortfolioItem/";

const PortfolioItemPreview = ({ entry, widgetFor }) => (
  <PortfolioItem
    title={entry.getIn(["data", "title"])}
    subheading={entry.getIn(["data", "subheading"])}
    imageInfo={{ image: entry.getIn(["data", "image"]) }}
    content={widgetFor("body")}
  />
);

export default PortfolioItemPreview;
