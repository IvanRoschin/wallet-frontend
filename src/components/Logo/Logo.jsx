import LogoSrc from 'images/svg/logo.svg';
import { LogoText, LogoContainer, LogoImg } from './Logo.styled';

export const Logo = () => {
  return (
    <LogoContainer>
      <LogoImg src={LogoSrc} alt="Logo" />
      <LogoText>Wallet</LogoText>
    </LogoContainer>
  );
};
