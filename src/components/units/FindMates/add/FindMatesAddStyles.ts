import styled from "@emotion/styled";

export const FindmatesAddWrapper = styled.div`
  width: 1400px;
  padding: 120px 50px 120px 50px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);

  select {
    width: 150px;
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
`;

export const TitleInput = styled.input`
  display: block;
  width: 1300px;
  font-size: 36px;
  border-bottom: 1px solid #efefef;

  &::placeholder {
    color: #dddddd;
  }
`;

export const TagsInput = styled.input`
  display: block;
  width:100%;
  font-size: 16px;
  border-bottom: 1px solid #efefef;

  &::placeholder {
    color: #dddddd;
  }
`;

export const TagsWrapper = styled.div`
  width: 1300px;
  padding: 10px 0px 10px 10px;
  margin-top: 20px;

  span {
    margin-right: 5px;
    color: #324e86;
  }
`;

export const ContentsInput = styled.textarea`
  width: 1300px;
  height: 500px;
  resize: none;
  font-size: 24px;

  &::placeholder {
    color: #dddddd;
  }
`;

export const FindmatesInputFooter = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
`;

export const FindmatesSearchWrapper = styled.div`
  position: relative;
  margin-right: 50px;

  input {
    display: block;
    width: 628px;
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
`;

export const FindmatesUploadsWrapper = styled.div`
  position: relative;

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
`;

export const UploadImageWrapper = styled.div`
  display: flex;
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
