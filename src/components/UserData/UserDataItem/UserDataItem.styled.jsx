import styled from 'styled-components';

import { ReactComponent as EditPenIcon } from '../../../images/svg/pensil.svg';
import { ReactComponent as EditSaveIcon } from '../../../images/svg/save.svg';

export const IconPen = styled(EditPenIcon)`
  width: 20px;
  height: 20px;
`;
export const SaveIcon = styled(EditSaveIcon)`
  width: 20px;
  height: 20px;
`;

export const Form = styled.form`
  gap: 9px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    gap: 24px;
  }
`;

export const DataInputWrapp = styled.div`
  display: flex;
  flex-direction: column;
  font-size: ${p => p.theme.fontSizes[0]};
  font-weight: ${p => p.theme.fontWeights.regular};
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    font-size: ${p => p.theme.fontSizes[2]};
  }
`;

export const Label = styled.label`
  display: inline-block;
  font-weight: ${p => p.theme.fontWeights.bold};

  line-height: 1.39;
  color: ${prop => prop.theme.colors.black};
  min-width: 60px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 119px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 96px;
  }
`;

export const Input = styled.input`
  width: 150px;
  padding: 4px 14px;
  border: ${({ theme, disabled }) =>
    disabled ? theme.borders.transparent : theme.borders.input};
  border-radius: ${p => p.theme.radii.user};
  outline: ${p => p.theme.colors.transparent};

  color: ${p => p.theme.colors.text};
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.colors.transparent : theme.colors.white};

  ::placeholder {
    color: ${({ theme, disabled }) => disabled && theme.colors.text};
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 100%;
    padding: 3px 12px 4px 12px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 100%;
    padding: 3px 12px 4px 12px;
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

export const EditBtn = styled.button`
  margin-left: auto;
  width: 30px;
  height: 30px;
  padding: 5px;
  background-color: ${prop => prop.theme.colors.pageIconBg};
  border: none;
  border-radius: 50%;
  cursor: pointer;
  fill: ${prop => prop.theme.colors.white};

  &.btn-active:hover {
    scale: 1.1;
    fill: ${prop => prop.theme.colors.white};
  
    @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 32px;
    height: 32px;
}

`;

export const ErrorMessage = styled.div`
  position: absolute;
  transform: translate(0px, 0px);
  color: red;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    transform: translate(132px, 0px);
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    transform: translate(90px, 0px);
    margin-left: ${prop => (prop.isDateEdit ? '10px' : 0)};
  }
`;
