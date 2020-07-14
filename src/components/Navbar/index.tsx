import React, { FC, useState } from "react";
import { Link } from "gatsby";
import cx from "classnames";
import github from "../../img/github-icon.svg";
import styles from "./index.module.scss";

const Navbar: FC = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => setActive(!active);

  return (
    <nav className="navbar" role="navigation" aria-label="main-navigation">
      <div className="container">
        <div className="navbar-brand">
          {/* Hamburger menu */}
          <div
            className={cx("navbar-burger", "burger", active ? "is-active" : "")}
            data-target="navMenu"
            onClick={() => toggleMenu()}
          >
            <span />
            <span />
            <span />
          </div>
        </div>
        <div
          id="navMenu"
          className={cx("navbar-menu", active ? "is-active" : "")}
        >
          <div className="navbar-start has-text-centered">
            <Link className="navbar-item" to="/about">
              About
            </Link>
            <Link className="navbar-item" to="/products">
              Products
            </Link>
            <Link className="navbar-item" to="/blog">
              Blog
            </Link>
            <Link className="navbar-item" to="/contact">
              Contact
            </Link>
            <Link className="navbar-item" to="/contact/examples">
              Form Examples
            </Link>
          </div>
          <div className="navbar-end has-text-centered">
            <a
              className="navbar-item"
              href="https://github.com/netlify-templates/gatsby-starter-netlify-cms"
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
    </nav>
  );
};

export { Navbar };
