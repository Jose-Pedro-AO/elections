import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
  /* max-width: 1120px; */ 
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Roboto', sans-serif;
}

body {
  background-color: #13131c; 
}

table-layout,
tr,
th,
td {
  margin: 0;
  padding: 0;
  border: none;
  border-collapse: collapse;
}
`;
