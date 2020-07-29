import React from "react";
import Contact from "@screens/Contact/";

const ContactPagePreview = ({ entry, widgetFor }) => (
  <Contact title={entry.getIn(["data", "title"])} content={widgetFor("body")} />
);

export default ContactPagePreview;
