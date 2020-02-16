import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import { useSiteMetadata } from "../hooks/use-site-metadata"

const Title = styled.h1`
  font-size: 3.5rem;
  line-height: 0.9;
  padding: 1rem 1rem 2rem;
  border-bottom: ${({ theme }) => theme.border};

  span {
    display: block;
    margin-bottom: 1rem;
    font-size: 0.75em;
  }
`

const Header = ({ handleTheme }) => {
  const { title } = useSiteMetadata()

  return (
    <header>
      <Title>
        <Link to="/">
          <span>{"</>"}</span>
          {title}
        </Link>
      </Title>
    </header>
  )
}

export default Header
