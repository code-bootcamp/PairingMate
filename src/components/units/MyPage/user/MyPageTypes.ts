// Typescript 작성

import { IQuery } from "../../../../commons/types/generated/types";
import { ChangeEvent } from "react";

export interface IMypageProps {
  data: Pick<IQuery, "fetchBoards">;
  isChanged: boolean;
  profileImage: string;
  firedata: any;
  buylist: any;
  onClickProfileImage: () => void;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => Promise<void>;
  onClickUpdateProfileImg: () => Promise<void>;
}
