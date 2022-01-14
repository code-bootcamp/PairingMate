import { withAuth } from "../../../../src/components/commons/hocs/withAuth";
import MyPage from "../../../../src/components/units/MyPage/user/MyPageContainer";

const mypage = () => {
  return <MyPage />;
};

export default withAuth(mypage);
