import { useMutation } from "@apollo/client";
import { Modal } from "antd";
import { getAuth } from "firebase/auth";
import { doc, getFirestore, updateDoc } from "firebase/firestore";
import router from "next/router";
import React, { ChangeEvent, useRef, useState, useEffect } from "react";
import { app } from "../../../../../../pages/_app";
import { UPLOAD_FILE } from "../../../../commons/uploads/UploadsQueries";
import { checkValidationImage } from "../../../../commons/uploads/UploadsValidation";
import SignUpStep3UserUI from "./SignUpStep3UserPresenter";

const SignUpStep3User = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [profileImage, setProfileImage] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [Tags, setTags] = useState<string[]>();

  // const db = getFirestore(app);
  // const auth = getAuth();
  // const user = auth.currentUser;
  // const docu = doc(db, "users", user.uid);
  const [docu, setDocu] = useState(null);

  useEffect(() => {
    const db = getFirestore(app);
    const auth = getAuth();
    const user = auth.currentUser;
    setDocu(doc(db, "users", user.uid));
  }, []);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const myFile = checkValidationImage(event.target.files?.[0]);

    if (myFile) {
      const result = await uploadFile({
        variables: {
          file: myFile,
        },
      });
      console.log(result.data.uploadFile.url);
      setProfileImage([result.data.uploadFile.url]);
    }
  };

  const onClickProfileImage = () => {
    fileRef.current?.click();
  };

  const onErrorHandle = (
    event: React.SyntheticEvent<HTMLImageElement, Event>
  ) => {
    event.currentTarget.src = "/images/common/signupProfile.svg";
  };

  const onChangeName = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const onClickUpdateDoc = async () => {
    if (profileImage.length === 0) {
      Modal.error({ title: "프로필 사진을 등록해주세요!" });
      return;
    } else if (!name) {
      Modal.error({ title: "닉네임을 입력해주세요!" });
      return;
    }

    try {
      await updateDoc(docu, {
        name,
        image: profileImage,
        tags: Tags,
      });
      Modal.success({
        title: "성공!",
        content: "지금 부터 Pairing Mate를 만나보세요!",
      });
      router.push("/login");
    } catch (error) {
      Modal.error({ title: "실패!" });
    }
  };
  return (
    <SignUpStep3UserUI
      Tags={Tags}
      setTags={setTags}
      fileRef={fileRef}
      profileImage={profileImage}
      onChangeFile={onChangeFile}
      onErrorHandle={onErrorHandle}
      onChangeName={onChangeName}
      onClickProfileImage={onClickProfileImage}
      onClickUpdateDoc={onClickUpdateDoc}
    />
  );
};
export default SignUpStep3User;
