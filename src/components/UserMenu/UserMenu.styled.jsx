import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as Icon } from 'images/svg/exit.svg';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-right: 5px;
`;

export const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const MenuText = styled.p`
  color: ${p => p.theme.colors.secondaryText};

  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: ${p => p.theme.fontWeights.bold};
  font-family: ${p => p.theme.fonts.accentText};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-left: 0;
    padding: 3px 9px;
    font-size: ${p => p.theme.fontSizes[2]};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-left: 0;
    padding: 3px 9px;
    font-size: ${p => p.theme.fontSizes[2]};
  }
`;

export const LogoutButton = styled.button`
  display: flex;
  align-items: center;
  margin-left: auto;
  padding: 4px 10px;
  gap: 8px;
  border: inherit;
  border-radius: ${p => p.theme.radii.button};
  cursor: pointer;

  font-size: ${p => p.theme.fontSizes[3]};
  font-weight: ${p => p.theme.fontWeights.regular};

  color: ${p => p.theme.colors.backgroundBlue};
  background-color: ${p => p.theme.colors.transparent};

  transition: ${p => p.theme.transition.main};

  span {
    color: ${p => p.theme.colors.backgroundDesk};
    transition: ${p => p.theme.transition.main};
  }

  &:hover,
  :active {
    background-color: ${p => p.theme.colors.backgroundBlue};
    color: ${p => p.theme.colors.white};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-left: 0;
    padding: 3px 9px;
    font-size: ${p => p.theme.fontSizes[2]};
  }
`;

export const LogoutIcon = styled(Icon)`
  fill: ${p => p.theme.colors.menuText};
  // stroke: currentColor;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserMenuText = styled.p`
  margin-right: 20px;
  font-size: 18px;

  color: ${p => p.theme.colors.menuText};
`;
