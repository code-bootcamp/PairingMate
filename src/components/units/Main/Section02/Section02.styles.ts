import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";

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

export const BestFindMatesList = styled.ul`
  // display: flex;
  // flex-wrap: wrap;
  margin: 0 -10px;

  li {
    width: 25%;
    padding: 0 10px;
    cursor: pointer;
  }

  @media all and ${theme.tablet} {
    li {
      width: 50%;
      margin-bottom: ${theme.MarginBottom.mb30};
    }
  }
`;

export const BestFindMatesCard = styled.figure`
  border: 1px solid #ebebeb;
  p.imageWrapper {
    height: 250px;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

export const BestFindMatsCardText = styled.figcaption`
  padding: 30px 20px;
  border-top: 1px solid #ebebeb;

  h5 {
    padding-bottom: ${theme.PaddingBottom.pb10};
    font-size: ${theme.fontsize.fs18};
    color: ${theme.fontColorBase};
  }
  p {
    display: block;
    padding-bottom: ${theme.PaddingBottom.pb20};
    font-size: ${theme.fontsize.fs14};
  }
  span {
    margin-right: 3px;
    padding: 3px 10px;
    background: #eee;
    border-radius: 10px;
    font-size: ${theme.fontsize.fs14};
  }
`;
