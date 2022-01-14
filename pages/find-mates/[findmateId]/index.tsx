import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import FindmatesGet from "../../../src/components/units/FindMates/get/FindMatesGetContainer";

const FindMatesGetPage = () => {
  return <FindmatesGet />;
};

export default withAuth(FindMatesGetPage);
