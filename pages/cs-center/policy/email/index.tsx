import { Inner } from "../../../../src/commons/styles/common";

import styled from "@emotion/styled";
import theme from "../../../../src/commons/styles/variables";

const EmailArticle = styled.article`
  padding-top: ${theme.PaddingTop.pt40};
  line-height: 1.5;
  font-size: ${theme.fontsize.fs20};
`;

const EmailPolicy = () => {
  return (
    <>
      <Inner>
        <h1>이메일 무단수집 거부</h1>

        <EmailArticle>
          이메일 무단수집 거부 본 웹사이트는 게시된 이메일 주소가 전자우편 수집
          프로그램이나 그 밖의 기술적 장치를 이용하여 무단 수집되는 것을
          거부합니다. <br />
          이를 위반 시 [정보통신망 이용촉진 및 정보보호 등에 관한 법률]등에 의해
          처벌 받을 수 있습니다.
        </EmailArticle>
      </Inner>
    </>
  );
};

export default EmailPolicy;
