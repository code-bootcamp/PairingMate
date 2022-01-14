import { useMutation, useQuery } from "@apollo/client";
import { useRouter } from "next/router";
import { FETCH_BOARD, DELETE_BOARD, LIKE_BOARD } from "./FindMatesGetQueries";
import FindmatesGetUI from "./FindMatesGetPresenter";
import {
  IMutation,
  IMutationDeleteBoardArgs,
  IMutationLikeBoardArgs,
  IQuery,
  IQueryFetchBoardArgs,
} from "../../../../commons/types/generated/types";
import { Modal } from "antd";
import {
  getTitle,
  replaceUrl,
} from "../../../../commons/libraries/utils/utils";
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";
import { app } from "../../../../../pages/_app";

const FindmatesGet = () => {
  const db = getFirestore(app);
  const router = useRouter();
  const [isWriter, setIsWriter] = useState(false);

  const { data, refetch } = useQuery<
    Pick<IQuery, "fetchBoard">,
    IQueryFetchBoardArgs
  >(FETCH_BOARD, { variables: { boardId: String(router.query.findmateId) } });

  const [deleteFindmates] = useMutation<
    Pick<IMutation, "deleteBoard">,
    IMutationDeleteBoardArgs
  >(DELETE_BOARD);

  const [likeBoard] = useMutation<
    Pick<IMutation, "likeBoard">,
    IMutationLikeBoardArgs
  >(LIKE_BOARD);

  const getFireBaseData = async () => {
    const boardRef = collection(db, "findmatesBoard");
    const q = query(
      boardRef,
      where("writer.name", "==", localStorage.getItem("name"))
    );
    const result = await getDocs(q);
    let boardOfMine = [];
    result?.docs.map(
      (el) => (boardOfMine = [...boardOfMine, el.data().boardId])
    );
    boardOfMine.includes(data?.fetchBoard._id) && setIsWriter(true);
  };

  useEffect(() => {
    getFireBaseData();
  });

  const onMoveToFindmatesUpdate = (findmateId: string) => () => {
    router.push(`/find-mates/${findmateId}/update/`);
  };

  const onClickDeleteFindmates = (boardId: string) => async () => {
    try {
      await deleteFindmates({ variables: { boardId } });
      Modal.success({ content: "삭제가 완료 되었습니다." });
      router.push("/find-mates");
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickLikeFindmates = (boardId: string) => async () => {
    try {
      await likeBoard({ variables: { boardId } });
      refetch();
    } catch (error) {
      Modal.error({ content: error.message });
    }
  };

  const onClickChatting = () => {
    const user = encodeURIComponent(localStorage.getItem("name"));
    const room = encodeURIComponent(getTitle(data?.fetchBoard.title));
    const image = encodeURIComponent(localStorage.getItem("image"));
    window.open(
      `https://pairingmates-chatting.herokuapp.com?user=${user}&room=${room}&img=${image}`,
      "ParingMate-chatting",
      "width=500px,height=550px,scrollbars=yes,resizable=no,left=100px,top=250px"
    );
  };

  return (
    <FindmatesGetUI
      data={data}
      isWriter={isWriter}
      onMoveToFindmatesList={() => router.push("/find-mates")}
      onMoveToFindmatesUpdate={onMoveToFindmatesUpdate}
      onClickDeleteFindmates={onClickDeleteFindmates}
      onClickLikeFindmates={onClickLikeFindmates}
      onClickChatting={onClickChatting}
    />
  );
};

export default FindmatesGet;
