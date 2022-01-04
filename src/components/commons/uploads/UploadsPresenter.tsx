import { replaceUrl } from "../../../commons/libraries/utils/utils";
import { UploadsUIProps } from "./UploadsTypes";

const UploadsUI = (props: UploadsUIProps) => {
  return (
    <>
      <div
        style={{ width: "50px", height: "50px", backgroundColor: "gray" }}
        onClick={props.onClickUploadIcon}
      >
        +
      </div>
      {props.isUpdate ? (
        <div style={{ backgroundColor: "gold" }}>
          {props.isChangeImages
            ? props.uploadFile.map((el) => (
                <img
                  key={el}
                  src={replaceUrl(el)}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                  onClick={props.onClickDeleteFile(el)}
                />
              ))
            : props.data?.map((el) => (
                <img
                  key={el}
                  src={replaceUrl(el)}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                  onClick={props.onClickDeleteFile(el)}
                />
              ))}
        </div>
      ) : (
        <div style={{ backgroundColor: "gold" }}>
          {props.uploadFile.map((el) => (
            <img
              key={el}
              src={replaceUrl(el)}
              alt=""
              style={{ width: "100px", height: "100px" }}
              onClick={props.onClickDeleteFile(el)}
            />
          ))}
        </div>
      )}
      <input
        type="file"
        hidden
        ref={props.fileRef}
        onChange={props.onChangeFile}
      />
    </>
  );
};

export default UploadsUI;
