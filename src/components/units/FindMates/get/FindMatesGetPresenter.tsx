import { IFindmateGetUIProps } from "./FindMatesGetTypes";
import { Inner } from "../../../../commons/styles/common";
import {
  getCategory,
  getDate,
  getTitle,
  replaceTags,
  replaceUrl,
} from "../../../../commons/libraries/utils/utils";

const FindmatesGetUI = (props: IFindmateGetUIProps) => {
  return (
    <>
      <Inner>
        <div>date : {getDate(props.data?.fetchBoard.createdAt)}</div>
        <div>
          tags :
          {replaceTags(props.data?.fetchBoard.youtubeUrl || "").map((el) => (
            <span key={el}>{el}</span>
          ))}
        </div>
        <div>category : {getCategory(props.data?.fetchBoard.title || "")}</div>
        <div>title : {getTitle(props.data?.fetchBoard.title || "")}</div>
        <div>contetns : {props.data?.fetchBoard.contents}</div>
        <div>addr : {props.data?.fetchBoard.boardAddress?.address}</div>
        {props.data?.fetchBoard.images.length !== 0 &&
          props.data?.fetchBoard.images.map((el) => (
            <img key={el} src={replaceUrl(el)} alt="" />
          ))}
        <div>
          <button
            onClick={props.onMoveToFindmatesUpdate(props.data?.fetchBoard._id)}
          >
            수정
          </button>
        </div>
        <div>
          <button>삭제</button>
        </div>
        <div>
          <button onClick={props.onMoveToFindmatesList}>목록으로</button>
        </div>
      </Inner>
    </>
  );
};

export default FindmatesGetUI;
