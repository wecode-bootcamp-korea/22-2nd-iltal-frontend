import React from 'react';
import ReactDOM from 'react-dom';

// #ROUTES
import Routes from './Routes';

// #STYLES
import GlobalStyle from './styles/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from './styles/theme';
import variables from './styles/variables';

ReactDOM.render(
  <>
    <GlobalStyle />
    <ThemeProvider theme={{ ...theme, ...variables }}>
      <Routes />
    </ThemeProvider>
  </>,
  document.getElementById('root')
);
