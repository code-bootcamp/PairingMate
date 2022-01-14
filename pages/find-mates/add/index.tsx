import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import FindMatesAdd from "../../../src/components/units/FindMates/add/FindMatesAddContainer";

const FindmatesAddPage = () => {
  return <FindMatesAdd />;
};

export default withAuth(FindmatesAddPage);
