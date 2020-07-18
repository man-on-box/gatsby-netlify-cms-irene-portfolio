import React, { FC } from "react";

interface HTMLContentProps {
  className: string;
  content: string;
}

const HTMLContent: FC<HTMLContentProps> = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

export { HTMLContent, HTMLContentProps };

interface ContentProps {
  className: string;
  content: React.ReactNode;
}

const Content: FC<ContentProps> = ({ content, className }) => (
  <div className={className}>{content}</div>
);

export { Content, ContentProps };

export default Content;
