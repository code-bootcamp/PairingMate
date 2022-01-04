import { Modal } from "antd";
import UploadsAddUI from "./UploadsAddPresenter";
import { ChangeEvent, useRef, useState } from "react";
import { checkValidationImage } from "../UploadsValidation";
import { UPLOAD_FILE } from "../UploadsQueries";
import { useMutation } from "@apollo/client";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../../commons/types/generated/types";
import { IUploadsProps } from "../UploadsTypes";

const UploadsAdd = (props: IUploadsProps) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile, setUploadFile] = useState<string[]>([]);
  const [uploadStorage] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    const file = checkValidationImage(event.target.files[0]);

    if (file) {
      try {
        const result = await uploadStorage({ variables: { file } });
        setUploadFile((prev) => [...prev, result.data.uploadFile.url]);
        props.setImages((prev) => [...prev, result.data.uploadFile.url]);
      } catch (error) {
        Modal.error({ content: error.message });
      }
    }
  };

  const onClickDeleteFile = (el: string) => () => {
    const newUploadFile = uploadFile.filter((prev) => prev !== el);
    setUploadFile(newUploadFile);
    props.setImages(newUploadFile);
  };

  const onClickUploadIcon = () => {
    fileRef.current?.click();
  };

  return (
    <UploadsAddUI
      onChangeFile={onChangeFile}
      onClickDeleteFile={onClickDeleteFile}
      onClickUploadIcon={onClickUploadIcon}
      uploadFile={uploadFile}
      fileRef={fileRef}
    />
  );
};

export default UploadsAdd;
