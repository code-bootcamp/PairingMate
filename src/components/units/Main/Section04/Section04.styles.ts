import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";

export const PartnerSection = styled.div`
  width: 100%;
  height: 540px;
  background-image: url("/images/main/bg_partner01.jpg");
  background-size: cover;
  background-position: center center;
`;

export const TextWrap = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
  padding: 100px 0;
  text-align: center;
`;

export const PartnerTitle = styled.h2`
  font-size: ${theme.fontsize.fs50};
  color: #fff;
`;

export const PartnerDesc = styled.p`
  padding-top: ${theme.PaddingTop.pt50};
  font-size: ${theme.fontsize.fs24};
  color: #fff;
`;

export const CircleButton = styled.button`
  position: relative;
  padding-top: ${theme.PaddingTop.pt100};
  padding-right: 80px;
  background-size: contain;
  background-position: center center;
  font-size: 16px;
  color: #fff;

  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    right: 0;
    width: 102px;
    height: 23px;
    background-image: url("/images/main/ico_arrow_circle.png");
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center center;
  }
`;
