/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"

import Header from "./header"
import Nav from "./nav"
import "./layout.css"

const StyledGlobalContainer = styled.div`
  background: #0d1a26;
  width: 100vw;
  height: 100vh;
  display: flex;
`

const StyledSidebar = styled.div`
  background: #888376;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  flex: 0 0 6rem;
  height: 100vh;
  padding: 1rem;
`

const StyledMain = styled.main`
  background: #0d1a26;
  overflow: scroll;
  color: white;
  flex: 1 1 0;
  padding: 2rem;
`

const StyledFooter = styled.footer`
  font-family: Titillium Web;
  font-weight: 400;
  padding-bottom: 1rem;
  position: absolute;
  bottom: 0;
  color: rgba(0, 0, 0, 0.6);
`

const Layout = ({ children }) => {
  return (
    <StyledGlobalContainer>
      <StyledSidebar>
        <Header />
        <Nav />
        <StyledFooter>
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </StyledFooter>
      </StyledSidebar>
      <StyledMain>{children}</StyledMain>
    </StyledGlobalContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
