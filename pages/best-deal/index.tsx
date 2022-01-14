import { withAuth } from "../../src/components/commons/hocs/withAuth";
import BestDealList from "../../src/components/units/BestDeal/List/BestDealListContainer";

const BestDealListPage = () => {
  return (
    <>
      {/* <div>zzzz</div> */}
      <BestDealList />
    </>
  );
};
export default withAuth(BestDealListPage);
