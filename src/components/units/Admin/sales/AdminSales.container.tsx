import { collection, getDocs, getFirestore } from "@firebase/firestore";
import { useEffect, useState } from "react";
import { app } from "../../../../../pages/_app";
import AdminSalesUI from "./AdminSales.presenter";

const AdminSales = () => {
  const db = getFirestore(app);
  const [buylist, setBuyList] = useState([]);
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
    onLoadGetBuyList();
  }, []);

  return (
    <>
      <AdminSalesUI buylist={buylist} />
    </>
  );
};

export default AdminSales;
