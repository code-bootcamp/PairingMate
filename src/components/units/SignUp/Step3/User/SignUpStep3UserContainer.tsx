import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import router from "next/router";
import { ChangeEvent, useRef, useState } from "react";
import { app } from "../../../../../../pages/_app";
import { UPLOAD_FILE } from "../../../../commons/uploads/UploadsQueries";
import SignUpStep3UserUI from "./SignUpStep3UserPresenter";

const SignUpStep3User = () => {
    const fileRef = useRef<HTMLInputElement>(null);
    const [uploadFile] = useMutation(UPLOAD_FILE);
    // 사용 하지 않는 파라미터는 지울 수 있으나 콤마를 꼭 넣어줘야한다.
    const [profileImage, setProfileImage] = useState<string[]>([]);
    const [name, setName] = useState("");

    const db = getFirestore(app);
    const auth = getAuth();
    const user = auth.currentUser;

    const imgDoc = doc(db, "users", user.uid);
  
    const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
      const myFile = event.target.files?.[0];
      console.log(myFile);
  
      const result = await uploadFile({
        variables: {
          file: myFile,
        },
      });
      console.log(result.data.uploadFile.url);
      setProfileImage([result.data.uploadFile.url]);
    };
  
    const onClickProfileImage = () => {
      fileRef.current?.click();
    };

    const onChangeName = (event) => {
        setName(event.target.value);
    }
  
    const onClickUpdateDoc = async () => {
        console.log("profileImage : " , profileImage);
      try {
        await updateDoc(imgDoc, {
            name,
            images: profileImage,
            // tage
        });
        Modal.success({ title: "성공!" , content:"지금 부터 Pairing Mate를 만나보세요!"});
        router.push("/login");
      } catch (error) {
        Modal.error({ title: "실패!" });
      }
    };
    return (
        <SignUpStep3UserUI 
            fileRef={fileRef}
            profileImage={profileImage}
            onChangeFile={onChangeFile}
            onChangeName={onChangeName}
            onClickProfileImage={onClickProfileImage}
            onClickUpdateDoc={onClickUpdateDoc}
        />
    )
}
export default SignUpStep3User;