import styled from "@emotion/styled";
import theme from "../../../commons/styles/variables";
import { Rate } from "antd";

export const Wrapper = styled.div`
  width: 100%;
`;

export const CreateWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  border-radius: 15px;

  textarea {
    width: 90%;
    height: 100%;
    padding-top: 10px;
    padding-left: 10px;
    border: 1px solid #efefef;
    border-radius: 15px;
    font-size: ${theme.fontsize.fs16};
    outline: none;
    resize: none;
  }

  button {
    width: 50px;
    height: 20px;
    margin-left: 30px;
    font-size: ${theme.fontsize.fs18};
  }
`;

export const ContentsWrapper = styled.div`
  display: flex;
  width: 100%;
  margin-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #efefef;
  img {
    width: 5%;
    height: 70px;
    border: 1px solid #white;
    border-radius: 50%;
  }
`;

export const ContentsHeader = styled.div`
  width: 100%;
  padding-left: 20px;
`;

export const NameDateWrapper = styled.div`
  width: 100%;
  height: 50px;
`;
export const Name = styled.div`
  display: block;
  height: 50%;
  font-size: ${theme.fontsize.fs16};
  line-height: 40px;
`;
export const Date = styled.div`
  display: block;
  height: 50%;
  font-size: ${theme.fontsize.fs16};
  color: #c4c4c4;
  line-height: 40px;
`;
export const ContentsBody = styled.div`
  width: 100%;
  margin-top: 20px;

  pre {
    width: 100%;
    height: auto;
    font-size: ${theme.fontsize.fs16};
    line-height: 25px;
  }
`;
