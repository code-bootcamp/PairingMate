import AdminNavigation from "../../commons/layout/navigation/admin/AdminNavigation.container";
import { Inner } from "../../../commons/styles/common";
import * as A from "./AdminStyles";
import * as AI from "../Admin/inquiry/AdminInquiry.styles";
import { IAdminProps } from "./Admin.types";
import ToggleContent from "../../commons/modal/toggleContents";
import CommonModal from "../../commons/modal/Modal";

const AdminPageUI = (props: IAdminProps) => {
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
                  {props.data?.map((el, index) => (
                    <li key={index}>
                      <div>
                        <A.CompanyName>{el.companyName}</A.CompanyName>
                        <A.InquiryContents>
                          <A.CompanyAsk>{el.contents}</A.CompanyAsk>
                          <ToggleContent
                            toggle={(show) => (
                              <AI.ReplyBtn onClick={show}>상세보기</AI.ReplyBtn>
                            )}
                            content={(hide) => (
                              <CommonModal>
                                <AI.CompanyInquiryModal>
                                  <AI.ModalCompanyName>
                                    {el.companyName}
                                  </AI.ModalCompanyName>
                                  <AI.JobTitle>
                                    <strong>{el.jobtitle}</strong>
                                    <span>{el.name}</span>
                                  </AI.JobTitle>
                                  <AI.ContactInfo>
                                    <p>
                                      <span>이메일 주소 : </span>
                                      {el.email}
                                    </p>
                                  </AI.ContactInfo>
                                  <AI.ContactInfo>
                                    <p>
                                      <span>연락처 : </span>
                                      {el.contact}
                                    </p>
                                  </AI.ContactInfo>
                                  <h3
                                    style={{
                                      padding: "20px 0",
                                      fontWeight: "bold",
                                    }}
                                  >
                                    문의내용
                                  </h3>
                                  <AI.ModalInquiryContents>
                                    <p>{el.contents}</p>
                                  </AI.ModalInquiryContents>
                                </AI.CompanyInquiryModal>
                                <AI.CloseButton onClick={hide}>
                                  <AI.CloseIco />
                                </AI.CloseButton>
                              </CommonModal>
                            )}
                          />
                        </A.InquiryContents>
                      </div>
                    </li>
                  ))}
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
