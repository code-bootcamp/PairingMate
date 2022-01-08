import { Inner } from "../../../../commons/styles/common";
import * as M from "./MyPageStyles";
import { IMypageProps } from "./MyPageTypes";
const MyPageUI = (props: IMypageProps) => {
  return (
    <>
      <Inner style={{ paddingBottom: 0 }}>
        <M.MypageSection>
          <M.MyPageUserInfo>
            <M.UserInfoHeader>
              <M.UserProfileImg>
                <img src="/images/common/user-default-2.png" alt="" />
                <button>
                  <img src="/images/sub/mypage/ico_user_settings.png" alt="" />
                </button>
              </M.UserProfileImg>
              <figcaption>
                <M.UserName>
                  PairingMate
                  <M.ReportButton>
                    <img src="/images/sub/mypage/ico_report_user.png" alt="" />
                  </M.ReportButton>
                </M.UserName>
              </figcaption>
            </M.UserInfoHeader>
            <M.FollowInfo>
              <dl>
                <dt>팔로워</dt>
                <dd>25</dd>
              </dl>
              <dl>
                <dt>팔로잉</dt>
                <dd>14</dd>
              </dl>
            </M.FollowInfo>
            <M.FollowButtonWrap>
              <M.FollowButton>Follow</M.FollowButton>
            </M.FollowButtonWrap>
            <M.UserInterestedWrap>
              <h5>
                <span>PairingMate</span>님의 관심사
              </h5>
            </M.UserInterestedWrap>
          </M.MyPageUserInfo>
          <M.MyPageArticle>
            <M.MypageTabList className="tab">
              <li onClick={props.onClickTabActive}>
                <button>전체</button>
              </li>
              <li onClick={props.onClickTabActive}>
                <button>게시글</button>
              </li>
              <li onClick={props.onClickTabActive}>
                <button>결제내역</button>
              </li>
            </M.MypageTabList>
          </M.MyPageArticle>
        </M.MypageSection>
      </Inner>
    </>
  );
};
export default MyPageUI;
