import styled from "@emotion/styled";
import theme from "../../../commons/styles/variables";

export const TabTitleList = styled.ul``;

export const TabTitle = styled.li<{ isActive: boolean }>`
    display: inline-block;

    button {
      position: relative;
      padding: 10px 15px;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        width: ${(props: any) => (!props.isActive ? "0px" : "80%")};
        height: 2px;
        background: ${theme.colorBase};
        transform: translateX(-50%);
        transition: 0.5s;
      }
    }
    &:hover {
      button {
        &::after {
          left: 50%;
          width: 80%;
          transform: translateX(-50%);
          transition: 0.5s;
        }
      }
    }
  }
`;
