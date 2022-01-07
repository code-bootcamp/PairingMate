import { useRouter } from "next/router";
import SignUpUI from "./SignUpPresenter";

const SignUp = () => {
    const router = useRouter();

    const onClickSignupUser = () => {
        alert("일반회원으로 가입 시작합니다.")
        router.push("/signup/step-2-user");
    }

    const onClickSignupCompany = () => {
        alert("기업회원으로 가입 시작합니다.");
        router.push("/signup/step-2-company");
    }
    
    return (
        <SignUpUI
            onClickSignupUser={onClickSignupUser}
            onClickSignupCompany={onClickSignupCompany}
        />
    )
}
export default SignUp;