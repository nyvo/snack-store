import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

:root {
/* Colors */

// Neutral 
--color-white: #FFF;
  --color-050: #f6f6f6;
  --color-100: #e7e7e7;
  --color-200: #d1d1d1;
  --color-300: #b0b0b0;
  --color-400: #888888;
  --color-500: #747474;
  --color-600: #5d5d5d;
  --color-700: #4f4f4f;
  --color-800: #454545;
  --color-900: #3d3d3d;
  --color-950: #262626;
  --color-black: #111;

// Primary
--color-primary-100: #DCE3FD; 
--color-primary-200: #C2D0FB; 
--color-primary-300: #98B2F8; 
--color-primary-400: #678AF3; 
--color-primary-500: #4362EE; 
--color-primary-600: #2D42E3;
--color-primary-700: #2530D0;
--color-primary-800: #2429A9;
--color-primary-900: #232985;

// Secondary 
--color-secondary-100: #DAF0FF; 
--color-secondary-200: #BDE5FF; 
--color-secondary-300: #90D6FF;
--color-secondary-400: #5BBEFF;
--color-secondary-500: #41A5FC; 
--color-secondary-600: #1F82F1;
--color-secondary-700: #176ADE;
--color-secondary-800: #1956B4;
--color-secondary-900: #1B4A8D;

// Accent color
--color-accent-100: #ffffc2;
--color-accent-200: #fffc89;
--color-accent-300: #fff345;
--color-accent-400: #fce313;
--color-accent-500: #ecca06;
--color-accent-600: #cc9e02;
--color-accent-700: #a27106;
--color-accent-800: #86590d;
--color-accent-900: #432605;

// Success
--color-success-100: #F3FAF3; 
--color-success-200: #C8EAC9; 
--color-success-300: #9DD89F; 
--color-success-400: #6BBD6E; 
--color-success-500: #4CAF50; 
--color-success-600: #358438;
--color-success-700: #2D6830;
--color-success-800: #275429;
--color-success-900: #0E2510;

// Warning
--color-warning-100: #FFFBC5; 
--color-warning-200: #FFF885; 
--color-warning-300: #FFEE46; 
--color-warning-400: #FFDF1B; 
--color-warning-500: #FFC107; 
--color-warning-600: #E29400; 
--color-warning-700: #BB6902; 
--color-warning-800: #985108; 
--color-warning-900: #482200; 

// Error
--color-error-100: #FFE3E1; 
--color-error-200: #FFCCC8; 
--color-error-300: #FFA8A2; 
--color-error-400: #FC776D; 
--color-error-500: #F44336; 
--color-error-600: #E22D20; 
--color-error-700: #BE2217; 
--color-error-800: #9D2017; 
--color-error-900: #470C08; 

    /* Font Family */
    --font-family-inter: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    --font-family-sans-serif: sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;
    --font-family-basier-square: 'Basier Square', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto;

    /* Font Size */
    --font-size-4xl: 40px;
    --font-size-3xl: 32px;
    --font-size-2xl: 28px;
    --font-size-1xl: 26px;
    --font-size-xl: 22px;
    --font-size-l: 20px;
    --font-size-m: 16px;
    --font-size-s: 14px;
    --font-size-xs: 12px;
    --font-size-xxs: 10px;

    /* Font Weight */
    --font-weight-bold: 700;
    --font-weight-semibold: 600;
    --font-weight-medium: 500;
    --font-weight-regular: 400;
    --font-weight-light: 300;

    /* Line Height */
    --line-height-120: 120%;
    --line-height-130: 130%;
    --line-height-135: 135%;
    --line-height-145: 145%;

    /* Letter Spacing */
    --letter-spacing-neg-08px: -0.8px;
    --letter-spacing-neg-064px: -0.64px;
    --letter-spacing-neg-042px: -0.42px;
    --letter-spacing-neg-026px: -0.26px;
    --letter-spacing-pos-007px: 0.07px;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

body {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-family: var(--font-family-basier-square);
    font-weight: var(--font-weight-regular);
    background-color: var(--color-white);
    min-height: 100vh;
    color: var(--color-950);
}

img {
    display: block;
    max-width: 100%;
}

/* Typography */
h1, h2, h3, h4, h5, p {
    margin: 0;
    padding: 0;
}

h1, h2, h3, h4, h5, strong {
    font-weight: var(--font-weight-bold);
}

h1 {
    color: var(--color-950);
    font-family: var(--font-family-basier-square);
    font-size: var(--font-size-3xl);
    font-style: normal;
    line-height: var(--line-height-130);
    letter-spacing: var(--letter-spacing-neg-064px);
}

h2 {
    color: var(--color-950);
    font-family: var(--font-family-basier-square);
    font-size: var(--font-size-2xl);
    font-style: normal;
    line-height: var(--line-height-135);
    letter-spacing: var(--letter-spacing-neg-042px);
}

h3 {
    color: var(--color-950);
    font-family: var(--font-family-basier-square);
    font-size: var(--font-size-1xl);
    font-style: normal;
    line-height: var(--line-height-135);
    letter-spacing: var(--letter-spacing-neg-026px);
}

h4 {
    color: var(--color-950);
    font-family: var(--font-family-basier-square);
    font-size: var(--font-size-xl);
    font-style: normal;
    line-height: var(--line-height-135);
}

h5 {
    color: var(--color-950);
    font-family: var(--font-family-basier-square);
    font-size: var(--font-size-l);
    font-style: normal;
    line-height: var(--line-height-135);
}

p {
    color: var(--color-950);
    font-family: var(--font-family-basier-square);
    font-size: var(--font-size-m);
    font-style: normal;
    line-height: var(--line-height-145);
}
`;

export default GlobalStyle;
