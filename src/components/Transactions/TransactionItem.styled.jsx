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

    border-radius: ${p => p.theme.radii.circular};
    background-color: ${p => p.theme.colors.background};
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
  }
`;

export const DeleteIcon = styled(Icon)`
  fill: #6e78e8;
`;

export const Text = styled.p`
  margin-top: 100px;
  margin-bottom: 100px;
  text-align: center;

  padding: 20px;
  font: ${p => p.theme.fonts.baseFontBold};
  font-size: 18px;
  line-height: 27px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
  }
`;

export const TableHead = styled.table`
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 715px;
    margin-left: auto;
    margin-right: auto;
    border-left: none;
    box-shadow: none;
    border: 1px solid transparent;
    border-radius: 20px;
    background-color: rgb(255, 255, 255);
  }
`;

export const Table = styled.table`
  width: 280px;

  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  padding-top: 12px;
  padding-left: 10px;
  padding-right: 10px;

  border-left: ${p => p.theme.borders.bold}
    ${({ type }) => (type === 'income' ? '#24CCA7' : '#FF6596')};
  border-radius: ${p => p.theme.radii.transaction};
  background-color: ${p => p.theme.colors.white};
  box-shadow: 1px 0px 1px
    ${({ type }) => (type === 'income' ? '#24CCA7' : '#FF6596')};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 715px;

    border-left: none;
    box-shadow: none;
    background-color: transparent;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin: 0;
    padding: 0;
    border-collapse: collapse;
    margin: auto;
  }
`;

export const TableLine = styled.tr`
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    border-bottom: 1px solid #ddd;
  }
`;

export const Th = styled.thead`
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    color: #000;
    width: 715px;

    font-family: ${p => p.theme.fonts.baseFontBold};
    font-size: 18px;

    border-radius: 20px;
    background-color: rgb(255, 255, 255);
  }
`;

export const TableColumA = styled.th`
  width: 10%;
  padding: 10px;
  text-align: center;

  font-family: ${p => p.theme.fonts.baseFontBold};
  font-size: ${p => p.theme.fontSizes[2]};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 15%;
    // text-align: right;
  }
`;

export const TableColumB = styled.th`
  width: 10%;
  text-align: center;

  border-bottom: 1px solid #ddd;

  font-size: ${p => p.theme.fontSizes[1]};
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 15%;
    text-align: center;
  }
`;

export const TableColumSum = styled.th`
  text-align: center;
  border-bottom: 1px solid #ddd;

  color: ${({ type }) => (type === 'income' ? '#24CCA7' : '#FF6596')};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 100px;
    border-bottom: 0;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

export const TableColumDate = styled.th`
  width: 110px;
  border-top-left-radius: 20px;
    border-bottom-left-radius: 20px;

  }
`;
export const TableColumType = styled.th`
  width: 100px;
  }
`;
export const TableColumCategory = styled.th`
  width: 140px;
  }
`;
export const TableColumComment = styled.th`
  width: 200px;
  }
`;
export const TableColumBalance = styled.th`
    width: 150px;

  }
`;
export const TableColumDelete = styled.th`
  width: 160px;
   border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;

  }
`;
