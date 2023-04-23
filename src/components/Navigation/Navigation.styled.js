import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HomeLink } from 'assets/images/home.svg';
import { ReactComponent as StatisticsLink } from 'assets/images/Statistics.svg';

export const HomeIcon = styled(HomeLink)`
  fill: currentColor;
  stroke: currentColor;
  width: 24px;
  height: 24px;
`;
export const StatisticsIcon = styled(StatisticsLink)`
  fill: currentColor;
  stroke: currentColor;
  width: 24px;
  height: 24px;
`;

export const NavWrapper = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    align-items: flex-start;
    flex-direction: column;
  }
`;

export const NavList = styled.ul`
  margin-bottom: 30px;
`;

export const NavigationButton = styled.button`
  border: none;
  background-color: inherit;
  &:hover {
    transform: scale(1.1);
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    &:not(:last-child) {
      margin-right: 38px;
    }
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    &:last-child {
      display: none;
    }
    &:nth-child(1) {
      margin-bottom: 21px;
    }
  }
`;

export const Link = styled(NavLink)`
  & > p {
    font-family: ${p => p.theme.fonts.secondaryFont};
    font-style: normal;
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSizes[3]};
    line-height: 27px;
    color: ${p => p.theme.colors.black};
  }
  & > svg {
    width: 38px;
    height: 38px;
    fill: ${p => p.theme.colors.backgroundBlue};
  }
  &.active {
    font-weight: ${p => p.theme.fontWeights.bold};
    & > svg {
      fill: ${p => p.theme.colors.backgroundBlue};
    }
    filter: drop-shadow(0px 3px 10px rgba(74, 86, 226, 0.5));
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    & > svg {
      width: 18px;
      height: 18px;
    }
    display: flex;
    align-items: center;
  }
`;

export const LinkName = styled.p`
  display: none;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    display: block;
    margin-left: 23px;
  }
`;
