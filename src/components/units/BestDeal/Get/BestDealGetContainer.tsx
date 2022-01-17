import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  getFirestore,
  query,
  setDoc,
  where,
} from "firebase/firestore";
import { useRouter } from "next/router";
import { useState } from "react";
import { app, auth } from "../../../../../pages/_app";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import BestDealGetUI from "./BestDealGetPresenter";
import { DELETE_USED_ITEM, FETCH_USED_ITEM } from "./BestDealGetQueries";
import Head from "next/head";
import { getTitle } from "../../../../commons/libraries/utils/utils";

declare const window: typeof globalThis & {
  IMP: any;
};

const BestDealGet = () => {
  const router = useRouter();

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.bestdealId) },
  });

  const [deleteBestdeal] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const onMoveToBestdealUpdate = (bestdealId: string) => () => {
    router.push(`/best-deal/${bestdealId}/update/`);
  };

  const onClickDeleteBestdeal = (useditemId: string) => async () => {
    try {
      await deleteBestdeal({ variables: { useditemId } });
      Modal.success({ content: "삭제되었습니다" });
      router.push("/best-deal");
    } catch (error) {
      Modal.error({ content: "삭제실패하였습니다" });
    }
  };

  // // 로그인 정보 가져오기
  const db = getFirestore(app);
  // const FirebaseUserInfo = auth.currentUser;
  onAuthStateChanged(auth, async (user) => {
    if (user) {
      const uid = user.uid;
      // 현재 로그인 한 유저의 uid 값으로 문서 가져오기
      const userRef = collection(db, "users");
      const q = query(userRef, where("uid", "==", uid));
      const querySnapshot = await getDocs(q);
      // querySnapshot.docs.map((el) => console.log(el.data().email));
      querySnapshot.docs.map((el) => setUserName(el.data().name));
      querySnapshot.docs.map((el) => setUserEmail(el.data().email));
      // querySnapshot.docs.map((el) => setUserimage(el.data().image));
    }
  });
  // 아임포트 페이먼트 실행 시키기
  const onMoveToPayment = () => {
    const IMP = window.IMP;
    IMP.init("imp62063516");
    IMP.request_pay(
      {
        // param
        pg: "html5_inicis",
        pay_method: "card",
        name: "회원권",
        amount: 100,
        buyer_email: userEmail,
        buyer_name: userName,
        buyer_tel: "010-4242-4242",
        buyer_addr: "서울특별시 강남구 신사동",
        buyer_postcode: "01181",
        m_redirect_url: "", // 모바일 결제후 리다이렉트 될 주소!!
      },
      async (rsp: any) => {
        // callback
        if (rsp.success) {
          // 결제 성공시
          // console.log(rsp);
          const result = await addDoc(collection(db, "payments"), {
            seller: {
              name: data?.fetchUseditem.seller.name,
              email: data?.fetchUseditem.seller.email,
            },
            buyer: {
              name: userName,
              email: userEmail,
            },
            price: data?.fetchUseditem.price,
            productName: getTitle(data?.fetchUseditem.name),
            buyNo: rsp.imp_uid,
            buyAt: new Date(),
          });
          // console.log("result: ", result);
          // console.log("buyNum:", rsp.imp_uid);
          // console.log("buyAt:", new Date());

          // createPointTransactionsOfLoading 뮤테이션 실행하기(impUid 인자로 넘기기!!!)
          
          // ========================================
          // 일자  : 2022-01-17
          // 작성자 : 권태욱
          // 내용  : 결제 완료 후 Best deal 메인 페이지 이동 
          // ========================================
          Modal.success({title: "성공!" , content:"결제가 완료 되었습니다."})
          router.push("/best-deal");
        } else {
          Modal.error({ content: "결제 실패" });
        }
      }
    );
  };

  return (
    <>
      <Head>
        <script
          type="text/javascript"
          src="https://code.jquery.com/jquery-1.12.4.min.js"
        ></script>
        <script
          type="text/javascript"
          src="https://cdn.iamport.kr/js/iamport.payment-1.2.0.js"
        ></script>
      </Head>
      <BestDealGetUI
        data={data}
        onMoveToBestdealUpdate={onMoveToBestdealUpdate}
        onClickDeleteBestdeal={onClickDeleteBestdeal}
        onMoveToPayment={onMoveToPayment}
        userName={userName}
        userEmail={userEmail}
      />
    </>
  );
};

export default BestDealGet;
