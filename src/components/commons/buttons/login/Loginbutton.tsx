import { ButtonsProps } from "../button.types";
import styled from "@emotion/styled";

const Loginbuttons = styled.button`
  position: relative;
  font-size: 16px;

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
`;

const LoginButton = (props: ButtonsProps) => {
  return (
    <>
      <Loginbuttons type={props.type}>{props.name}</Loginbuttons>
    </>
  );
};

export default LoginButton;
