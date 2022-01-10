import { Inner } from "../../../../commons/styles/common";
import * as B from "./BestDealAddStyles";
import SearchAddr from "../../../commons/searchAddr/SearchAddrContainer";
import TagsAdd from "../../../commons/tags/add/TagsAddContainer";
import Uploads from "../../../commons/uploads/UploadsContainer";
import { BestdealAddUIProps } from "./BestDealAddTypes";
import TagsUpdate from "../../../commons/tags/update/TagsUpdateContainer";

const BestDealAddUI = (props: BestdealAddUIProps) => {
  return (
    <Inner>
      <B.Wrapper>
        <B.Header>
          <select onChange={props.onChangeCategory}>
            <option disabled value="none">
              카테고리를 설정해주세요
            </option>
            <option value="fitness">헬스</option>
            <option value="yoga">요가</option>
            <option value="pilates">필라테스</option>
            <option value="etc">기타</option>
          </select>
          <input
            type="text"
            placeholder="가격정보를 입력해주세요"
            onChange={props.onChangePrice}
            defaultValue={props.data?.price}
          />
        </B.Header>
        <div>
          <input
            type="text"
            placeholder="매장정보를 입력하세요."
            onChange={props.onChangeTitle}
            defaultValue={props.data?.name}
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
        <textarea
          placeholder="시설정보를 입력하세요"
          onChange={props.onChangeContents}
          defaultValue={props.data?.contents}
        />
        <div>
          <div>
            <div>
              <span>이미지</span>
              <SearchAddr
                setBoardAddress={props?.setBoardAddress}
                data={props.data}
              />
            </div>
          </div>
          <div>
            <div>
              <Uploads
                setImages={props.setImages}
                isUpdate={props.isUpdate}
                data={props.data?.fetchBoard.images}
                setIsUpdateImages={props.setIsUpdateImages}
              />
            </div>
          </div>
        </div>
        <button>하기</button>
      </B.Wrapper>
    </Inner>
  );
};
export default BestDealAddUI;
