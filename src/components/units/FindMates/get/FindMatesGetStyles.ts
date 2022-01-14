import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";

export const FindmatesGetWrapper = styled.div`
  display: flex;
  width: 100%;
  @media screen and ${theme.tablet} {
    flex-direction: column;
    margin-bottom: 20px;
  }
`;

export const FindmatesUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
  background: #fcfcfc;

  hr {
    width: 50%;
    margin: 30px 30px;
    border: 1px solid #dddddd;
  }

  footer {
    display: flex;
    justify-content: space-between;
    width: 45%;
    margin-top: 50px;

    @media screen and ${theme.tablet} {
      margin-top: 0px;
    }
  }

  button {
    width: 45%;
    height: 30px;
    background: #c4c4c4;
    border-radius: 20px;
    font-size: ${theme.fontsize.fs14};
    color: white;
  }

  @media screen and ${theme.tablet} {
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    margin-bottom: 20px;
    padding: 0px 30px 20px 30px;
    background-color: white;
    border-bottom: 1px solid #dddddd;
    hr {
      display: none;
    }
  }

  @media screen and ${theme.mobile} {
    flex-direction: column;
    height: auto;
  }
`;

export const UserProfileWrapper = styled.div`
  span {
    display: block;
    text-align: center;
  }
  @media screen and ${theme.tablet} {
    display: flex;
    margin-bottom: 25px;
    align-items: center;
  }
`;

export const UserProfile = styled.div`
  width: 120px;
  height: 120px;
  margin-top: 57px;
  border-radius: 50%;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
  }

  @media screen and ${theme.tablet} {
    width: 50px;
    height: 50px;
    margin-top: 10px;
  }
`;

export const UserName = styled.span`
  margin: 10px 10px;
  font-size: 16px;
`;

export const CreateDate = styled.span`
  margin-top: 5px;
  font-size: 13px;
  color: #dddddd;
`;

export const IconWrapper = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 37%;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  span {
    font-size: 14px;
    color: #324e86;
  }

  @media screen and ${theme.tablet} {
    width: 20%;
    position: absolute;
    bottom: 17px;
    right: 18px;
  }
`;

export const SubIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-bottom: 6px;

  :hover {
    cursor: pointer;
  }
`;

export const FindmatesContentsInfo = styled.div`
  width: 70%;
  padding: 60px 95px 60px 95px;
  border: 1px solid #dddddd;
  border-bottom: 0px;

  h1 {
    margin: 20px 0px 70px 0px;
  }

  p {
    margin: 100px 0px 200px 0px;
    line-height: 20px;
  }

  span {
    margin-right: 5px;
    font-size: 14px;
    color: #324e86;
  }

  footer {
    margin-top: 32px;
    font-size: 14px;
    color: #dddddd;
  }

  @media screen and ${theme.tablet} {
    width: 100%;
    padding: 0px 30px 20px 30px;
    border: none;

    h1 {
      font-size: ${theme.fontsize.fs24};
      margin: 20px 0px 20px 0px;
    }

    p {
      margin: 60px 0px 60px 0px;
      line-height: 20px;
    }
  }
`;

export const ContentsInfoHeader = styled.header`
  position: relative;
  width: 100%;
  height: 60px;

  h3 {
    width: 100px;
    height: 30px;
    background: #c4c4c4;
    border-radius: 5px;
    text-align: center;
    line-height: 30px;
    font-size: 20px;
    color: white;
  }

  span {
    position: absolute;
    width: 100px;
    bottom: 14px;
    right: 0px;
    text-align: right;
  }

  div {
    position: absolute;
    top: -3px;
    right: 90px;
    display: inline-block;
  }

  @media screen and ${theme.tablet} {
    h3 {
      background-color: transparent;
      color: ${theme.colorPoint};
      font-size: ${theme.fontsize.fs24};
      text-align: left;
    }
  }

  @media screen and ${theme.mobile} {
    span {
      bottom: 2px;
      left: 3px;
    }
  }
`;

export const ContentsInfoImage = styled.div`
  width: 40%;
  height: 20%;
  background: #c4c4c4;

  img {
    width: 100%;
    height: 100%;
  }
`;
