import { useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD } from "./FindMatesGetQueries";
import FindmatesGetUI from "./FindMatesGetPresenter";
import {
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";

const FindmatesGet = () => {
  const router = useRouter();

  const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(
    FETCH_BOARD,
    { variables: { boardId: String(router.query.findmateId) } }
  );

  const onMoveToFindmatesUpdate = (findmateId: string) => () => {
    router.push(`/find-mates/${findmateId}/update/`);
  };

  return (
    <FindmatesGetUI
      data={data}
      onMoveToFindmatesList={() => router.push("/find-mates")}
      onMoveToFindmatesUpdate={onMoveToFindmatesUpdate}
    />
  );
};

export default FindmatesGet;
