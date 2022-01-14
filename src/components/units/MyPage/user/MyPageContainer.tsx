import MyPageUI from "./MyPagePresenter";
import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import { FETCH_BOARDS } from "./MyPageQueries";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import {
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  updateDoc,
  where,
} from "@firebase/firestore";
import { app } from "../../../../../pages/_app";
import { UPLOAD_FILE } from "../../../commons/uploads/UploadsQueries";
import { checkValidationImage } from "../../../commons/uploads/UploadsValidation";
import { Modal } from "antd";

const MyPage = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [profileImage, setProfileImage] = useState("");
  const [firedata, setFireData] = useState({});
  const [buylist, setBuyList] = useState([]);
  const [docu, setDocu] = useState(null);
  const [isChanged, setIsChanged] = useState(false);
  const db = getFirestore(app);

  const onLoadGetDocs = async () => {
    const user = localStorage.getItem("uid");
    if (user) {
      const uid = user;
      // 현재 로그인 한 유저의 uid 값으로 문서 가져오기
      const userRef = collection(db, "users");
      const q = query(userRef, where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.docs.map((el) => setFireData(el.data()));
    }
  };

  const onLoadGetBuyList = async () => {
    const userEmail = localStorage.getItem("email");
    if (userEmail) {
      const newData = [];
      const buylistRef = collection(db, "payments");
      const q = query(buylistRef, where("buyer.email", "==", userEmail));
      const querySnapshot = await getDocs(q);
      // querySnapshot.docs.map((el) => seyBuyList(el.data()));
      querySnapshot.docs.map((el) => newData.push(el.data()));
      setBuyList(newData);
    }
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const myFile = checkValidationImage(event.target.files?.[0]);

    if (myFile) {
      const result = await uploadFile({
        variables: {
          file: myFile,
        },
      });
      setProfileImage(result.data?.uploadFile.url);
      setIsChanged(true);
    }
  };
  const onClickProfileImage = () => {
    fileRef.current?.click();
  };

  const onClickUpdateProfileImg = async () => {
    if (profileImage.length === 0) {
      Modal.error({ title: "프로필 사진을 등록해주세요!" });
      return;
    }

    try {
      await updateDoc(docu, {
        image: profileImage,
      });
      Modal.success({
        title: "성공!",
        content: "프로필 이미지 변경이 되었습니다.",
      });
      localStorage.setItem("image", profileImage);
    } catch (error) {
      Modal.error({ title: "실패!" });
    }
  };

  useEffect(() => {
    setProfileImage(localStorage.getItem("image"));
    const db = getFirestore(app);
    const user = localStorage.getItem("uid");
    setDocu(doc(db, "users", user));
    onLoadGetDocs();
    onLoadGetBuyList();
  }, []);
  // console.log(getDate(new Date(buylist?.buyAt?.seconds * 1000)));

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  return (
    <MyPageUI
      isChanged={isChanged}
      data={data}
      firedata={firedata}
      buylist={buylist}
      profileImage={profileImage}
      onChangeFile={onChangeFile}
      onClickProfileImage={onClickProfileImage}
      onClickUpdateProfileImg={onClickUpdateProfileImg}
    />
  );
};

export default MyPage;
