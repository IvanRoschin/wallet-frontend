import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const LogoImg = styled.img`
  margin-right: 15px;

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
export const HomeLink = styled(NavLink)`
  text-decoration: none;
  //  z-index: 100;

  &:hover,
  &:focus {
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-right: auto;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-rigth: 80px;
  }
`;
export const LogoText = styled.p`
  font-family: ${p => p.theme.fonts.accentTextBold};
  font-size: ${p => p.theme.fontSizes[3]};
  color: ${p => p.theme.colors.text};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[4]};
  }
`;

export const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;
