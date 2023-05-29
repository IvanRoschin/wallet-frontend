import styled from 'styled-components';

export const Box = styled.div`
  width: 280px;
  height: 80px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 32px;

  border: ${p => p.theme.borders.transparent};
  border-radius: ${p => p.theme.radii.button};

  background-color: ${p => p.theme.colors.white};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 336px;
    margin-left: 0;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
  }
`;

export const BoxText = styled.p`
  padding-top: 8px;
  margin-left: 32px;
  margin-bottom: 12px;

  font-family: ${p => p.theme.fonts.baseFont};
  font-size: ${p => p.theme.fontSizes[0]};
  text-transform: uppercase;

  color: ${p => p.theme.colors.menuText};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-left: 0;
  }
`;

export const BalanceText = styled.p`
  margin-left: 32px;

  font-family: ${p => p.theme.fonts.accentTextBold};
  font-size: ${p => p.theme.fontSizes[4]};

  color: ${p => p.theme.colors.black};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-left: 0;
  }
`;
