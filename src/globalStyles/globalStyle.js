import styled, { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
  overflow-x: hidden;

  font-family: 'Circle', sans-serif;

 input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  h1,h2,h3,h4,h5,h6,p {
    margin: 0;
  }

  ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  
  a {
  text-decoration: none;
    cursor: pointer;
}

  button {
    padding: 0;
    cursor: pointer;
  }

  table, caption, tbody, tfoot, thead, tr, th, td {
  margin: 0;
  padding: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

table {
  border-spacing: 0;
}

`;

export const Container = styled.div`
  margin-left: auto;
  margin-right: auto;

  outline: 1px solid red;

  width: ${p => (p.header ? '100%' : p.theme.breakpoints[0])};
  padding: 0 ${p => p.theme.space[5]}px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    outline: 1px solid red;

    width: ${p => (p.header ? '100%' : p.theme.breakpoints[1])};
    padding: 0 ${p => p.theme.space[5]}px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    outline: 1px solid red;

    width: ${p => (p.header ? '100%' : p.theme.breakpoints[2])};
    padding: 0 ${p => p.theme.space[4]}px;
  }
`;
