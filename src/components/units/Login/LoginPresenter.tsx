import { Inner } from "../../../commons/styles/common";
import * as L from "./LoginStyles"
import { LoginUIProps } from "./LoginTypes";

const LoginUI = (props: LoginUIProps) => {
    
    return(
        <L.LoginWrapper>
            <Inner>
                <L.LoginWrap>
                    <L.LoginFildset>
                        <L.LoginFildsetTitle>함께해서 즐거운<br />
                        <strong>PairingMate</strong>
                        </L.LoginFildsetTitle>
                        <L.LoginFildsetInfo>
                            <input 
                                type="text" 
                                onChange={props.onChangeEmail} 
                                placeholder="이메일을 입력해주세요"
                            />
                            <input 
                                type="password" 
                                onChange={props.onChangePassword} 
                                placeholder="비밀번호를 입력해주세요" 
                            />
                        </L.LoginFildsetInfo>
                        <L.LoginButton 
                            type="button" 
                            onClick={props.onClickUserLogin}> 일반 회원 로그인 
                        </L.LoginButton>
                        <L.LoginButton 
                            type="button" 
                            onClick={props.onClickCompanyLogin}> 기업 회원 로그인 
                        </L.LoginButton>
                        <L.SignupWrapper>
                            {/* <L.SignupTitle>아이디가 없으신가요?</L.SignupTitle> */}
                            <L.SignupButton 
                                type="button" 
                                onClick={props.onClickSignup}> 회원가입 
                            </L.SignupButton>
                        </L.SignupWrapper>
                        <L.EmptyArea>OR</L.EmptyArea>
                        <L.GoogleBtn 
                            type="button" 
                            onClick={props.onClickGoogleLogin}> Sign in with <label>Google</label>
                        </L.GoogleBtn>
                    </L.LoginFildset>
                </L.LoginWrap>
            </Inner>
        </L.LoginWrapper>
    )
}
export default LoginUI;