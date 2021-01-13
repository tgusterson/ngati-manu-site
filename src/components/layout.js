import React from "react"

import Container from 'react-bootstrap/Container'

import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {

  return (
    <>
      <Header />
      <div
        className={"main-layout"}
      >
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </>
  )
}

export default Layout

// const Layout = ({ location, title, children }) => {
//   const rootPath = `${__PATH_PREFIX__}/`
//   const isRootPath = location.pathname === rootPath
//   let header

//   if (isRootPath) {
//     header = (
//       <h1 className="main-heading">
//         <Link to="/">{title}</Link>
//       </h1>
//     )
//   } else {
//     header = (
//       <Link className="header-link-home" to="/">
//         {title}
//       </Link>
//     )
//   }

//   return (
//     <div className="global-wrapper"
//     data-is-root-path={isRootPath}
//     >
//       <Navigation />
//       <header className="global-header">{header}</header>
//       <main>
//         {children}
//       </main>
//       <footer>
//         © {new Date().getFullYear()}, Created by
//         {` `}
//         <a href="https://www.thomgusterson.dev" target="_blank" rel="noreferrer">Thom Gusterson</a>
//       </footer>
//     </div>
//   )
// }