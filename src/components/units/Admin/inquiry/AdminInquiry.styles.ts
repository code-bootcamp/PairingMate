import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const AdminContentsWrap = styled.section`
  width: 85%;
  height: 100vh;
  overflow-y: scroll;
  background-color: #f7f7f7;
`;
export const AdminInquirySection = styled.section`
  padding: 30px 0;
`;
export const SectionTitle = styled.h2`
  font-weight: bold;
`;

export const CompanyInquiry = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: ${theme.MarginTop.mt30};

  li {
    width: 25%;
    margin-bottom: 20px;

    > div {
      position: relative;
      height: 100%;
      padding: 25px 20px 25px 40px;
      background-color: #fff;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 100%;
        background-color: ${theme.colorBase};
      }
    }
  }
`;

export const CompanyName = styled.h6`
  padding-bottom: ${theme.PaddingBottom.pb20};
  font-size: ${theme.fontsize.fs20};
`;

export const InquiryContents = styled.div``;
export const CompanyAsk = styled.p`
  display: inline-block;
  width: calc(100% - 160px);
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const ReplyBtn = styled.button`
  display: inline-block;
  width: 140px;
  height: 30px;
  margin-left: 20px;
  background: #ddd;
`;

export const UserReport = styled.ul`
  width: 100%;
  margin-top: ${theme.MarginTop.mt30};

  li {
    width: 100%;
    margin-bottom: 20px;

    > div {
      position: relative;
      height: 100%;
      padding: 25px 20px 25px 40px;
      background-color: #fff;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 100%;
        background-color: ${theme.colorBase};
      }
    }
  }
`;

export const UserName = styled.h6`
  padding-bottom: ${theme.PaddingBottom.pb10};
  font-size: ${theme.fontsize.fs20};
`;

export const ReportedUser = styled.span`
  display: block;
  font-size: ${theme.fontsize.fs20};
  color: red;
  padding-bottom: ${theme.PaddingBottom.pb20};
`;

export const UserContents = styled.div`
  display: flex;
  align-items: center;
  padding: 0 !important;
`;
export const UserReportContents = styled.p`
  display: inline-block;
  width: calc(100% - 160px);
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const FAQList = styled.ul`
  width: 100%;
  margin-top: ${theme.MarginTop.mt30};

  li {
    width: 100%;
    margin-bottom: 20px;

    > div {
      position: relative;
      height: 100%;
      padding: 25px 20px 25px 40px;
      background-color: #fff;
      &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 10px;
        height: 100%;
        background-color: ${theme.colorBase};
      }
    }
  }
`;

export const FAQTitle = styled.h6`
  padding-bottom: ${theme.PaddingBottom.pb10};
  font-size: ${theme.fontsize.fs20};
`;

export const FAQContentswrap = styled.div`
  display: flex;
  align-items: center;
  padding: 0 !important;
`;
export const FAQContents = styled.p`
  display: inline-block;
  width: calc(100% - 160px);
  height: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
