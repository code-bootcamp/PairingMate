import { Modal } from "antd";
import { onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  DocumentData,
  getDocs,
  getFirestore,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { ChangeEvent, useEffect, useState } from "react";
import { app, auth } from "../../../../pages/_app";
import CommentsUI from "./CommentPresenter";

const Comments = (props: any) => {
  const [content, setContent] = useState("");
  const [userImage, setUserImage] = useState("");
  const [value, setValue] = useState([]);

  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };
  const db = getFirestore(app);
  // 댓글에 필요한 값과 현재 접속중인 유저의 이미지 값을 가져온다.
  useEffect(() => {
    getComments();
    setUserImage(localStorage.getItem("image"));
  }, []);
  // 가져오는 로직
  const getComments = async () => {
    const userRef = collection(db, "comments");
    const q = query(
      userRef,
      where("productId", "==", props.data?.fetchUseditem._id)
    );
    const querySnapshot = await getDocs(q);
    // console.log(querySnapshot.docs);
    // querySnapshot.docs.map((el) => setValue(el.data()));
    // querySnapshot.docs.map((el) => console.log(el.data()));
    const newValue = [];
    querySnapshot.docs.map((el) => newValue.push(el.data()));
    setValue(newValue);
  };
  // getComments();
  // console.log(value);
  const onClickAddComment = async () => {
    try {
      if (content === "") {
        Modal.error({ content: "내용을 입력해주세요" });
        return;
      }
      await addDoc(collection(db, "comments"), {
        productId: props.data?.fetchUseditem._id,
        writer: {
          name: props.userName,
          email: props.userEmail,
          image: userImage,
        },
        content: content,
        createdAt: Timestamp.fromDate(new Date()),
      });
      Modal.success({ content: "댓글등록에 성공하였습니다" });
    } catch (error) {
      Modal.error({ content: "댓글등록에 성공하였습니다" });
    }
  };

  return (
    <>
      <CommentsUI
        onClickAddComment={onClickAddComment}
        onChangeContent={onChangeContent}
        value={value}
      />
    </>
  );
};
export default Comments;