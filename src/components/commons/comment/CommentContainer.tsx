import { onAuthStateChanged } from "firebase/auth";
import {
  addDoc,
  collection,
  getDocs,
  getFirestore,
  query,
  Timestamp,
  where,
} from "firebase/firestore";
import { ChangeEvent, useState } from "react";
import { app, auth } from "../../../../pages/_app";
import CommentsUI from "./CommentPresenter";

const Comments = (props: any) => {
  const [content, setContent] = useState("");
  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userImage, setUserimage] = useState("");

  const onChangeContent = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
  };

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
      querySnapshot.docs.map((el) => setUserimage(el.data().image));
    }
  });

  const onClickAddComment = async () => {
    try {
      await addDoc(collection(db, "comments"), {
        productId: props.data?.fetchUseditem._id,
        writer: {
          name: userName,
          email: userEmail,
          image: userImage,
        },
        content: content,
        createdAt: Timestamp.fromDate(new Date()),
      });
      alert("댓글등록에 성공하였습니다");
    } catch (error) {
      alert("댓글등록에 실패하였습니다");
    }
  };

  return (
    <>
      <CommentsUI
        onClickAddComment={onClickAddComment}
        onChangeContent={onChangeContent}
        userImage={userImage}
      />
    </>
  );
};
export default Comments;
