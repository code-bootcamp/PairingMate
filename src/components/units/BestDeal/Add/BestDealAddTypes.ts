import { ChangeEvent, Dispatch, SetStateAction } from "react";

export interface FormValues {
  name: string;
  remarks: string;
  contents: string;
  price: number;
  tags?: string[];
  images?: string[];
  address: string[];
  data: any;
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
  onChangeCategory: (event: ChangeEvent<HTMLSelectElement>) => void;
  onChangePrice: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeTitle: (event: ChangeEvent<HTMLInputElement>) => void;
  onChangeContents: (event: ChangeEvent<HTMLTextAreaElement>) => void;
  onClickAddBestdeal: (data: FormValues) => Promise<void>;
}
