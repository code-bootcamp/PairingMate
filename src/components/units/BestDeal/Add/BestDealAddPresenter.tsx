import { Inner } from "../../../../commons/styles/common";
import SearchAddr from "../../../commons/searchAddr/SearchAddrContainer";
import TagsAdd from "../../../commons/tags/add/TagsAddContainer";
import Uploads from "../../../commons/uploads/UploadsContainer";
import { BestdealAddUIProps } from "./BestDealAddTypes";

const BestDealAddUI = (props: BestdealAddUIProps) => {
  return (
    <Inner>
      <div>
        <div>
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
          />
        </div>
        <div>
          <input
            type="text"
            placeholder="매장정보를 입력하세요."
            onChange={props.onChangeTitle}
          />
        </div>
        <div>
          <TagsAdd setTags={props.setTags} tags={props.tags} />
          <input type="text" placeholder="해쉬태그를 입력해주세요." />
        </div>
        <textarea
          placeholder="시설정보를 입력하세요"
          onChange={props.onChangeContents}
        />
        <div>
          <div>
            <div>
              <span>이미지</span>
              <span>장소</span>
            </div>
            <input type="text" placeholder="장소를 검색해 주세요" />
          </div>
          <div>
            <div>
              <span>이미지</span>
              <span>이미지 선택</span>
            </div>
            <div>
              <span>1</span>
              {/* <Uploads setImages={props.setImages} /> */}
            </div>
          </div>
        </div>
        <button>등록하기</button>
      </div>
    </Inner>
  );
};
export default BestDealAddUI;
