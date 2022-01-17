import { doc, getFirestore, addDoc } from "@firebase/firestore";
import { Modal } from "antd";
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
  const [isChanged, setIsChanged] = useState(false);

  const onChangeInputs = (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
    if (
      data.companyname &&
      data.contact &&
      data.jobtitle &&
      data.contact &&
      data.email &&
      data.contents &&
      data.name !== ""
    ) {
      setIsChanged(true);
    }
  };

  const db = getFirestore(app);

  const onClickSendInquiry = async () => {
    try {
      const result = await addDoc(collection(db, "partnerInquiry"), {
        companyName: data.companyname,
        name: data.name,
        jobtitle: data.jobtitle,
        contact: data.contact,
        email: data.email,
        contents: data.contents,
      });
      Modal.success({
        title: `${data?.companyname}님! 문의글 작성이 완료되었습니다.`,
        content:
          "빠른 시일내에 답변 드리겠습니다 PairingMate에 문의 남겨주셔서 감사합니다!",
      });
    } catch (error) {
      Modal.error({ title: "게시글 등록에 실패하셨습니다." });
    }
  };

  return (
    <PartnerUI
      onChangeInputs={onChangeInputs}
      onClickSendInquiry={onClickSendInquiry}
      isChanged={isChanged}
    />
  );
};

export default Partner;
