import { IQuery } from "../../../../commons/types/generated/types";

export interface IBestDealGetUIProps {
  data: Pick<IQuery, "fetchUseditem">;
  onMoveToBestdealUpdate: (bestdealId: string) => () => void;
  onClickDeleteBestdeal: (useditemId: string) => () => void;
}
