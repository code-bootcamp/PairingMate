import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";
import { NaviButtonProps } from "./Navigation.types";

export const Navigation = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  width: 35%;
  max-width: 450px;
  height: 100vh;
  padding: 50px 40px;
  transform: ${(props: NaviButtonProps) =>
    !props.isOpen ? "translateX(100%)" : "translateX(0)"};
  opacity: ${(props: NaviButtonProps) => (!props.isOpen ? 0 : 1)};
  transition: 0.5s;
  background: #fff;

  @media all and ${theme.laptop} {
    width: 100%;
    max-width: 50%;
  }

  @media all and ${theme.tablet} {
    width: 100%;
    max-width: 70%;
  }

  @media all and ${theme.mobile} {
    width: 100%;
    max-width: 100%;
  }
`;

export const LoginSection = styled.div`
  width: 100%;
  padding: 30px 0;

  h6 {
    display: block;
    padding: 20px 0;
    line-height: 1.5;
    font-size: ${theme.fontsize.fs20};
    color: ${theme.fontColorBase};

    span {
      font-weight: bold;
      color: #213358;
    }
  }
`;
export const NaviButton = styled.div`
  position: fixed;
  top: 30px;
  right: 50px;
  z-index: 33;
  width: 35px;
  height: 25px;
  cursor: pointer;

  span {
    height: 2px;
    background: ${(props: NaviButtonProps) =>
      !props.isOpen ? "#fff" : "#333"};
    right: 0;
    -moz-transition: 0.3s;
    -o-transition: 0.3s;
    -webkit-transition: 0.3s;
    transition: 0.3s;
  }
  span:nth-of-type(1) {
    position: absolute;
    top: 50%;
    margin-top: -1px;
    width: 100%;
    transform: ${(props: NaviButtonProps) =>
      !props.isOpen ? "rotate(0deg)" : "rotate(45deg)"};
  }

  span:nth-of-type(2) {
    position: absolute;
    top: 0;
    width: 100%;
    transform: ${(props: NaviButtonProps) =>
      !props.isOpen ? "translateX(0)" : "translateX(100%)"};

    opacity: ${(props: NaviButtonProps) => (!props.isOpen ? 1 : 0)};
  }

  span:nth-of-type(3) {
    position: absolute;
    bottom: ${(props: NaviButtonProps) => (!props.isOpen ? 0 : "11px")};
    width: 100%;
    transform: ${(props: NaviButtonProps) =>
      !props.isOpen ? "rotate(0deg)" : "rotate(-45deg)"};
  }
`;

export const NavigationList = styled.ul`
  width: 100%;

  li {
    padding: 10px 0;

    button {
      position: relative;
      font-size: 1.25rem;

      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0%;
        height: 2px;
        background-color: black;
        transition: 0.5s;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }
`;
