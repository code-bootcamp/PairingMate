import { useQuery } from "@apollo/client";
import router from "next/router";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";
import MainSection02UI from "./Section02.presenter";
import { FETCH_BOARDS } from "./Section02.quries";

const MainSection02 = () => {
  const { data } = useQuery<
    Pick<IQuery, "fetchBoardsOfTheBest">,
    IQueryFetchBoardsArgs
  >(FETCH_BOARDS);

  const onClickFindmateGetPage = (findmateId: string) => () => {
    router.push(`/find-mates/${findmateId}/`);
  };

  return (
    <>
      <MainSection02UI
        data={data}
        onClickFindmateGetPage={onClickFindmateGetPage}
      />
    </>
  );
};

export default MainSection02;
