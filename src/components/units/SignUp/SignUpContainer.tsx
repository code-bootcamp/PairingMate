import { useRouter } from "next/router";
import SignUpUI from "./SignUpPresenter";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";

const SignUp = () => {
    const router = useRouter();
    const auth = getAuth();
    // const user = auth.currentUser;
    // const db = getDatabase;

    const onClickSignupUser = () => {
        router.push("/signup/step-2-user");
    }

    const onClickSignupCompany = () => {
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