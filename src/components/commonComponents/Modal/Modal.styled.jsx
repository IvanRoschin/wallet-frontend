import styled from 'styled-components';

export const Backdrop = styled.div`
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    position: fixed;
    display: flex;
    justify-content: center;
    align-items: center;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    // padding: 20px 0;
    background-color: ${p => p.theme.colors.modalBackdrop};
    backdrop-filter: blur(5px);
    overflow: scroll;
    z-index: 10;
  }
`;

export const ModalWindow = styled.div`
  overflow: auto;
  min-width: 320px;
  position: absolute;
  top: 75%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${p => p.theme.radii.small};
  background-color: ${p => p.theme.colors.white};
  &::-webkit-scrollbar {
    width: 0;
  }

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    min-width: 540px;
    width: auto;
    top: 50%;
    border-radius: ${p => p.theme.radii.transaction};
  }
`;
