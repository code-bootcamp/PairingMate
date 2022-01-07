import { useRouter } from "next/router";
import SignUpUI from "./SignUpPresenter";
import { getAuth } from "firebase/auth";
import { getDatabase, ref } from "firebase/database";

const SignUp = () => {
    const router = useRouter();
    const auth = getAuth();
    const user = auth.currentUser;
    const db = getDatabase;

    const onClickSignupUser = () => {
        alert("일반회원으로 가입 시작합니다.")
        router.push("/signup/step-2-user");
    }

    const onClickSignupCompany = () => {
        // user.providerData.forEach((profile) => {
        //     const providerId = profile.providerId;
        //     console.log(providerId);
        //     if(providerId === "google.com") {
        //         Modal.error({title : "가입 유형" , content : "기업 회원은 Password 인증 방식으로 진행 해주세요"});
        //     }
        // })
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