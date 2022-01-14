// Typescript 작성
import { User } from "@firebase/auth";
import { DocumentData } from "@firebase/firestore";

import { IQuery } from "../../../../commons/types/generated/types";

export interface IMypageProps {
  data: Pick<IQuery, "fetchBoards">;
  firedata: any;
}
