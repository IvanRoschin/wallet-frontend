import styled from 'styled-components';

import { ReactComponent as Envelope } from 'images/svg/email.svg';
import { ReactComponent as Lock } from 'images/svg/lock.svg';
import { ReactComponent as Person } from 'images/svg/person.svg';
import { ReactComponent as Open } from 'images/svg/eye-password-show.svg';
import { ReactComponent as Closed } from 'images/svg/eye-password-hide.svg';
import { ReactComponent as Phone } from 'images/svg/phone.svg';

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
  margin-top: 60px;
  font-weight: ${p => p.theme.fontWeights.regular};
  line-height: ${p => p.theme.lineHeights.text};
  font-size: ${prop => prop.theme.fontSizes[0]};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${prop => prop.theme.fontSizes[2]};
    margin-top: 60px;
  }
`;

export const Label = styled.label`
  width: 180px;
  position: relative;
  display: inline-block;

  color: ${p => p.theme.colors.black};
  min-width: ${p => p.theme.space[5]};
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 410px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
  }
`;

export const InputContainer = styled.div`
  }
  &:not(:last-child) {
      border-bottom: 1px solid ${p => p.theme.colors.icons};
  outline: none;
    margin-bottom: 40px;
  }
`;

export const Input = styled.input`
  width: 190px;
  height: 30px;
  margin-left: 50px;
  border: none;
  background-color: ${p => p.theme.colors.transparent};
  outline: ${p => p.theme.colors.transparent};

  font-size: ${prop => prop.theme.fontSizes[0]};

  transition: border-bottom 250ms cubic-bezier(0.4, 0, 0.2, 1) 0s;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 410px;
    margin-left: 40px;
    text-align: left;
    font-size: ${prop => prop.theme.fontSizes[2]};
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    font-size: ${prop => prop.theme.fontSizes[2]};
  }
  ::placeholder {
    color: ${p => p.theme.colors.secondaryText};
    font-size: ${prop => prop.theme.fontSizes[0]};
  }
`;

export const Errors = styled.p`
  color: ${p => p.theme.colors.expense};
  // font-family: ${p => p.theme.fonts.baseFont};
  // font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${prop => prop.theme.fontSizes[0]};
`;

export const ErrorTextPassword = styled.p`
  margin-top: 5px;
  position: absolute;
  color: ${p => p.theme.colors.error};
  // font-family: ${p => p.theme.fonts.baseFont};
  // font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${prop => prop.theme.fontSizes[0]};
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    // font-size: 14px;
  }
`;

export const RegisterBtnLp = styled.button`
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.backgroundBlue};
  width: 280px;
  border-radius: ${p => p.theme.radii.button};
  border: 1px solid ${p => p.theme.colors.backgroundBlue};
  height: 50px;
  font-family: ${p => p.theme.fonts.baseFont};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${prop => prop.theme.fontSizes[2]};
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
    // font-size: ${p => p.theme.fontSizes[4]};
    padding: 12px 0 12px 0;
`;

export const LoginBtnLp = styled.button`
  background-color: ${p => p.theme.colors.income};
  color: ${p => p.theme.colors.white};
  width: 280px;
    height: 50px;

  border-radius: ${p => p.theme.radii.button};
  border: none;
  border-color: ${p => p.theme.colors.transparent};
 font-family: ${p => p.theme.fonts.baseFont};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${prop => prop.theme.fontSizes[2]};
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
    padding: 12px 0 12px 0;
    
`;

export const LoginBtn = styled.button`
  background-color: ${p => p.theme.colors.white};
  color: ${p => p.theme.colors.backgroundBlue};
  width: 280px;
  border-radius: ${p => p.theme.radii.button};
  border: 1px solid ${p => p.theme.colors.backgroundBlue};
  height: 50px;
  font-family: ${p => p.theme.fonts.baseFont};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${prop => prop.theme.fontSizes[2]};
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
    font-size: ${prop => prop.theme.fontSizes[2]};
    padding: 12px 0 12px 0;
  }
`;

export const RegisterBtn = styled.button`
  background-color: ${p => p.theme.colors.income};
  color: ${p => p.theme.colors.white};
  width: 280px;
  border-radius: ${p => p.theme.radii.button};
  border: none;
  border-color: ${p => p.theme.colors.transparent};
  height: 50px;
  font-family: ${p => p.theme.fonts.baseFont};
  font-weight: ${p => p.theme.fontWeights.regular};
  font-size: ${prop => prop.theme.fontSizes[2]};
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
    padding: 12px 0 12px 0;
  }
`;

export const ButtonImg = styled.button`
  position: absolute;
  top: 0px;
  left: 250px;
  display: flex;
  flex-direction: column;
  align-items: center;

  border: none;
  background-color: inherit;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    left: 380px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    // left: 400px;
  }
`;

export const OpenEyaIcon = styled(Open)``;
export const ClosedEyaIcon = styled(Closed)``;
export const SvgPhone = styled(Phone)`
  fill: rgb(224, 224, 224);
  position: absolute;
  bottom: 6px;
  left: 5px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    right: 280px;
  }
`;

export const SvgEnvelope = styled(Envelope)`
  position: absolute;
  bottom: 6px;
  left: 5px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    right: 270px;
  }
`;

export const SvgLock = styled(Lock)`
  position: absolute;
  bottom: 6px;
  left: 5px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    right: 270px;
  }
`;

export const SvgPerson = styled(Person)`
  position: absolute;
  bottom: 6px;
  left: 5px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    right: 270px;
  }
`;

export const GoogleLoginButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 7px 0 7px 0;
  /* margin-bottom: 40px; */
  // font-family: ${p => p.theme.fonts.text};

  font-size: ${prop => prop.theme.fontSizes[2]};
  text-decoration: none;

  border: ${p => p.theme.borders.normal}${p => p.theme.colors.accent};

  border-radius: ${p => p.theme.radii.small};
  cursor: pointer;

  color: ${p => p.theme.colors.black};
  background-color: ${p => p.theme.colors.background};

  transition: ${p => p.theme.transition.main};

  &:hover,
  :active {
    background-color: ${p => p.theme.colors.accent};
    color: ${p => p.theme.colors.white};
    transition: color ${p => p.theme.transition.main},
      background-color ${p => p.theme.colors.accent};
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: 9px 0 9px 0;
  }
`;

export const GoogleImg = styled.img`
  width: 26px;
  margin-right: 10px;
`;
