import { useState } from "react";
import CommonModalUI from "./commonModal.presenter";

const CommonModal = ({ isOpen, contents }) => {
  return (
    <>
      <CommonModalUI isOpen={isOpen} contents={contents} />
    </>
  );
};

export default CommonModal;
