import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import BestDealAdd from "../../../src/components/units/BestDeal/Add/BestDealAddContainer";

const BestDealAddPage = () => {
  return <BestDealAdd />;
};

export default withAuth(BestDealAddPage);
