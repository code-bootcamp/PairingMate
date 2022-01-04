import { IQuery } from "../../../../commons/types/generated/types";

export interface FindmateListUIProps {
  data: Pick<IQuery, "fetchBoards">;
  onClickCategory: (category: string) => () => void;
  onClickFindmateGetPage: (findmateId: string) => () => void;
  onClickMoveToFindmateAddPage: () => void;
}
