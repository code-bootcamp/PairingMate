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
  const [buylist, setBuyList] = useState([]);
  const onLoadGetDocs = async () => {
    const querySnapshot = await getDocs(collection(db, "partnerInquiry"));
    querySnapshot.docs.map((el: QueryDocumentSnapshot<DocumentData>) =>
      setData((prev) => [...(prev || []), el.data()])
    );
  };

  const onLoadGetBuyList = async () => {
    const userEmail = localStorage.getItem("email");
    if (userEmail) {
      const newData = [];
      const buylistRef = collection(db, "payments");
      const querySnapshot = await getDocs(buylistRef);
      // querySnapshot.docs.map((el) => seyBuyList(el.data()));
      querySnapshot.docs.map((el) => newData.push(el.data()));
      setBuyList(newData);
    }
  };

  useEffect(() => {
    onLoadGetDocs();
    onLoadGetBuyList();
  }, []);

  return <AdminPageUI data={data} buylist={buylist} />;
};
export default Admin;
