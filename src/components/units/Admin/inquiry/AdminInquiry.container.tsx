import {
  getDocs,
  collection,
  getFirestore,
  QueryDocumentSnapshot,
  DocumentData,
  addDoc,
  doc,
  Firestore,
  documentId,
  DocumentSnapshot,
  updateDoc,
  deleteDoc,
} from "@firebase/firestore";
import { Hidden } from "@material-ui/core";
import { Modal } from "antd";
import { OmitProps } from "antd/lib/transfer/ListBody";
import { useState, useEffect, ChangeEvent } from "react";
import { app } from "../../../../../pages/_app";
import ToggleContent from "../../../commons/modal/toggleContents";
import AdminInquiryUI from "./AdminInquiry.presenter";

const AdminInquiry = ({ setIsShown }) => {
  const db = getFirestore(app);
  const [isToggle, setIsToggle] = useState(false);
  const [temp, setTemp] = useState(null);
  const [docId, setDocId] = useState("");
  const [data, setData] = useState<DocumentData[]>();
  const [faqResultData, setFagResultData] = useState<DocumentData[]>();
  const [faqData, setFaqData] = useState({
    id: "",
    title: "",
    contents: "",
  });
  const onLoadGetDocs = async () => {
    const querySnapshot = await getDocs(collection(db, "partnerinquiry"));
    querySnapshot.docs.map((el: QueryDocumentSnapshot<DocumentData>) =>
      setData((prev) => [...(prev || []), el.data()])
    );
  };

  const onLoadGetFaqDocs = async () => {
    const querySnapshot = await getDocs(collection(db, "FAQ"));
    const postData = [];
    querySnapshot.forEach((doc) => {
      postData.push({ ...doc.data(), id: doc.id });
      setDocId(doc.id);
      setFagResultData(postData);
    });
  };

  const onChangeFAQ = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFaqData({ ...faqData, [name]: value });
  };

  const onClickWriteFaq = async () => {
    try {
      const result = await addDoc(collection(db, "FAQ"), {
        title: faqData.title,
        contents: faqData.contents,
      });
      Modal.success({ title: "게시글이 정상적으로 등록되었습니다." });
      onLoadGetFaqDocs();
      setTimeout(() => {
        location.reload();
      }, 1000);
    } catch (error) {
      Modal.error({ title: "게시글 등록에 실패하였습니다." });
    }
  };

  const onClickToggleWrite = () => {
    setIsToggle(!isToggle);
  };

  const onClickDeleteFaq = async () => {
    try {
      await deleteDoc(doc(db, "FAQ", docId));
      Modal.success({ title: "게시물 삭제에 성공하셨습니다" });
      onLoadGetFaqDocs();
    } catch (error) {
      Modal.error({ title: "게시물 삭제에 실패하였습니다." });
    }
  };

  useEffect(() => {
    onLoadGetDocs();
    onLoadGetFaqDocs();
  }, []);
  return (
    <>
      <AdminInquiryUI
        data={data}
        faqResultData={faqResultData}
        onChangeFAQ={onChangeFAQ}
        onClickWriteFaq={onClickWriteFaq}
        onClickDeleteFaq={onClickDeleteFaq}
        onClickToggleWrite={onClickToggleWrite}
        isToggle={isToggle}
      />
    </>
  );
};

export default AdminInquiry;
