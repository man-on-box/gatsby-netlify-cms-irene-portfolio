import React, { FC } from "react";
import cx from "classnames";
import styles from "./index.module.scss";

interface SectionHeaderProps {
  className?: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ children, className }) => (
  <h2
    className={cx(
      className,
      styles.sectionHeader,
      "title is-1 has-text-weight-bold is-bold-light"
    )}
  >
    {children}
  </h2>
);

export { SectionHeader, SectionHeaderProps };
