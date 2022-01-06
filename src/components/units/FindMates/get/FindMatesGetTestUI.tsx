import { Inner } from "../../../../commons/styles/common";
import * as S from "./FindMatesGetStyles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: true,
  arrows: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const FindMatesGetTestUI = () => {
  return (
    <>
      <Inner>
        <S.FindmatesGetWrapper>
          <S.FindmatesUserInfo>
            <S.UserProfile>
              <img src="/images/common/user-default-2.png" alt="" />
            </S.UserProfile>
            <S.UserName>PairingMate</S.UserName>
            <S.CreateDate>2021-12-27</S.CreateDate>
            <hr />
            <S.IconWrapper>
              <div>
                <S.SubIcon>
                  <img src="/images/common/like-icon-blue.png" alt="" />
                </S.SubIcon>
                <span>6</span>
              </div>
              <div>
                <S.SubIcon>
                  <img src="/images/common/chatting-icon.png" alt="" />
                </S.SubIcon>
                <span>채팅</span>
              </div>
            </S.IconWrapper>
            <footer>
              <button>수정하기</button>
              <button>삭제하기</button>
            </footer>
          </S.FindmatesUserInfo>
          <S.FindmatesContentsInfo>
            <S.ContentsInfoHeader>
              <h3>Outdoor</h3>
              <div>
                <img src="/images/common/location.png" alt="" />
              </div>
              <span>선유도 근린공원</span>
            </S.ContentsInfoHeader>
            <div>
              <h1>오늘 한강 라이드 같이 가실분 있나요?</h1>
              <Slider {...settings}>
                <S.ContentsInfoImage>
                  <img src="" alt="" />
                </S.ContentsInfoImage>
                <S.ContentsInfoImage>
                  <img src="" alt="" />
                </S.ContentsInfoImage>
                <S.ContentsInfoImage>
                  <img src="" alt="" />
                </S.ContentsInfoImage>
              </Slider>
              <p>
                오늘 저녁 한강 라이드 같이 가실분 찾습니다. 선유도공원에서
                출발해서 반포한강 공원까지 즐겁게 라이딩해요 참가비용은
                무료입니다. 채팅으로 연락주세요 ^^
              </p>
              <span>#아웃도어</span>
              <span>#라이딩</span>
              <span>#자전거</span>
              <span>#한강</span>
            </div>
            <footer>
              <button>목록으로 이동</button>
            </footer>
          </S.FindmatesContentsInfo>
        </S.FindmatesGetWrapper>
      </Inner>
    </>
  );
};

export default FindMatesGetTestUI;
