import React from 'react'
import Link from 'gatsby-link'

import "./header.css";
import Logo from "./logo-icon.svg"
import Menu from "./menu";

const Header = ({ siteTitle }) => (
  <div className="menu__container">
      <header className="menu__header">
        <h1 className="menu__header__title">
          <Link to="/" className="menu__header__title__link"><img src={Logo} className="menu__header__logo"/></Link>
        </h1>
      </header>
      <Menu />
    </div>
)

export default Header
