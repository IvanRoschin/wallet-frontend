import styled from 'styled-components';

export const Backdrop = styled.div`
  // position: fixed;
  // display: flex;
  // justify-content: center;
  // align-items: center;
  // top: 0;
  // left: 0;
  // width: 100vh;
  // height: 100vh;
  // /* padding: 20px 0; */
  // background-color: ${p => p.theme.colors.modalBackdrop};
  // backdrop-filter: blur(5px);
  // overflow: scroll;
  // z-index: 10;
  // margin-top: 70px;

  // padding: 20px;
`;

export const ModalWindow = styled.div`
  overflow: auto;
  // width: 280px;
  min-width: 360px;
  position: absolute;
  top: 67%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: ${p => p.theme.radii.small};
  background-color: ${p => p.theme.colors.white};
  /* &::-webkit-scrollbar {
    width: 0;
  } */

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    min-width: 608px;
    /* width: auto; */
    border-radius: ${p => p.theme.radii.big};
  }
`;
