import AdminNavigation from "../../navigation/admin/AdminNavigation.container";
import * as H from "./Header.styles";
import { HeaderProps } from "./Header.types";

const HeaderUI = (props: HeaderProps) => {
  return (
    <>
      <H.Header>
        {/* <H.Logo>
          <button onClick={props.onClickMoveToMain}></button>
        </H.Logo> */}
        <AdminNavigation />
      </H.Header>
    </>
  );
};

export default HeaderUI;
