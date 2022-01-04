import { Inner } from "../../../commons/styles/common";
import { LoginUIProps } from "./LoginTypes";

const LoginUI = (props: LoginUIProps) => {
    
    return(
        <Inner>
            <div>Firebase 로그인 하기</div>
            <label>이메일</label>
            <input style={{border: "1px solid"}} type="text" onChange={props.onChangeEmail} />
            <br />
            <label>비밀번호</label>
            <input
            style={{border: "1px solid"}}
            type="password"
            onChange={props.onChangePassword}
            />
            <br />
            <button onClick={props.onClickLogin} style={{border: "1px solid"}}>로그인 하기</button>
        </Inner>
  
    )
}
export default LoginUI;