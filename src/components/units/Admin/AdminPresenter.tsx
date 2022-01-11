import AdminNavigation from "../../commons/layout/navigation/admin/AdminNavigation.container";
import { Inner } from "../../../commons/styles/common";
import * as A from "./AdminStyles";

const AdminPageUI = () => {
  return (
    <>
      <A.Wrapper>
        <AdminNavigation />
        <A.AdminContentsWrap>
          <Inner>
            <A.UserSection>
              <A.SectionTitle>회원관리</A.SectionTitle>

              <ul>
                <li>
                  <figure>
                    <A.Subtitle>일반회원</A.Subtitle>
                    <A.IcoWrap>
                      <img src="/images/sub/admin/ico_user.png" alt="" />
                    </A.IcoWrap>
                    <figcaption>
                      <A.UserCount>
                        120<span>명</span>
                      </A.UserCount>
                      <button>유저 리스트</button>
                    </figcaption>
                  </figure>
                </li>

                <li>
                  <figure>
                    <A.Subtitle>기업회원</A.Subtitle>
                    <A.IcoWrap>
                      <img
                        src="/images/sub/admin/ico_company_user.png"
                        alt=""
                      />
                    </A.IcoWrap>
                    <figcaption>
                      <A.UserCount>
                        20<span>명</span>
                      </A.UserCount>
                      <button>유저 리스트</button>
                    </figcaption>
                  </figure>
                </li>
              </ul>
            </A.UserSection>

            <A.InquirySection>
              <A.SectionTitle>문의관리</A.SectionTitle>
              <article>
                <h3>최근 파트너 문의사항</h3>
                <A.CompanyInquiry>
                  <li>
                    <div>
                      <A.CompanyName>스포애니 구로디지털단지점</A.CompanyName>
                      <A.InquiryContents>
                        <A.CompanyAsk>
                          파트너 문의드립니다. 지속적인 회원 유치를 위해
                          알아보다 PairingMate를 알게 되었습니다. 파트너쉽 계약
                          가격과 Premium Best Deal 광고 가격 문의 드립니다. 빠른
                          연락 부탁드려요
                        </A.CompanyAsk>
                        <A.ReplyBtn>답장하기</A.ReplyBtn>
                      </A.InquiryContents>
                    </div>
                  </li>

                  <li>
                    <div>
                      <A.CompanyName>스포애니 구로디지털단지점</A.CompanyName>
                      <A.InquiryContents>
                        <A.CompanyAsk>
                          파트너 문의드립니다. 지속적인 회원 유치를 위해
                          알아보다 PairingMate를 알게 되었습니다. 파트너쉽 계약
                          가격과 Premium Best Deal 광고 가격 문의 드립니다. 빠른
                          연락 부탁드려요
                        </A.CompanyAsk>
                        <A.ReplyBtn>답장하기</A.ReplyBtn>
                      </A.InquiryContents>
                    </div>
                  </li>

                  <li>
                    <div>
                      <A.CompanyName>스포애니 구로디지털단지점</A.CompanyName>
                      <A.InquiryContents>
                        <A.CompanyAsk>
                          파트너 문의드립니다. 지속적인 회원 유치를 위해
                          알아보다 PairingMate를 알게 되었습니다. 파트너쉽 계약
                          가격과 Premium Best Deal 광고 가격 문의 드립니다. 빠른
                          연락 부탁드려요
                        </A.CompanyAsk>
                        <A.ReplyBtn>답장하기</A.ReplyBtn>
                      </A.InquiryContents>
                    </div>
                  </li>
                </A.CompanyInquiry>
              </article>
            </A.InquirySection>

            <A.SalesSection>
              <A.SectionTitle>매출관리</A.SectionTitle>
              <A.SalseTableWrap>
                <table>
                  <thead>
                    <tr>
                      <th>업체명</th>
                      <th>판매개수</th>
                      <th>총 판매금액</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>스포애니 구로디지털단지점</td>
                      <td>15개</td>
                      <td>2,160,000원</td>
                    </tr>

                    <tr>
                      <td>스포애니 구로디지털단지점</td>
                      <td>15개</td>
                      <td>2,160,000원</td>
                    </tr>

                    <tr>
                      <td>스포애니 구로디지털단지점</td>
                      <td>15개</td>
                      <td>2,160,000원</td>
                    </tr>

                    <tr>
                      <td>스포애니 구로디지털단지점</td>
                      <td>15개</td>
                      <td>2,160,000원</td>
                    </tr>

                    <tr>
                      <td>스포애니 구로디지털단지점</td>
                      <td>15개</td>
                      <td>2,160,000원</td>
                    </tr>

                    <tr>
                      <td>스포애니 구로디지털단지점</td>
                      <td>15개</td>
                      <td>2,160,000원</td>
                    </tr>

                    <tr>
                      <td>스포애니 구로디지털단지점</td>
                      <td>15개</td>
                      <td>2,160,000원</td>
                    </tr>
                  </tbody>
                </table>
              </A.SalseTableWrap>
            </A.SalesSection>
          </Inner>
        </A.AdminContentsWrap>
      </A.Wrapper>
    </>
  );
};
export default AdminPageUI;
