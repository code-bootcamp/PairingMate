import styled from "@emotion/styled";

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
`;

export const SignUpWrap = styled.div`
    height:100%;
    padding: 60px 50px;
    background-color: #87CEFA;
`;

export const SignUpHeadTitle = styled.h1`
    font-weight:400;
    font-size:24px;
    line-height:1.5;
    color:black;
    strong{
        color:white;
        font-weight: bold;
        text-shadow: 2px 2px 2px gray;
    }
`;

export const SignUpBodyTitle = styled.label`
    display: block;
    margin:20px 0px;
    font-weight:400;
    font-size:16px;
    color:white;
`;

export const SignUpRadioWrapper = styled.div`
    
`;

export const SignUpFooterTitle = styled.label`
    display: block;
    margin-bottom: 7px;
    font-weight: normal;
    font-size: 16px;
    line-height: 23px;

`;

export const SignUpRadio = styled.input`
    margin-bottom: 10px;
`;

