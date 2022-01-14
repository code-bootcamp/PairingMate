// Typescript 작성

import { IQuery } from "../../../../commons/types/generated/types";

export interface IMypageProps {
  data: Pick<IQuery, "fetchBoards">;
  firedata: any;
  buylist: any;
}
