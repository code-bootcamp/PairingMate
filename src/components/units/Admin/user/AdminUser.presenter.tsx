import { Inner } from "../../../../commons/styles/common";
import AdminNavigation from "../../../commons/layout/navigation/admin/AdminNavigation.container";
import * as AU from "./AdminUser.styles";
import { IAdminUserProps } from "./AdminUser.types";
const AdminUserUI = (props: IAdminUserProps) => {
  return (
    <>
      <AU.Wrapper>
        <AdminNavigation />
        <AU.AdminContentsWrap>
          <Inner>
            <section>
              <h2>일반유저 리스트</h2>
              <AU.UserTableWrap>
                <table>
                  <thead>
                    <tr>
                      <th>유저명</th>
                      <th>E-Mail</th>
                    </tr>
                  </thead>
                  <tbody>
                    {props.data?.map((el, index) => (
                      <tr key={index}>
                        <td>{el.name}</td>
                        <td>{el.email}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </AU.UserTableWrap>
            </section>

            <section>
              <h2>기업유저 리스트</h2>
              <AU.UserTableWrap>
                <table>
                  <thead>
                    <tr>
                      <th>업체명</th>
                      <th>E-Mail</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>PairingMate</td>
                      <td>pairingMate@pairingmate.com</td>
                    </tr>
                  </tbody>
                </table>
              </AU.UserTableWrap>
            </section>
          </Inner>
        </AU.AdminContentsWrap>
      </AU.Wrapper>
    </>
  );
};

export default AdminUserUI;
