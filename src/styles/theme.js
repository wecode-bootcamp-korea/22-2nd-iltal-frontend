import { css } from 'styled-components';

const theme = {
  mainColor: '#FF024A',
  fontColor: '#222222',
  fontContent: "'Noto Sans KR', sans-serif;",
  srOnly: css`
    position: absolute;
    z-index: -100;
    width: 1px;
    height: 1px;
    overflow: hidden;
    opacity: 0;
  `,
};

export default theme;
