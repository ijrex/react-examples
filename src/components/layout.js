import React, { useState } from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyles } from '../styles/global'
import { lightTheme, darkTheme } from '../styles/theme'

import Header from './header'
import Nav from './nav'
import Footer from './footer'
import '../styles/layout.css'

const GlobalContainer = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
`

const Sidebar = styled.div`
  display: flex;
  border-right: ${({ theme }) => theme.border};
  flex-direction: column;
  justify-content: flex-start;
  flex: 0 0 350px;
  height: 100vh;
`

const Main = styled.main`
  overflow: scroll;
  flex: 1 1 0;
  padding: 2rem;
`

const Layout = ({ children }) => {
  const [theme, setTheme] = useState('dark')

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')

  return (
    <>
      <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
        <GlobalStyles />
        <GlobalContainer>
          <Sidebar>
            <Header />
            <Nav />
            <Footer handleTheme={toggleTheme}>
              © {new Date().getFullYear()}, Built with
              {` `}
              <a href="https://www.gatsbyjs.org">Gatsby</a>
            </Footer>
          </Sidebar>
          <Main>{children}</Main>
        </GlobalContainer>
      </ThemeProvider>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
