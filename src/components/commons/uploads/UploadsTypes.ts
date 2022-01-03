import { ChangeEvent, MutableRefObject, Dispatch, SetStateAction } from "react";

export interface IUploadsProps {
  setImages: Dispatch<SetStateAction<any[]>>;
}

export interface IUploadsUIProps {
  uploadFile: string[];
  fileRef: MutableRefObject<HTMLInputElement>;
  onChangeFile: (event: ChangeEvent<HTMLInputElement>) => void;
  onClickDeleteFile: (el: string) => () => void;
  onClickUploadIcon: () => void;
}
