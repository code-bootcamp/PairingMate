import styled from "@emotion/styled";
import theme from "../../../../../commons/styles/variables";

export const MainBannerWrap = styled.section`
  height: 100%;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.2);
  }

  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;

    @media screen and (max-width: 1920px) {
      height: 100%;
    }
  }
`;
