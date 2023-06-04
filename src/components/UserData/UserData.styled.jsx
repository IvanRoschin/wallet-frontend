import styled from 'styled-components';
import { theme } from 'globalStyles/theme';
import { Container } from 'globalStyles/globalStyle';
import { slideRight } from 'keyframes';

export const TitleContainer = styled(Container)`
  margin-bottom: 18px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: 40px;

    animation: ${slideRight} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin: 0;
    padding: 0 0 0 16px;
    width: 411px;
  }
`;

export const Title = styled.p`
  width: 280px;
  margin-top: 40px;
  margin-left: 20px;
  margin-bottom: 8px;

  font-family: ${p => p.theme.fonts.accentText};
  font-size: ${p => p.theme.fontSizes[4]};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 100%;
    margin-left: 32px;
    margin-top: 0;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    text-aling: center;
  }
`;

export const UserContainer = styled(Container)`
  @media (min-width: ${theme.breakpoints[1]}) {
    width: 100%;

    animation: ${slideRight} 1s cubic-bezier(0.25, 0.46, 0.45, 0.94) both;
  }

  @media (min-width: ${theme.breakpoints[2]}) {
    display: block;
    background: transparent;
  }
`;

export const UserSection = styled.div`
  padding: 20px 12px 20px 16px;

  border-radius: ${p => p.theme.radii.small};
  box-shadow: ${p => p.theme.shadows.section};

  // background-color: ${p => p.theme.colors.white};

  @media (min-width: ${theme.breakpoints[1]}) {
    display: flex;
    flex-direction: row-reverse;
    gap: 52px;
    flex: 0 0 calc(100vw / 2 + (768px - 32px * 2) / 2);
    padding: 24px 40px 24px 0;

    border-radius: ${theme.radii.big};
    border-top-left-radius: ${theme.radii.none};
    border-bottom-left-radius: ${theme.radii.none};
  }

  @media (min-width: ${theme.breakpoints[2]}) {
    position: relative;
    gap: 32px;
    flex: 0;
    padding: 20px 16px 18px 0;
    box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
  }
`;

export const UserThumb = styled.div`
  @media (min-width: ${theme.breakpoints[1]}) {
    margin-left: 30px;
    width: 379px;
  }

  @media (min-width: ${theme.breakpoints[2]}) {
    width: 50%;
    margin-left: 20px;
    margin-top: 50px;
  }
`;

export const UserDataList = styled.ul`
  margin-bottom: 40px;

  @media (min-width: ${theme.breakpoints[1]}) {
    margin-top: 16px;
    margin-bottom: 33px;
  }

  @media (min-width: ${theme.breakpoints[2]}) {
    margin-top: 0;
    margin-bottom: 24px;
  }
`;

export const DeleteWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 24px;
`;
