import { IQuery } from "../../../../commons/types/generated/types";

export interface IFindmateGetUIProps {
  data: Pick<IQuery, "fetchBoard">;
  isWriter: boolean;
  onMoveToFindmatesList: () => void;
  onMoveToFindmatesUpdate: (findmateId: string) => () => void;
  onClickDeleteFindmates: (boardId: string) => () => Promise<void>;
  onClickLikeFindmates: (boardId: string) => () => Promise<void>;
  onClickChatting: () => void;
}
