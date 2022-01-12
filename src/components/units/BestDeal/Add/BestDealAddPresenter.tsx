import { Inner } from "../../../../commons/styles/common";
import * as B from "./BestDealAddStyles";
import SearchAddr from "../../../commons/searchAddr/SearchAddrContainer";
import TagsAdd from "../../../commons/tags/add/TagsAddContainer";
import Uploads from "../../../commons/uploads/UploadsContainer";
import { BestdealAddUIProps } from "./BestDealAddTypes";
import TagsUpdate from "../../../commons/tags/update/TagsUpdateContainer";
import {
  getCategory,
  getTitle,
} from "../../../../commons/libraries/utils/utils";

const BestDealAddUI = (props: BestdealAddUIProps) => {
  return (
    <Inner>
      <B.Wrapper>
        <B.Header>
          <div>
            <select
              defaultValue={
                props.isUpdate
                  ? getCategory(props.data?.fetchUseditem.name || "")
                  : "none"
              }
              onChange={props.onChangeCategory}
            >
              <option disabled value="none">
                카테고리
              </option>
              <option value="fitness">헬스</option>
              <option value="yoga">요가</option>
              <option value="pilates">필라테스</option>
            </select>
          </div>
          <div>
            <B.PriceInput
              type="text"
              placeholder="가격정보를 입력해주세요"
              onChange={props.onChangePrice}
              defaultValue={props.data?.fetchUseditem.price}
            />
          </div>
        </B.Header>
        <B.TitleInput
          type="text"
          placeholder="매장정보를 입력하세요."
          onChange={props.onChangeTitle}
          defaultValue={getTitle(props.data?.fetchUseditem.name || "")}
        />
        <B.TagsWrapper>
          {props.isUpdate ? (
            <TagsUpdate
              data={props.data?.fetchUseditem.tags}
              tags={props.tags}
              setTags={props.setTags}
              setIsUpdateTag={props.setIsUpdateTag}
            />
          ) : (
            <TagsAdd tags={props.tags} setTags={props.setTags} />
          )}
        </B.TagsWrapper>
        <B.ContentsInput
          placeholder="시설정보를 입력하세요"
          onChange={props.onChangeContents}
          defaultValue={props.data?.fetchUseditem.contents}
        />
        <B.FunctionWrapper>
          <B.FunctionWrapperLeft>
            <B.AddressSearch>
              <SearchAddr
                setBoardAddress={props?.setBoardAddress}
                data={props.data}
              />
            </B.AddressSearch>
            <B.Phone>
              <img src="/images/sub/fitness-centers/phone-solid.svg" />
              <span>전화번호</span>
              <input type="text" onChange={props.onChangePhone} />
            </B.Phone>
          </B.FunctionWrapperLeft>
          <B.ImgUploadBox>
            <Uploads
              setImages={props.setImages}
              isUpdate={props.isUpdate}
              data={props.data?.fetchUseditem.images}
              setIsUpdateImages={props.setIsUpdateImages}
            />
          </B.ImgUploadBox>
        </B.FunctionWrapper>
        <B.ButtonWrapper>
          {props.isUpdate ? (
            <button onClick={props.onClickUpdateBestdeal}>수정</button>
          ) : (
            <button onClick={props.onClickAddBestdeal}>등록</button>
          )}
        </B.ButtonWrapper>
      </B.Wrapper>
    </Inner>
  );
};
export default BestDealAddUI;
