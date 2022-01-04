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

export const BestDealTaplist = styled.ul`
  display:flex;
  flex-wrap wrap;
  justify-content: center;
  padding-bottom:${theme.PaddingBottom.pb70};

  li {
      padding: 0 10px;

      button {
          position:relative;
          padding-bottom:5px;
          &::after{
              content:"";
              position:absolute;
              bottom:-3px;
              left:0;
              z-index:3;
              width:0%;
              height:3px;
              background:${theme.colorPoint};
              transition:.5s;
          }

          &:hover {
              &::after{
                  width:100%;
              }
          }
      }
  }
`;
export const BestDealList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 0 -10px;

  li {
    width: 20%;
    padding: 0 10px;
    margin-bottom: 20px;

    figure {
      width: 100%;
      height: 264px;
      background-color: #ccc;
      border-radius: 15px;

      figcaption {
        padding-top: 60%;
        padding-left: 20px;
      }
    }
  }
`;
