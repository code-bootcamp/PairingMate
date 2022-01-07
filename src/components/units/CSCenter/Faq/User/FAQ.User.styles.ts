import styled from "@emotion/styled";
import theme from "../../../../../commons/styles/variables";

export const Title = styled.h1`
  text-align: center;
  font-size: ${theme.fontsize.fs40};
`;
export const AccodianList = styled.ul`
  width: 100%;
  height: 100%;
  padding: 30px 0;

  li {
    padding: 15px 20px;
    border: 1px solid #ebebeb;

    div {
      display: none;
      height: 0;
      opacity: 0;
    }

    &.active {
      div {
        display: block;
        height: 100%;
        opacity: 1;
        transition: 0.5s;
      }
    }
  }
`;
