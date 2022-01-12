import { ButtonsProps } from "../button.types";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

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
  const router = useRouter();
  const onClickMoveToLoginPage = () => {
    router.push("/login");
  };
  return (
    <>
      <Loginbuttons type={props.type} onClick={onClickMoveToLoginPage}>
        {props.name}
      </Loginbuttons>
    </>
  );
};

export default LoginButton;
