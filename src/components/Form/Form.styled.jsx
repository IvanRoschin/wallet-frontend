import styled from 'styled-components';

import { ReactComponent as Envelope } from '../../assets/images/email.svg';
import { ReactComponent as Lock } from '../../assets/images/lock.svg';
import { ReactComponent as Account } from '../../assets/images/account.svg';
import { ReactComponent as Eye } from '../../assets/images/VectorEyes.svg';
import { ReactComponent as EyeClose } from '../../assets/images/VectorEyeClose.svg';

export const Base = styled.div`
  display: block;
  height: 4px;
  box-shadow: 1px -2px 16px #e3e8e3;
  margin-top: 1px;
  transition: 1s;
  width: 0%;
  border-radius: ${p => p.theme.radii.big};
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  position: relative;
  margin: 10px 0px 10px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-bottom: 20px;
    margin-top: 60px;
  }
`;

export const Label = styled.label`
  position: relative;
  display: inline-block;
  // font-weight: ${prop => prop.theme.fontWeights.regular};
  // font-size: ${prop => prop.theme.fontSizes[0]};
  // line-height: ${prop => prop.theme.lineHeights.text};
  // color: ${prop => prop.theme.colors.black};
  // min-width: ${prop => prop.theme.space[5]};
  // @media (min-width: ${p => p.theme.breakpoints[1]}) {
  //   width: 100%;
  //   font-size: ${prop => prop.theme.fontSizes[3]};
  // }
  // @media (min-width: ${p => p.theme.breakpoints[2]}) {
  //   width: 96px;
  // }
`;

export const Input = styled.input`
  width: 100%;
  border-top: none;
  border-right: none;
  border-left: none;
  background-color: ${p => p.theme.colors.transparent};
  outline: ${p => p.theme.colors.transparent};

  border-bottom: 1px solid ${p => p.theme.colors.border};
  outline: none;
  font-family: ${p => p.theme.fonts.baseFont};
  font-weight: ${p => p.theme.fontWeights.regular};

  transition: border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    height: 32px;
    font-size: ${prop => prop.theme.fontSizes[3]};
  }
  ::placeholder {
    color: ${p => p.theme.colors.secondaryText};
    font-family: ${p => p.theme.fonts.baseFont};
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSizes[2]};
    line-height: 1;
  }
`;

export const InputContainer = styled.div`
  &:not(:last-child) {
    margin-bottom: 40px;
  }
`;

export const SvgEnvelope = styled(Envelope)`
  position: absolute;
  bottom: 6px;
  right: 164px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    right: 210px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    right: 210px;
  }
`;

export const SvgLock = styled(Lock)`
  position: absolute;
  bottom: 6px;
  right: 164px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    right: 210px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    right: 210px;
  }
`;

export const SvgAccount = styled(Account)`
  position: absolute;
  bottom: 6px;
  right: 164px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    right: 210px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    right: 210px;
  }
`;

export const Errors = styled.p`
  color: ${p => p.theme.colors.error};
  font-family: ${p => p.theme.fonts.baseFont};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[2]};
`;

export const ErrorTextPassword = styled.p`
  margin-top: 5px;
  position: absolute;
  color: ${p => p.theme.colors.error};
  font-family: ${p => p.theme.fonts.baseFont};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[2]};
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: 14px;
  }
`;

export const RegisterBtnLp = styled.button`
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.backgroundBlue};
  width: 280px;
  border-radius: ${p => p.theme.radii.big};
  border: 1px solid ${p => p.theme.colors.backgroundBlue};
  height: 50px;
  font-family: ${p => p.theme.fonts.baseFont};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 1;
  letter-spacing: ${p => p.theme.letterSpacing.button};
  text-transform: uppercase;
  transition: ${p => p.theme.transition.main};

  &:hover,
  :active {
    transition: 0.7s;
    transform: scale(1.1);
    background-color: ${p => p.theme.colors.backgroundBlue};
    color: ${p => p.theme.colors.white};
    border: none;
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[4]};
    padding: 12px 0 12px 0;
`;

export const LoginBtnLp = styled.button`
  background-color: ${p => p.theme.colors.income};
  color: ${p => p.theme.colors.white};
  width: 280px;
  border-radius: ${p => p.theme.radii.big};
  border: none;
  border-color: ${p => p.theme.colors.transparent};
  height: 50px;
  font-family: ${p => p.theme.fonts.baseFont};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 1;
  letter-spacing: ${p => p.theme.letterSpacing.button};
  text-transform: uppercase;
  transition: ${p => p.theme.transition.main};

  &:hover,
  :active {
    transition: 0.7s;
    transform: scale(1.1);
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.income};
    border: 1px solid ${p => p.theme.colors.income};
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[4]};
    padding: 12px 0 12px 0;
`;

export const LoginBtn = styled.button`
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.backgroundBlue};
  width: 280px;
  border-radius: ${p => p.theme.radii.big};
  border: 1px solid ${p => p.theme.colors.backgroundBlue};
  height: 50px;
  font-family: ${p => p.theme.fonts.baseFont};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 1;
  letter-spacing: ${p => p.theme.letterSpacing.button};
  text-transform: uppercase;
  transition: ${p => p.theme.transition.main};

  &:hover,
  :active {
    transition: 0.7s;
    transform: scale(1.1);
    background-color: ${p => p.theme.colors.backgroundBlue};
    color: ${p => p.theme.colors.white};
    border: none;
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[4]};
    padding: 12px 0 12px 0;
  }
`;

export const RegisterBtn = styled.button`
  background-color: ${p => p.theme.colors.income};
  color: ${p => p.theme.colors.white};
  width: 280px;
  border-radius: ${p => p.theme.radii.big};
  border: none;
  border-color: ${p => p.theme.colors.transparent};
  height: 50px;
  font-family: ${p => p.theme.fonts.baseFont};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 1;
  letter-spacing: ${p => p.theme.letterSpacing.button};
  text-transform: uppercase;
  transition: ${p => p.theme.transition.main};

  &:hover,
  :active {
    transition: 0.7s;
    transform: scale(1.1);
    background-color: ${p => p.theme.colors.white};
    color: ${p => p.theme.colors.income};
    border: 1px solid ${p => p.theme.colors.income};
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[4]};
    padding: 12px 0 12px 0;
  }
`;

export const ButtonShow = styled(Eye)`
  position: absolute;
  padding: 7px 7px;
  right: 0;
  top: -3px;
  cursor: pointer;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    right: 0;
    top: 0;
  }
`;

export const ButtonHide = styled(EyeClose)`
  position: absolute;
  padding: 7px 7px;
  right: 0;
  top: -3px;
  fill: ${p => p.theme.colors.secondaryText};
  cursor: pointer;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    right: 0;
    top: 0;
  }
`;
