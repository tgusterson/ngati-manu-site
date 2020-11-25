import React from "react"

import Container from 'react-bootstrap/Container'

import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, title, children }) => {

  return (
    <>
      <Header />
      <Container
        fluid
        style={{
          padding: 0, maxWidth: '1100px', boxShadow: '3px 0 15px -4px rgba(0,0,0,1), -3px 0 8px -4px rgba(0,0,0,1)'
        }}>
        <main>
          {children}
        </main>
        <Footer />
      </Container>
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