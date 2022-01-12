import styled from "@emotion/styled";
import theme from "../../../../../commons/styles/variables";

// Css 작성
export const SignupWrapper = styled.div`
    position: absolute; 
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 500px;
    height: 720px;
    padding: 60px 50px;
    border: 1px solid #DDDDDD;
    box-sizing: border-box;
    box-shadow: 3px 3px 10px 5px rgba(0, 0, 0, 0.25);
`;

export const SignupWrap = styled.div`
    width: 100%;
`;

export const SignupHeadTitle = styled.h1`
    font-family: Noto Sans KR;
    font-style: normal;
    font-weight: normal;
    font-size: 24px;
    line-height: 1.5;
    color: #333333;
    strong{
        color:#333333;
        font-weight: bold;
    }
`;

export const SignupProfileWrapper = styled.div`
    margin:20px 0;    
    text-align:center;

    h4{
        margin-top:20px;
        font-weight:bold;
        color:#555555;
    }
`;

export const SignupImgWrapper = styled.div`
    img{
        border-radius:50%;
        width: 200px;
        height: 200px;
    }
    input{
        display: none;
    }
`
export const SignupDisplayName = styled.input`
    outline:none;
    width:100%;
    padding:10px;
    margin-bottom:10px;
    border-bottom: 1px solid #f7f7f7;
    &::placeholder{
        color:#dddddd;
    }
`

export const SignupTagsWrapper = styled.div`
    margin: 10px 0;
    height:180px;
    max-height:200px;
    h4{
        margin-bottom:15px;
    }
`;

export const SignupFooterWrapper = styled.div`
    text-align:center;
    button{
        width:100px;
        height:30px;
        background-color: lightgray;
    }
`