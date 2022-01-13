import LoginUI from "./LoginPresenter";
import { Modal } from 'antd'
import { ChangeEvent, useContext, useState } from "react";
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {
  getFirestore,
  getDoc,
  setDoc,
  doc,
  collection,
  query,
  where,
  getDocs,
} from "firebase/firestore";
import { app, GlobalContext } from "../../../../pages/_app";
import { useRouter } from "next/router";
import { useMutation, useQuery } from "@apollo/client";
import { FETCH_USER_LOGGED_IN, LOGIN_USER } from "./LoginQueries";
import { IQuery } from "../../../commons/types/generated/types";

const Login = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loginUser] = useMutation(LOGIN_USER);
  const { data: companyLoginUser } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const { setAccessToken } = useContext(GlobalContext);
  const router = useRouter();
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const db = getFirestore(app);

  const onChangeEmail = (event:ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const onChangePassword = (event:ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onClickUserLogin = () => {
    if( !email && !password ){
      Modal.error({title: "Empty Information!", content: "로그인 정보를 입력 해주세요"})
      return;
    } else if (!password ){
      Modal.error({title: "Empty Information!", content: "비밀번호가 입력되지 않았습니다."})
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

          // // 로그인 정보 가져오기
          onAuthStateChanged(auth, async (user) => {
            if (user) {
              const uid = user.uid;
              // 현재 로그인 한 유저의 uid 값으로 문서 가져오기
              const userRef = collection(db, "users");
              const q = query(userRef , where("uid" , "==" , uid));
              const querySnapshot = await getDocs(q);
              querySnapshot.docs.map((el) => localStorage.setItem("email" , el.data().email))
              querySnapshot.docs.map((el) => localStorage.setItem("name" , el.data().name))
              querySnapshot.docs.map((el) => localStorage.setItem("image" , el.data().image[0]))
            }
          })
        localStorage.setItem("refreshToken","true");
        router.push("/");
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

  const onClickCompanyLogin = async () => {
    try {
      const result = await loginUser({
        variables : {
          email,
          password
        }
      });
      localStorage.setItem("refreshToken", "true");
      setAccessToken?.(result.data.loginUser.accessToken || "");
      localStorage.setItem("email" , companyLoginUser?.fetchUserLoggedIn.email);
      localStorage.setItem("name" , companyLoginUser?.fetchUserLoggedIn.name);
      localStorage.setItem("image" , companyLoginUser?.fetchUserLoggedIn.picture);
      router.push("/");
    } catch (error) {
      Modal.error({content:error.message});
    }
  }

  const onClickGoogleLogin = () => {
    signInWithPopup(auth, provider)
      .then( async (result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential?.accessToken;
        const user = result.user;
        const uidRef = doc(db, "users" , user.uid);
        const docSnap = await getDoc(uidRef);

        if(docSnap.exists()){
          // // 로그인 정보 가져오기
          onAuthStateChanged(auth, async (user) => {
            if (user) {
              const uid = user.uid;
              // 현재 로그인 한 유저의 uid 값으로 문서 가져오기
              const userRef = collection(db, "users");
              const q = query(userRef , where("uid" , "==" , uid));
              const querySnapshot = await getDocs(q);
              querySnapshot.docs.map((el) => localStorage.setItem("email" , el.data().email))
              querySnapshot.docs.map((el) => localStorage.setItem("name" , el.data().name))
              querySnapshot.docs.map((el) => localStorage.setItem("image" , el.data().image[0]))
            }
          })
          localStorage.setItem("refreshToken","true");
          router.push("/")
        } else {
          try {
              await setDoc(doc(db, "users", user.uid), {
                uid: user.uid,
                email: user.email,
                name: user.displayName,
              });
              Modal.success({title:"추가 정보 페이지로 이동합니다"});
              router.push("/signup/step-3-user");
            } catch (error) {
              Modal.error({title:error});
            }
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const email = error.email;
        const credential = GoogleAuthProvider.credentialFromError(error);

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
          onClickUserLogin={onClickUserLogin}
          onClickCompanyLogin={onClickCompanyLogin}
          onClickGoogleLogin={onClickGoogleLogin}
          onClickSignup={onClickSignup}
      />
  )
}

export default Login;