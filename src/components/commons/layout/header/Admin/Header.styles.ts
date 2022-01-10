import styled from "@emotion/styled";

export const Header = styled.header`
  position: fixed;
  z-index: 4;
  width: 100%;
  height: 80px;
  // background-color: rgba(0, 0, 0, 0.3);
`;

export const Logo = styled.h1`
  position: absolute;
  top: 20px;
  left: 50px;
  z-index: 4;

  button {
    width: 100px;
    height: 40px;
    background-image: url("/images/common/logo.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
`;
