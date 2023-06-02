import styled from 'styled-components';

export const GoogleLoginButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 280px;
  height: 50px;

  border-radius: ${p => p.theme.radii.button};
  border: 1px solid ${p => p.theme.colors.backgroundBlue};
  font-family: ${p => p.theme.fonts.baseFont};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[2]};
  letter-spacing: ${p => p.theme.letterSpacing.button};
  text-transform: uppercase;
  transition: ${p => p.theme.transition.main};
  margin-top: 10px;

  &:hover,
  :active {
      transition: 0.7s;
    transform: scale(1.1);
    background-color: ${p => p.theme.colors.backgroundBlue};
    color: ${p => p.theme.colors.white};
    transition: color ${p => p.theme.transition.main},
      background-color ${p => p.theme.colors.backgroundBlue};
  }


  @media (min-width: ${p => p.theme.breakpoints[1]}) {
  font-size: ${p => p.theme.fontSizes[2]};
    padding: 12px 0 12px 0;
      height: 30px;

`;

export const GoogleImg = styled.img`
  width: 26px;
  margin-right: 10px;
`;

export const LoginPositionBtn = styled.div`
  position: absolute;
  top: -70px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    top: -70px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    top: -70px;
  }
`;
