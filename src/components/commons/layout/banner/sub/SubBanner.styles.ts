import styled from "@emotion/styled";
import theme from "../../../../../commons/styles/variables";

export const BannerSection = styled.section`
  position: relative;
  z-index: 2;
  display: table;
  width: 100%;
  height: 650px;
  background-size: cover;
  background-repeat: no-repeat;

  &::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
  }

  @media all and ${theme.laptop} {
    height: 450px;
  }

  @media all and ${theme.laptop} {
    height: 300px;
  }
`;

export const SectionConts = styled.div`
  display: table-cell;
  padding: 50px 0;
  vertical-align: middle;
  text-align: center;
`;
export const subtitle = styled.span`
  position: relative;
  display: block;
  padding-top: ${theme.PaddingTop.pt60};
  padding-bottom: ${theme.PaddingBottom.pb40};
  font-size: ${theme.fontsize.fs18};
  color: #fff;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 1px;
    height: 40px;
    background-color: #fff;
  }
`;

export const BannerTitle = styled.h1`
  font-size: ${theme.fontsize.fs50};
  font-weight: 600;
  color: #fff;

  @media all and ${theme.tablet} {
    font-size: ${theme.fontsize.fs35};
  }
`;
