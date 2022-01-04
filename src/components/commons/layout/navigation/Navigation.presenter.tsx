import LoginButton from "../../buttons/login/Loginbutton";
import LogoutButton from "../../buttons/logout/Logoutbutton";
import * as N from "./Navigation.styles";
import { NavigationProps } from "./Navigation.types";

const NavigationUI = (props: NavigationProps) => {
  return (
    <>
      <N.NaviButton isOpen={props.isOpen} onClick={props.onClickopen}>
        <span></span>
        <span></span>
        <span></span>
      </N.NaviButton>
      <N.Navigation isOpen={props.isOpen}>
        <N.LoginSection>
          <h6>
            로그인 후 이용이 가능합니다 <br />
            회원가입 후 당신의 <span>메이트</span>를 만나보세요.
          </h6>
          <LoginButton  type="button" name="로그인" />
          <LogoutButton type="button" name="로그아웃" />
        </N.LoginSection>

        <N.NavigationList>
          <li>
            <button>FindMates</button>
          </li>
          <li>
            <button>Fitness Center</button>
          </li>
          <li>
            <button>Best Deal</button>
          </li>
          <li>
            <button>Runday Course</button>
          </li>
          <li>
            <button>고객센터</button>
          </li>
        </N.NavigationList>
      </N.Navigation>
    </>
  );
};

export default NavigationUI;
