import React, { FC } from "react";

export interface HTMLContentProps {
  className: string;
  content: string;
}

export const HTMLContent: FC<HTMLContentProps> = ({ content, className }) => (
  <div className={className} dangerouslySetInnerHTML={{ __html: content }} />
);

export interface ContentProps {
  className: string;
  content: React.ReactNode;
}

const Content: FC<ContentProps> = ({ content, className }) => (
  <div className={className}>{content}</div>
);

export default Content;
