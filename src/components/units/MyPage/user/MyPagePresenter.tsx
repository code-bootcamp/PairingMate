import { Inner } from "../../../../commons/styles/common";
import * as M from "./MyPageStyles";
import { IMypageProps } from "./MyPageTypes";
import Tabs from "../../../commons/tabs/Tabs";
import Tab from "../../../commons/tabs/Tabs.Contents";

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
              <M.HashTagList>
                <li>
                  <span>#런데이</span>
                </li>
                <li>
                  <span>#라이딩</span>
                </li>
                <li>
                  <span>#락클라이밍</span>
                </li>
                <li>
                  <span>#필라테스</span>
                </li>
                <li>
                  <span>#배드민턴</span>
                </li>
              </M.HashTagList>
            </M.UserInterestedWrap>
          </M.MyPageUserInfo>
          <M.MyPageArticle>
            <div>
              <Tabs>
                <Tab title="전체">
                  <M.MypageContents>
                    <h3>내가 쓴 게시글</h3>
                    <M.MypageFindMatesPostWrap>
                      <ul>
                        {props.data?.fetchBoards.map((el) => (
                          <li key={el._id}>{el.title}</li>
                        ))}
                      </ul>
                    </M.MypageFindMatesPostWrap>

                    <h3>결제 내역</h3>
                    <M.MypageTableWrap>
                      <M.MypageTable>
                        <colgroup>
                          <col width="25%" />
                          <col width="25%" />
                          <col width="25%" />
                          <col width="25%" />
                        </colgroup>
                        <thead>
                          <tr>
                            <th>결제번호</th>
                            <th>결제품목</th>
                            <th>결제금액</th>
                            <th>결제일</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>20220110-12345678</td>
                            <td>스포애니 회원권</td>
                            <td>144,400원</td>
                            <td>2022-01-10</td>
                          </tr>
                          <tr>
                            <td>20220110-12345678</td>
                            <td>스포애니 회원권</td>
                            <td>144,400원</td>
                            <td>2022-01-10</td>
                          </tr>
                          <tr>
                            <td>20220110-12345678</td>
                            <td>스포애니 회원권</td>
                            <td>144,400원</td>
                            <td>2022-01-10</td>
                          </tr>
                          <tr>
                            <td>20220110-12345678</td>
                            <td>스포애니 회원권</td>
                            <td>144,400원</td>
                            <td>2022-01-10</td>
                          </tr>
                          <tr>
                            <td>20220110-12345678</td>
                            <td>스포애니 회원권</td>
                            <td>144,400원</td>
                            <td>2022-01-10</td>
                          </tr>
                        </tbody>
                      </M.MypageTable>
                    </M.MypageTableWrap>
                  </M.MypageContents>
                </Tab>
                <Tab title="내가 쓴 글">
                  <M.MypageContents>내가쓴거쥐</M.MypageContents>
                </Tab>
                <Tab title="결제내역">
                  <M.MypageContents>내가 결제한거쥐</M.MypageContents>
                </Tab>
              </Tabs>
            </div>
          </M.MyPageArticle>
        </M.MypageSection>
      </Inner>
    </>
  );
};
export default MyPageUI;
