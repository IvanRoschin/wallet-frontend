import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { ReactComponent as HomeLink } from 'images/svg/home.svg';
import { ReactComponent as StatisticsLink } from 'images/svg/statistics.svg';
import { ReactComponent as CurrencyLink } from 'images/svg/currency.svg';

export const HomeIcon = styled(HomeLink)`
  fill: 6e78E8;
  // stroke: currentColor;
  width: 24px;
  height: 24px;
`;
export const StatisticsIcon = styled(StatisticsLink)`
  fill: 6e78E8;
  // stroke: currentColor;
  width: 24px;
  height: 24px;
`;

export const CurrencyIcon = styled(CurrencyLink)`
  fill: 6e78E8;
  // stroke: currentColor;
  width: 24px;
  height: 24px;
`;

export const NavWrapper = styled.nav`
  display: flex;
  flex-direction: wrap;
  align-items: center;
  justify-content: space-evenly;

  padding-top: 12px;
  padding-bottom: 12px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    align-items: flex-start;
    flex-direction: column;
    margin-bottom: 32px;
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
    &:last-child {
      display: none;
    }
    &:nth-child(1) {
      margin-bottom: 12px;
    }
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
  }
`;

export const Link = styled(NavLink)`
  & > p {
    color: black;
    display: none;
    @media (min-width: ${p => p.theme.breakpoints[1]}) {
      display: block;
      margin-left: 23px;

      font-family: ${p => p.theme.fonts.baseFont};
      font-size: ${p => p.theme.fontSizes[2]};
      color: ${p => p.theme.colors.black};

      line-height: 27px;
    }
  }
  & > svg {
    width: 24px;
    height: 24px;
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

// export const LinkName = styled.p``;
