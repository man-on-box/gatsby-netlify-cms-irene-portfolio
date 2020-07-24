import React from "react";
import { About } from "@screens/About/";

const AboutPagePreview = ({ entry, widgetFor }) => (
  <About
    title={entry.getIn(["data", "title"])}
    imageInfo={{ image: entry.getIn(["data", "image"]) }}
    content={widgetFor("body")}
  />
);

export default AboutPagePreview;
