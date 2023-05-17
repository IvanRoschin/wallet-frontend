import styled from 'styled-components';
import { ReactComponent as Icon } from 'images/svg/trash.svg';

export const BtnDelete = styled.button`
  top: ${p => p.theme.space[4] + 4}px;
  // right: ${p => p.theme.space[0]}px;
  left: 215px;

  border: ${p => p.theme.borders.none};

  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.transparent};

  cursor: pointer;

  transition: color ${p => p.theme.transition.menuText};

  &:hover,
  &:focus {
    color: ${p => p.theme.colors.expense};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: ${p => p.theme.space[5] + 12}px;
    height: ${p => p.theme.space[5] + 12}px;

    left: 427px;

    border-radius: ${p => p.theme.radii.circular};
    background-color: ${p => p.theme.colors.background};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    left: 536px;
  }
`;

export const DeleteIcon = styled(Icon)`
  fill: currentColor;
`;

export const Text = styled.p`
  margin-top: 100px;
  margin-bottom: 100px;
  text-align: center;

  padding: 20px;
  font: ${p => p.theme.fonts.baseFontBold};
  font-size: 18px;
  line-height: 27px;
  background-color: '#fff';
`;

export const Table = styled.table`
  width: 280px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 8px;
  padding-top: 12px;
  padding-left: 20px;

  border-left: ${p => p.theme.borders.normal}
    ${({ type }) => (type === 'income' ? '#24CCA7' : '#FF6596')};
  border-radius: ${p => p.theme.radii.transaction};
  background-color: ${p => p.theme.colors.white};

  box-swadow: ${p => p.theme.shadows.menu};
`;

export const TableLine = styled.tr`
  // border-bottom: 1px solid #ddd;
`;

export const TableColumA = styled.th`
  width: 10%;
  padding: 10px;
  text-align: start;
  border-bottom: 1px solid #ddd;

  font-family: ${p => p.theme.fonts.baseFontBold};
  font-size: ${p => p.theme.fontSizes[2]};
`;

export const TableColumB = styled.th`
  width: 70%;

  border-bottom: 1px solid #ddd;

  font-size: ${p => p.theme.fontSizes[1]};
`;

export const TableColumSum = styled.th`
  border-bottom: 1px solid #ddd;

  color: ${({ type }) => (type === 'income' ? '#24CCA7' : '#FF6596')};
`;
