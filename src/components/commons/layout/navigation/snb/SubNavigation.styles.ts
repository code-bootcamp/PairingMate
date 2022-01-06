import styled from "@emotion/styled";
import theme from "../../../../../commons/styles/variables";

export const SubNavigationList = styled.ul`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  text-align: center;

  li {
    display: inline-block;
    padding: 10px 15px;

    button {
      position: relative;
      padding-bottom: ${theme.PaddingBottom.pb10};

      &::after {
        content: "";
        position: absolute;
        bottom: 0px;
        left: 0;
        width: 0%;
        height: 2px;
        background-color: ${theme.colorBase};
        transition: 0.5s;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }
`;
