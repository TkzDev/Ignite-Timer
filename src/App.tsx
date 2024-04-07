import { useState } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'
import { ThemeBlack } from './styled/themes/dark'
import { ThemeWhite } from './styled/themes/white'
import { GlobalStyle } from './styled/global'
import { SunMoon } from 'lucide-react'
import { Router } from './Router'

export function App() {
  const [windowTheme, setWindowTheme] = useState(ThemeBlack)

  function updateThemeWindow() {
    setWindowTheme(windowTheme === ThemeBlack ? ThemeWhite : ThemeBlack)
  }

  console.log(windowTheme)
  return (
    <>
      <ThemeProvider theme={windowTheme}>
        <span onClick={updateThemeWindow}>
          <SunMoon />
        </span>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
        <GlobalStyle themeStatus={windowTheme ? 'ThemeBlack' : 'ThemeWhite'} />
      </ThemeProvider>
    </>
  )
}
