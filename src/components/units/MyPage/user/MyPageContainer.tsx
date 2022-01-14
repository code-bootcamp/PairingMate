import MyPageUI from "./MyPagePresenter";
import { useQuery } from "@apollo/client";
import { useEffect, useState } from "react";
import { FETCH_BOARDS } from "./MyPageQueries";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import {
  collection,
  CollectionReference,
  DocumentData,
  getDocs,
  getFirestore,
  Query,
  query,
  QueryDocumentSnapshot,
  where,
} from "@firebase/firestore";
import { app, auth } from "../../../../../pages/_app";

const MyPage = () => {
  const [firedata, setFireData] = useState({});
  const [buylist, seyBuyList] = useState({});
  const db = getFirestore(app);

  const onLoadGetDocs = async () => {
    const user = auth.currentUser;
    if (user) {
      const uid = user.uid;
      // 현재 로그인 한 유저의 uid 값으로 문서 가져오기
      const userRef = collection(db, "users");
      const q = query(userRef, where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.docs.map((el) => setFireData(el.data()));
    }
  };

  const onLoadGetBuyList = async () => {
    const userEmail = auth?.currentUser?.email;
    if (userEmail) {
      const buylistRef = collection(db, "payments");
      const q = query(buylistRef, where("buyer.email", "==", userEmail));
      const querySnapshot = await getDocs(q);
      querySnapshot.docs.map((el) => seyBuyList(el.data()));
    }
  };

  useEffect(() => {
    onLoadGetDocs();
    onLoadGetBuyList();
  }, []);
  console.log(buylist);

  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  return <MyPageUI data={data} firedata={firedata} />;
};

export default MyPage;
