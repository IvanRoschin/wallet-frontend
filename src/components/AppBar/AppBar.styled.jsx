import styled from 'styled-components';

export const AppWrapper = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${p => p.theme.colors.white};

  padding-top: 20px;
  padding-right: 15px;
  padding-bottom: 20px;
  padding-left: 15px;
  // box-shadow: 0 1px 4px rgba(0, 0, 0, 1), -23px 0 20px -23px rgba(0, 0, 0, 0.8),
  //   23px 0 20px -23px rgba(0, 0, 0, 0.8), 0 0 40px rgba(0, 0, 0, 0.1) inset;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: 32px;
  }
`;

export const AppTitle = styled.h1``;
