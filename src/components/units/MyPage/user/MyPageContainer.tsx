import MyPageUI from "./MyPagePresenter";
import { useQuery } from "@apollo/client";
import { useState } from "react";
import { FETCH_BOARDS } from "./MyPageQueries";
import {
  IQuery,
  IQueryFetchBoardsArgs,
} from "../../../../commons/types/generated/types";

const MyPage = () => {
  const { data } = useQuery<Pick<IQuery, "fetchBoards">, IQueryFetchBoardsArgs>(
    FETCH_BOARDS
  );

  return <MyPageUI data={data} />;
};

export default MyPage;
