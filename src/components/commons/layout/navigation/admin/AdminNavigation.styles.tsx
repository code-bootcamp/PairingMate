import {
  Calculator,
  ClipboardList,
  Database,
  GripVertical,
} from "@emotion-icons/fa-solid";
import styled from "@emotion/styled";
import theme from "../../../../../commons/styles/variables";

export const AdminNavigationWrap = styled.nav`
  width: 10%;
  height: 100vh;
  padding: 100px 30px;
  border: 1px solid #ebebeb;
  background-color: ${theme.colorPoint};
`;

export const AdminUserProfile = styled.div`
  padding: 50px 0;
  text-align: center;

  p {
    width: 100%;
    padding: 15px;
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
    position: relative;
    padding: 15px 0;
    button {
      margin-left: 35px;
      font-size: ${theme.fontsize.fs18};
      color: #fff;
    }
  }
`;

// ICON

export const OverviewIco = styled(GripVertical)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #fff;
`;

export const UserIco = styled(Database)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #fff;
`;

export const InquiryIco = styled(ClipboardList)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #fff;
`;

export const SalesIco = styled(Calculator)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  width: 20px;
  height: 20px;
  color: #fff;
`;
