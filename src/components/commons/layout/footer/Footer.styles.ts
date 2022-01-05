import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";

export const Footer = styled.footer`
  width: 100%;
  height: 300px;
  background-color: #ebebeb;
`;

export const FooterInner = styled.div`
  padding: 50px 80px;

  &::after {
    content: "";
    display: block;
    clear: both;
  }
`;

export const FooterLogo = styled.h1`
  float: left;
  margin-right: 100px;
  button {
    width: 132px;
    height: 60px;

    img {
      display: block;
      width: 100%;
      height: 100%;
    }
  }
`;

export const FooterMenu = styled.ul`
  padding-top: ${theme.PaddingTop.pt20};
  li {
    display: inline-block;
    padding: 5px 10px;
  }
`;

export const CopyRight = styled.p`
  padding-top: ${theme.PaddingTop.pt70};
  text-align: center;
`;
