import React, { FC } from "react";
import { Link } from "gatsby";
import cx from "classnames";
import { navLinks } from "@src/lib/navLinks";

import mail from "@img/social/mail.svg";
import linkedin from "@img/social/linkedin.svg";
import github from "@img/github-icon.svg";

import styles from "./index.module.scss";

const Footer: FC = () => (
  <footer className={cx("footer ", styles.footer)}>
    <div className="content has-text-centered">
      <div className="container">
        <div className="columns">
          <div className="column">
            <section className="menu has-text-centered has-text-left-desktop">
              <ul className={styles.menuList}>
                {navLinks.map(({ label, to }) => (
                  <li>
                    <Link to={to} className="navbar-item is-inline-block">
                      {label}
                    </Link>
                  </li>
                ))}
                <li>
                  <a
                    className="navbar-item is-inline-block"
                    href="/admin/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Admin
                  </a>
                </li>
              </ul>
            </section>
          </div>
          <div className="column">
            <div className={styles.social}>
              <a
                title="linkedIn"
                href="https://www.linkedin.com/in/irenegalvez/"
              >
                <img src={linkedin} alt="LinkedIn" className={styles.icon} />
              </a>
              <a title="mail" href="mailto:galvezirene@gmail.com?subject=Hi!">
                <img src={mail} alt="Mail" className={styles.icon} />
              </a>
            </div>
          </div>
        </div>
        <div className="container has-text-grey has-text-centered has-text-right-desktop">
          <small className="pr-1">Site built with Gatsby and NetlifyCMS</small>{" "}
          <a
            title="github"
            href="https://github.com/man-on-box/gatsby-netlify-cms-irene-portfolio"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={github} alt="github" className={styles.icon} />
          </a>
        </div>
      </div>
    </div>
  </footer>
);

export { Footer };
