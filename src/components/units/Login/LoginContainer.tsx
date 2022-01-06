import LoginUI from "./LoginPresenter";
import { Modal } from 'antd'
import { ChangeEvent, useState } from "react";
import { getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { useRouter } from "next/router";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();

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
    } else if (!password ){
      Modal.error({title: "Empty Information!", content: "비밀번호가 입력되지 않았습니다."})
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

        if (errorCode === "auth/weak-password") {
          Modal.error({
            title: "Weak Password!",
            content: "비밀번호는 6자리 이상으로 설정 해주세요",
          });
          return;
        } else if ( errorCode === "auth/wrong-password"){
          Modal.error({
            title: "Wrong Password!" , 
            content:"비밀번호가 틀립니다"
          });
          return;
        } else if (errorCode === "auth/invalid-email") {
          Modal.error({
            title: "Invalid Email!",
            content: "Email 형식이 틀립니다",
          });
          return;
        } else if ( errorCode === "auth/user-not-found"){
          Modal.error({
            title: "User Not Found!" , 
            content:"유저 정보가 없습니다"
          });
          return;
        }
      });
  };

  const onClickGoogleLogin = async () => {
    await signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        // The signed-in user info.
        const user = result.user;
        // ...
        console.log("user : ", user);
        router.push("/");
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        const email = error.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...

        console.log("Error_code", errorCode);
        console.log("Error_message", errorMessage);
        console.log("Error_email", email);
        console.log("Error_credential", credential);
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
          onClickGoogleLogin={onClickGoogleLogin}
          onClickSignup={onClickSignup}
      />
  )
}

export default Login;