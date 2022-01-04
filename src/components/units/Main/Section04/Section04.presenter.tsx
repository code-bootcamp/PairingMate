import { Inner } from "../../../../commons/styles/common";
import * as MS4 from "./Section04.styles";

const MainSection04UI = () => {
  return (
    <>
      <MS4.PartnerSection>
        <Inner>
          <MS4.TextWrap>
            <MS4.PartnerTitle>파트너 문의</MS4.PartnerTitle>
            <MS4.PartnerDesc>PairingMate의 파트너를 찾습니다</MS4.PartnerDesc>
            <MS4.CircleButton>파트너 문의하기</MS4.CircleButton>
          </MS4.TextWrap>
        </Inner>
      </MS4.PartnerSection>
    </>
  );
};

export default MainSection04UI;
