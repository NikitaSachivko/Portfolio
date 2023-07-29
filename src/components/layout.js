// React components
import * as React from "react"
import { useState } from "react"

// Gatsby components
import { Link } from "gatsby"

// Styles
// import '../styles/yeti.css'
// Custom components
// import Bar from "./Navigation/Bar"
import NabBar from './NavBar/NavBar'

const Layout = ({ location, title, routes, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath


  return (
    <>
      <NabBar location={location} />
      <div
        className="global-wrapper max-w-screen-xl"
        data-is-root-path={isRootPath}
      // style={{ marginLeft: "20%", marginRight: "10%", marginTop: "2%" }}
      >
        <div>
          {
            !isRootPath && (
              <>
                <main>{children}</main>
                <footer>
                  © {new Date().getFullYear()}, Buh.guru
                  {` `}
                </footer>
              </>
            )
          }
          {
            isRootPath && (
              <div class="flex">
                <div class="m-auto">
                  <h1>Всё просто</h1>
                  <h2>Вопросы бухгалтерии решают профессионалы</h2>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </>
  )
}

export default Layout
