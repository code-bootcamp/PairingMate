import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";

export const Header = styled.header`
  position: fixed;
  z-index: 4;
  width: 100%;
  height: 80px;
  background-color: rgba(0, 0, 0, 0.3);

  @media all and ${theme.tablet} {
    height: 70px;
  }
`;

export const Logo = styled.h1`
  position: absolute;
  top: 20px;
  left: 50px;
  z-index: 4;

  button {
    width: 100px;
    height: 40px;
    background-image: url("/images/common/white-logo.png");
    background-size: contain;
    background-repeat: no-repeat;
  }
  @media all and ${theme.laptop} {
    top: 20px;
    left: 30px;

    button {
      width: 125px;
      height: 30px;
    }
  }
`;
