import { useCallback, useRef, useState } from "react";
import { Inner } from "../../../../../commons/styles/common";
import { AccodianList } from "./FAQ.User.styles";

const FAQUserUI = () => {
  return (
    <>
      <Inner>
        <h1>고객센터</h1>
        <AccodianList>
          <li>
            <h3>회원 탈퇴는 어떻게 하나요?</h3>
            <div>안녕하세요 Mate님! 탈퇴하지말아주세요 ㅠㅠ</div>
          </li>
        </AccodianList>
      </Inner>
    </>
  );
};

export default FAQUserUI;
