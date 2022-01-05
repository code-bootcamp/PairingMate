import LoginUI from "./LoginPresenter";
import { Modal } from 'antd'
import { ChangeEvent, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const auth = getAuth();
  const router = useRouter();

  const onChangeEmail = (event:ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event:ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickLogin = () => {
    if( !email && !password ){
      Modal.error({title: "Empty Information!", content: "로그인 정보를 입력 해주세요"})
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Login
        const user = userCredential.user;
        // ...
        router.push("/")
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
  };

  const onClickSignup = () => {
    router.push("/signup");
  }

  return(
      <LoginUI 
          onChangeEmail={onChangeEmail}
          onChangePassword = {onChangePassword}
          onClickLogin={onClickLogin}
          onClickSignup={onClickSignup}
      />
  )
}

export default Login;