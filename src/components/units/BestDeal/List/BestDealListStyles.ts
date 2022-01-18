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
  margin-top: ${theme.MarginTop.mt70};
`;

export const NavigationList = styled.ul`
  width: 100%;
  margin-top: 115px;
  /* border: 1px solid; */

  @media all and ${theme.tablet} {
    margin-top: 55px;
    margin-bottom: 20px;
  }

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
    @media all and ${theme.tablet} {
      button {
        font-size: ${theme.fontsize.fs16};
      }
    }
  }
`;
export const BestProductWrapper = styled.ul`
  max-width: 100vw;

  overflow: hidden;
  margin: 0 -10px;
`;
export const ProductWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin-top: 30px;
  margin: 0 -10px;
`;
export const ProductItem = styled.li`
  width: 25%;
  height: 375px;
  padding: 10px;
  margin-bottom: ${theme.MarginBottom.mb30};

  @media all and ${theme.laptop} {
    width: 33%;
  }

  @media all and ${theme.tablet} {
    width: 50%;
    height: auto;
  }

  @media all and ${theme.mobile} {
    width: 100%;
  }
`;
export const ItemWrapper = styled.figure`
  width: 100%;
  border: 1px solid #ebebeb;
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
  h4 {
    height: 23px;
    margin-top: 14px;
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
  }
  p {
    display: block;
    height: 23px;
    margin-top: 14px;
    font-weight: 500;
    font-size: 14px;
    line-height: 20px;
  }
`;
export const ProductTagsWrapper = styled.div`
  height: 25px;
  margin-top: 14px;
  /* background-color: #c4c4c4;
  border-radius: 30px; */
`;
export const ProductTags = styled.span`
  margin-right: 10px;
  padding: 5px 15px;
  border-radius: 30px;
  font-weight: 500;
  font-size: ${theme.fontsize.fs16};
  line-height: 22px;
  background-color: #c4c4c4;
`;
export const ButtonWrapper = styled.div`
  text-align: center;
`;
export const MoreButton = styled.button`
  width: 180px;
  height: 50px;
  margin-top: ${theme.MarginTop.mt90};
  border: 1px solid #ebebeb;
  color: #555;

  &:hover {
    background-color: ${theme.colorBase};
    border: 0;
    color: #fff;
    transition: 0.5s;
  }
  @media all and ${theme.tablet} {
    width: 120px;
    height: 35px;
  }
`;

export const WriteButton = styled.button`
  width: 180px;
  height: 50px;
  background-color: #ebebeb;

  @media all and ${theme.tablet} {
    width: 120px;
    height: 35px;
  }
`;
