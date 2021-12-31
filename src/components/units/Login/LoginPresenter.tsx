import { LoginUIProps } from "./LoginTypes";


const LoginUI = (props: LoginUIProps) => {
    
    return(
        <>
            <div>로그인 페이지 입니다.</div>
            <button onClick={props.onClickModal}>Modal</button>
        </>
    )
}
export default LoginUI;