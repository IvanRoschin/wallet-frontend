import styled from 'styled-components';

export const Title = styled.p`
  width: 280px;
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 40px;

  font-family: ${p => p.theme.fonts.accentText};
  font-size: ${p => p.theme.fontSizes[4]};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-top: 40px;

    width: 100%;
    margin-left: 32px;
    margin-top: 0;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    text-aling: center;
  }
`;
