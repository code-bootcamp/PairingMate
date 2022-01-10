import { OmitProps } from "antd/lib/transfer/ListBody";
import * as AN from "./AdminNavigation.styles";
import { AdminNavigationProps } from "./AdminNavigation.types";

const AdminNavigationUI = (props: AdminNavigationProps) => {
  return (
    <>
      <AN.AdminNavigationWrap>
        <AN.AdminUserProfile>
          <figure>
            <p>
              <img src="/images/common/logo.png" alt="" />
            </p>
            <figcaption>
              <h3>
                <span>관리자</span>님 어서오세요!
              </h3>
              <span>현재시각 : {props.time}</span>
            </figcaption>
          </figure>
        </AN.AdminUserProfile>
        <AN.AdminNavigationMenu>
          <li>
            <button>Overview</button>
          </li>
          <li>
            <button>회원관리</button>
          </li>
          <li>
            <button>문의관리</button>
          </li>
          <li>
            <button>매출관리</button>
          </li>
        </AN.AdminNavigationMenu>
      </AN.AdminNavigationWrap>
    </>
  );
};

export default AdminNavigationUI;
