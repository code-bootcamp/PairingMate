import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 1400px;
  padding: 120px 50px 120px 50px;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  height: auto;
  margin: 0 auto;
`;
export const Header = styled.div`
  width: 100%;
  height: 50px;
  select {
    width: 50%;
    height: 50px;
    padding-left: 10px;
    outline: none;
    border: 1px solid #efefef;
    color: #555555;
  }
`;
export const PriceInput = styled.input`
  width: 50%;
  height: 50px;
  font-size: ${theme.fontsize.fs16};
  line-height: 50px;
  border-bottom: 1px solid #efefef;

  &::placeholder {
    color: #dddddd;
  }
`;
export const TitleInput = styled.input`
  display: block;
  width: 1300px;
  margin-top: 45px;
  font-size: ${theme.fontsize.fs35};
  border-bottom: 1px solid #efefef;

  &::placeholder {
    color: #dddddd;
  }
`;
export const TagsWrapper = styled.div`
  width: 100%;
  height: 80px;
  margin-top: 30px;
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
export const FunctionWrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
  margin-top: 20px;
`;
export const FunctionWrapperLeft = styled.div`
  display: inline-block;
  width: 50%;
`;
export const AddressSearch = styled.div`
  width: 100%;
  height: 50px;
`;
export const Phone = styled.div`
  width: 100%;
  margin-top: 30px;
  img {
    width: 15px;
    height: 15px;
  }
  span {
    margin-left: 10px;
  }
  input {
    display: block;
    width: 628px;
    margin-top: 10px;
    border-bottom: 1px solid #efefef;

    &::placeholder {
      color: #dddddd;
    }
  }
`;
export const ImgUploadBox = styled.div`
  display: inline-block;
  width: 50%;
`;
export const ButtonWrapper = styled.div`
  margin-top: 100px;
  text-align: center;

  button {
    width: 180px;
    height: 50px;
    background: #c4c4c4;
    color: white;
  }
`;
