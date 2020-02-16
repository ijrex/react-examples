import { createGlobalStyle } from "styled-components"

export const GlobalStyles = createGlobalStyle`
  body {
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.25s linear;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.link.normal};
    transition: color 0.2s linear;


    &:hover{
      color: ${({ theme }) => theme.link.hover};
    }
  }
  `
