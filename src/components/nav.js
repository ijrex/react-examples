import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"

import { Link } from "gatsby"

import { useSiteMDX } from "../hooks/use-site-mdx"

const ParentStyledUL = styled.ul`
  margin: 0;
  padding: 1rem;
`

const ParentStyledLI = styled.li`
  list-style: none;
  display: block;
  margin-bottom: 1rem;
`

const ChildStyledUL = styled.ul`
  display: block;
  margin: 0;
`

const ChildStyledLI = styled.li`
  list-style: none;
  display: block;

  &::before {
    content: "\\27F6";
    padding-right: 20px;
  }
`

const StyledLink = styled(Link)`
  text-decoration: none;
`

const Nav = ({ children }) => {
  const edges = useSiteMDX()

  return (
    <>
      <ParentStyledUL>
        {[...new Set(edges.map(edge => edge.node.frontmatter.category))].map(
          category => (
            <ParentStyledLI key={category}>
              <h3>{category}</h3>
              <ChildStyledUL>
                {edges.map(edge =>
                  edge.node.frontmatter.category === category ? (
                    <ChildStyledLI key={edge.node.frontmatter.title}>
                      <StyledLink to={edge.node.fields.slug}>
                        {edge.node.frontmatter.title}
                      </StyledLink>
                    </ChildStyledLI>
                  ) : null
                )}
              </ChildStyledUL>
            </ParentStyledLI>
          )
        )}
      </ParentStyledUL>
    </>
  )
}

Nav.propTypes = {
  siteTitle: PropTypes.string,
}

Nav.defaultProps = {
  siteTitle: ``,
}

export default Nav
