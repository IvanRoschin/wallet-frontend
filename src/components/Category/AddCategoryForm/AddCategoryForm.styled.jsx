import styled from 'styled-components';

/*Wrapper*/
export const Wrapper = styled.div`
  align-items: center;
  margin-bottom: 40px;
  height: 44px;
  cursor: pointer;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    display: flex;
    justify-content: center;
    width: 394px;
    margin-left: auto;
    margin-right: auto;

    font-size: ${p => p.theme.fontSizes[2]};
  }
`;

export const Form = styled.form`
  gap: 9px;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    gap: 24px;
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
  font-size: ${p => p.theme.fontSizes[2]};

  color: ${({ type }) => (type === 'income' ? '#A6A6A6' : '#24CCA7 ')};
  margin-right: 20px;
`;

export const SwitchExpence = styled(SwitchText)`
  font-size: ${p => p.theme.fontSizes[2]};

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

/*Input*/
export const InputWrapper = styled.div`
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    display: flex;
    position: relative;
    margin-top: 7px;

    align-items: center;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 100%;
    margin-right: 40px;
  }
`;
export const InputComment = styled.input`
  width: 100%;

  height: 44px;
  margin-bottom: 40px;

  border-bottom: ${p => p.theme.borders.normal} ${p => p.theme.colors.menuText};

  font-size: ${p => p.theme.fontSizes[2]};
  color: ${p => p.theme.colors.text};

  ::placeholder {
    font-size: ${p => p.theme.fontSizes[2]};

    color: ${p => p.theme.colors.menuText};

    padding-left: 20px;
    font-size: 18px;
    line-height: 27px;
  }
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-top: 40px;
    height: 29px;

    padding-left: 40px;
    ::placeholder {
      padding-left: 0px;
    }
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding-left: 25px;
    font-size: ${p => p.theme.fontSizes[2]};

    ::placeholder {
      padding-left: 0px;
    }
  }
`;

/*Button*/
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

export const BtnAddWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-left: 45px;
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
