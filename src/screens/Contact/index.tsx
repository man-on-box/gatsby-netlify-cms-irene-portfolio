import React, { FC } from "react";
import cx from "classnames";
import { SectionHeader } from "@components/SectionHeader";
import { Content } from "@components/Content";
import { ContactForm } from "./ContactForm";
import styles from "./index.module.scss";

export interface ContactProps {
  title: string;
  content: string;
  contentComponent?: React.FC<any>;
}

const Contact: FC<ContactProps> = ({ title, content, contentComponent }) => {
  const PageContent = contentComponent || Content;

  return (
    <section className={cx("section", styles.section)}>
      <div className="container">
        <div className="columns">
          <div className="column is-half is-offset-one-quarter">
            <div className="mb-6 has-text-centered">
              <SectionHeader>{title}</SectionHeader>
              <PageContent className="content" content={content} />
            </div>
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
