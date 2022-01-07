import styled from "@emotion/styled";
import theme from "../../../../../commons/styles/variables";

export const SubNavigationList = styled.ul`
  width: 100%;
  max-width: 1440px;
  height: 100%;
  margin: 0 auto;
  text-align: center;
  border-bottom: 1px solid #ebebeb;

  li {
    display: inline-block;

    button {
      position: relative;
      padding: 15px 35px;

      &::before {
        content: "";
        position: absolute;
        top: 50%;
        right: 0;
        width: 1px;
        height: 50%;
        transform: translateY(-50%);
        background: #ebebeb;
      }

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

    &:last-child {
      button {
        &::before {
          display: none;
        }
      }
    }
  }
`;
