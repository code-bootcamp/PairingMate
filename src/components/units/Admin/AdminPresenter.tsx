import AdminNavigation from "../../commons/layout/navigation/admin/AdminNavigation.container";
import { Inner } from "../../../commons/styles/common";
import * as A from "./AdminStyles";

const AdminPageUI = () => {
  return (
    <>
      <A.Wrapper>
        <AdminNavigation />
        <A.AdminContentsWrap>
          <Inner>
            <A.UserSection>
              <h2>회원관리</h2>

              <ul>
                <li>
                  <figure>
                    <A.Subtitle>일반회원</A.Subtitle>
                    <p>
                      <img src="/images/sub/admin/ico_user.png" alt="" />
                    </p>
                    <figcaption>15명</figcaption>
                  </figure>
                </li>

                <li>
                  <figure>
                    <A.Subtitle>기업회원</A.Subtitle>
                    <figcaption>20명</figcaption>
                  </figure>
                </li>
              </ul>
            </A.UserSection>

            <section>
              <h2>문의관리</h2>
            </section>

            <section>
              <h2>매출관리</h2>
            </section>
          </Inner>
        </A.AdminContentsWrap>
      </A.Wrapper>
    </>
  );
};
export default AdminPageUI;
