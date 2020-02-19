import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  padding: 1rem;
  position: absolute;
  bottom: 0;
`

const Button = styled.button`
  border: none;
  padding: 0;
  overflow: visible;

  margin: 0 0 1rem;
  width: 1rem;
  height: 1rem;
  display: block;
  border-radius: 100%;
  cursor: pointer;
  background: ${({ theme }) => theme.text};

  &:focus {
    outline: 0;
  }
`

const Footer = ({ handleTheme }) => {
  return (
    <StyledFooter>
      <Button onClick={handleTheme} />
      {`© ${new Date().getFullYear()}, Built with `}
      <a href="https://www.gatsbyjs.org">Gatsby</a>
    </StyledFooter>
  )
}

Footer.propTypes = {
  handleTheme: PropTypes.func.isRequired,
}

export default Footer
