import styled from 'styled-components';

export const AppWrapper = styled.header`
  width: 100%;

  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${p => p.theme.colors.white};

  padding-top: 20px;
  padding-bottom: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    // width: 768px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    // width: 1280px;
  }
`;

export const AppTitle = styled.h1``;
