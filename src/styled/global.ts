import { createGlobalStyle } from 'styled-components'

const THEME_COLORS = {
  ThemeBlack: 'gray-1000',
  ThemeWhite: 'gray-1000',
} as const

interface ThemeProps {
  themeStatus: keyof typeof THEME_COLORS
}

export const GlobalStyle = createGlobalStyle<ThemeProps>`
 * {
  margin: 0;
  border: 0;
  padding: 0;
  box-sizing: border-box;
 }

 :focus {
  outline: 0;
  box-shadow: 0 0 0 2px ${(props) => props.theme['green-500']};
 }

 body {
  background: ${(props) => props.theme[THEME_COLORS[props.themeStatus]]};
  color: ${(props) => props.theme['gray-300']};
  -webkit-font-smoothing: antialiased;
 }

 body, input, textarea, button {
  font-family: 'Roboto', sans-serif;
  font-weight: 400;
  font-size: 1rem;
 }
`
