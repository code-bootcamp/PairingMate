import SignUpStep2CompanyUI from "./SignUpStep2CompanyPresenter";
import { CREATE_USER } from "./SignUpStep2CompanyQueries"
import { useMutation } from "@apollo/client";
import { useState } from "react";
import { Modal } from "antd";
import { emailRegExp } from "../../../../../commons/libraries/utils/utils";
import router from "next/router";

const SignUpStep2Company = () => {
    const [createUser] = useMutation(CREATE_USER);
    const [signCompanyInputs , setSignCompanyInputs] = useState({
        email:"",
        name:"",
        password:"",
    });

    const [passwordChk, setPasswordChk] = useState<string>("");

    const onChangeInputs = (event) => {
        setSignCompanyInputs({
            ...signCompanyInputs,
            [event.target.name] : event.target.value
        });
    }; 

    const onChangePasswordChk = (event) => {
        setPasswordChk(event.target.value);
    }

    const onClickSignUp = async () => {
        const email = signCompanyInputs.email;
        const password = signCompanyInputs.password;
        const name = signCompanyInputs.name;
        
        if(!emailRegExp(email)) {
            Modal.error({title:"이메일 형식을 맞춰주세요!"});
            return;
        }

        if(password !== passwordChk) {
            Modal.error({title:"비밀번호 오류" , content:"입력하신 비밀번호가 일치하지 않습니다!"});
            return;
        }
        
        if(!email && !password && !name) {
            Modal.error({title: "내용을 입력해주세요!"});
            return;
        }

        else if(!email) Modal.error({title:"이메일을 입력해주세요!"});
        else if(!password) Modal.error({title:"비밀번호를 입력해주세요!"});
        else if(!name) Modal.error({title:"회사명을 입력해주세요!"});

        try{
            const result = await createUser({
                variables : {
                    createUserInput : {
                        ...signCompanyInputs
                    }
                }
            });
            console.log(result.data);
            Modal.success({title:"성공!" , content:"회원가입에 성공하였습니다."});
            router.push("/login");
        } catch (error) {
            Modal.error({title:error.message});
        }
    }
    return (
        <SignUpStep2CompanyUI
            onChangeInputs={onChangeInputs}
            onChangePasswordChk={onChangePasswordChk}
            onClickSignUp={onClickSignUp}
        />
    )
}
export default SignUpStep2Company;