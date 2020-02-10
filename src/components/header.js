import { Link } from "gatsby"
import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h1 style={{ margin: 0 }}>
        <Link
          to="/"
          style={{
            color: `rgba(255,255,255,0.9)`,
            fontFamily: `Titillium Web`,
            fontWeight: 900,
            textDecoration: `none`,
            fontSize: `4rem`,
            letterSpacing: `2px`,
          }}
        >
          {title}
        </Link>
      </h1>
    </div>
  )
}

export default Header
