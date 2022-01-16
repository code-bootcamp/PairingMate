import FindMatesAdd from "../../../../src/components/units/FindMates/add/FindMatesAddContainer";
import { withAuth } from "../../../../src/components/commons/hocs/withAuth";

const FindmatesUpdatePage = () => {
  return <FindMatesAdd isUpdate={true} />;
};

export default withAuth(FindmatesUpdatePage);
