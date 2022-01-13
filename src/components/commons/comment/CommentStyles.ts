import styled from "@emotion/styled";
import theme from "../../../commons/styles/variables";

export const Wrapper = styled.div`
  width: 100%;
`;

export const CreateWrapper = styled.div`
display: flex;
align-items: center;
  width: 100%;
  height: 100px;
  /* padding: 10px; */
  border: 1px solid #ccc;
  border-radius: 15px;
  img {
    width: 10%
    height: 100px;
    radius: 50px;
  }

  textarea {
    width: 80%;
    height: 100%;
    padding-top: 5px;
    padding-left: 5px;
    border: 1px solid #efefef;
    border-radius: 15px;
    font-size:${theme.fontsize.fs18};
    outline: none;
    resize: none;
  }

  button {
    width: 10%;
    height: 20%;
    /* border: 1px solid #efefef; */
  }
`;

export const ContentsWrapper = styled.div`
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #efefef;
`;

export const ContentsHeader = styled.div`
  display: flex;
  align-items: center;
  img {
    width: 10%;
    height: 100%;
  }
`;

export const NameDateWrapper = styled.div`
  width: 80%;
  span {
    display: block;
    margin-bottom: 10px;
  }
`;

export const ContentsBody = styled.div`
  width: 100%;
  pre {
    padding: 10px;
  }
`;
