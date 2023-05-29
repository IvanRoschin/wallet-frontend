import styled from 'styled-components';
import Currency from '../../images/currency/currency.png';

export const Table = styled.table`
  width: 280px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 28px;
  margin-bottom: 32px;
  overflow: hidden;

  color: ${p => p.theme.colors.white};

  border-radius: ${p => p.theme.radii.button};

  background-color: ${p => p.theme.colors.backgroundBlue};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 336px;
    margin: 0;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
  }
`;

export const Thead = styled.thead`
  border: ${p => p.theme.borders.transparent};
  border-radius: ${p => p.theme.radii.button};
  font-family: ${p => p.theme.fonts.baseFontBold};
  font-size: ${p => p.theme.fontSizes[2]};
  background-color: rgba(255, 255, 255, 0.4);
  font-family: ${p => p.theme.fonts.baseFontBold};
  font-size: ${p => p.theme.fontSizes[2]};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
  }
`;

export const TheadLine = styled.tr`
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
  }
`;

export const TableColum = styled.th`
  padding: 12px;
  border-bottom: 1px solid #ddd;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
  }
`;

export const Tbody = styled.tbody`
  background-image: linear-gradient(
      180deg,
      rgba(74, 86, 226, 0.2) -8.67%,
      rgba(74, 86, 226, 0) 116.22%
    ),
    url(${Currency});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: bottom;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
  }
`;
