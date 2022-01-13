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
        border: none;
        box-shadow:none;
    }
`;

export const SignUpWrap = styled.div`
    height:100%;
`;

export const SignUpHeadTitle = styled.h1`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: ${theme.fontsize.fs30};
    line-height: 1.5;
    color: ${theme.fontColorBase};
    strong{
        color:#324E86;
        font-weight: bold;
        @media all and ${theme.mobile}{
            font-size:${theme.fontsize.fs35};
            color:#324E86;
        }
    }
    @media all and ${theme.mobile}{
            font-size:${theme.fontsize.fs35};
        }
`;

export const SignUpInfoWrapper = styled.div`
    display: flex;
    flex-direction:column;
    margin-top : 30px;
`;

export const SignUpInfoWrap = styled.div`
    margin-bottom: 30px;
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
    margin: 10px auto;
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

    @media all and ${theme.tablet}{
        margin: 30px auto;
    }
    
`;

