import { IQuery } from "../../../../commons/types/generated/types";

export interface IFindmateGetUIProps {
  data: Pick<IQuery, "fetchBoard">;
  onMoveToFindmatesList: () => void;
  onMoveToFindmatesUpdate: (findmateId: string) => () => void;
}
