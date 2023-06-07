import styled from 'styled-components';
import { ReactComponent as Icon } from 'images/svg/delete-user.svg';

export const UserDeleteButton = styled.button`
  display: flex;
  align-items: center;
  margin-right: auto;
  padding: 4px 10px;
  gap: 8px;
  border: inherit;
  border-radius: ${p => p.theme.radii.button};
  cursor: pointer;
  font-size: ${p => p.theme.fontSizes[0]};

  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.transparent};

  transition: ${p => p.theme.transition.main};

  span {
    color: ${p => p.theme.colors.text};
    transition: ${p => p.theme.transition.main};
  }

  &:hover,
  :active {
    background-color: ${p => p.theme.colors.transparent};
    color: ${p => p.theme.colors.pageIconBg};

    span {
      color: ${p => p.theme.colors.pageIconBg};
    }
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    // margin-left: 55%;
    padding: 3px 9px;

    font-size: ${p => p.theme.fontSizes[2]};
  }
`;

export const UserDeleteIcon = styled(Icon)`
  fill: currentColor;
  stroke: currentColor;
`;
