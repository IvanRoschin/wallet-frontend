import styled from 'styled-components';
import eclipseGray from 'images/ellipses/bottomEllipse.png';
import eclipsePink from 'images/ellipses/topEllipse.png';
import RegImage from 'images/hero/registrPageImage.png';
import RegImageTab from 'images/hero/registrPageImage_tablet.png';
import LoginImage from 'images/hero/loginPageImage_desktop.png';
import LoginImageTab from 'images/hero/loginPageImage_tablet.png';

export const PageContainer = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0px;
  justify-content: center;
  left: 0px;
  background-color: ${p => p.theme.colors.white};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    background-color: ${p => p.theme.colors.backgroundTablet};
    background-image: url(${eclipseGray}), url(${eclipsePink});
    background-repeat: no-repeat, no-repeat;
    background-position: 0px 100%, right 0px top 0px;
    padding: 60px 114px 48px;
    text-align: center;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding: 0;
    flex-direction: row;
    background-image: url(${eclipseGray}), url(${eclipsePink});
  }
`;

export const ImageSection = styled.div`
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    display: flex;
    margin-bottom: 50px;
    width: 540px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    flex-direction: column;
    justify-content: center;
    margin-bottom: 0px;
  }
`;

export const ImageContainerLog = styled.div`
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    background-image: url(${LoginImageTab});
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    height: 250px;
    width: 260px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    background-image: url(${LoginImage});
    width: 435px;
    height: 419px;
    margin-right: 38px;
    margin-bottom: 32px;
  }
`;

export const ImageContainerReg = styled.div`
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    background-image: url(${RegImageTab});
    background-repeat: no-repeat;
    background-size: cover;
    margin-left: auto;
    margin-right: auto;
    height: 250px;
    width: 274px;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    background-image: url(${RegImage});
    width: 452px;
    height: 412px;
    margin-bottom: 32px;
    margin-right: 32px;
  }
`;
export const Text = styled.p`
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    display: flex;
    margin-right: auto;
    color: ${p => p.theme.colors.black};
    font-family: ${p => p.theme.fonts.baseFont};
    font-weight: ${p => p.theme.fontWeights.regular};
    font-size: ${p => p.theme.fontSizes[2]};
    font-size: 30px;
    line-height: 45px;
    margin-left: 40px;
    align-items: center;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-left: auto;
    width: 187px;
  }
`;

export const FormContainer = styled.div`
  background: ${p => p.theme.colors.white};

  flex-direction: column;
  align-items: center;
  display: flex;
  margin-left: auto;
  margin-right: auto;
  padding: 107px 20px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 403px;
    padding: 40px 65px 60px;
    border-radius: 20px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 403px;
    padding: 40px 65px 60px;
    border-radius: 20px;
  }
`;

export const LeftSide = styled.div`
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    padding: 150px 76px;
  }
`;

export const RightSide = styled.div`
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    display: block;


    width: 50%
    position: absolute;
    top: 0;
    right: 20px;
    padding: 136px 107px 60px;
    background: hsla(0, 0%, 100%, 0.4);
  }
`;
