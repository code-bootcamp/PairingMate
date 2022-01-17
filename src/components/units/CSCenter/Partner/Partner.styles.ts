import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";
import { IButtonActiveProps } from "./Partner.types";

export const InquiryHeader = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  figure {
    width: 50%;
    padding: 0 20px;

    p {
      img {
        display: block;
        width: 100%;
      }
    }
  }

  article {
    align-self: center;
    width: 50%;
    padding: 0 20px;
  }

  @media all and ${theme.tablet} {
    figure,
    article {
      width: 100%;
    }
  }
`;

export const Title = styled.h2`
  padding-bottom: ${theme.PaddingBottom.pb100};
  text-align: center;
  font-size: ${theme.fontsize.fs40};
  font-weight: bold;

  @media all and ${theme.tablet} {
    padding-bottom: ${theme.PaddingBottom.pb50};
    font-size: ${theme.fontsize.fs28};
  }
`;

export const ArticleTitle = styled.h3`
  line-height: 1.75;
  font-size: ${theme.fontsize.fs35};
  font-weight: 500;

  span {
    font-weight: 700;
    color: ${theme.colorBase};
  }

  @media all and ${theme.tablet} {
    padding-top: ${theme.PaddingTop.pt30};
  }
`;

export const ArticleConts = styled.p`
  padding-top: ${theme.PaddingTop.pt20};
  line-height: 1.3;
  font-size: ${theme.fontsize.fs24};
`;
export const ArticleConts2 = styled.p`
  padding-top: ${theme.PaddingTop.pt20};
  line-height: 1.3;
  font-size: ${theme.fontsize.fs16};
`;

export const Grid = styled.section`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;
  padding-top: ${theme.PaddingTop.pt50};
  div {
    width: 50%;
    padding: 0 20px;

    p {
      padding: 10px 0;

      input {
        width: 100%;
        height: 45px;
        text-indent: 10px;
        border: 1px solid #ebebeb;
      }
    }

    textarea {
      width: 100%;
      height: 100%;
      border: 1px solid #ebebeb;
      padding: 20px;
    }

    @media all and ${theme.tablet} {
      width: 100%;

      textarea {
        min-height: 350px;
      }
    }
  }
`;

export const TextArea = styled.p`
  width: 100%;
  height: 100%;
`;

export const ButtonWrap = styled.p`
  padding: 30px 0;
  text-align: center;

  button {
    width: 250px;
    height: 45px;
    background: ${(props: IButtonActiveProps) =>
      props.isChanged ? `${theme.colorBase}` : "#ebebeb"};
    pointer-events: ${(props: IButtonActiveProps) =>
      props.isChanged ? "cursor" : "none"};
    color: ${(props: IButtonActiveProps) =>
      props.isChanged ? "#fff" : "#333"};
  }
`;
