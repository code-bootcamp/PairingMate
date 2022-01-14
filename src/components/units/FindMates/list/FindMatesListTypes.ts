import { IQuery } from "../../../../commons/types/generated/types";

export interface FindmateListUIProps {
  data: Pick<IQuery, "fetchBoards">;
  findmatesCount: Pick<IQuery, "fetchBoardsCount">;
  profileImg: string;
  onClickCategory: (category: string) => () => void;
  onClickFindmateGetPage: (findmateId: string) => () => void;
  onClickLoadMore: () => void;
  onClickMoveToFindmateAddPage: () => void;
}
