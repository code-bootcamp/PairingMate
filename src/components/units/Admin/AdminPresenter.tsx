import AdminNavigation from "../../commons/layout/navigation/admin/AdminNavigation.container";
import { Inner } from "../../../commons/styles/common";
import * as A from "./AdminStyles";

const AdminPageUI = () => {
  return (
    <>
      <A.Wrapper>
        <AdminNavigation />
        <A.AdminContentsWrap>
          <Inner></Inner>
        </A.AdminContentsWrap>
      </A.Wrapper>
    </>
  );
};
export default AdminPageUI;
