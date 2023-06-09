import styled from 'styled-components';
import { ReactComponent as CloseSvg } from '../../../images/svg/close.svg';

export const CloseModalSvg = styled(CloseSvg)`
  text-align: center;
  width: 16px;
  height: 16px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  // padding: 40px 20px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    // padding: 40px 80px;
  }
`;

export const ModalName = styled.p`
  margin-top: 20px;
  margin-bottom: 40px;
  font-family: ${p => p.theme.fonts.baseFont};

  font-size: ${p => p.theme.fontSizes[3]};
  line-height: 36px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    margin-top: 40px;
    line-height: 45px;
    margin-bottom: 40px;
    font-size: ${p => p.theme.fontSizes[4]};
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

export const BtnClose = styled(Button)`
  background: ${p => p.theme.colors.white};
  border: ${p => p.theme.borders.normal} ${p => p.theme.colors.backgroundBlue};
  border-radius: ${p => p.theme.radii.button};
  color: ${p => p.theme.colors.backgroundBlue};
  margin-bottom: 60px;
`;

export const BtnCloseX = styled(Button)`
  display: none;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    display: block;
    width: 20px;
    height: 20px;
    border: none;
    outline: none;
    position: absolute;
    right: 20px;
    top: 20px;
    background-color: ${p => p.theme.colors.white};
  }
`;

export const BtnCloseWrapper = styled.div`
  margin-right: auto;
  margin-left: auto;
`;

// export const BtnCloseWrapper = styled.div`
//   display: flex;
//   justify-content: end;
//   position: absolute;
//   top: 20px;
//   right: 20px;
// `;
