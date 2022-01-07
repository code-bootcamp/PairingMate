import { Inner } from "../../../../../commons/styles/common";
import { IFAQProps } from "./FAQ.User.types";
import * as F from "./FAQ.User.styles";

const FAQUserUI = (props: IFAQProps) => {
  return (
    <>
      <Inner>
        <F.Title>자주 묻는 질문</F.Title>
        <F.AccodianList className="accodian">
          <li onClick={props.onClickToggleAccodian}>
            <F.Arrow />
            <h3>회원 탈퇴는 어떻게 하나요?</h3>
            <div>
              안녕하세요 Mate님 문의 주시면 탈퇴처리 해드리겠습니다.안녕하세요
              Mate님 문의 주시면 탈퇴처리 해드리겠습니다.안녕하세요 Mate님 문의
              주시면 탈퇴처리 해드리겠습니다.안녕하세요 Mate님 문의 주시면
              탈퇴처리 해드리겠습니다.안녕하세요 Mate님 문의 주시면 탈퇴처리
              해드리겠습니다.안녕하세요 Mate님 문의 주시면 탈퇴처리
              해드리겠습니다.안녕하세요 Mate님 문의 주시면 탈퇴처리
              해드리겠습니다.안녕하세요 Mate님 문의 주시면 탈퇴처리
              해드리겠습니다.안녕하세요 Mate님 문의 주시면 탈퇴처리
              해드리겠습니다.안녕하세요 Mate님 문의 주시면 탈퇴처리
              해드리겠습니다.안녕하세요 Mate님 문의 주시면 탈퇴처리
              해드리겠습니다.안녕하세요 Mate님 문의 주시면 탈퇴처리
              해드리겠습니다.
            </div>
          </li>
          <li onClick={props.onClickToggleAccodian}>
            <F.Arrow />
            <h3>회원 탈퇴는 어떻게 하나요?2</h3>
            <div>안녕하세요 Mate님! 탈퇴하지말아주세요 ㅠㅠ</div>
          </li>
        </F.AccodianList>
      </Inner>
    </>
  );
};

export default FAQUserUI;
