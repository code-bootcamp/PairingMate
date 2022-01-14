import styled from "@emotion/styled";

export const ModalWrap = styled.section<{ isOpen: boolean }>`
  position: fixed;
  top: 50%;
  left: 50%;
  width: 700px;
  height: 1000px;
  transform: translate(-50%, -50%);
  background: #fff;
  z-index: 2;
  opacity: ${(props: any) => (!props.isOpen ? 0 : 1)};
  display: ${(props: any) => (!props.isOpen ? "none" : "block")};
`;
