import { Inner } from "../../../../commons/styles/common";
import * as P from "./Partner.styles";

const PartnerUI = () => {
  return (
    <Inner>
      <P.Title>파트너 문의</P.Title>
      <P.InquiryHeader>
        <figure>
          <p>
            <img src="/images/sub/cs-center/img_partner_inquiry.jpg" alt="" />
          </p>
        </figure>
        <article>
          <P.ArticleTitle>
            어서오세요 <span>Mate</span>님!
          </P.ArticleTitle>
          <P.ArticleConts>
            PairingMate와 함께,
            <br />
            Mate님의 비즈니스를 밝혀보세요!
          </P.ArticleConts>
          <P.ArticleConts2>
            회원고객 유치에 최선을 다해드립니다.
            <br />
            문의를 남겨주시면 빠른 시일 내에 답변드리겠습니다
          </P.ArticleConts2>
        </article>
      </P.InquiryHeader>
      <P.Grid>
        <div>
          <p>
            <input type="text" placeholder="회사명 *" />
          </p>
          <p>
            <input type="text" placeholder="이름 *" />
          </p>
          <p>
            <input type="text" placeholder="직급 *" />
          </p>
          <p>
            <input type="text" placeholder="연락처 *" />
          </p>
          <p>
            <input type="text" placeholder="이메일 *" />
          </p>
        </div>
        <div>
          <P.TextArea>
            <textarea placeholder="문의사항을 입력해주세요 :) " />
          </P.TextArea>
        </div>
      </P.Grid>
      <P.ButtonWrap>
        <button>문의하기</button>
      </P.ButtonWrap>
    </Inner>
  );
};

export default PartnerUI;
