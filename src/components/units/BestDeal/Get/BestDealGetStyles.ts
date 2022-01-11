import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 690px;
  margin: 0 -30px;
  /* background-color: yellow; */

  @media all and ${theme.tablet} {
    margin: 0;
  }
`;

export const BestDealImgWrap = styled.figure`
  width: 50%;
  padding: 0 30px;

  @media all and ${theme.tablet} {
    width: 100%;
    padding: 0 30px;
  }
`;
export const HeaderImg = styled.img``;
export const HeaderTextWrapper = styled.div`
  width: 50%;
  height: 690px;
  paading: 0 30px;
  /* background-color: skyblue; */

  @media all and ${theme.tablet} {
    width: 100%;
  }
`;
export const TextWrapperTitle = styled.h1`
  height: 46px;
  margin-top: 16px;
  font-size: ${theme.fontsize.fs30};
  font-weight: bold;
  line-height: 46px;
`;
export const Line = styled.div`
  width: 597px;
  height: 0px;
  margin-top: 31px;
  border: 1px solid #dddddd;
`;
export const TextWrapperAddress = styled.div`
  height: 23px;
  margin-top: 29px;
`;
export const AddressImg = styled.img`
  width: 14px;
  height: 20px;
`;
export const Address = styled.span`
  height: 23px;
  margin-left: 11px;
  font-size: ${theme.fontsize.fs16};
  line-height: 23px;
`;
export const TextWrapperPhone = styled.div`
  height: 23px;
  margin-top: 23px;
`;
export const PhoneImg = styled.img`
  width: 14px;
  height: 20px;
`;
export const Phone = styled.span`
  height: 23px;
  margin-left: 11px;
  font-size: ${theme.fontsize.fs16};
  line-height: 23px;
`;
export const ServiceWrapper = styled.div`
  height: 147px;
  padding-top: 20px;
`;
export const ServiceTitle = styled.div`
  height: 23px;
  font-size: ${theme.fontsize.fs16};
  line-height: 23px;
`;
export const ServiceFigureWrapper = styled.div`
  display: flex
  flex-wrap: wrap;
  width: 100%;
`;
export const ServiceContents = styled.figure`
  display: inline-block;
  height: 79px;
  padding-top: 24px;
  padding-right: 50px;
  text-align: center;
`;
export const ServiceContentsIcon = styled.img`
  width: 45px;
  height: 45px;
`;
export const ServiceContentsTitle = styled.span`
  height: 20px;
  font-size: ${theme.fontsize.fs14};
  line-height: 20px;
`;
export const ConvenienceWrapper = styled.div`
  height: 147px;
  padding-top: 30px;
`;
export const ConvenienceTitle = styled.div`
  height: 23px;
  font-size: ${theme.fontsize.fs16};
  line-height: 23px;
`;
export const ConvenienceFigureWrapper = styled.div`
  display: flex
  flex-wrap: wrap;
  width: 100%;
`;
export const ConvenienceContents = styled.figure`
  display: inline-block;
  height: 79px;
  padding-top: 24px;
  padding-right: 50px;
  text-align: center;
`;
export const ConvenienceContentsIcon = styled.img`
  width: 45px;
  height: 45px;
`;
export const ConvenienceContentsTitle = styled.span`
  height: 20px;
  font-size: ${theme.fontsize.fs14};
  line-height: 20px;
`;
export const PriceWrapper = styled.div`
  height: 103px;
  margin-top: 30px;
`;
export const PriceTitle = styled.div`
  height: 23px;
  margin-top: 30px;
  font-size: ${theme.fontsize.fs16};
  line-height: 23px;
`;
export const PriceSubTitle = styled.div`
  height: 23px;
  margin-top: 16px;
`;
export const Percent = styled.span`
  height: 23px;
  font-size: ${theme.fontsize.fs16};
  font-weight: bold;
  line-height: 23px;
  color: #e13c08;
`;
export const OriginalPrice = styled.span`
  height: 23px;
  margin-left: 12px;
  font-size: ${theme.fontsize.fs16};
  line-height: 23px;
  color: #555555;
  text-decoration-line: line-through;
`;
export const PriceButtonLineWrapper = styled.div`
  height: 45px;
  margin-top: -46px;
`;
export const Price = styled.span`
  height: 41px;
  font-size: ${theme.fontsize.fs28};
  font-weight: bold;
  line-height: 41px;
  color: #213358;
`;
export const Month = styled.span`
  height: 20px;
  margin-left: 14px;
  font-size: ${theme.fontsize.fs14};
  line-height: 20px;
  color: #666666;
`;
export const Payment = styled.button`
  width: 150px;
  height: 45px;
  background-color: #c4c4c4;
  margin-left: 315px;
  font-size: ${theme.fontsize.fs16};
`;
