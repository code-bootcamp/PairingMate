import { replaceUrl } from "../../../commons/libraries/utils/utils";
import { UploadsUIProps } from "./UploadsTypes";
import * as S from "../../units/FindMates/add/FindMatesAddStyles";

const UploadsUI = (props: UploadsUIProps) => {
  return (
    <>
      <S.FindmatesUploadsWrapper>
        <img src="/images/common/image-icon-1.png" alt="" />
        <button>이미지 선택</button>
        <S.UploadImageWrapper>
          {props.isUpdate ? (
            <>
              {props.isChangeImages
                ? props.uploadFile.map((el) => (
                    <S.UploadImage
                      key={el}
                      src={replaceUrl(el)}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                      onClick={props.onClickDeleteFile(el)}
                    />
                  ))
                : props.data?.map((el) => (
                    <S.UploadImage
                      key={el}
                      src={replaceUrl(el)}
                      alt=""
                      style={{ width: "100px", height: "100px" }}
                      onClick={props.onClickDeleteFile(el)}
                    />
                  ))}
            </>
          ) : (
            <>
              {props.uploadFile.map((el) => (
                <S.UploadImage
                  key={el}
                  src={replaceUrl(el)}
                  alt=""
                  style={{ width: "100px", height: "100px" }}
                  onClick={props.onClickDeleteFile(el)}
                />
              ))}
            </>
          )}
          <S.UploadImageIcon>
            <img
              src="/images/common/image-icon-2.png"
              alt=""
              onClick={props.onClickUploadIcon}
            />
          </S.UploadImageIcon>
        </S.UploadImageWrapper>
      </S.FindmatesUploadsWrapper>

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
