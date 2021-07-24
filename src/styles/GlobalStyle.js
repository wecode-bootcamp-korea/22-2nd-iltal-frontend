import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
    ${reset} 
    
    * {
        box-sizing: border-box;
    }

    a {
        color: #333333;
        text-decoration: none;
        outline: none;
    }

    .sr-only {
        position: absolute;
        z-index: -100;
        width: 1px;
        height: 1px;
        overflow: hidden;
        opacity: 0;
    }
    
    button {
    border: none;
    background: none;
    cursor: pointer;
    }

    `;

export default GlobalStyle;
