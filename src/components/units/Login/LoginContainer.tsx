import LoginUI from "./LoginPresenter";
import { Modal } from 'antd'
import { ChangeEvent, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import router from "next/router";

const Login = () => {

    const [email, setEmail] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const auth = getAuth();
  
    const onChangeEmail = (event:ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };
  
    const onChangePassword = (event:ChangeEvent<HTMLInputElement>) => {
      setPassword(event.target.value);
    };
  
    const onClickLogin = () => {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // ...
          console.log(user);
          router.push("/")
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
  
          Modal.error({ title: errorCode, content: errorMessage });
        });
    };

    return(
        <LoginUI 
            onChangeEmail={onChangeEmail}
            onChangePassword = {onChangePassword}
            onClickLogin={onClickLogin}
        />
    )
}

export default Login;