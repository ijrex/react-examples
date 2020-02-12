import { Link } from "gatsby"
import styled from "styled-components"
import React from "react"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Title = styled.h1`
  font-family: Titillium Web;
  font-weight: 900;
  font-size: 4rem;
  line-height: 0.9;
  letterspacing: 2px;
  text-shadow: -4px 8px 1px rgba(0, 0, 0, 0.2);
  padding-bottom: 2rem;
  border-bottom: 0.1rem solid #ffa500;

  a {
    color: rgba(255, 255, 255, 0.9);
    text-decoration: none;
  }
`

const Header = () => {
  const { title } = useSiteMetadata()

  return (
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
      }}
    >
      <Title>
        <Link to="/">{title}</Link>
      </Title>
    </div>
  )
}

export default Header
