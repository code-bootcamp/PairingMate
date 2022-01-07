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

const FindmatesGet = () => {
  const router = useRouter();

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

  return (
    <FindmatesGetUI
      data={data}
      onMoveToFindmatesList={() => router.push("/find-mates")}
      onMoveToFindmatesUpdate={onMoveToFindmatesUpdate}
      onClickDeleteFindmates={onClickDeleteFindmates}
      onClickLikeFindmates={onClickLikeFindmates}
    />
  );
};

export default FindmatesGet;
