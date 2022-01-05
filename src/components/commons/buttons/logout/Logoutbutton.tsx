import { ButtonsProps } from "../button.types";
import styled from "@emotion/styled";
import router from "next/router";
import { getAuth, signOut } from "firebase/auth";
import { Modal } from "antd";

const Logoutbuttons = styled.button`
  position: relative;
  font-size: 16px;
  margin-left: 16px;
  color: #d53e3d;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0%;
    height: 2px;
    background-color: #d53e3d;
    transition: 0.5s;
  }

  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

const LogoutButton = (props: ButtonsProps) => {
  const auth = getAuth();

  const onClickLogout = async () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        Modal.success({
          title: "로그아웃",
          content: "메인 페이지로 이동 합니다.",
        });
        router.push("/");
        setTimeout(() => location.reload(), 1000);
      })
      .catch((error) => {
        // An error happened.
        console.log(error);
      });
  };
  return (
    <>
      <Logoutbuttons type={props.type} onClick={onClickLogout}>
        {props.name}
      </Logoutbuttons>
    </>
  );
};

export default LogoutButton;
