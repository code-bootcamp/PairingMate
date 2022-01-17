import * as S from "./FindMatesListStyles";
import {
  getDate,
  getTitle,
  getWriter,
  getWriterImag,
  replaceAddr,
  replaceTags,
  replaceUrl,
} from "../../../../commons/libraries/utils/utils";
import { FindmateListUIProps } from "./FindMatesListTypes";
import { Inner } from "../../../../commons/styles/common";
import FindMatesAddButton from "../../../commons/buttons/add/FindMatesAddButton";
const FindmatesListUI = (props: FindmateListUIProps) => {
  return (
    <>
      <Inner>
        <S.FindmatesListWrapper>
          {/* <S.FindMateAddButtonWrap>
            <S.FindmateAddButton
              onClick={props.onClickMoveToFindmateAddPage}
            ></S.FindmateAddButton>
          </S.FindMateAddButtonWrap> */}
          <FindMatesAddButton />
          <S.FindmatesListHead>
            <S.UserProfile>
              <img
                src={replaceUrl(props.profileImg || "")}
                alt="user-profile"
              />
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
                <S.ContentsWrapper>
                  <S.FindmatesInfo>
                    <S.UserProfile>
                      <img
                        src={getWriterImag(el.writer || "")}
                        alt="user-profile"
                      />
                    </S.UserProfile>
                    <S.FindmatesInfoName>
                      {getWriter(el.writer || "")}
                    </S.FindmatesInfoName>
                    <S.FindmatesInfoDate>
                      {getDate(el.createdAt)}
                    </S.FindmatesInfoDate>
                    <S.FindmatesInfoAddr>
                      <S.FindmatesLocationIcon>
                        <img src="/images/common/location.png" alt="" />
                      </S.FindmatesLocationIcon>
                      <span>{replaceAddr(el.boardAddress?.address)}</span>
                    </S.FindmatesInfoAddr>
                  </S.FindmatesInfo>
                  <S.FindmatesContents>
                    <h2>{getTitle(el.title)}</h2>
                    <p>{el.contents}</p>
                    {replaceTags(el.youtubeUrl).map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                    <nav>
                      <div>
                        <img src="/images/common/like-icon.png" alt="" />
                      </div>
                      <S.FindmatesInfoLikeCount>
                        {el.likeCount}
                      </S.FindmatesInfoLikeCount>
                    </nav>
                  </S.FindmatesContents>
                </S.ContentsWrapper>
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
