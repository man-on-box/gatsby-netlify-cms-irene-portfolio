import React, { FC } from "react";
import cx from "classnames";
import styles from "./index.module.scss";

interface SectionHeaderProps {
  classNames?: string;
}

const SectionHeader: FC<SectionHeaderProps> = ({ children, classNames }) => (
  <h2 className={cx(classNames, styles.sectionHeader)}>{children}</h2>
);

export { SectionHeader, SectionHeaderProps };
