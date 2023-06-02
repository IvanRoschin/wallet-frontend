import styled from 'styled-components';
import { theme } from 'globalStyles/theme';

export const ModalText = styled.p`
  margin-bottom: ${p => p.theme.space[6]}px;

  font-size: ${p => p.theme.fontSizes[5]};
  font-weight: ${p => p.theme.fontWeights.bold};
  line-height: ${p => p.theme.lineHeights.logo};
  letter-spacing: ${p => p.theme.letterSpacing.logo};

  color: ${p => p.theme.colors.accent};

  @media (min-width: ${theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[6]};
  }
`;

export const ModalWrapper = styled.div`
  border-radius: ${p => p.theme.radii.button};
  @media (min-width: ${theme.breakpoints[2]}) {
    text-aling: center;
    padding: 32px 16px;
  }
`;

export const ModalButtonWrapper = styled.div`
  @media (min-width: ${theme.breakpoints[2]}) {
    display: flex;
    justify-content: center;
    gap: 24px;
  }
`;
