import styled from 'styled-components';

export const Title = styled.h2`
  font-size: ${p => p.theme.fontSizes[4]};
  font-weight: ${p => p.theme.fontWeights.medium};

  color: ${p => p.theme.colors.black};
`;
