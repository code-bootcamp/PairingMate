import { replaceUrl } from "../../../../commons/libraries/utils/utils";
import { IUploadsUIProps } from "../UploadsTypes";

const UploadsAddUI = (props: IUploadsUIProps) => {
  return (
    <div style={{ backgroundColor: "gold" }}>
      <input
        type="file"
        onChange={props.onChangeFile}
        hidden
        ref={props.fileRef}
      />
      <div
        style={{ width: "100px", height: "100px", backgroundColor: "gray" }}
        onClick={props.onClickUploadIcon}
      >
        파일 업로드
      </div>

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
  );
};

export default UploadsAddUI;
