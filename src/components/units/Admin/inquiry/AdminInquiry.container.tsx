import {
  getDocs,
  collection,
  getFirestore,
  QueryDocumentSnapshot,
  DocumentData,
} from "@firebase/firestore";
import { useState, useEffect } from "react";
import { app } from "../../../../../pages/_app";
import AdminInquiryUI from "./AdminInquiry.presenter";

const AdminInquiry = () => {
  const db = getFirestore(app);
  const [data, setData] = useState<DocumentData[]>();
  const onLoadGetDocs = async () => {
    const querySnapshot = await getDocs(collection(db, "partnerinquiry"));
    querySnapshot.docs.map((el: QueryDocumentSnapshot<DocumentData>) =>
      setData((prev) => [...(prev || []), el.data()])
    );
  };

  useEffect(() => {
    onLoadGetDocs();
  }, []);
  return (
    <>
      <AdminInquiryUI data={data} />
    </>
  );
};

export default AdminInquiry;
