import { Inner } from "../../../../commons/styles/common";
import {
  getCategory,
  getTitle,
} from "../../../../commons/libraries/utils/utils";
import SearchAddr from "../../../commons/searchAddr/SearchAddrContainer";
import { FindmatesAddUIProps } from "./FindMatesAddTypes";
import TagsAdd from "../../../commons/tags/add/TagsAddContainer";
import TagsUpdate from "../../../commons/tags/update/TagsUpdateContainer";
import Uploads from "../../../commons/uploads/UploadsContainer";

const FindMatesAddUI = (props: FindmatesAddUIProps) => {
  return (
    <>
      <Inner>
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
          {props.isUpdate ? (
            <TagsUpdate
              data={props.data?.fetchBoard.youtubeUrl}
              tags={props.tags}
              setTags={props.setTags}
              setIsUpdateTag={props.setIsUpdateTag}
            />
          ) : (
            <TagsAdd tags={props.tags} setTags={props.setTags} />
          )}
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
          <Uploads
            isUpdate={props.isUpdate}
            data={props.data?.fetchBoard.images}
            setIsUpdateImages={props.setIsUpdateImages}
            setImages={props.setImages}
          />
        </div>

        <div>
          <SearchAddr
            setBoardAddress={props.setBoardAddress}
            data={props.data}
          />
        </div>
        {props.isUpdate ? (
          <button onClick={props.onClickUpdateFindmate}>수정</button>
        ) : (
          <button onClick={props.onClickAddFindmate}>등록</button>
        )}
      </Inner>
    </>
  );
};
export default FindMatesAddUI;
