import LoginButton from "../../buttons/login/Loginbutton";
import LogoutButton from "../../buttons/logout/Logoutbutton";
import * as N from "./Navigation.styles";
import { NavigationProps } from "./Navigation.types";

const NavigationUI = (props: NavigationProps) => {
  const userInfo = props.FirebaseUserInfo?.email;

  return (
    <>
      <N.NaviButton isOpen={props.isOpen} onClick={props.onClickopen}>
        <span></span>
        <span></span>
        <span></span>
      </N.NaviButton>
      <N.Navigation isOpen={props.isOpen}>
        <N.LoginSection>
          {userInfo || props.companyUserInfo?.fetchUserLoggedIn.email
          ? ( 
              <>
                  <h6>
                    <span>{props.userName || props.companyUserInfo?.fetchUserLoggedIn.name}</span> 님 환영합니다!<br />
                    당신의 <span>메이트</span>를 만나보세요.
                  </h6>
                  {userInfo === "admin@gmail.com" 
                  ? (<button type="button" onClick={props.onClickMoveToMypage}>관리자페이지</button>) 
                  : (<button type="button" onClick={props.onClickMoveToMypage}>마이페이지</button>)}
                  <LogoutButton type="button" name="로그아웃" />
                </>
            ) 
          : (
              <>
                <h6>
                  로그인 후 이용이 가능합니다 <br />
                  회원가입 후 당신의 <span>메이트</span>를 만나보세요.
                </h6>
                <LoginButton type="button" name="로그인" />
              </>
            )
          }
        </N.LoginSection>

        <N.NavigationList>
          <li>
            <button onClick={props.onClickMoveToFindMates}>FindMates</button>
          </li>
          <li>
            <button onClick={props.onClickMoveToFitnessCenter}>
              Fitness Center
            </button>
          </li>
          <li>
            <button onClick={props.onClickMoveToBestDeal}>Best Deal</button>
          </li>
          <li>
            <button onClick={props.onClickMoveToRundayCourse}>
              Runday Course
            </button>
          </li>
          <li>
            <button onClick={props.onClickMoveToCSCenter}>Customer Service</button>
          </li>
        </N.NavigationList>
      </N.Navigation>
    </>
  );
};

export default NavigationUI;
