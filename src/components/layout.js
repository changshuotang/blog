import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import DarkModeToggle from "../components/dark-mode-toggle"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  let header

  if (location.pathname === rootPath) {
    header = (
      <h2
        style={{
          marginBottom: rhythm(2),
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h2>
    )
  } else {
    header = (
      <h3
        style={{
          fontFamily: `Montserrat, sans-serif`,
          marginTop: 0,
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            color: `156C64`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h3>
    )
  }
  return (
    <div
      style={{
        marginLeft: `auto`,
        marginRight: `auto`,
        maxWidth: rhythm(24),
        padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
      }}
    >
      <header>
        <div style={{
          display: `flex`,
        }}>
          <div style={{flexGrow: 1}}>
            {header}
          </div>
          <DarkModeToggle />
        </div>
      </header>
      <main>{children}</main>
    </div>
  )
}

export default Layout
