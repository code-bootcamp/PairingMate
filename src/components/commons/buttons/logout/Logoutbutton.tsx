import { ButtonsProps } from "../button.types";
import styled from "@emotion/styled";
import router from "next/router";
import { getAuth, GoogleAuthProvider, signOut } from "firebase/auth";
import { Modal } from "antd";
import { useMutation, useQuery } from "@apollo/client";
import { IMutation, IQuery } from "../../../../commons/types/generated/types";
import { LOGOUT_USER } from "./LogoutbuttonQueries";
import { Cookie } from "@emotion-icons/fa-solid";
import { FETCH_USER_LOGGED_IN } from "../../../units/Login/LoginQueries";
import { getCookieParser } from "next/dist/server/api-utils";

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
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOGOUT_USER);
  const { data: companyLoginUser } =
  useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onClickLogout = async () => {
    const companyInfo = companyLoginUser?.fetchUserLoggedIn.email;
    if(!companyInfo) {
      await signOut(auth)
        .then(() => {
          Modal.success({
            title: "로그아웃",
            content: "메인 페이지로 이동 합니다.",
          });
          localStorage.removeItem("refreshToken");
          localStorage.removeItem("email");
          localStorage.removeItem("name");
          localStorage.removeItem("image");
          localStorage.removeItem("uid");
          router.push("/");
          setTimeout(() => location.reload(), 1000);
        })
        .catch((error) => {
          Modal.error({content:error.message});
        });
    } else {
      try {
        await logoutUser();
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("email");
        localStorage.removeItem("name");
        localStorage.removeItem("image");
        localStorage.removeItem("uid");
        Modal.success({title:"로그아웃 되었습니다."});
        router.push("/");
        setTimeout(() => location.reload(), 1000);
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
