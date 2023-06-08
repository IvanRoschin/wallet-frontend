import styled, { createGlobalStyle } from 'styled-components';
import BackDes from '../images/background/BackgrDes-min.png';
import BackTab from '../images/background/BackgrTablet-min.png';

export const GlobalStyle = createGlobalStyle`
body {
  overflow-x: hidden;

  font-family: 'Circle', sans-serif;
  margin: 0;


    // backdrop-filter: blur(50px);
  // @media screen and (min-width: 768px) {
  //   background: url(${BackTab});
  //   background-position: center;
  //   background-repeat: no-repeat;
  //   background-size: cover;

  // }
  @media screen and (min-width: 1280px) {
    // background: url(${BackDes});
    // background-position: center;
    // background-repeat: no-repeat;
    // background-size: cover;
  }
 input:-webkit-autofill,
  input:-webkit-autofill:focus {
    transition: background-color 600000s 0s, color 600000s 0s;
  }
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
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 20px;
  padding-right: 20px;

  background-color: #e7eaf2;

  backdrop-filter: blur(50px);

  outline: 1px solid green;

  // background-color: ${p => p.theme.colors.backgroundMobile};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 768px;
    padding-left: 32px;
    padding-right: 32px;

    background: url(${BackTab});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    outline: 1px solid red;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 1280px;

    padding-left: 16px;
    padding-right: 16px;

    // background: #e7eaf2;

    background: url(${BackDes});
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    outline: 1px solid blue;
  }
`;
