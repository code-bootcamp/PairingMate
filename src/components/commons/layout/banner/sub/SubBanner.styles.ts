import styled from "@emotion/styled";
import theme from "../../../../../commons/styles/variables";

export const BannerSection = styled.section`
  display: table;
  width: 100%;
  height: 500px;
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

export const BannerTitle = styled.h1`
  font-size: ${theme.fontsize.fs50};
`;
