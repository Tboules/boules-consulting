import { Link } from "gatsby"
import React from "react"
import BCImage from "./NewLogo.png"
import HS from "./header.module.scss"
import { useState } from "react"

const Header = () => {
  const [nav, setNav] = useState(null)
  const [drawerToggle, setDrawerToggle] = useState(false)

  const handleDrawer = () => {
    if (!drawerToggle) {
      setDrawerToggle(true)
      setNav({
        transform: "translateX(0%)",
        transition: "transform .5s ease-in-out",
      })
    } else {
      setDrawerToggle(false)
      setNav({
        transition: "transform .5s ease-out",
      })
    }
  }

  return (
    <div className={HS.shadow}>
      <div className={HS.container}>
        <div className={HS.titleLogo}>
          <img alt="logo" src={BCImage} />
          <h2>Boules Consulting</h2>
        </div>
        <nav style={nav} className={HS.nav}>
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
        <div onClick={handleDrawer} className={HS.burger}>
          <div className={HS.line1}></div>
          <div className={HS.line2}></div>
          <div className={HS.line3}></div>
        </div>
      </div>
    </div>
  )
}

export default Header
