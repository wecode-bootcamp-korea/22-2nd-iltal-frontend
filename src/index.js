import React from 'react';
import ReactDOM from 'react-dom';
import theme from './styles/theme';

// #ROUTES
import Routes from './Routes';

// #STYLES
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
