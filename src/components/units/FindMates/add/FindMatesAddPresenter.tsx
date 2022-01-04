import {
  getCategory,
  getTitle,
  replaceTags,
} from "../../../../commons/libraries/utils/utils";
import SearchAddr from "../../../commons/searchAddr/SearchAddrContainer";
import UploadsAdd from "../../../commons/uploads/add/UploadsAddContainer";
import { FindmatesAddUIProps } from "./FindMatesAddTypes";

const FindMatesAddUI = (props: FindmatesAddUIProps) => {
  return (
    <>
      <select
        defaultValue={
          props.isUpdate
            ? getCategory(props.data?.fetchBoard.title || "")
            : "none"
        }
        onChange={props.onChangeCategory}
      >
        <option disabled value="none">
          카테고리
        </option>
        <option value="Indoor">Indoor</option>
        <option value="Outdoor">Outdoor</option>
      </select>
      <div>
        제목 :
        <input
          type="text"
          onChange={props.onChangeTitle}
          defaultValue={getTitle(props.data?.fetchBoard.title || "")}
        />
      </div>
      <div>
        태그 :
        <input
          type="text"
          value={props.inputTag}
          onChange={props.onChangeInputTags}
          onKeyPress={props.onChangeTags}
        />
        <br />
        {props.isUpdate &&
          replaceTags(props.data?.fetchBoard.youtubeUrl).map((tag) => (
            <span
              onClick={props.onClickDelteTags(tag)}
              style={{ margin: "5px" }}
              key={tag}
            >
              {tag}
            </span>
          ))}
        {props.tags.map((tag) => (
          <span
            onClick={props.onClickDelteTags(tag)}
            style={{ margin: "5px" }}
            key={tag}
          >
            {tag}
          </span>
        ))}
      </div>
      <div>
        내용 :
        <input
          type="text"
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchBoard.contents}
        />
      </div>

      <div>
        <UploadsAdd setImages={props.setImages} />
      </div>

      <div>
        <SearchAddr setBoardAddress={props.setBoardAddress} />
      </div>
      {props.isUpdate ? (
        <button onClick={props.onClickUpdateFindmate}>수정</button>
      ) : (
        <button onClick={props.onClickAddFindmate}>등록</button>
      )}
    </>
  );
};
export default FindMatesAddUI;
