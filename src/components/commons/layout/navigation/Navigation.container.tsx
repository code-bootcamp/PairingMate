import NavigationUI from "./Navigation.presenter";
import { useState } from "react";
import { useRouter } from "next/router";
import { onAuthStateChanged, reload } from "firebase/auth";
import { app, auth } from "../../../../../pages/_app";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { gql, useQuery } from "@apollo/client";
import { IQuery } from "../../../../commons/types/generated/types";

const FETCH_USER_LOGGED_IN = gql`
  query fetchUserLoggedIn {
    fetchUserLoggedIn {
      _id
      email
      name
      picture
    }
  }
`;

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const [userName, setUserName] = useState("");
  const { data: companyUserInfo } =
    useQuery<Pick<IQuery, "fetchUserLoggedIn">>(FETCH_USER_LOGGED_IN);

  const FirebaseUserInfo = auth.currentUser;
  const userUid = FirebaseUserInfo?.uid;
  const onClickopen = () => {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const onClickMoveToFindMates = () => {
    router.push("/find-mates");
    setIsOpen(false);
  };

  const onClickMoveToFitnessCenter = () => {
    router.push("/fitness-centers");
    setIsOpen(false);
  };

  const onClickMoveToBestDeal = () => {
    router.push("/best-deal");
    setIsOpen(false);
  };

  const onClickMoveToRundayCourse = () => {
    router.push("/runday-course");
    setIsOpen(false);
  };

  const onClickMoveToCSCenter = () => {
    router.push("/cs-center");
    setIsOpen(false);
  };

  const onClickMoveToMypage = () => {
    if (companyUserInfo?.fetchUserLoggedIn.email)
      router.push(`/mypage/company/${companyUserInfo.fetchUserLoggedIn._id}`);
    else router.push(`/mypage/user/${userUid}`);
    setIsOpen(false);
  };

  // // 로그인 정보 가져오기
  const db = getFirestore(app);

  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      // 현재 로그인 한 유저의 uid 값으로 문서 가져오기
      const userRef = collection(db, "users");
      const q = query(userRef, where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      querySnapshot.docs.map((el) => setUserName(el.data().name));
    }
  });

  return (
    <>
      <NavigationUI
        isOpen={isOpen}
        FirebaseUserInfo={FirebaseUserInfo}
        companyUserInfo={companyUserInfo}
        userName={userName}
        onClickopen={onClickopen}
        onClickMoveToFindMates={onClickMoveToFindMates}
        onClickMoveToFitnessCenter={onClickMoveToFitnessCenter}
        onClickMoveToBestDeal={onClickMoveToBestDeal}
        onClickMoveToRundayCourse={onClickMoveToRundayCourse}
        onClickMoveToCSCenter={onClickMoveToCSCenter}
        onClickMoveToMypage={onClickMoveToMypage}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default Navigation;
