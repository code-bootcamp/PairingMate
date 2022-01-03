import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import FindmatesListUI from "./FindMatesListPresenter";
import { FETCH_BOARDS } from "./FindMatesListQueries";

const FindmatesList = () => {
  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoards">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);
  const router = useRouter();

  const onClickCategory = (category: string) => () => {
    refetch({ search: category });
  };

  const onClickFindmateGetPage = (findmateId: string) => () => {
    router.push(`/find-mates/${findmateId}/`);
  };

  return (
    <FindmatesListUI
      data={data}
      onClickCategory={onClickCategory}
      onClickFindmateGetPage={onClickFindmateGetPage}
      onClickMoveToFindmateAddPage={() => router.push("/find-mates/add")}
    />
  );
};

export default FindmatesList;
