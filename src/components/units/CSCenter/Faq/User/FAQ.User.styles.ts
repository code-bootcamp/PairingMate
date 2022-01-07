import styled from "@emotion/styled";
import theme from "../../../../../commons/styles/variables";
import { AngleUp } from "@emotion-icons/fa-solid";

export const Title = styled.h1`
  margin-bottom: ${theme.MarginBottom.mb40};
  text-align: center;
  font-size: ${theme.fontsize.fs40};
`;
export const AccodianList = styled.ul`
  width: 100%;
  height: 100%;
  padding: 30px 0;

  li {
    position: relative;
    padding: 30px 20px;
    border: 1px solid #ebebeb;
    border-bottom: 0;
    height: 0;

    &:last-child {
      border-bottom: 1px solid #ebebeb;
    }

    h3 {
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
      padding: 15px 20px;
      cursor: pointer;
    }

    div {
      height: 0;
      padding-top: 50px;
      opacity: 0;
    }

    &.active {
      height: 100%;

      svg {
        top: 20px;
        transform: translateY(0%) rotate(180deg);
      }

      div {
        height: 100%;
        opacity: 1;
        transition: 0.5s;
      }

      h3 {
        top: 10px;
        transform: translateY(0%);
      }
    }
  }
`;

export const Arrow = styled(AngleUp)`
  position: absolute;
  top: 50%;
  right: 15px;
  width: 30px;
  height: 25px;
  transform: translateY(-50%);
  color: #333;
`;
