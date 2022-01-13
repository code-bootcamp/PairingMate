import styled from "@emotion/styled";
import { Button } from 'antd';
import theme from "../../../commons/styles/variables";

// Css 작성
export const SignUpWrapper = styled.div`
    position: absolute; 
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 500px;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    box-shadow: 3px 3px 10px 5px rgba(0, 0, 0, 0.25);
    
    @media all and ${theme.mobile}{
        width:100%;
        box-shadow: none;
        border:none;
    }
`;

export const SignUpWrap = styled.div`
    height:100%;
    padding: 60px 50px;
`;

export const SignUpHeadTitle = styled.h1`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 1.5;
    color: #333333;
    strong{
        color:#324E86;
        font-weight: bold;
    }
`;

export const SignUpBodyTitle = styled.label`
    display: block;
    margin-top: 30px;
    font-weight:400;
    font-size:16px;
`;

export const SignUpButtonWrapper = styled.div`
    display: flex;
    flex-direction:column;
    justify-content:space-between;
    height:180px;
    margin-top: 30px;
`;

export const SignUpFooterTitle = styled.label`
    display: block;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;
`;

export const SignUpButton = styled(Button)`
    display: block;
    width: 100%;
    height:50px;
    margin-top:5px;
    text-align:left;
    line-height:23px;
`;  

