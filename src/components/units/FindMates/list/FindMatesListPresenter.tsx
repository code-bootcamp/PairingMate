import {
  getCategory,
  getTitle,
  replaceTags,
  replaceUrl,
} from "../../../../commons/libraries/utils/utils";
import { FindmateListUIProps } from "./FindMatesListTypes";

const FindmatesListUI = (props: FindmateListUIProps) => {
  return (
    <>
      <div>
        <div onClick={props.onClickCategory("")}>전체</div>
        <div onClick={props.onClickCategory("Indoor")}>Indoor</div>
        <div onClick={props.onClickCategory("Outdoor")}>Outdoor</div>
        <div onClick={props.onClickMoveToFindmateAddPage}>findmate add</div>
      </div>

      {props.data?.fetchBoards.map((el) => (
        <div
          key={el._id}
          style={{ margin: "20px", backgroundColor: "yellowgreen" }}
          onClick={props.onClickFindmateGetPage(el._id)}
        >
          <div>{getCategory(el.title)}</div>
          <div>{getTitle(el.title)}</div>
          <div>{el.contents}</div>
          {replaceTags(el.youtubeUrl).map((tag) => (
            <span key={tag}>{tag}</span>
          ))}
          {el.images.length !== 0 && (
            <img
              src={replaceUrl(el.images[0])}
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
          )}
        </div>
      ))}
    </>
  );
};

export default FindmatesListUI;
