import * as AN from "./AdminNavigation.styles";
import { AdminNavigationProps } from "./AdminNavigation.types";

const AdminNavigationUI = (props: AdminNavigationProps) => {
  return (
    <>
      <AN.AdminNavigationWrap>
        <AN.AdminUserProfile>
          <figure>
            <p>
              <button onClick={props.onClickMoveToMain}>
                <img src="/images/common/white-logo.png" alt="" />
              </button>
            </p>
            <figcaption>
              <h3>
                <span>관리자</span> 님 어서오세요!
              </h3>
              <span>
                접속시각 <br />
                <br /> {props.time}
              </span>
            </figcaption>
          </figure>
        </AN.AdminUserProfile>
        <AN.AdminNavigationMenu>
          <li>
            <AN.OverviewIco />
            <button onClick={props.onClickMoveToOverview}>Overview</button>
          </li>
          <li>
            <AN.UserIco />
            <button onClick={props.onClickMoveToUser}>회원관리</button>
          </li>
          <li>
            <AN.InquiryIco />
            <button onClick={props.onClickMoveToInquiry}>문의관리</button>
          </li>
          <li>
            <AN.SalesIco />
            <button onClick={props.onClickMoveToSales}>매출관리</button>
          </li>
        </AN.AdminNavigationMenu>
      </AN.AdminNavigationWrap>
    </>
  );
};

export default AdminNavigationUI;
