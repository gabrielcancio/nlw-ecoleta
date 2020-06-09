import React from 'react';
import { ThemeProvider } from 'styled-components';

import light from './styles/themes/light';

import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider theme={light}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
