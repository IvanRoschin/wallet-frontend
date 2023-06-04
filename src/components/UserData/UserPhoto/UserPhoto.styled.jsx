import styled from 'styled-components';
import { theme } from 'globalStyles/theme';
import { ReactComponent as KameraIcon } from 'images/svg/kamera.svg';
import { ReactComponent as CheckIcon } from 'images/svg/check.svg';

export const AvatarWrapper = styled.form`
  width: 320px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  @media (min-width: ${theme.breakpoints[2]}) {
    width: 382px;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 60px;
  }
`;

export const AvatarImg = styled.img`
  object-fit: cover;
`;

export const AddAvatarBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 120px;
  height: 120px;
  margin: 0 auto 12px;
  border: none;
  border-radius: ${p => p.theme.radii.circular};
  box-shadow: ${p => p.theme.shadows.avatar};
  cursor: pointer;
  overflow: hidden;
  color: ${theme.colors.accent};
  background-color: ${p => p.theme.colors.background};
  @media (min-width: ${theme.breakpoints[1]}) {
    width: 200px;
    height: 200px;
    margin-bottom: 8px;
  }
  @media (min-width: ${theme.breakpoints[2]}) {
    margin-bottom: 0;
  }
`;

export const HiddenInput = styled.input`
  position: absolute;
  white-space: nowrap;
  width: 1px;
  height: 1px;
  overflow: hidden;
  border: 0;
  padding: 0;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  margin: -1px;
`;

export const EditPhotoBtn = styled.button`
  display: flex;
  align-items: center;
  margin-right: auto;
  padding: 4px 10px;
  gap: 8px;
  border: inherit;
  border-radius: ${p => p.theme.radii.button};
  cursor: pointer;

  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: ${p => p.theme.fontWeights.normal};

  color: ${p => p.theme.colors.text};
  background-color: ${p => p.theme.colors.transparent};

  transition: ${p => p.theme.transition.main};

  span {
    color: ${p => p.theme.colors.text};
    transition: ${p => p.theme.transition.main};
  }

  &:hover,
  :active {
    // background-color: ${p => p.theme.colors.pageIconBg};
    color: ${p => p.theme.colors.white};

    span {
      color: ${p => p.theme.colors.pageIconBg};
    }
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    // margin-left: 55%;
    padding: 3px 9px;

    font-size: ${p => p.theme.fontSizes[2]};
  }

  @media (min-width: ${theme.breakpoints[2]}) {
    position: absolute;
    top: 250px;
    right: 16px;
  }
`;

export const Kamera = styled(KameraIcon)`
  fill: #6e78e8;
  &:focus {
    fill: current;
  }
`;

export const Check = styled(CheckIcon)`
  display: inline-block;
  width: 50px;
  height: 50px;
  fill: #6e78e8;
`;
