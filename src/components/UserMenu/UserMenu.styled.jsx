import styled from 'styled-components';
import { ReactComponent as Icon } from 'images/svg/lock.svg';

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

    span {
      color: ${p => p.theme.colors.white};
    }
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-left: 0;
    padding: 3px 9px;
    font-size: ${p => p.theme.fontSizes[2]};
  }
`;

export const LogoutIcon = styled(Icon)`
  fill: currentColor;
  stroke: currentColor;
`;

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const UserMenuText = styled.p`
  margin-right: 20px;
  font-size: 18px;
`;

// export const Button = styled.button`
//   font-family: 'Roboto', 'Helvetica', 'Arial', sans-serif;
//   font-weight: 500;
//   font-size: 0.875rem;
//   line-height: 1.75;
//   letter-spacing: 0.02857em;
//   text-transform: uppercase;
//   width: 100px;
//   min-width: 64px;
//   padding: 6px 16px;
//   border-radius: 4px;
//   border: none;
//   color: #fff;
//   background-color: #4a56e2;
//   cursor: pointer;
//   box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2),
//     0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
//   transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
//     box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
//     border-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,
//     color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

//   :hover {
//     background-color: #4a56e2;
//     box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
//       0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
//   }
// `;
