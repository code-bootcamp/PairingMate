import { Modal } from "antd";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";
import { doc, collection, getDocs, getFirestore, query, setDoc, where } from "firebase/firestore";
import router from "next/router";
import { ChangeEvent, useState } from "react";
import { app } from "../../../../../../pages/_app";
import { emailRegExp } from "../../../../../commons/libraries/utils/utils";
import SignUpStep2UserUI from "./SignUpStep2UserPresenter";
import { userInputsProps } from "./SignUpStep2UserTypes";

const SignUpStep2User = () => {
    const [signUserInputs , setSignCompanyInputs] = useState<userInputsProps>({
        email:"",
        password:"",
    });
    const [passwordChk, setPasswordChk] = useState<string>("");
    const db = getFirestore(app);
    const auth = getAuth();
    
    const onChangeInputs = (event:ChangeEvent<HTMLInputElement>) => {
        setSignCompanyInputs({
            ...signUserInputs,
            [event.target.name] : event.target.value
        });
    }; 

    const onChangePasswordChk = (event:ChangeEvent<HTMLInputElement>) => {
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

        const q = query(collection(db, "users"), where("email", "==" , email));
        const querySnapshot = await getDocs(q);
        
        if(querySnapshot.docs.map((el) => (el.data())).length > 0) {
            Modal.error({title:"실패!" , content:"이미 사용 중인 이메일 입니다."})
            return;
        } else {
            Modal.success({title:"성공!" , content:"사용 가능한 이메일 입니다."});
            await createUserWithEmailAndPassword(auth, email, password)
            .then( async (userCredential) => {
                const user = userCredential.user;
                await setDoc(doc(db, "users", user.uid), {
                    uid: user.uid,
                    email: user.email,
                });
            })
            .catch((error) => {
                const errorCode = error.code;
                Modal.error({title:errorCode});
            });
            Modal.success({title:"성공!" , content:"프로필 설정페이지로 이동합니다!"});
            router.push("/signup/step-3-user");
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