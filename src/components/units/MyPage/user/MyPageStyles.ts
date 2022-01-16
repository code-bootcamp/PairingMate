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

  @media all and ${theme.tablet} {
    display: flex;
    flex-wrap: wrap;
    width: 100%;
    padding: 35px 25px;
  }
`;

export const UserInfoHeader = styled.figure`
  position: relative;
  padding-bottom: 20px;
  text-align: center;

  figcaption {
    position: relative;
    padding-top: ${theme.PaddingTop.pt20};
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

  @media all and ${theme.tablet} {
    width: 100%;
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
  top: -1px;
  right: -10px;
`;

export const UserProfileWrap = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin: 0 auto;

  label {
    position: absolute;
    bottom: 0;
    right: 0;
    cursor: pointer;
  }
`;

export const UserProfileImg = styled.p`
  position: relative;
  display: inline-block;
  width: 150px;
  height: 150px;
  margin: 0 auto;
  border-radius: 50%;
  text-align: center;
  overflow: hidden;
  img {
    display: block;
    width: 100%;
    height: 100%;
  }
`;

export const OptionButton = styled.input`
  position: absolute;
  width: 25px;
  height: 25px;
  bottom: 0;
  right: 0px;
  background-image: url("/images/sub/mypage/ico_user_settings.png");
  opacity: 0;
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
  margin-top: ${theme.MarginTop.mt20};
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

  @media all and ${theme.tablet} {
    width: 100%;
    padding-top: ${theme.PaddingTop.pt50};
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

  @media all and ${theme.tablet} {
    width: 100%;
    padding: 25px;
  }
`;

export const MypageContents = styled.div`
  padding: 20px 0;
`;

export const MypageFindMatesPostWrap = styled.div`
  padding: 20px 0;

  ul {
    li {
      padding: 12px 0;
      border-bottom: 1px solid #ebebeb;
      font-size: ${theme.fontsize.fs16};
      font-weight: 600;
      span {
        margin-right: 10px;
        padding: 3px 10px;
        border-radius: 15px;
        background-color: ${theme.colorBase};
        font-weight: bold;
        font-size: ${theme.fontsize.fs14};
        color: #fff;
      }
    }
  }
`;

export const MypageTableWrap = styled.div`
  padding: 30px 0;
  @media all and ${theme.tablet} {
    overflow-x: scroll;
  }
`;
export const MypageTable = styled.table`
  width: 100%;

  @media all and ${theme.tablet} {
    width: 700px;
  }

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

        &:last-child {
          border-right: 1px solid #ebebeb;
        }
      }
    }
  }
`;
