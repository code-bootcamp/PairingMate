import { ChangeEvent, KeyboardEvent, Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface FindmatesAddProps {
  data?: Pick<IQuery, "fetchBoard">;
  isUpdate?: boolean;
}

export interface FindmatesAddUIProps {
  inputTag: string;
  tags: string[];
  data?: Pick<IQuery, "fetchBoard">;
  isUpdate?: boolean;
  setImages: Dispatch<SetStateAction<any[]>>;
  setBoardAddress: Dispatch<
    SetStateAction<{
      zipcode: string;
      address: string;
      addressDetail?: string;
    }>
  >;
  onChangeCategory: (event: ChangeEvent<HTMLSelectElement>) => void;
  onChangeInputTags: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTags: (event: KeyboardEvent) => void;
  onClickDelteTags: (tag: string) => () => void;
  onClickAddFindmate: () => void;
  onClickUpdateFindmate: () => void;
}
