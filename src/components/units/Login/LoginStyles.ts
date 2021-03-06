import styled from "@emotion/styled";
import theme from "../../../commons/styles/variables";

// Css 작성
export const LoginWrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url("/images/sub/login/bg_login.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;

  @media all and ${theme.mobile} {
    height: 100vh;
  }
`;

export const LoginWrap = styled.form`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  max-width: 500px;
  height: 700px;
  transform: translate(-50%, -50%);
  background: rgba(51, 51, 51, 0.45);
  border-radius: 30px;

  @media all and ${theme.mobile} {
    position: static;
    height: 500px;
    margin-top: ${theme.MarginTop.mt60};
    transform: translate(0, 0);
  }
`;

export const LoginFildset = styled.fieldset`
  padding: 60px 50px;
  input {
    height: 30px;
    padding: 5px;
    margin-bottom: 30px;
    border-bottom: 1px solid #ffffff;
    background-color: transparent;
    outline: none;
    color: #fff;
    &::placeholder {
      color: white;
    }
  }
  @media all and ${theme.mobile} {
    padding: 30px 20px;
    height: 500px;
  }
`;

export const LoginFildsetTitle = styled.h1`
  font-weight: 300;
  line-height: 1.5;
  color: white;
  strong {
    color: white;
    font-weight: bold;
  }
`;

export const LoginFildsetInfo = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-top: 65px;

  @media all and ${theme.mobile} {
    margin-top: 25px;
  }
`;

export const LoginButton = styled.button`
  width: 100%;
  height: 51px;
  margin: 10px 0;
  background: #213358;
  border-radius: 15px;
  color: white;

  @media all and ${theme.mobile} {
    height: 35px;
    margin: 5px 0;
  }
`;

export const SignupWrapper = styled.div`
  margin-top: 10px;
`;

export const SignupTitle = styled.label`
  font-size: ${theme.fontsize.fs18};
  color: white;
`;
export const SignupButton = styled.button`
  width: 100%;
  height: 50px;
  background: white;
  border-radius: 15px;
  color: #213358;

  @media all and ${theme.mobile} {
    height: 30px;
  }
`;
export const EmptyArea = styled.p`
  padding: 20px 0;
  text-align: center;
  color: white;
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
        font-size:${theme.fontsize.fs20};
        font-weight:bold;
        /* font-style:italic; */
        color:white;
    }

    @media all and ${theme.mobile}{
        height:35px;
        font-size: ${theme.fontsize.fs16};
        /* margin:5px 0; */

`;
