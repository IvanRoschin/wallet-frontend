import styled from 'styled-components';

import Flatpickr from 'react-flatpickr';
import 'flatpickr/dist/themes/material_green.css';
import Select from 'react-select';

/*Switch*/

export const SwitchBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 40px;
  height: 44px;
  cursor: pointer;
`;

export const SwitchText = styled.span`
  font-family: ${p => p.theme.fonts.baseFontBold};
  font-size: ${p => p.theme.fontSizes[1]};
  line-height: ${p => p.theme.lineHeights.text};
  text-align: right;
`;

export const SwitchIncome = styled(SwitchText)`
  color: ${({ type }) => (type === 'income' ? '#A6A6A6' : '#24CCA7 ')};
  margin-right: 20px;
`;

export const SwitchExpence = styled(SwitchText)`
  color: ${({ type }) => (type === 'expense' ? '#A6A6A6' : '#FF6596')};
  margin-left: 20px;
`;

export const SwtchCase = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 80px;
  height: 40px;
  border: 1px solid ${p => p.theme.colors.menuText};
  border-radius: ${p => p.theme.radii.button};
`;

export const SwitcherButtonVert = styled.div`
  width: 2px;
  height: 20px;
  background-color: ${p => p.theme.colors.white};
  position: absolute;
  top: 12px;
  left: 20px;
`;

export const SwitcherButtonGor = styled.div`
  width: 20px;
  height: 2px;
  background-color: ${p => p.theme.colors.white};
  position: absolute;
  left: 11px;
  top: 21px;
`;

export const DataInputWrapp = styled.div`
  display: flex;
  flex-direction: column;
`;

/*Select*/
export const SelectInput = styled(Select)`
  width: 100%;
  margin-bottom: 40px;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.menuText};

  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: ${p => p.theme.fonts.baseFont};

  color: ${p => p.theme.colors.text};

  ::placeholder {
    color: ${({ theme, disabled }) => disabled && theme.colors.text};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 100%;
    padding: 3px 12px 4px 12px;
    font-size: ${p => p.theme.fontSizes[3]};
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 100%;
    padding: 3px 12px 4px 12px;
    font-size: $ ${p => p.theme.fontSizes[3]};
  }
`;

/*Sum*/
export const Input = styled.input`
  width: 100%;
  margin-bottom: 40px;
  padding-left: 8px;
  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.menuText};

  font-size: ${p => p.theme.fontSizes[0]};

  color: ${p => p.theme.colors.text};

  ::placeholder {
    color: ${({ theme, disabled }) => disabled && theme.colors.text};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 100%;
    padding: 3px 12px 4px 12px;
    font-size: ${p => p.theme.fontSizes[3]};
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 100%;
    padding: 3px 12px 4px 12px;
    font-size: ${p => p.theme.fontSizes[3]};
  }
`;

/*Date*/

export const InputFlatpickrWrapp = styled.div`
  width: 100%;

  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.menuText};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 100%;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 100%;
  }
`;

export const FlatpickrStyled = styled(Flatpickr)`
  width: 95%;
  padding: 3px 12px 4px 12px;

  font-size: ${p => p.theme.fontSizes[0]};
  color: ${p => p.theme.colors.text};

  ::placeholder {
    color: ${p => p.theme.colors.menuText};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    padding: 3px 12px 4px 12px;
    font-size: ${p => p.theme.fontSizes[3]};
  }
`;

/*Coment*/

export const InputComment = styled.input`
  width: 100%;

  height: 44px;
  margin-top: 40px;
  margin-bottom: 40px;

  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.menuText};

  font-size: ${p => p.theme.fontSizes[0]};
  color: ${p => p.theme.colors.text};

  ::placeholder {
    color: ${p => p.theme.colors.menuText};

    padding-left: 20px;
    font-size: 18px;
    line-height: 27px;
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 394px;
    margin-top: 0;
    height: 29px;

    padding-left: 8px;
    ::placeholder {
      padding-left: 0px;
    }
  }
`;

export const Button = styled.button`
  display: inline;
  font-size: ${p => p.theme.fontSizes[0]};
  font: ${p => p.theme.fonts.baseFont};

  width: 300px;
  height: 50px;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.1em;
  text-transform: uppercase;
`;

export const BtnAdd = styled(Button)`
  border: none;
  margin-bottom: 20px;
  background: ${p => p.theme.colors.income};
  border-radius: ${p => p.theme.radii.button};
  color: ${p => p.theme.colors.white};
`;

export const Form = styled.form`
  gap: 9px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    gap: 24px;
  }
`;

export const InputWrapper = styled.div`
  display: flex;
  position: relative;
  margin-top: 3px;
  align-items: center;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-top: 7px;
  }
`;

export const Label = styled.label`
  display: inline-block;
  font-weight: ${prop => prop.theme.fontWeights.normal};
  font-size: 12px;
  line-height: 1.39;
  color: ${prop => prop.theme.colors.black};
  min-width: 60px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 119px;
    font-size: 18px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 96px;
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  transform: translate(0px, 0px);
  font-size: 10px;
  color: red;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    transform: translate(132px, 0px);
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    transform: translate(90px, 0px);
    margin-left: ${prop => (prop.isDateEdit ? '10px' : 0)};
  }
`;
