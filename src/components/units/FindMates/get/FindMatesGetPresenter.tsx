import { IFindmateGetUIProps } from "./FindMatesGetTypes";
import { Inner } from "../../../../commons/styles/common";
import * as S from "./FindMatesGetStyles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {
  getCategory,
  getDate,
  getTitle,
  getWriter,
  getWriterImag,
  replaceAddr,
  replaceTags,
  replaceUrl,
} from "../../../../commons/libraries/utils/utils";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const FindmatesGetUI = (props: IFindmateGetUIProps) => {
  return (
    <>
      <Inner style={{ paddingBottom: "0px", position: "relative" }}>
        <S.FindmatesGetWrapper>
          <S.FindmatesUserInfo>
            <S.UserProfileWrapper>
              <S.UserProfile>
                <img
                  src={getWriterImag(props.data?.fetchBoard.writer || "")}
                  alt=""
                />
              </S.UserProfile>
              <S.UserName>
                {getWriter(props.data?.fetchBoard.writer || "")}
              </S.UserName>
              <S.CreateDate>
                {getDate(props.data?.fetchBoard.createdAt)}
              </S.CreateDate>
            </S.UserProfileWrapper>
            <hr />
            <S.IconWrapper>
              <div>
                <S.SubIcon
                  onClick={props.onClickLikeFindmates(
                    props.data?.fetchBoard._id
                  )}
                >
                  <img src="/images/common/like-icon-blue.png" alt="" />
                </S.SubIcon>
                <span>{props.data?.fetchBoard.likeCount}</span>
              </div>
              <div>
                <S.SubIcon onClick={props.onClickChatting}>
                  <img src="/images/common/chatting-icon.png" alt="" />
                </S.SubIcon>
                <span>채팅</span>
              </div>
            </S.IconWrapper>
            {props.isWriter && (
              <footer>
                <button
                  onClick={props.onMoveToFindmatesUpdate(
                    props.data?.fetchBoard._id
                  )}
                >
                  수정하기
                </button>
                <button
                  onClick={props.onClickDeleteFindmates(
                    props.data?.fetchBoard._id
                  )}
                >
                  삭제하기
                </button>
              </footer>
            )}
          </S.FindmatesUserInfo>
          <S.FindmatesContentsInfo>
            <S.ContentsInfoHeader>
              <h3>{getCategory(props.data?.fetchBoard.title || "")}</h3>
              <span>
                <div>
                  <img src="/images/common/location.png" alt="" />
                </div>
                {replaceAddr(
                  props.data?.fetchBoard.boardAddress?.address || ""
                )}
              </span>
            </S.ContentsInfoHeader>
            <div>
              <h1>{getTitle(props.data?.fetchBoard.title || "")}</h1>
              <Slider {...settings}>
                {props.data?.fetchBoard.images.length !== 0 &&
                  props.data?.fetchBoard.images.map((el) => (
                    <S.ContentsInfoImage key={el}>
                      <img src={replaceUrl(el)} alt="" />
                    </S.ContentsInfoImage>
                  ))}
              </Slider>
              <S.ContentsWrap>{props.data?.fetchBoard.contents}</S.ContentsWrap>
              {replaceTags(props.data?.fetchBoard.youtubeUrl || "").map(
                (el) => (
                  <span key={el}>{el}</span>
                )
              )}
            </div>
            <footer>
              <button onClick={props.onMoveToFindmatesList}>
                목록으로 이동
              </button>
            </footer>
          </S.FindmatesContentsInfo>
        </S.FindmatesGetWrapper>
      </Inner>
    </>
  );
};

export default FindmatesGetUI;
