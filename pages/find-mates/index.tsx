import { withAuth } from "../../src/components/commons/hocs/withAuth";
import FindmatesList from "../../src/components/units/FindMates/list/FindMatesListContainer";

const FindMatesListPage = () => {
  return <FindmatesList />;
};

export default withAuth(FindMatesListPage);
