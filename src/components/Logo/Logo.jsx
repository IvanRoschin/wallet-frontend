import LogoSrc from 'images/svg/logo.svg';
import { LogoText, LogoContainer, LogoImg, HomeLink } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={LogoSrc} alt="Logo" />
      <HomeLink to="home">
        <LogoText>Wallet</LogoText>
      </HomeLink>
    </LogoContainer>
  );
};
