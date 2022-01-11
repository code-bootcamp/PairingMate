import { IQuery } from "../../../../commons/types/generated/types";

export interface BestdealListUIProps {
  onClickBestdealGetPage: (bestdealId: string) => () => void;
  onClickCategory: (category: string) => void;
  onClickMoveToBestdealAddPage: () => void;
  onClickGetBestdealList: () => void;
  bestOfBestDealList: Pick<IQuery, "fetchUseditemsOfTheBest">;
  bestDealList: Pick<IQuery, "fetchUseditems">;
}
