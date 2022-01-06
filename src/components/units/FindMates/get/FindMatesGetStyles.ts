import styled from "@emotion/styled";

export const FindmatesGetWrapper = styled.div`
  display: flex;
  width: 1400px;
`;

export const FindmatesUserInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 440px;
  background: #fcfcfc;

  hr {
    width: 190px;
    margin: 30px 30px;
    border: 1px solid #dddddd;
  }

  footer {
    display: flex;
    justify-content: space-between;
    width: 220px;
    margin-top: 50px;
  }

  button {
    width: 100px;
    height: 30px;
    background: #c4c4c4;
    border-radius: 20px;
    font-size: 14px;
    color: white;
  }
`;

export const UserProfile = styled.div`
  width: 120px;
  height: 120px;
  margin-top: 57px;

  img {
    width: 100%;
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
  width: 190px;

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
`;

export const SubIcon = styled.div`
  width: 20px;
  height: 20px;
  margin-bottom: 6px;
`;

export const FindmatesContentsInfo = styled.div`
  width: 960px;
  padding: 60px 95px 60px 95px;
  border: 1px solid #dddddd;

  h1 {
    margin: 10px 0px 70px 0px;
  }

  p {
    margin: 100px 0px 200px 0px;
  }

  span {
    margin-right: 5px;
    font-size: 14px;
    color: #324e86;
  }

  /* .slick-track {
    margin-bottom: 50px;
  } */

  footer {
    margin-top: 32px;
    font-size: 14px;
    color: #dddddd;
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
`;

export const ContentsInfoImage = styled.div`
  width: 768px;
  height: 290px;
  background: #c4c4c4;

  img {
    width: 100%;
    height: 100%;
  }
`;
