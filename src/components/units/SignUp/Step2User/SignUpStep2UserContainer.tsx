import { Modal } from "antd";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import router from "next/router";
import { useState } from "react";
import { app } from "../../../../../pages/_app";
import { emailRegExp } from "../../../../commons/libraries/utils/utils";
import SignUpStep2UserUI from "./SignUpStep2UserPresenter";

const SignUpStep2User = () => {
    const [signUserInputs , setSignCompanyInputs] = useState({
        email:"",
        password:"",
    });

    const [passwordChk, setPasswordChk] = useState<string>("");
    const db = getFirestore(app);
    const auth = getAuth();
    const onChangeInputs = (event) => {
        setSignCompanyInputs({
            ...signUserInputs,
            [event.target.name] : event.target.value
        });
    }; 

    const onChangePasswordChk = (event) => {
        setPasswordChk(event.target.value);
    }

    const onClickSignUp = async () => {
        const email = signUserInputs.email;
        const password = signUserInputs.password;
        
        if(!emailRegExp(email)) {
            Modal.error({title:"이메일 형식을 맞춰주세요!"});
            return;
        }

        if(password !== passwordChk) {
            Modal.error({title:"비밀번호 오류" , content:"입력하신 비밀번호가 일치하지 않습니다!"});
            return;
        }
        
        if(!email && !password) {
            Modal.error({title: "내용을 입력해주세요!"});
            return;
        }

        else if(!email) Modal.error({title:"이메일을 입력해주세요!"});
        else if(!password) Modal.error({title:"비밀번호를 입력해주세요!"});

        try{

            // firebase doc 추가
            createUserWithEmailAndPassword(auth, email, password)
            .then(async (userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                // ...
                try {
                    await setDoc(doc(db, "users", user.uid), {
                        uid: user.uid,
                        email: user.email,
                    });
                } catch (error) {
                    console.log(error);
                }
            })
            .catch((error) => {
                const errorCode = error.code;

                if (errorCode === "auth/email-already-in-use") {
                    Modal.error({
                        title: "Email already in use!",
                        content: "이미 사용 되고 있는 이메일 입니다.",
                    });
                } else if (errorCode === "auth/weak-password") {
                    Modal.error({
                        title: "Weak Password!",
                        content: "비밀번호는 6자리 이상으로 설정 해주세요",
                    });
                } else if (errorCode === "auth/invalid-email") {
                    Modal.error({
                        title: "Invalid Email!",
                        content: "Email 형식이 틀립니다",
                    });
                }
            });
            Modal.success({title:"성공!" , content:"회원가입에 성공하였습니다."});
            router.push("/login");
        } catch (error) {
            Modal.error({title:error.message});
        }
    }
    return (
        <SignUpStep2UserUI
            onChangeInputs={onChangeInputs}
            onChangePasswordChk={onChangePasswordChk}
            onClickSignUp={onClickSignUp}
        />
    )
}
export default SignUpStep2User;