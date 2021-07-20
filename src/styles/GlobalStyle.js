import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset} 
    
    * {
        box-sizing: border-box;
    }
    
    a {
    color: #000000;
    text-decoration: none;
    outline: none;
    }

    `;

export default GlobalStyle;
