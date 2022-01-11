// Css 작성

import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";

export const MypageSection = styled.section`
  display: flex;
  flex-wrap: wrap;
`;

export const MyPageUserInfo = styled.aside`
  width: 30%;
  padding: 70px 50px;
  background-color: #fcfcfc;
`;

export const UserInfoHeader = styled.figure`
  position: relative;
  padding-bottom: 20px;
  text-align: center;

  figcaption {
    position: relative;
    padding-top: ${theme.PaddingTop.pt10};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: 0px;
    left: 50%;
    width: 190px;
    height: 1px;
    transform: translateX(-50%);
    background-color: #ebebeb;
  }
`;

export const UserName = styled.h6`
  position: relative;
  display: inline-block;
  font-size: ${theme.fontsize.fs16};
  font-weight: 600;
  color: ${theme.fontColorBase};
`;

export const ReportButton = styled.button`
  position: absolute;
  top: 2px;
  right: -10px;
`;
export const UserProfileImg = styled.p`
  position: relative;
  display: inline-block;
  text-align: center;
  button {
    position: absolute;
    bottom: 0;
    right: 0px;
  }
`;

export const FollowInfo = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 50%;
  margin: 20px auto;

  dl {
    width: 50%;
    text-align: center;

    dt {
      font-weight: 600;
    }

    dd {
      padding-top: ${theme.PaddingTop.pt10};
    }
  }
`;

export const FollowButtonWrap = styled.p`
  text-align: center;
`;
export const FollowButton = styled.button`
  padding: 7px 20px;
  background-color: #ebebeb;
  border-radius: 20px;
  color: #555;

  &:hover {
    background-color: ${theme.colorBase};
    color: #fff;
  }
`;

export const UserInterestedWrap = styled.div`
  padding-top: ${theme.PaddingTop.pt100};

  h5 {
    font-size: ${theme.fontsize.fs18};

    span {
      font-weight: bold;
      color: ${theme.colorPoint};
    }
  }
`;

export const HashTagList = styled.ul`
  padding-top: ${theme.PaddingTop.pt20};
  li {
    display: inline-block;
    margin-right: 5px;
    margin-bottom: ${theme.MarginBottom.mb10};

    span {
      display: block;
      padding: 7px 10px;
      background-color: ${theme.colorBase};
      border-radius: 15px;
      font-size: ${theme.fontsize.fs14};
      color: #fff;
    }
  }
`;
export const MyPageArticle = styled.article`
  width: 70%;
  padding: 50px;
  border: 1px solid #ebebeb;
`;

export const MypageTabList = styled.ul`
  width: 100%;
  padding: 20px 0;

  li {
    display: inline-block;

    &.on {
      button {
        &::after {
          width: 80%;
        }
      }
    }

    button {
      position: relative;
      padding: 10px 15px;

      &::after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 50%;
        width: 0%;
        height: 2px;
        background: ${theme.colorBase};
        transform: translateX(-50%);
        transition: 0.5s;
      }
    }
    &:hover {
      button {
        &::after {
          left: 50%;
          width: 80%;
          transform: translateX(-50%);
          transition: 0.5s;
        }
      }
    }
  }
`;

export const MypageContents = styled.div`
  padding: 20px 0;
`;

export const MypageFindMatesPostWrap = styled.div`
  padding: 20px 0;
`;

export const MypageTableWrap = styled.div`
  padding: 30px 0;
`;
export const MypageTable = styled.table`
  width: 100%;

  thead {
    tr {
      th {
        padding: 10px 0px;
        background-color: #ebebeb;
      }
    }
  }
  tbody {
    tr {
      td {
        padding: 10px 0;
        border: 1px solid #ebebeb;
        border-width: 1px 0px 1px 1px;
        text-align: center;
      }
    }
  }
`;
