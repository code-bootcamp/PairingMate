// Css 작성
import styled from "@emotion/styled";
import theme from "../../../commons/styles/variables";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const AdminContentsWrap = styled.section`
  width: 80%;
  height: 100vh;
  overflow-y: scroll;
  background-color: #f7f7f7;
`;

export const SectionTitle = styled.h2`
  font-weight: bold;
`;

export const UserSection = styled.section`
  width: 100%;
  padding: 30px 0;

  ul {
    padding-top: ${theme.PaddingTop.pt20};
    display: flex;
    margin: 0 -20px;

    li {
      width: 50%;
      padding: 0 20px;

      figure {
        position: relative;
        min-height: 250px;
        padding: 30px 40px;

        border: 1px solid #f7f7f7;
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

        figcaption {
          padding: 25px 0;
        }

        button {
          width: 140px;
          height: 40px;
          margin-top: ${theme.MarginTop.mt40};
          background-color: #ebebeb;
        }
      }
    }
  }
`;

export const IcoWrap = styled.i`
  position: absolute;
  top: 50%;
  right: 30px;
  transform: translateY(-50%);
  width: 150px;
  height: 150px;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const Subtitle = styled.h4`
  font-size: ${theme.fontsize.fs24};
  color: ${theme.fontColorBase};
`;

export const UserCount = styled.h6`
  font-size: ${theme.fontsize.fs50};
  font-weight: bold;
  color: ${theme.colorBase};

  span {
    font-size: ${theme.fontsize.fs50};
  }
`;

export const InquirySection = styled.section`
  padding: 30px 0;

  article {
    padding: 40px 0;
  }
`;

export const CompanyInquiry = styled.ul`
  width: 100%;
  margin-top: ${theme.MarginTop.mt30};

  li {
    width: 100%;
    margin-bottom: 20px;

    &:nth-of-type(n + 6) {
      display: none;
    }

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

export const InquiryContents = styled.div`
  display: flex;
  align-items: center;
  padding: 0 !important;
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

export const SalesSection = styled.section`
  padding: 30px 0;
`;

export const SalseTableWrap = styled.div`
  padding-top: ${theme.PaddingTop.pt30};
  table {
    width: 100%;

    thead {
      tr {
        th {
          padding: 10px;
          background-color: #ddd;
        }
      }
    }

    tbody {
      tr {
        td {
          padding: 10px;
          border: 1px solid #ebebeb;
          text-align: center;
        }
      }
    }
  }
`;
