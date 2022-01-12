import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";

export const Header = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 690px;

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
export const HeaderImg = styled.img`
  width: 100%;
  height: 100%;
`;
export const HeaderTextWrapper = styled.div`
  width: 50%;
  height: 690px;
  padding: 0 30px;
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
  width: 100%;
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
  float: right;
  background-color: #c4c4c4;
  font-size: ${theme.fontsize.fs16};
`;
export const TabWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  margin-top: 90px;
  background-color: Lightyellow;
`;
export const TabOn = styled.div`
  width: 25%;
  height: 50px;
  background-color: #efefef;
  border: 1px solid #dddddd;
  font-size: ${theme.fontsize.fs18};
  text-align: center;
  line-height: 50px;
  :hover {
    font-weight: bold;
    color: #324e86;
    background-color: white;
  }
`;
export const TabOff = styled.div`
  width: 25%;
  height: 50px;
  background-color: #efefef;
  border: 1px solid #dddddd;
  font-size: ${theme.fontsize.fs18};
  text-align: center;
  line-height: 50px;
  :hover {
    font-weight: bold;
    color: #324e86;
    background-color: white;
  }
`;
export const Body = styled.div`
  width: 100%;
`;
export const BodyWrapper = styled.div`
  width: 100%;
  margin-top: 90px;
`;
export const BodyTitle = styled.h3`
  font-size: ${theme.fontsize.fs24};
  font-weight: bold;
  line-height: 35px;
  color: #332244;
`;
export const BodyContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 50px;
  font-size: ${theme.fontsize.fs16};
  line-height: 30px;
`;
export const BodyTextContent = styled.pre`
  width: 100%;
  margin-top: 50px;
  font-size: ${theme.fontsize.fs16};
  line-height: 30px;
`;
export const TableWrapper = styled.div`
  width: 100%;
  margin-top: 70px;
  /* background-color: brown; */
`;
export const Table = styled.table`
  width: 100%;
  margin-top: 50px;
  thead {
    th {
      height: 45px;
      padding: 10px 0;
      background-color: #ebebeb;
      border: 1px solid #dddddd;
      font-size: ${theme.fontsize.fs18};
      line-height: 45px;
    }
  }
  tbody {
    tr {
      td {
        height: 45px;
        padding: 10px 0;
        border-color: #ebebeb;
        border-style: solid;
        border-width: 1px 0px 1px 1px;
        font-size: ${theme.fontsize.fs16};
        line-height: 45px;
        text-align: center;
        vertical-align: middle;
        &:last-child {
          border-right: 1px solid #ebebeb;
        }
      }
    }
  }
`;
export const MapWrapper = styled.div`
  width: 100%;
  margin-top: 70px;
`;
export const Map = styled.div`
  width: 100%;
  margin-top: 50px;
`;
export const ImgWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin: -10px -10px;
  margin-top: 90px;

  li {
    width: 20%;
    padding: 10px 10px;
  }
`;
export const ImgList = styled.img`
  width: 100%;
  height: 280px;
`;
