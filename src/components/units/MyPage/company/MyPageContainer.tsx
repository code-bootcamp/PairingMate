import MyPageUI from "./MyPagePresenter";
import { useMutation, useQuery } from "@apollo/client";
import { ChangeEvent, useEffect, useRef, useState } from "react";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "@firebase/firestore";
import { app } from "../../../../../pages/_app";
import { UPLOAD_FILE } from "../../../commons/uploads/UploadsQueries";
import { checkValidationImage } from "../../../commons/uploads/UploadsValidation";

import { FETCH_USER_LOGGED_IN } from "../../Login/LoginQueries";
import { FETCH_USED_ITEMS } from "../../BestDeal/List/BestDealListQueries";

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
      const q = query(buylistRef, where("seller.email", "==", userEmail));
      const querySnapshot = await getDocs(q);
      querySnapshot.docs.map((el) => newData.push(el.data()));
      setBuyList(newData);
    }
  };
  console.log(buylist);

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

  // 현재 접속한 유저 정보 파이어 베이스에서 가져오기

  useEffect(() => {
    onLoadGetBuyList();
  }, []);

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);

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
    />
  );
};

export default MyPage;
