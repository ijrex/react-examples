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
import SideBar from "./sidebar"
import "./layout.css"

const StyledGlobalContainer = styled.div`
  background: #0d1a26;
  width: 100vw;
  height: 100vh;
  display: flex;
`

const StyledSidebar = styled.div`
  color: palevioletred;
  background: #888376;
  flex: 0 0 6rem;
  height: 100vh;
`

const StyledMain = styled.main`
  background: #0d1a26;
  overflow: scroll;
  color: white;
  flex: 1 1 0;
  padding: 2rem;
`

const Layout = ({ children }) => {
  return (
    <StyledGlobalContainer>
      <StyledSidebar>
        <SideBar>
          <Header />
          <footer>
            © {new Date().getFullYear()}, Built with
            {` `}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </footer>
        </SideBar>
      </StyledSidebar>
      <StyledMain>{children}</StyledMain>
    </StyledGlobalContainer>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
