import styled from "@emotion/styled";
import theme from "../../../../../commons/styles/variables";

// Css 작성
export const SignUpWrapper = styled.div`
    position: absolute; 
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 600px;
    padding: 60px 50px;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    box-shadow: 3px 3px 10px 5px rgba(0, 0, 0, 0.25);

    @media all and ${theme.mobile}{
        width: 100%;
        height: auto 0;
        box-shadow: none;
        border:none;
    }
`;

export const SignUpWrap = styled.div`
    height:100%;
`;

export const SignUpHeadTitle = styled.h1`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 1.5;
    color: #333333;
    strong{
        color:#324E86;;
        font-weight: bold;
    }
`;

export const SignUpInfoWrapper = styled.div`
    display: flex;
    flex-direction:column;
    margin-top : 30px;
    /* background-color: green ; */
`;

export const SignUpInfoWrap = styled.div`
    margin-bottom: 15px;
`;

export const SignUpInfoTitle = styled.label`
    font-weight: 500;
    font-size: 16px;
    line-height: 23px;
    label{
        color:red;
    }
`;

export const SignUpInputWrap = styled.div`
    /* width: 100%; */
`;

export const SignUpInput = styled.input`
    width: 100%;
    height: 40px;
    padding: 0 10px;
    border-bottom: 1px solid #DDDDDD;
    line-height:20px;
    &::placeholder{
        font-family: Noto Sans KR;
        font-style: normal;
        font-weight: normal;
        font-size: 16px;
        color: #EBEBEB;
        line-height: 20px;
    }
    outline:none;
`;

export const SignUpButton = styled.button`
    margin: 30px auto;
    position: relative;
    width: 150px;
    height: 40px;
    background: #C4C4C4;
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 14px;
    line-height: 40px;
    text-align: center;
    color: #555555;

    @media all and ${theme.mobile}{
        margin : 40px auto;
    }

    @media all and ${theme.tablet}{
        margin : 30px auto;
    }
`;

