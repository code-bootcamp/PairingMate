import {
  getDocs,
  collection,
  getFirestore,
  QueryDocumentSnapshot,
  DocumentData,
} from "@firebase/firestore";
import AdminUserUI from "./AdminUser.presenter";
import { useEffect, useState } from "react";
import { app } from "../../../../../pages/_app";

const AdminUser = () => {
  const db = getFirestore(app);
  const [data, setData] = useState<DocumentData[]>();
  const onLoadGetDocs = async () => {
    const querySnapshot = await getDocs(collection(db, "users"));
    querySnapshot.docs.map((el: QueryDocumentSnapshot<DocumentData>) =>
      setData((prev) => [...(prev || []), el.data()])
    );
  };

  useEffect(() => {
    onLoadGetDocs();
  }, []);

  return (
    <>
      <AdminUserUI data={data} />
    </>
  );
};

export default AdminUser;
