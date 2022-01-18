import { useQuery } from "@apollo/client";
import router from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import { FETCH_USED_ITEMS } from "../../BestDeal/List/BestDealListQueries";
import MainSection03UI from "./Section03.presenter";
const onClickBestdealGetPage = (bestdealId: string) => () => {
  router.push(`/best-deal/${bestdealId}`);
};
const MainSection03 = () => {
  const { data } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS);
  return (
    <>
      <MainSection03UI
        data={data}
        onClickBestdealGetPage={onClickBestdealGetPage}
      />
    </>
  );
};

export default MainSection03;
