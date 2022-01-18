import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";

export const Title = styled.h2`
  font-size: ${theme.fontsize.fs35};
  font-weight: 500;
  line-height: 52px;
  text-align: center;
  /* border: 1px solid; */
  @media screen and ${theme.tablet} {
    font-size: ${theme.fontsize.fs24};
  }
`;
export const Wrapper = styled.div`
  width: 100%;
  margin-top: 70px;
`;
export const BestdealWrapper = styled.div`
  /* display: flex; */
  width: 100%;
  padding: 0 -10px;
  /* border: 1px solid; */

  @media all and (min-width: 1200px) {
    .slick-track {
      width: 100% !important;
    }
  }
`;
export const BestdealItemWrapper = styled.div`
  /* display: flex; */
  width: 100%;
`;
export const BestdealItem = styled.div`
  width: 25%;
  height: 375px;
  margin: 0 10px;
  background-color: #dddddd;

  width: 100%;
  @media all and ${theme.laptop} {
    width: 33.3333%;
  }

  @media all and ${theme.tablet} {
    width: 50%;
  }
  @media all and (max-width: 400px) {
    width: 100%;
    margin-bottom: 25px;
  }
`;
export const BestdealImg = styled.img`
  width: 100%;
  height: 240px;
`;
export const TextBox = styled.div`
  width: 100%;
  height: 135px;
  padding-left: 14px;
`;
export const BestdealTitle = styled.h4`
  height: 23px;
  margin-top: 14px;
  font-weight: 500;
  font-size: ${theme.fontsize.fs16};
  line-height: 23px;
`;
export const BestdealAddress = styled.h4`
  height: 23px;
  margin-top: 14px;
  font-weight: 500;
  font-size: ${theme.fontsize.fs14};
  line-height: 20px;
`;
export const TagsWrapper = styled.div`
  height: 25px;
  margin-top: 14px;
  /* background-color: #c4c4c4;
  border-radius: 30px; */
`;
export const BestdealTags = styled.span`
  width: 50px;
  height: 23px;
  margin-right: 10px;
  border-radius: 30px;
  font-weight: 500;
  font-size: ${theme.fontsize.fs14};
  line-height: 22px;
  background-color: #c4c4c4;
`;
export const NavigationList = styled.ul`
  width: 100%;
  margin-top: 115px;
  /* border: 1px solid; */

  li {
    display: inline-block;
    margin-right: 50px;
    padding: 10px 0;

    button {
      position: relative;
      font-size: 1.25rem;

      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0%;
        height: 2px;
        background-color: black;
        transition: 0.5s;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }
`;
export const ProductWrapper = styled.ul`
  display: flex;
  width: 100%;
  margin: 30px -10px 0 -10px;
  padding: 0 -10px;
`;
export const ProductItem = styled.li`
  width: 100%;
  height: 375px;
  /* padding: 0 10px; */
`;
export const ItemWrapper = styled.figure`\
width: 25%;
margin: 0 10px;
background-color: #dddddd;
`;
export const ImgWrapper = styled.p`
  width: 100%;
`;
export const ProductImg = styled.img`
  width: 100%;
  height: 240px;
`;
export const ProductTextBox = styled.figcaption`
  width: 100%;
  height: 135px;
  padding-left: 14px;
`;
export const ProductTitle = styled.h4`
  height: 23px;
  margin-top: 14px;
  font-weight: 500;
  font-size: 16px;
  line-height: 23px;
`;
export const ProductAddress = styled.p`
  height: 23px;
  margin-top: 14px;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  /* border: 1px solid; */
`;
export const ProductTagsWrapper = styled.div`
  height: 25px;
  margin-top: 14px;
  /* background-color: #c4c4c4;
  border-radius: 30px; */
`;
export const ProductTags = styled.span`
  width: 50px;
  height: 23px;
  margin-right: 10px;
  padding: 5px 10px;
  border-radius: 30px;
  font-weight: 500;
  font-size: 15px;
  line-height: 22px;
  background-color: #c4c4c4;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 90px;
  justify-content: center;
`;
export const MoreButton = styled.button`
  width: 180px;
  height: 50px;

  /* border: 1px solid; */
`;
