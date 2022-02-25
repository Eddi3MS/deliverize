import { createGlobalStyle } from "styled-components";

import "@fontsource/roboto";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const GlobalStyle = createGlobalStyle`

:root {
  --white: #ffffff;
  --header: #F4F4F4;
  --primary-100: rgba(253, 215, 14, 0.2);
  --primary-200: #FEBC10;
  --primary-250: #e8a634;
  --primary-300: #e49700;
  --primary-400: #F09035;

  --grey-1: #AEB6C1;
  --grey-3:#686868;
  --grey-4:#656363;

  --text-color:#4E4E4E;
  

  --red-1: #D80000;
  --red-2: #ED3237;
  --red-3:#BC2E31;


  --font-xs: .75rem; // 12
  --font-sm: .875rem; // 14
  --font-md: 1rem; // 16
  --font-bg: 1.125rem; // 18
  --font-gg: 1.25rem; // 20
  --font-xg: 1.75rem; // 28
  --font-xx: 2rem; // 32


  --radius: 4px;

}

/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

/* Remove list styles on ul elements */
ul{
  list-style: none;
}

/* Set core root defaults */
html:focus-within {
  scroll-behavior: smooth;
}

/* Set core body defaults */
body {
  min-height: 100vh;
  text-rendering: optimizeSpeed;
  line-height: 1.5;
}


/* Make images easier to work with */
img,
picture {
  max-width: 100%;
  display: block;
}

/* Inherit fonts for inputs and buttons */
input,
button,
textarea,
select {
  font: inherit;
}

/* Remove all animations, transitions and smooth scroll for people that prefer not to see them */
@media (prefers-reduced-motion: reduce) {
  html:focus-within {
   scroll-behavior: auto;
  }
  
  *,
  *::before,
  *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
    scroll-behavior: auto !important;
  }
}


body {
  background: var(--white);
  font-family: Roboto, Helvetica, Sans-Serif;
  color: var(--text-color);
}

// utilitarias \\

.container {
  padding-inline: 1rem;
  max-width: 1280px;
  margin-inline: auto;
}

`;

export default GlobalStyle;
