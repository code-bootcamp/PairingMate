import { IQuery } from "../../../../commons/types/generated/types";

export interface IMainSection03Props {
  data: Pick<IQuery, "fetchUseditems">;
  onClickBestdealGetPage: (bestdealId: string) => () => void;
}
