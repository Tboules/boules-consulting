import { Link } from "gatsby"
import React from "react"
import BCImage from "./NewLogo.png"
import HS from "./header.module.scss"

const Header = () => {
  return (
    <div className={HS.shadow}>
      <div className={HS.container}>
        <div className={HS.titleLogo}>
          <img alt="logo" src={BCImage} />
          <h2>Boules Consulting</h2>
        </div>
        <nav className={HS.nav}>
          <ul className={HS.navList}>
            <li>
              <Link
                className={HS.navItem}
                activeClassName={HS.activeNavItem}
                to="/"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                className={HS.navItem}
                activeClassName={HS.activeNavItem}
                to="/about"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                className={HS.navItem}
                activeClassName={HS.activeNavItem}
                to="/contact"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default Header
