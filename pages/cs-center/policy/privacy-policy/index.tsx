import { Inner } from "../../../../src/commons/styles/common";
import styled from "@emotion/styled";
import theme from "../../../../src/commons/styles/variables";

const PrivacyPolicyArticle = styled.article`
  padding: 30px 0;
  line-height: 1.75;
  font-size: ${theme.fontsize.fs20};
`;
const PrivacyPolicy = () => {
  return (
    <Inner>
      <h1>개인정보 취급방침</h1>
      <PrivacyPolicyArticle>
        ‘PairingMate’ 는 개인정보보호법에 따라 이용자의 개인정보 보호 및 권익을
        보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록
        다음과 같은 처리방침을 두고 있습니다. <br />
        ‘PairingMate’ 은 회사는 개인정보처리방침을 개정하는 경우 웹사이트
        공지사항(또는 개별공지)을 통하여 공지할 것입니다. <br />
        -본 방침은 2022년 01월 07일부터 시행됩니다.
        <br />
        ‘PairingMate’ 은 개인정보를 다음의 목적을 위해 처리합니다. 처리한
        개인정보는 다음의 목적이외의 용도로는 사용되지 않으며 이용 목적이 변경될
        시에는 사전 동의를 구할 예정입니다. <br />
        <br />
        회원 가입의사 확인, 회원제 <br />
        <br />
        가. 홈페이지 회원가입 및 관리 서비스 제공에 따른 본인 식별·인증,
        회원자격 유지·관리, 제한적 본인확인제 시행에 따른 본인확인, 서비스
        부정이용 방지, 만14세 미만 아동 개인정보 수집 시 법정대리인 동의 여부
        확인, 각종 고지·통지, 고충처리, 분쟁 조정을 위한 기록 보존 등을 목적으로
        개인정보를 처리합니다. <br />
        <br />
        나. 민원사무 처리 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한
        연락·통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다. <br />
        <br />
        다. 재화 또는 서비스 제공 서비스 제공, 청구서 발송, 콘텐츠 제공, 맞춤
        서비스 제공, 본인인증, 연령인증, 요금결제·정산, 채권추심 등을 목적으로
        개인정보를 처리합니다. <br />
        <br />
        라. 마케팅 및 광고에의 활용 신규 서비스(제품) 개발 및 맞춤 서비스 제공,
        이벤트 및 광고성 정보 제공 및 참여기회 제공 , 인구통계학적 특성에 따른
        서비스 제공 및 광고 게재 , 서비스의 유효성 확인, 접속빈도 파악 또는
        회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.
      </PrivacyPolicyArticle>
    </Inner>
  );
};

export default PrivacyPolicy;
