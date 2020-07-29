import React from "react";
import { PortfolioItem } from "@screens/PortfolioItem/";

const PortfolioItemPreview = ({ entry, widgetFor, toArray }) => {
  const getGalleryImages = () => {
    const entries = entry.getIn(["data", "galleryImages"]);
    if (!entries) return [];
    return entries.toArray();
  };

  const galleryImages = getGalleryImages();

  return (
    <PortfolioItem
      title={entry.getIn(["data", "title"])}
      subheading={entry.getIn(["data", "subheading"])}
      imageInfo={{ image: entry.getIn(["data", "image"]) }}
      content={widgetFor("body")}
      galleryImages={galleryImages}
    />
  );
};

export default PortfolioItemPreview;
