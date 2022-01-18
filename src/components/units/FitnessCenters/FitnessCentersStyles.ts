import styled from "@emotion/styled";
import theme from "../../../commons/styles/variables";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding-top: ${theme.PaddingTop.pt100};
  @media screen and ${theme.laptop} {
    flex-direction: column;
  }
`;
export const MapsWrapper = styled.div`
  width: 80%;
  @media screen and ${theme.laptop} {
    width: 100%;
  }
`;
export const GetMap = styled.div`
  width: 100%;
  height: 1080px;
  @media screen and ${theme.laptop} {
    height: 1024px;
  }
  @media screen and ${theme.tablet} {
    height: 767px;
  }
  @media screen and ${theme.mobile} {
    height: 475px;
  }
`;
export const Body = styled.div`
  width: 20%;
  height: 1080px;
  border: 1px solid #eeeeee;

  @media all and ${theme.laptop} {
    width: 100%;
    height: 280px;
    overflow: hidden;
  }
`;
export const TitleBox = styled.div`
  width: 100%;
  height: 70px;
  border-bottom: 1px solid #eeeeee;
`;
export const Title = styled.h2`
  padding-top: 21px;
  padding-left: 30px;
  font-size: ${theme.fontsize.fs18};
  font-weight: 500;
  line-height: 26px;
`;

export const GetListWrap = styled.div`
  width: 100%;
  overflow: scroll;
`;
export const GetList = styled.ul`
  width: 100%;
  height: 1010px;
  overflow: scroll;
  @media all and ${theme.laptop} {
    display: flex;
    width: 5000px;
    height: 200px;
  }
`;
export const List = styled.li`
  width: 100%;
  height: 200px;
  padding: 25px 23px;
  border-bottom: 1px solid #eeeeee;
  @media all and ${theme.laptop} {
    width: 25%;
    height: 100%;
    padding: 15px 23px;
  }
`;
export const PlaceName = styled.h3`
  width: 100%;
  height: 23px;

  font-size: ${theme.fontsize.fs16};
  font-weight: 500;
  line-height: 23px;
  cursor: pointer;
  :hover {
    color: ${theme.colorBase};
    font-weight: 700;
  }
`;
export const Address = styled.p`
  width: 100%;
  height: 23px;

  margin-top: 11px;
  font-size: 14px;
  line-height: 20px;
  color: #555555;
`;
export const Phone = styled.p`
  width: 100%;
  height: 23px;

  margin-top: 11px;
  font-size: 14px;
  line-height: 20px;
`;
export const Distance = styled.p`
  width: 100%;
  height: 23px;

  margin-top: 11px;
  font-size: 14px;
  line-height: 20px;
`;
export const MoveToDetail = styled.a`
  display: block;
  width: 100%;
  height: 23px;
  margin-top: 11px;
  font-size: 14px;
  line-height: 20px;
  cursor: pointer;
  :hover {
    color: ${theme.colorBase};
    font-weight: 500;
  }
`;
export const Img = styled.img`
  width: 12px;
  height: 12px;
  margin-right: 5px;
`;
export const DistanceImg = styled.img`
  width: 14px;
  height: 14px;
  margin-right: 5px;
`;
