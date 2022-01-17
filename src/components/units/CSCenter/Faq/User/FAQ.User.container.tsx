import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
  QueryDocumentSnapshot,
} from "@firebase/firestore";
import { useEffect, useState } from "react";
import { app } from "../../../../../../pages/_app";
import FAQUserUI from "./FAQ.User.presenter";

const FAQUser = () => {
  const [faqResultData, setFagResultData] = useState<DocumentData[]>();
  const db = getFirestore(app);
  const onClickToggleAccodian = (event: any) => {
    const current = event.currentTarget;
    const chkActive = current.classList.value.indexOf("active");
    check();

    if (chkActive === -1) {
      current.classList.add("active");
    }
  };
  const check = () => {
    const checkitem = document.getElementsByClassName("accodian");
    for (let i = 0; i < checkitem[0].children.length; i++) {
      checkitem[0].children[i].classList.remove("active");
    }
  };
  const onLoadGetFaqDocs = async () => {
    const querySnapshot = await getDocs(collection(db, "FAQ"));
    querySnapshot.docs.map((el: QueryDocumentSnapshot<DocumentData>) =>
      setFagResultData((prev) => [...(prev || []), el.data()])
    );
    console.log(faqResultData);
  };

  useEffect(() => {
    onLoadGetFaqDocs();
  }, []);

  return (
    <>
      <FAQUserUI
        onClickToggleAccodian={onClickToggleAccodian}
        faqResultData={faqResultData}
      />
    </>
  );
};

export default FAQUser;
