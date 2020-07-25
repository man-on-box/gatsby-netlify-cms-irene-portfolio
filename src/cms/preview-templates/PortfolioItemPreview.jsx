import React from "react";
import { PortfolioItem } from "@screens/PortfolioItem/";

const PortfolioItemPreview = ({ entry, widgetFor, toArray }) => {
  const galleryImages = entry
    .getIn(["data", "galleryImages"])
    .toArray()
    .map((image) => ({
      image,
    }));

  console.log(galleryImages);
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
