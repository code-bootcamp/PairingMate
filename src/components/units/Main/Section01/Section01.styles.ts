import theme from "../../../../commons/styles/variables";
import styled from "@emotion/styled";

export const SectionBg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  width: 100%;
  height: 100%;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    min-height: 500px;
    max-height: 500px;
    background-image: url(/images/main/bg_findmates_section.png);
    background-repeat: no-repeat;
    background-size: 50%;
    background-position: bottom right;
    opacity: 0.5;
  }
`;
export const TextWrap = styled.div`
  padding: 50px 0;
  text-align: center;

  @media all and ${theme.laptop} {
    padding: 25px 0;
  }
`;
export const title = styled.h2`
  display: block;
  text-align: center;
  font-size: ${theme.fontsize.fs35};
`;

export const subtitle = styled.span`
  position: relative;
  display: block;
  padding-top: ${theme.PaddingTop.pt60};
  padding-bottom: ${theme.PaddingBottom.pb40};
  font-size: ${theme.fontsize.fs18};

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 40px;
    background-color: #333;
  }
`;

export const TextDesc = styled.p`
  padding-top: ${theme.PaddingTop.pt40};
  line-height: 24px;
`;

export const AboutContsCard = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;
  padding-top: ${theme.PaddingTop.pt50};

  li {
    width: 25%;
    min-height: 450px;
    padding: 0 10px;
    &:nth-of-type(1) {
      figure {
        background-image: url("/images/main/bg_findmates.jpg");
        background-size: cover;
        background-position: center center;
      }
    }

    &:nth-of-type(2) {
      figure {
        background-image: url("/images/main/bg_fitness_center.jpg");
        background-size: cover;
        background-position: center center;
      }
    }

    &:nth-of-type(3) {
      figure {
        background-image: url("/images/main/bg_bestdeal.jpg");
        background-size: cover;
        background-position: center center;
      }
    }
    &:nth-of-type(4) {
      figure {
        background-image: url("/images/main/bg_rundaycourse.jpg");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center center;
      }
    }

    @media all and ${theme.laptop} {
      width: 33.3333%;
      margin-bottom: ${theme.MarginBottom.mb20};
      min-height: 350px;
    }

    @media all and ${theme.tablet} {
      width: 50%;
    }

    @media all and ${theme.mobile} {
      width: 50%;
      min-height: 250px;
    }
  }

  figure {
    position: relative;
    display: table;
    width: 100%;
    height: 100%;
    background-color: #ddd;
    text-align: center;
    cursor: pointer;

    figcaption {
      position: relative;
      z-index: 55;
      display: table-cell;
      vertical-align: middle;
      opacity: 0;

      h4 {
        font-size: ${theme.fontsize.fs24};
        color: #fff;
      }
    }

    &::after {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-color: rgba(0, 0, 0, 0.2);
      opacity: 0;
      transition: 0.5s;
      filter: blur(5px);
    }

    &:hover {
      &::after {
        opacity: 1;
      }
      figcaption {
        transition: 0.5s;
        opacity: 1;
        filter: blur(0px);
      }
    }
  }

  @media all and ${theme.tablet} {
    padding-top: ${theme.PaddingTop.pt50};
  }
`;
