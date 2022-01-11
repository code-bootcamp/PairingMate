import { ChangeEvent, Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

// export interface FormValues {
//   name: string;
//   remarks: string;
//   contents: string;
//   price: number;
//   tags?: string[];
//   images?: string[];
//   address: string[];
//   data: any;
// }

export interface BestdealAddProps {
  data?: Pick<IQuery, "fetchUseditem">;
  isUpdate?: boolean;
}

export interface BestdealAddUIProps {
  setImages: Dispatch<SetStateAction<any[]>>;
  setTags: Dispatch<SetStateAction<string[]>>;
  tags: string[];
  setBoardAddress: Dispatch<
    SetStateAction<{
      address: string;
    }>
  >;
  data: any;
  isUpdate?: boolean;
  setIsUpdateImages: Dispatch<SetStateAction<boolean>>;
  setIsUpdateTag: Dispatch<SetStateAction<boolean>>;
  onChangeCategory: (event: ChangeEvent<HTMLSelectElement>) => void;
  onChangePrice: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickAddBestdeal: () => void;
  onClickUpdateBestdeal: () => void;
}

export interface UpdateUseditemInput {
  name?: string;
  remarks?: string;
  contents?: string;
  price?: number;
  tags?: string[];
  images?: string[];
  useditemAddress?: {};
}
