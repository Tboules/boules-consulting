import React from 'react'
import Footer from '../Footer/footer'
import Header from '../Header/header'
import '../../styles/index.scss'
import LO from './layout.module.scss'


const Layout = (props) => {
  return (
    <div className={LO.container}>
      <div className={LO.content}>
        <Header />
          {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout