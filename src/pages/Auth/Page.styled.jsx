import styled from 'styled-components';
import eclipseGray from 'images/ellipses/bottomEllipse.png';
import eclipsePink from 'images/ellipses/topEllipse.png';
import RegImage from 'images/hero/registrPageImage.png';
import RegImageTab from 'images/hero/registrPageImage_tablet.png';
import LoginImage from 'images/hero/loginPageImage_desktop.png';
import LoginImageTab from 'images/hero/loginPageImage_tablet.png';

export const PageContainer = styled.div`
  width: 320px;

  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  top: 0;
  justify-content: center;
  left: 0;
  background-color: ${p => p.theme.colors.white};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    min-width: 768px;

    background-color: ${p => p.theme.colors.backgroundTablet};
    background-image: url(${eclipseGray}), url(${eclipsePink});
    background-repeat: no-repeat, no-repeat;
    background-position: 0px 100%, right 0px top 0px;
    padding-top: 60px;

    // padding: 60px 114px 48px;
    text-align: center;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 100%;
    // padding-left: 16px;
    // padding-right: 16px;
    // padding: 0;
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
    font-weight: ${p => p.theme.fontWeights.bold};
    font-size: ${p => p.theme.fontSizes[4]};
    line-height: 45px;
    margin-left: 40px;
    align-items: center;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    margin-left: auto;
    width: 187px;
    font-size: ${p => p.theme.fontSizes[4]};
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
    display: flex;
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
    padding: 150px, 76px;
    height: 100vh;
  }
`;

export const RightSide = styled.div`
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    display: block;
    height: 100vh;
    padding: 136px;
    background: hsla(0, 0%, 100%, 0.4);
  }
`;
