import styled from 'styled-components';
import { ReactComponent as AddBtn } from 'images/svg/plus-btn.svg';

export const SvgAddBtn = styled(AddBtn)`
  position: absolute;

  bottom: 35px;
  right: 0;
  cursor: pointer;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
  }
`;

export const AddTransButton = styled.button`
  border: hidden;
`;

export const Wrap = styled.div`
  position: static;
  top: 100%;

  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    position: sticky;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: baseline;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 50%;
  @media (min-width: ${p => p.theme.breakpoints[1]}) {
    align-items: flex-start;
    padding-left: 32px;
  }
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 30%;
    border-right: 1px solid #ddd;
  }
`;

export const RightSide = styled.div`
  width: 50%;
  @media (min-width: ${p => p.theme.breakpoints[2]}) {
    width: 70%;
  }
`;
