import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchUseditemsArgs,
} from "../../../../commons/types/generated/types";
import BestDealListUI from "./BestDealListPresenter";
import {
  FETCH_USED_ITEMS,
  FETCH_USED_ITEMS_OF_THE_BEST,
} from "./BestDealListQueries";

const BestDealList = () => {
  const router = useRouter();

  const { data: getBestDealList, fetchMore } = useQuery<
    Pick<IQuery, "fetchUseditems">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS, {
    variables: { isSoldout: false },
  });

  const { data: getBestOfBestDealList } = useQuery<
    Pick<IQuery, "fetchUseditemsOfTheBest">,
    IQueryFetchUseditemsArgs
  >(FETCH_USED_ITEMS_OF_THE_BEST, { variables: {} });

  const onClickTitle = (event: any) => {
    router.push(`/best-deal/${router.query.bestdealId}`);
  };

  return (
    <>
      <BestDealListUI
        getBestDealList={getBestDealList}
        fetchMore={fetchMore}
        getBestOfBestDealList={getBestOfBestDealList}
        onClickTitle={onClickTitle}
      />
    </>
  );
};

export default BestDealList;
