import styled from 'styled-components';

export const LogoImg = styled.img`
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 30px;
    height: 30px;
    margin-right: 15px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 40px;
    height: 40px;
    margin-right: 20px;
  }
`;

export const LogoText = styled.p`
  font-family: ${p => p.theme.fonts.secondaryFont};
  font-style: normal;
  font-weight: ${p => p.theme.fontWeights.bold};
  font-size: 26px;
  font-family: ${p => p.theme.colors.black};
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 30px;
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 60px;
`;
