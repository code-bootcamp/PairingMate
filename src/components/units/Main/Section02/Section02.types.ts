import { IQuery } from "../../../../commons/types/generated/types";

export interface BestFindMatesUIProps {
  data: Pick<IQuery, "fetchBoardsOfTheBest">;
  onClickFindmateGetPage: (findmateId: string) => () => void;
}
