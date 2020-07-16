import React, { useState } from 'react';
import { ThemeProvider, DefaultTheme } from 'styled-components'

import GlobalStyle from './styles/global'
import Header from './components/Header'
import light from './styles/themes/light'
import dark from './styles/themes/dark'
import usePersistedState from './hooks/usePersistedState';




function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleThemeF = () => {
    setTheme(theme.title == "light" ? dark : light)
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="class">
        <GlobalStyle />
        <Header toggleTheme={toggleThemeF} />
      </div>
    </ThemeProvider>
  );
}

export default App;
