import { useMutation } from "@apollo/client";
import { useRef, ChangeEvent, useState } from "react";
import UploadsUI from "./UploadsPresenter";
import { UPLOAD_FILE } from "./UploadsQueries";
import { checkValidationImage } from "./UploadsValidation";
import { Modal } from "antd";
import { UploadsProps } from "./UploadsTypes";

const Uploads = (props: UploadsProps) => {
  const fileRef = useRef<HTMLInputElement>(null);
  const [uploadFile, setUploadFile] = useState([]);
  const [uploadStorage] = useMutation(UPLOAD_FILE);
  const [isChangeImages, setIsChangeImages] = useState(false);

  const onClickUploadIcon = () => {
    fileRef.current?.click();
  };

  const onChangeFile = async (event: ChangeEvent<HTMLInputElement>) => {
    if (props.isUpdate) {
      // 수정일때
      const file = checkValidationImage(event.target.files[0]);

      if (file) {
        try {
          const result = await uploadStorage({ variables: { file } });

          if (isChangeImages) {
            setUploadFile((prev) => [...prev, result.data.uploadFile.url]);
            props.setImages((prev: []) => [
              ...prev,
              result.data.uploadFile.url,
            ]);
          } else {
            setUploadFile([...props.data, result.data.uploadFile.url]);
            props.setImages([...props.data, result.data.uploadFile.url]);
            console.log(result.data.uploadFile.url);
            setIsChangeImages(true);
            props.setIsUpdateImages(true);
          }
        } catch (error) {
          Modal.error({ content: error.message });
        }
      }
    } else {
      // 등록일때
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
    }
  };

  const onClickDeleteFile = (el: string) => () => {
    if (props.isUpdate) {
      if (isChangeImages) {
        const temp = uploadFile.filter((prev) => prev !== el);
        setUploadFile([...temp]);
        props.setImages([...temp]);
      } else {
        const temp = props.data.filter((prev) => prev !== el);
        setUploadFile([...temp]);
        props.setImages([...temp]);
        setIsChangeImages(true);
        props.setIsUpdateImages(true);
      }
    } else {
      const newUploadFile = uploadFile.filter((prev) => prev !== el);
      setUploadFile(newUploadFile);
      props.setImages(newUploadFile);
    }
  };

  return (
    <UploadsUI
      isUpdate={props.isUpdate}
      data={props.data}
      uploadFile={uploadFile}
      fileRef={fileRef}
      isChangeImages={isChangeImages}
      onClickUploadIcon={onClickUploadIcon}
      onChangeFile={onChangeFile}
      onClickDeleteFile={onClickDeleteFile}
    />
  );
};

export default Uploads;
