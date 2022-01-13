import { ButtonsProps } from "../button.types";
import styled from "@emotion/styled";
import router from "next/router";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { Modal } from "antd";
import { useMutation } from "@apollo/client";
import { IMutation } from "../../../../commons/types/generated/types";
import { LOGOUT_USER } from "./LogoutbuttonQueries";

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
  const provider = new GoogleAuthProvider().providerId;
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);

  const onClickLogout = async () => {
    // console.log("Provider : " , provider);

    if(provider === "google.com" || provider === "password") {
      await signOut(auth)
        .then(() => {
          // Sign-out successful.
          Modal.success({
            title: "로그아웃",
            content: "메인 페이지로 이동 합니다.",
          });
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("email");
          localStorage.removeItem("name");
          router.push("/");
          setTimeout(() => location.reload(), 1000);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      try {
        await logoutUser();
        localStorage.setItem("refreshToken","false");
        alert("로그아웃 되었습니다.");
      } catch (error) {
        Modal.error({content:error.message});
      }
    }
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
