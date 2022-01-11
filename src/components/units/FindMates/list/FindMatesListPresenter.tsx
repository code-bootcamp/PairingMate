import * as S from "./FindMatesListStyles";
import {
  getDate,
  getTitle,
  replaceTags,
  replaceUrl,
} from "../../../../commons/libraries/utils/utils";
import { FindmateListUIProps } from "./FindMatesListTypes";
import { Inner } from "../../../../commons/styles/common";
const FindmatesListUI = (props: FindmateListUIProps) => {
  return (
    <>
      <Inner>
        <S.FindmateAddButton></S.FindmateAddButton>
        <S.FindmatesListWrapper>
          <S.FindmatesListHead>
            <S.UserProfile>
              <img src="/images/common/user-default.png" alt="user-profile" />
            </S.UserProfile>
            <S.FindmatesAddButton onClick={props.onClickMoveToFindmateAddPage}>
              <S.FindmatesAddButtonIcon>
                <img src="/images/common/pen-icon.png" alt="" />
              </S.FindmatesAddButtonIcon>
            </S.FindmatesAddButton>
          </S.FindmatesListHead>
          <S.ListWrapper>
            <S.NavigationList>
              <li>
                <button onClick={props.onClickCategory("")}>전체</button>
              </li>
              <li>
                <button onClick={props.onClickCategory("Indoor")}>
                  Indoor
                </button>
              </li>
              <li>
                <button onClick={props.onClickCategory("Outdoor")}>
                  Outdoor
                </button>
              </li>
            </S.NavigationList>
            {props.data?.fetchBoards.map((el) => (
              <S.FindmatesList
                key={el._id}
                onClick={props.onClickFindmateGetPage(el._id)}
              >
                <div>
                  <S.FindmatesInfo>
                    <S.UserProfile>
                      <img
                        src="/images/common/user-default.png"
                        alt="user-profile"
                      />
                    </S.UserProfile>
                    <S.FindmatesInfoName>{el.writer}</S.FindmatesInfoName>
                    <S.FindmatesInfoDate>
                      {getDate(el.createdAt)}
                    </S.FindmatesInfoDate>
                    <S.FindmatesInfoAddr>
                      <S.FindmatesLocationIcon>
                        <img src="/images/common/location.png" alt="" />
                      </S.FindmatesLocationIcon>
                      {el.boardAddress?.address}
                    </S.FindmatesInfoAddr>
                  </S.FindmatesInfo>
                  <S.FindmatesContents>
                    <h2>{getTitle(el.title)}</h2>
                    <p>{el.contents}</p>
                    {replaceTags(el.youtubeUrl).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                    <div>
                      <img src="/images/common/like-icon.png" alt="" />
                    </div>
                    <S.FindmatesInfoLikeCount>
                      {el.likeCount}
                    </S.FindmatesInfoLikeCount>
                  </S.FindmatesContents>
                </div>
                <S.FindmatesImg>
                  {el.images.length !== 0 && (
                    <img src={replaceUrl(el.images[0])} alt="" />
                  )}
                </S.FindmatesImg>
              </S.FindmatesList>
            ))}
          </S.ListWrapper>
          <S.FindmatesFooter>
            {props.data?.fetchBoards.length !==
              props.findmatesCount?.fetchBoardsCount && (
              <div onClick={props.onClickLoadMore}>
                <img src="/images/common/down-arrow.png" alt="" />
              </div>
            )}
          </S.FindmatesFooter>
        </S.FindmatesListWrapper>
      </Inner>
    </>
  );
};

export default FindmatesListUI;
