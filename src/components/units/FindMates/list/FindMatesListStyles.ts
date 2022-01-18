import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";

export const FindMateAddButtonWrap = styled.p`
  position: fixed;
  width: 100%;
  max-width: 1320px;

  @media all and (max-width: 1280px) {
    width: 85%;
    max-width: 100%;
  }

  @media all and ${theme.tablet} {
    width: 90%;
  }
`;

export const FindmateAddButton = styled.button`
  float: right;
  width: 48px;
  height: 48px;
  border-radius: 50px;
  background-color: #213358;
  background-image: url("/images/sub/find-mates/pen-icon-white.png");
  background-repeat: no-repeat;
  background-position: center center;
`;

export const FindmatesListWrapper = styled.div`
  width: 100%;
  padding: 35px;

  @media screen and ${theme.tablet} {
    padding: 0px;
  }
`;

export const FindmatesListHead = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 35px;

  @media screen and ${theme.tablet} {
    display: none;
  }
`;

export const UserProfile = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and ${theme.tablet} {
    width: 25px;
    height: 25px;
  }
`;

export const FindmatesAddButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 1245px;
  height: 60px;
  padding-right: 20px;
  margin-left: 25px;
  border: 1px solid #dddddd;
  border-radius: 15px;
`;

export const FindmatesAddButtonIcon = styled.div`
  width: 27px;
  height: 27px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const ListWrapper = styled.div`
  padding: 20px 0px 20px 0px;
  margin-bottom: 40px;

  @media screen and ${theme.tablet} {
    padding: 0px;
  }
`;

export const NavigationList = styled.ul`
  width: 100%;
  margin-bottom: 40px;

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

  @media screen and ${theme.laptop} {
    display: flex;
    justify-content: center;
    text-align: center;

    li {
      margin: 0px 20px 0px 20px;
    }
  }

  @media screen and ${theme.mobile} {
    margin-bottom: 10px;
    li {
      white-space: nowrap;

      button {
        font-size: ${theme.fontsize.fs16};
      }
    }
  }
`;

export const FindmatesList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 50px 0px 50px 0px;
  border-bottom: 1px solid #dddddd;

  :hover {
    background-color: #f4f5f5;
    cursor: pointer;
  }

  @media screen and ${theme.tablet} {
    display: flex;
    flex-direction: column-reverse;
    align-items: center;
    padding: 20px 0px 20px 0px;
  }
`;

export const ContentsWrapper = styled.div`
  width: 60%;
  margin-top: 10px;

  @media screen and ${theme.tablet} {
    width: 100%;
  }
`;

export const FindmatesImg = styled.div`
  width: 35%;
  height: 250px;
  background: #c4c4c4;
  border-radius: 15px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and ${theme.tablet} {
    width: 100%;
    height: 300px;
  }

  @media screen and ${theme.mobile} {
    height: 200px;
  }
`;

export const FindmatesInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;

  @media screen and ${theme.tablet} {
    width: 100%;
    margin-bottom: 20px;
  }

  @media screen and ${theme.mobile} {
    span {
      margin-left: 10px;
      font-size: ${theme.fontsize.fs14};
    }
  }
`;

export const FindmatesInfoName = styled.span`
  margin-left: 20px;
  font-size: 17px;
  font-weight: bolder;
`;

export const FindmatesInfoDate = styled.span`
  margin-left: 20px;
  color: #dddddd;
  font-size: 14px;
`;

export const FindmatesInfoAddr = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 40px;
  font-size: 14px;

  @media screen and ${theme.tablet} {
    position: relative;
    top: 0px;
    left: 0px;
  }
`;

export const FindmatesInfoLikeCount = styled.span`
  margin-top: 3px;
  @media screen and ${theme.tablet} {
    position: absolute;
    bottom: 1px;
    left: 20px;
    padding-left: 4px;
  }
`;

export const FindmatesLocationIcon = styled.div`
  position: absolute;
  top: -3px;
  left: -18px;
  width: 14px;
  height: 14px;
  margin-right: 10px;

  img {
    width: 100%;
  }

  @media screen and ${theme.tablet} {
    top: -1px;
    left: -13px;
    width: 10px;
    height: 10px;
  }

  @media screen and ${theme.mobile} {
    display: none;
  }
`;

export const FindmatesContents = styled.div`
  padding-left: 60px;

  h2 {
    margin-bottom: 25px;
  }

  p {
    margin-bottom: 40px;
    line-height: 20px;
  }

  span {
    font-size: 16px;
    color: #324e86;

    @media screen and ${theme.tablet} {
      margin-right: 5px;
    }
  }

  div {
    width: 20px;
    height: 20px;
    margin-top: 30px;

    img {
      width: 100%;
      height: 100%;
    }
  }

  nav {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 5%;
    text-align: center;

    @media screen and ${theme.tablet} {
      align-items: flex-start;
    }
  }

  @media screen and ${theme.tablet} {
    position: relative;
    padding-left: 0px;

    h2 {
      margin-bottom: 10px;
      font-size: ${theme.fontsize.fs16};
    }

    p {
      margin-bottom: 10px;
      font-size: ${theme.fontsize.fs14};
      line-height: 20px;
    }

    span {
      font-size: ${theme.fontsize.fs14};
    }

    div {
      width: 15px;
      height: 15px;
      margin-top: 10px;
    }

    img {
      width: 100%;
      height: 100%;
    }
  }

  @media screen and ${theme.mobile} {
    h2,
    span {
      font-size: ${theme.fontsize.fs16};
    }

    p {
      display: none;
    }
  }
`;

export const FindmatesFooter = styled.footer`
  display: flex;
  justify-content: center;

  div {
    width: 40px;
    height: 40px;

    :hover {
      cursor: pointer;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
`;
