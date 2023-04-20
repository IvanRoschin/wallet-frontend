import styled from 'styled-components';
import eclipseGray from '../../assets/images/EllipseGray.png';
import eclipsePink from '../../assets/images/EllipsePink.png';
import RegImage from '../../assets/images/RegistrationPageImage.png';
import RegImageTab from '../../assets/images/RegistrationPageImage_tablet.png';
import LoginImage from '../../assets/images/loginPageImage_desktop.png';
import LoginImageTab from '../../assets/images/loginPageImage_tablet.png';

export const Container = styled.div`
  display: block;
  height: 100%;
  padding: 0;
`;

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  top: 0px;
  justify-content: center;
  left: 0px;
  background-color: ${p => p.theme.colors.white};

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    position: fixed;
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    background-color: ${p => p.theme.colors.backgroundLightGrey};
    background-image: url(${eclipseGray}), url(${eclipsePink});
    background-repeat: no-repeat, no-repeat;
    background-position: 0px 100%, right 0px top 0px;
    padding: 60px 114px 48px;
    width: 100vw;
    min-height: 1024px;
    text-align: center;
    height: 100vh;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    flex-direction: row;
    padding: 0;
    min-height: 720px;
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
    color: var(--black);
    display: flex;
    margin-right: auto;
    font-family: var(--secondaryFont);
    font-weight: var(--regular);
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

export const FormWrapper = styled.div`
  align-items: center;
  display: flex;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    height: 100vh;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 57%;
    height: 100%;
    background: hsla(0, 0%, 100%, 0.4);
    backdrop-filter: blur(50px);
  }
`;

export const FormContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${p => p.theme.colors.white};
  width: 320px;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 533px;
    padding: 40px 65px 60px;
    border-radius: 20px;
    margin-right: auto;
    margin-left: auto;
  }

  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 533px;
    padding: 40px 65px 60px;
    border-radius: 20px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const FormContainerRegsiter = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: ${p => p.theme.colors.white};
  width: 320px;
  padding: 20px 32px 36px;
  border-radius: 20px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    width: 533px;
    padding: 40px 65px 60px;
    border-radius: 20px;
    margin-right: auto;
    margin-left: auto;
  }
`;

export const LogoContainer = styled.div`
  margin-bottom: 60px;
`;
