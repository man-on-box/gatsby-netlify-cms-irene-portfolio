import React, { FC, useState } from "react";
import cx from "classnames";
import { Link } from "gatsby";
import styles from "./index.module.scss";

const navbarLinks = [
  { label: "My work", to: "/" },
  { label: "Who is Irene?", to: "/about" },
  { label: "Say hi", to: "/contact" },
  // { label: "Products", to: "/products" },
  // { label: "Blog", to: "/blog" },
  // { label: "Form Examples", to: "/contact/examples" },
];

const Header: FC = () => {
  const [active, setActive] = useState(false);

  const toggleMenu = () => setActive(!active);

  return (
    <section className={cx("section", styles.header)}>
      <div className="container">
        <div className={cx("navbar-brand", styles.justifyContentCenter)}>
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
          className={cx(
            "navbar-menu",
            active ? "is-active" : "",
            styles.justifyContentCenter
          )}
        >
          <div
            className={cx(
              "navbar-start has-text-centered mx-0",
              styles.justifyContentCenter
            )}
          >
            {navbarLinks.map(({ label, to }) => (
              <Link
                key={label}
                className="navbar-item"
                activeClassName="is-active"
                to={to}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export { Header };
