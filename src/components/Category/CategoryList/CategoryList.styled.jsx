import styled from 'styled-components';

export const Text = styled.p`
  margin-top: 100px;
  margin-bottom: 100px;
  text-align: center;

  padding: 20px;
  font-family: ${p => p.theme.fonts.baseFont};
  line-height: ${p => p.theme.lineHeights.text};
  font-size: ${prop => prop.theme.fontSizes[1]};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
  }
`;

export const Table = styled.table`
  border-collapse: separate;

  width: 100%;
  margin-left: auto;
  margin-right: auto;
  font-family: ${p => p.theme.fonts.baseFont};
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.text};
  font-size: ${prop => prop.theme.fontSizes[0]};

  background-color: ${p => p.theme.colors.background};
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${prop => prop.theme.fontSizes[2]};
  }
`;

export const Thead = styled.thead`
  font-weight: ${p => p.theme.fontWeights.bold};
  color: ${p => p.theme.colors.text};
`;
export const Tr = styled.tr`
  background-color: '#fff';
  border-bottom: 1px solid #ddd;
`;
export const ThTitle = styled.th`
  background-color: '#fff';
`;
