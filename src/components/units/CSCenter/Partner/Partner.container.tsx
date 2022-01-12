import { doc, getFirestore, addDoc } from "@firebase/firestore";
import { collection } from "firebase/firestore";
import { ChangeEvent, HTMLInputTypeAttribute, useState } from "react";
import { app } from "../../../../../pages/_app";
import PartnerUI from "./Partner.presenter";

const Partner = () => {
  const [data, setData] = useState({
    companyname: "",
    name: "",
    jobtitle: "",
    contact: "",
    email: "",
    contents: "",
  });

  const onChangeInputs = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };
  console.log(data);
  const db = getFirestore(app);

  const onClickSendInquiry = async () => {
    const result = await addDoc(collection(db, "partnerinquiry"), {
      companyName: data.companyname,
      name: data.name,
      jobtitle: data.jobtitle,
      contact: data.contact,
      email: data.email,
      contents: data.contents,
    });
    console.log("result : ", result);
  };

  return (
    <PartnerUI
      onChangeInputs={onChangeInputs}
      onClickSendInquiry={onClickSendInquiry}
    />
  );
};

export default Partner;
