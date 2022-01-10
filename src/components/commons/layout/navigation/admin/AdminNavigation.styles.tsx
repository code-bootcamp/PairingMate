import styled from "@emotion/styled";
import theme from "../../../../../commons/styles/variables";

export const AdminNavigationWrap = styled.nav`
  width: 20%;
  height: 100vh;
  padding: 150px 100px;
  border: 1px solid #ebebeb;
  background-color: ${theme.colorPoint};
`;

export const AdminUserProfile = styled.div`
  padding: 50px 0;
  text-align: center;

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 250px;
    height: 250px;
    margin: 0 auto;
    padding: 30px;
    border-radius: 50%;
    border: 1px solid #ebebeb;
    background-color: #fff;

    img {
      display: block;
      width: 100%;
    }
  }
  figcaption {
    margin-top: ${theme.MarginTop.mt40};
    text-align: center;

    h3 {
      display: block;
      padding-bottom: ${theme.PaddingBottom.pb20};
      font-size: ${theme.fontsize.fs20};
      color: #fff;
      span {
        font-weight: bold;
      }
    }

    span {
      color: #fff;
    }
  }
`;

export const AdminNavigationMenu = styled.ul`
  margin-top: ${theme.MarginTop.mt50};
  li {
    padding: 15px 0;
    button {
      font-size: ${theme.fontsize.fs24};
      color: #fff;
    }
  }
`;
