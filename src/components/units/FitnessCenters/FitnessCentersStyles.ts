import styled from "@emotion/styled";
import theme from "../../../commons/styles/variables";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  padding-top: ${theme.PaddingTop.pt100};
`;
export const GetMap = styled.div`
  width: 80%;
  height: 1080px;
`;
export const Body = styled.div`
  width: 20%;
  height: 1080px;
  border: 1px solid #eeeeee;
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
export const GetList = styled.div`
  width: 100%;
  height: 1010px;
  overflow: scroll;
`;
export const List = styled.div`
  width: 100%;
  height: 180px;
  border-bottom: 1px solid #eeeeee;
`;
export const PlaceName = styled.h3`
  width: 100%;
  height: 23px;
  margin-left: 33px;
  margin-top: 25px;
  font-size: ${theme.fontsize.fs16};
  font-weight: 500;
  line-height: 23px;
  cursor: pointer;
  :hover {
    color: ${theme.colorBase};
    font-weight: 700;
  }
`;
export const Address = styled.div`
  width: 100%;
  height: 23px;
  margin-left: 33px;
  margin-top: 11px;
  font-size: 14px;
  line-height: 20px;
  color: #555555;
`;
export const Phone = styled.div`
  width: 100%;
  height: 23px;
  margin-left: 33px;
  margin-top: 11px;
  font-size: 14px;
  line-height: 20px;
`;
export const Distance = styled.div`
  width: 100%;
  height: 23px;
  margin-left: 33px;
  margin-top: 11px;
  font-size: 14px;
  line-height: 20px;
`;
export const MoveToDetail = styled.a`
  display: block;
  width: 100%;
  height: 23px;
  margin-left: 33px;
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
