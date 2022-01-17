import { Times } from "@emotion-icons/fa-solid";
import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";
import { IWriteToggleButtonProps } from "./Admininquiry.types";

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

export const CompanyInquiryModal = styled.div`
  position: relative;
  padding: 50px 30px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: ${theme.colorBase};
  }
`;
export const ModalCompanyName = styled.h2`
  padding: 20px 0;
  font-size: ${theme.fontsize.fs30};
`;

export const ModalInquiryContents = styled.div`
  padding: 20px 30px;
  border: 1px solid #ebebeb;
  line-height: 1.8;
`;
export const InquiryContents = styled.div``;

export const CompanyName = styled.h6`
  padding-bottom: ${theme.PaddingBottom.pb20};
  font-size: ${theme.fontsize.fs20};
`;

export const JobTitle = styled.p`
  padding: 10px 0;
  font-size: ${theme.fontsize.fs18};

  strong {
    margin-right: 5px;
    font-weight: bold;
  }
`;

export const ContactInfo = styled.p`
  padding: 10px 0;
  font-size: ${theme.fontsize.fs18};
  span {
    margin-right: 5px;
    font-weight: bold;
  }
`;

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

export const CloseButton = styled.button`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 40px;
  height: 40px;
`;

export const CloseIco = styled(Times)`
  width: 30px;
  height: 30px;
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

export const ToggleWriteContainer = styled.div`
  width: 100%;
  height: ${(props: IWriteToggleButtonProps) =>
    !props.isToggle ? "0px" : "840px"};
  overflow: ${(props: IWriteToggleButtonProps) =>
    !props.isToggle ? "hidden" : "visible"};
  opacity: ${(props: IWriteToggleButtonProps) => (!props.isToggle ? "0" : "1")};
  padding: 40px 30px;
  background-color: #fff;
  transition: 1s;
  h2 {
    text-align: center;
    padding-bottom: ${theme.PaddingBottom.pb40};
  }
  p {
    margin-bottom: ${theme.MarginBottom.mb20};
    label {
      display: block;
      width: 150px;
      margin-bottom: ${theme.MarginBottom.mb20};

      font-size: ${theme.fontsize.fs20};
    }
    input,
    textarea {
      width: 100%;
      border: 1px solid #ebebeb;
    }
    input {
      height: 50px;
      text-indent: 20px;
    }
    textarea {
      min-height: 450px;
      padding: 20px 0;
      text-indent: 20px;
    }
  }
  button {
    width: 150px;
    height: 45px;
    margin-top: ${theme.MarginTop.mt20};
    background-color: ${theme.colorBase};
    color: #fff;
    opacity: ${(props: IWriteToggleButtonProps) =>
      !props.isToggle ? "0" : "1"};
    transition: 1s;
  }
`;

export const WriteButtonWrap = styled.p`
  width: 100%;
  text-align: center;

  button {
    width: 150px;
    height: 45px;
    margin-top: ${theme.MarginTop.mt20};
    background-color: ${theme.colorBase};
    color: #fff;
  }
`;
