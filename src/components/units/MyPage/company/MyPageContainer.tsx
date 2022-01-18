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
import { gql } from "graphql-request";
import { FETCH_USER_LOGGED_IN } from "../../Login/LoginQueries";

const MyPage = () => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile] = useMutation(UPLOAD_FILE);
  const [profileImage, setProfileImage] = useState("");
  const [firedata, setFireData] = useState({});
  const [buylist, setBuyList] = useState([]);
  const [isChanged, setIsChanged] = useState(false);
  const { data: companyUserInfo } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const onLoadGetBuyList = async () => {
    const db = getFirestore(app);
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
      // const result =
    }
  };

  // 현재 접속한 유저 정보 파이어 베이스에서 가져오기

  useEffect(() => {
    onLoadGetBuyList();
  }, []);

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
      companyUserInfo={companyUserInfo}
      onChangeFile={onChangeFile}
      onClickProfileImage={onClickProfileImage}
      onClickUpdateProfileImg={onClickUpdateProfileImg}
    />
  );
};

export default MyPage;
