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

  const onClickTabActive = (event: any) => {
    const current = event.currentTarget;
    const chkActive = current.classList.value.indexOf("on");
    check();

    if (chkActive === -1) {
      current.classList.add("on");
    }
  };

  const check = () => {
    const checkitem = document.getElementsByClassName("tab");
    for (let i = 0; i < checkitem[0].children.length; i++) {
      checkitem[0].children[i].classList.remove("on");
    }
  };
  return <MyPageUI onClickTabActive={onClickTabActive} data={data} />;
};

export default MyPage;
