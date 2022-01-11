// Css 작성
import styled from "@emotion/styled";
import theme from "../../../commons/styles/variables";

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const AdminContentsWrap = styled.section`
  width: 80%;
  background-color: #ebebeb;
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
        padding: 30px;

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
      }
    }
  }
`;

export const Subtitle = styled.h4`
  font-size: ${theme.fontsize.fs24};
  color: ${theme.fontColorBase};
`;
