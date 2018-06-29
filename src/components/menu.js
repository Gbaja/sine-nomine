import React from "react";
import Link from "gatsby-link"

const Menu = () => (
  <div className="nav__container">
    <ul className="nav__ul">
      <li className="nav__list">
        <Link to="/about" className="nav__link">About</Link>
      </li>
        <li className="nav__list">
            <Link to="/blog" className="nav__link">Blog</Link>
      </li>
      <li className="nav__list">
        <Link to="/contact" className="nav__link">
          Contact
        </Link>
      </li>
    </ul>
  </div>
)

    export default Menu;