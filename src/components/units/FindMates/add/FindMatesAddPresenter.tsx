import { Inner } from "../../../../commons/styles/common";
import * as S from "./FindMatesAddStyles";
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
  console.log(getCategory(props.data?.fetchBoard.title || ""));
  return (
    <>
      <Inner>
        <S.FindmatesAddWrapper>
          <select defaultValue="none" onChange={props.onChangeCategory}>
            <option disabled value="none">
              카테고리
            </option>
            <option value="Indoor">Indoor</option>
            <option value="Outdoor">Outdoor</option>
          </select>
          <S.TitleInput
            type="text"
            placeholder="제목을 입력해주세요"
            onChange={props.onChangeTitle}
            defaultValue={getTitle(props.data?.fetchBoard.title || "")}
          />
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
          <S.ContentsInput
            placeholder="내용을 입력해주세요"
            onChange={props.onChangeContents}
            defaultValue={props.data?.fetchBoard.contents}
          />
          <S.FindmatesInputFooter>
            <SearchAddr
              setBoardAddress={props.setBoardAddress}
              data={props.data}
            />
            <Uploads
              isUpdate={props.isUpdate}
              data={props.data?.fetchBoard.images}
              setIsUpdateImages={props.setIsUpdateImages}
              setImages={props.setImages}
            />
          </S.FindmatesInputFooter>
          <S.FindmatesButtonWrapper>
            {props.isUpdate ? (
              <button onClick={props.onClickUpdateFindmate}>수정</button>
            ) : (
              <button onClick={props.onClickAddFindmate}>등록</button>
            )}
          </S.FindmatesButtonWrapper>
        </S.FindmatesAddWrapper>
      </Inner>
    </>
  );
};
export default FindMatesAddUI;
