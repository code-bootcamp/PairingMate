import { fullpageArrowsProps } from "../button.types";
import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";
import { keyframes } from "@emotion/react";

const ArrowBouncing = keyframes`
0%,
20%,
50%,
80%,
100% {
    transform: translateY(0) rotate(90deg);
}

40% {
    transform: translateY(-30px) rotate(90deg);
}

60% {
    transform: translateY(-15px) rotate(90deg);
}

`;
const Arrows = styled.p`
  position: absolute;
  top: 50%;
  right: 50px;
  z-index: 9999;
  transform: rotate(90deg);
  font-size: ${theme.fontsize.fs16};
  color: #fff;
  animation: ${ArrowBouncing} 2s ease-in infinite;
  &::before {
    content: "";
    position: absolute;
    bottom: 10px;
    right: 20%;
    width: 45px;
    height: 80px;
    background-image: url("/images/main/ico_banner_arrow.png");
    background-repeat: no-repeat;
    background-size: contain;
    transform: rotate(-90deg);
  }
`;
const FullpageArrows = (props: fullpageArrowsProps) => {
  return (
    <>
      <Arrows>{props.name}</Arrows>
    </>
  );
};

export default FullpageArrows;
