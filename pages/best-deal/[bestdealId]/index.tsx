import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import BestDealGet from "../../../src/components/units/BestDeal/Get/BestDealGetContainer";

const BestDealGetPage = () => {
  return (
    <>
      <BestDealGet />
    </>
  );
};

export default withAuth(BestDealGetPage);
