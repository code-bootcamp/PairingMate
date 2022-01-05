import { ChangeEvent, KeyboardEvent, Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface FindmatesAddProps {
  data?: Pick<IQuery, "fetchBoard">;
  isUpdate?: boolean;
}

export interface FindmatesAddUIProps {
  tags: string[];
  setTags: Dispatch<SetStateAction<string[]>>;
  setIsUpdateTag: Dispatch<SetStateAction<boolean>>;
  data?: Pick<IQuery, "fetchBoard">;
  isUpdate?: boolean;
  setImages: Dispatch<SetStateAction<any[]>>;
  setIsUpdateImages: Dispatch<SetStateAction<boolean>>;
  setBoardAddress: Dispatch<
    SetStateAction<{
      zipcode: string;
      address: string;
      addressDetail?: string;
    }>
  >;
  onChangeCategory: (event: ChangeEvent<HTMLSelectElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickAddFindmate: () => void;
  onClickUpdateFindmate: () => void;
}

export interface UpdateBoardInput {
  title?: string;
  contents?: string;
  youtubeUrl?: string;
  images?: string[];
  boardAddress?: {};
}
