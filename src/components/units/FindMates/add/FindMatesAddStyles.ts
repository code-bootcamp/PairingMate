import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";

export const FindmatesAddWrapper = styled.div`
  width: 100%;
  padding: 120px 50px 120px 50px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);

  select {
    width: 100%;
    height: 50px;
    padding-left: 10px;
    outline: none;
    border: 1px solid #efefef;
    color: #555555;
  }

  input,
  textarea {
    padding: 10px 0px 10px 10px;
    margin-top: 30px;
    outline: none;
    line-height: 35px;
  }

  @media screen and ${theme.mobile} {
    font-size: ${theme.fontsize.fs16};
  }
`;

export const TitleInput = styled.input`
  display: block;
  width: 100%;
  font-size: 36px;
  border-bottom: 1px solid #efefef;

  &::placeholder {
    color: #dddddd;
  }

  @media screen and ${theme.mobile} {
    font-size: ${theme.fontsize.fs24};
  }
`;

export const TagsInput = styled.input`
  display: block;
  width: 100%;
  font-size: 16px;
  border-bottom: 1px solid #efefef;
  outline: none;
  &::placeholder {
    color: #dddddd;
  }
`;

export const TagsWrapper = styled.div`
  width: 100%;
  height: auto;
  padding: 10px 0px 10px 10px;
  margin-top: 20px;
  word-break: break-all;
  span {
    margin-right: 5px;
    color: #324e86;
  }
`;

export const ContentsInput = styled.textarea`
  width: 100%;
  height: 500px;
  resize: none;
  font-size: 24px;

  &::placeholder {
    color: #dddddd;
  }

  @media screen and ${theme.laptop} {
    height: 300px;
  }
`;

export const FindmatesInputFooter = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;

  @media screen and ${theme.laptop} {
    flex-direction: column;
  }
`;

export const FindmatesSearchWrapper = styled.div`
  position: relative;
  width: 45%;
  margin-right: 50px;

  input {
    display: block;
    width: 100%;
    border-bottom: 1px solid #efefef;

    &::placeholder {
      color: #dddddd;
    }
  }

  button {
    position: absolute;
    top: 5px;
    left: 25px;
  }

  @media screen and ${theme.laptop} {
    width: 100%;
    input {
      margin-top: 10px;
      margin-bottom: 30px;
    }
    @media screen and ${theme.mobile} {
      input {
        margin-top: 5px;
        height: 40px;
      }
    }
  }
`;

export const FindmatesUploadsWrapper = styled.div`
  position: relative;
  width: 45%;

  button {
    position: absolute;
    top: 5px;
    left: 30px;
  }

  label {
    position: absolute;
    top: 5px;
    left: 30px;
  }

  @media screen and ${theme.laptop} {
    width: 100%;
  }
`;

export const UploadImageWrapper = styled.div`
  display: flex;

  @media screen and ${theme.tablet} {
    flex-direction: column;
  }
`;

export const UploadImageIcon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  margin: 30px 20px 0px 0px;
  border: 1px dashed #dddddd;
  background-color: white;

  img {
    width: 20px;
    height: 20px;
  }

  :hover {
    cursor: pointer;
  }
`;

export const UploadImage = styled.img`
  width: 20px;
  height: 20px;
  margin: 30px 20px 0px 0px;

  @media screen {
  }
`;

export const FindmatesButtonWrapper = styled.div`
  margin-top: 100px;
  text-align: center;

  button {
    width: 180px;
    height: 50px;
    background: #c4c4c4;
    color: white;
  }
`;
