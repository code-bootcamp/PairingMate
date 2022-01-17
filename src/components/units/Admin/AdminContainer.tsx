import {
  collection,
  DocumentData,
  getDocs,
  getFirestore,
  QueryDocumentSnapshot,
} from "@firebase/firestore";
import { useEffect, useState } from "react";
import { app } from "../../../../pages/_app";
import AdminPageUI from "./AdminPresenter";

const Admin = () => {
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

  return <AdminPageUI data={data} />;
};
export default Admin;
