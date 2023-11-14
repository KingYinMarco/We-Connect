import { createGlobalStyle } from 'styled-components';
import themeList from '../data/themeList';

// Typography
import '@fontsource/poppins';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';


  /* colors 
  --darkBlue_1: #3B447A;
  --darkBlue_2: #222B5F;
  --darkBlue_3: #0A0F19;
  --darkBlue_4: #101826;
  --mediumSlateBlue: #6C62E2;
  --lightBlue_1: #F3F1FE;
  --lightBlue_2: #ADBDE3;
  --white: #FFFFFF;
  --black: #000000;*/

  
  const GlobalStyles = createGlobalStyle`
  :root {
    /* colors */
    --darkBlue_1: #3B447A;
    --darkBlue_2: #222B5F;
    --darkBlue_3: #42275a;
    --darkBlue_4: #101826;
    --mediumSlateBlue: #6C62E2;
    --lightBlue_1: #2193b0;
    --lightBlue_2: #6dd5ed;
    --lightBlue_3: #F3F1FE;
    --lightBlue_4:#0ce4f4;
    --white: #FFFFFF;
    --black: #000000;

    /* others */
    --header-height: 55px;
  }

  html {
    font-size: 10px;
  }

  body {
    position: relative;
    font-family: 'Poppins', sans-serif;
  }

  body::before {
    content: '';
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: ${({ theme: { theme } }) =>
      theme === themeList.light
        ? 'linear-gradient(to bottom, var(--lightBlue_2), var(--lightBlue_1))'
        : 'linear-gradient(to bottom, var(--darkBlue_3), var(--darkBlue_4))'};
    z-index: -1;
  }

  *, *:before, *:after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }

  ul, li {
    list-style: none;
  }

  .container {
    max-width: 1200px;
    width: 90%;
    margin: 0 auto;
  }

  img, svg {
    width: 100%;
    height: 100%;
  }
`;

export default GlobalStyles;
