import { MutableRefObject, Dispatch, SetStateAction, ChangeEvent } from "react";

export interface UploadsProps {
  data: string[];
  isUpdate: boolean;
  setImages: Dispatch<SetStateAction<any[]>>;
  setIsUpdateImages: Dispatch<SetStateAction<boolean>>;
}

export interface UploadsUIProps {
  data: string[];
  isUpdate: boolean;
  uploadFile: any[];
  fileRef: MutableRefObject<HTMLInputElement>;
  isChangeImages: boolean;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteFile: (el: string) => () => void;
  onClickUploadIcon: () => void;
}
