import React, { FC, useState } from "react";
import cx from "classnames";
import { Link } from "gatsby";
import styles from "./index.module.scss";
import github from "@img/github-icon.svg";

const navbarLinks = [
  { label: "About", to: "/about" },
  { label: "Products", to: "/products" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
  { label: "Form Examples", to: "/contact/examples" },
];

const isActiveNavItemClassname = (path: string) =>
  window.location.pathname.includes(path) ? "is-active" : "";

const Header: FC = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => setActive(!active);

  return (
    <section className={cx("section", styles.header)}>
      <div className="container">
        <div className={cx("navbar-brand", styles.navbarBrand)}>
          <Link to="/" title="Logo">
            <h1 className={styles.headerLogo}>I AM IRENE</h1>
          </Link>
          {/* Hamburger menu */}
          <div
            className={cx("navbar-burger", "burger", active ? "is-active" : "")}
            data-target="navMenu"
            onClick={() => toggleMenu()}
          >
            <span aria-hidden="true" />
            <span aria-hidden="true" />
            <span aria-hidden="true" />
          </div>
        </div>
      </div>
      <div className="container">
        <div
          id="navMenu"
          className={cx("navbar-menu", active ? "is-active" : "")}
        >
          <div className="navbar-start has-text-centered">
            {navbarLinks.map(({ label, to }) => (
              <Link
                key={label}
                className={cx("navbar-item", isActiveNavItemClassname(to))}
                to={to}
              >
                {label}
              </Link>
            ))}
          </div>
          <div className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/man-on-box/gatsby-netlify-cms-irene-portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export { Header };
