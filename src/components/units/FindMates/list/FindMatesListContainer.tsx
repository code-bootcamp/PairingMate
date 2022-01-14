import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  IQuery,
  IQueryFetchBoardsArgs,
  IQueryFetchBoardsCountArgs,
} from "../../../../commons/types/generated/types";
import FindmatesListUI from "./FindMatesListPresenter";
import { FETCH_BOARDS, FETCH_BOARDS_COUNT } from "./FindMatesListQueries";

const FindmatesList = () => {
  const { data, refetch, fetchMore } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const router = useRouter();
  const [profileImg, setProfileImg] = useState("");

  useEffect(() => {
    setProfileImg(localStorage.getItem("image"));
  }, []);

  const { data: findmatesCount, refetch: refetchCount } = useQuery<
    Pick<IQuery, "fetchBoardsCount">,
    IQueryFetchBoardsCountArgs
  >(FETCH_BOARDS_COUNT);

  const onClickCategory = (category: string) => () => {
    refetch({ search: category });
    refetchCount({ search: category });
  };

  const onClickFindmateGetPage = (findmateId: string) => () => {
    router.push(`/find-mates/${findmateId}/`);
  };

  const onClickLoadMore = () => {
    if (!data) return;

    fetchMore({
      variables: { page: Math.ceil(data.fetchBoards.length / 10) + 1 },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult?.fetchBoards)
          return { fetchBoards: [...prev.fetchBoards] };

        return {
          fetchBoards: [...prev.fetchBoards, ...fetchMoreResult?.fetchBoards],
        };
      },
    });
  };

  return (
    <FindmatesListUI
      data={data}
      findmatesCount={findmatesCount}
      profileImg={profileImg}
      onClickCategory={onClickCategory}
      onClickFindmateGetPage={onClickFindmateGetPage}
      onClickLoadMore={onClickLoadMore}
      onClickMoveToFindmateAddPage={() => router.push("/find-mates/add")}
    />
  );
};

export default FindmatesList;
