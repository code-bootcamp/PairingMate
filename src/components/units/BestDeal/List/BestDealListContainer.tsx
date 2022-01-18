import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
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
  const [userImage, setUserImage] = useState("");

  const {
    data: bestDealList,
    fetchMore,
    refetch,
  } = useQuery<Pick<IQuery, "fetchUseditems">, IQueryFetchUseditemsArgs>(
    FETCH_USED_ITEMS,
    {
      variables: { isSoldout: false },
    }
  );

  const { data: bestOfBestDealList } = useQuery<
    Pick<IQuery, "fetchUseditemsOfTheBest">
  >(FETCH_USED_ITEMS_OF_THE_BEST);

  const onClickBestdealGetPage = (bestdealId: string) => () => {
    router.push(`/best-deal/${bestdealId}`);
  };

  const onClickCategory = (category: string) => () => {
    refetch({ search: category });
  };

  const onClickMoveToBestdealAddPage = () => {
    router.push(`/best-deal/add/`);
  };

  useEffect(() => {
    setUserImage(localStorage.getItem("image"));
  }, []);

  const onClickGetBestdealList = () => {
    if (!bestDealList) return;

    fetchMore({
      variables: {
        page: Math.ceil(bestDealList?.fetchUseditems.length / 10) + 1,
      },
      updateQuery: (prev: any, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchUseditems)
          return { fetchUseditems: [...prev.fetchUseditems] };

        return {
          fetchUseditems: [
            ...prev.fetchUseditems,
            ...fetchMoreResult?.fetchUseditems,
          ],
        };
      },
    });
  };

  return (
    <>
      <BestDealListUI
        bestDealList={bestDealList}
        bestOfBestDealList={bestOfBestDealList}
        onClickBestdealGetPage={onClickBestdealGetPage}
        onClickCategory={onClickCategory}
        onClickMoveToBestdealAddPage={onClickMoveToBestdealAddPage}
        onClickGetBestdealList={onClickGetBestdealList}
        userImage={userImage}
      />
    </>
  );
};

export default BestDealList;
