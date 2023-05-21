import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

  /* Import custom font */
  @font-face {
    font-family: 'Finlandica';
    src: url('/fonts/Finlandica-Bold.ttf') format('truetype');
    font-weight: bold;
    font-style: normal;
  }

   @font-face {
    font-family: 'Finlandica';
    src: url('/fonts/Finlandica-Regular.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
     }

     @font-face {
    font-family: 'Finlandica';
    src: url('fonts/Finlandica-Medium.ttf') format('truetype');
    font-weight: 500;
    font-style: normal;
     }

      @font-face {
    font-family: 'Finlandica';
    src: url('/fonts/Finlandica-SemiBold.ttf') format('truetype');
    font-weight: 600;
    font-style: normal;
    }

  
/* Box sizing rules */
*,
*::before,
*::after {
  box-sizing: border-box;
}

/* Remove default margin */
body,
h1,
h2,
h3,
h4,
h5,
h6,
p,
ol,
ul {
  margin: 0;
   color:#1D3557;
}


p {
  font-size: 0.85rem;
}

/* Remove list styles */
ol,
ul {
  
  /* list-style: none; */
}

/* Set default font family and size */
html {
  font-family: 'Roboto', sans-serif;
  /* font-family: sans-serif; */
  font-size: 16px;
}

/* Remove default input styles */
input,
button,
textarea,
select {
  font-family: inherit;
  font-size: inherit;
  border: none;
  outline: none;
  background-color: transparent;
}

/* Set link styles */
a {
  color: inherit;
  text-decoration: none;
  font-size: 0.8rem;
}
a:hover {
  text-decoration: underline;
}	
`;
