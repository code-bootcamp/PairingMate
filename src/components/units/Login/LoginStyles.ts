import styled from "@emotion/styled";
import theme from "../../../commons/styles/variables";

// Css 작성
export const LoginWrapper = styled.div`
    width: 100%;
    height: 100vh;
    background-image:url("/images/sub/login/bg_login.png");
    background-size: cover;
    background-repeat : no-repeat;
    background-position : center center;
    
`;

export const LoginWrap = styled.form`
    position: absolute;
    top:50%;
    left:50%;
    width:100%;
    max-width:500px;
    height:700px;
    transform:translate(-50%, -50%);
    background: rgba(51, 51, 51, 0.45);
    border-radius: 30px;

    @media all and ${theme.mobile}{
        position:static;
        height:500px;
        margin-top:${theme.MarginTop.mt60};
        transform: translate(0, 0);
    }  
`

export const LoginFildset = styled.fieldset`
    padding: 60px 50px;
    /* background-color: red; */
    input {
        height:30px;
        padding: 5px;
        margin-bottom:30px;
        border-bottom: 1px solid #FFFFFF;
        background-color:transparent;
        outline: none;
        color:#fff;
        &::placeholder{
            color:white;
        }
    }
`;

export const LoginFildsetTitle = styled.h1`
    font-weight:300;
    line-height:1.5;
    color:white;
    strong{
        color:white;
        font-weight: bold;
    }
`;

export const LoginFildsetInfo = styled.div`
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    margin-top:65px;
`;

export const LoginButton = styled.button`
    width:100%;
    height: 51px;
    margin:10px 0;
    background: #213358;
    border-radius: 15px;
    color:white;
`;

export const SignupWrapper = styled.div`
    margin-top : 10px;
`;

export const SignupTitle = styled.label`
    font-size:18px;
    color:white;
`;
export const SignupButton = styled.button`
    width:100%;
    height: 50px;
    margin-top:7px;
    background: white;
    border-radius: 15px;
    color:#213358;
`;
export const EmptyArea = styled.p`
    padding: 20px 0;
    text-align:center;
    color:white;
`;
export const GoogleBtn = styled.button`
    width:100%;
    height:51px;
    /* margin-top:30px; */
    background: #213358;
    border-radius:15px;
    font-weight:400;
    color:white;
    label{
        font-size:20px;
        font-weight:bold;
        /* font-style:italic; */
        color:white;
    }
`;