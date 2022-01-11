import { useMutation, useQuery } from "@apollo/client";
import { Modal } from "antd";
import { useRouter } from "next/router";
import {
  IMutation,
  IMutationDeleteUseditemArgs,
  IQuery,
  IQueryFetchUseditemArgs,
} from "../../../../commons/types/generated/types";
import BestDealGetUI from "./BestDealGetPresenter";
import { DELETE_USED_ITEM, FETCH_USED_ITEM } from "./BestDealGetQueries";

const BestDealGet = () => {
  const router = useRouter();

  const { data } = useQuery<
    Pick<IQuery, "fetchUseditem">,
    IQueryFetchUseditemArgs
  >(FETCH_USED_ITEM, {
    variables: { useditemId: String(router.query.bestdealId) },
  });

  const [deleteBestdeal] = useMutation<
    Pick<IMutation, "deleteUseditem">,
    IMutationDeleteUseditemArgs
  >(DELETE_USED_ITEM);

  const onMoveToBestdealUpdate = (bestdealId: string) => () => {
    router.push(`/best-deal/${bestdealId}/update/`);
  };

  const onClickDeleteBestdeal = (useditemId: string) => async () => {
    try {
      await deleteBestdeal({ variables: { useditemId } });
      Modal.success({ content: "삭제되었습니다" });
      router.push("/best-deal");
    } catch (error) {
      console.log("삭제실패하였습니다");
    }
  };

  const onMoveToPayment = () => {};

  return (
    <BestDealGetUI
      data={data}
      onMoveToBestdealUpdate={onMoveToBestdealUpdate}
      onClickDeleteBestdeal={onClickDeleteBestdeal}
    />
  );
};

export default BestDealGet;
