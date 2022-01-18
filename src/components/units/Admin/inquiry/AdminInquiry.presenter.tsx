import AdminNavigation from "../../../commons/layout/navigation/admin/AdminNavigation.container";
import { Inner } from "../../../../commons/styles/common";
import * as AI from "./AdminInquiry.styles";
import { useState } from "react";
import CommonModal from "../../../commons/modal/Modal";
import ToggleContent from "../../../commons/modal/toggleContents";
import { Times } from "@emotion-icons/fa-solid";
import { IAdminInquiryProps } from "./Admininquiry.types";

const AdminInquiryUI = (props: IAdminInquiryProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickOpenModal = () => {
    setIsOpen(true);
  };

  const onClickCloseModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <AI.Wrapper>
        <AdminNavigation />
        <AI.AdminContentsWrap>
          <Inner>
            <AI.AdminInquirySection>
              <AI.SectionTitle>파트너 문의 리스트</AI.SectionTitle>
              <AI.CompanyInquiry>
                {props.data?.map((el, index) => (
                  <li key={index}>
                    <div>
                      <AI.CompanyName>{el.companyName}</AI.CompanyName>
                      <AI.InquiryContents>
                        <h2>{el.name}</h2>
                        <p>{el.jobtitle}</p>
                        <p>{el.contact}</p>
                        <p>{el.email}</p>
                        <AI.CompanyAsk>{el.contents}</AI.CompanyAsk>
                        <ToggleContent
                          toggle={(show) => (
                            <p style={{ textAlign: "center" }}>
                              <AI.ReplyBtn onClick={show}>상세보기</AI.ReplyBtn>
                            </p>
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
                      </AI.InquiryContents>
                    </div>
                  </li>
                ))}
              </AI.CompanyInquiry>
            </AI.AdminInquirySection>

            <AI.AdminInquirySection>
              <AI.SectionTitle>FAQ 리스트</AI.SectionTitle>
              <AI.FAQList>
                {props.faqResultData?.map((el, index) => (
                  <li key={el.id} id={el.id}>
                    <div>
                      <AI.FAQTitle>{el.title}</AI.FAQTitle>
                      <AI.FAQContents>{el.contents}</AI.FAQContents>
                      {/* <button>수정하기</button> */}

                      <button onClick={props.onClickDeleteFaq}>삭제하기</button>
                    </div>
                  </li>
                ))}
              </AI.FAQList>

              <AI.ToggleWriteContainer isToggle={props.isToggle}>
                <h2>FAQ 작성하기</h2>
                <p>
                  <label>제목</label>
                  <input
                    type="text"
                    name="title"
                    placeholder="제목을 입력해주세요"
                    onChange={props.onChangeFAQ}
                    defaultValue={props.faqResultData?.title}
                  />
                </p>
                <p>
                  <label>내용</label>
                  <textarea
                    name="contents"
                    placeholder="내용을 입력해주세요"
                    onChange={props.onChangeFAQ}
                    defaultValue={props.faqResultData?.contents}
                  />
                </p>
                <AI.WriteButtonWrap>
                  <button
                    onClick={() => {
                      props.onClickWriteFaq();
                    }}
                  >
                    등록하기
                  </button>
                </AI.WriteButtonWrap>
              </AI.ToggleWriteContainer>
              <AI.WriteButtonWrap>
                <button onClick={props.onClickToggleWrite}>작성하기</button>
              </AI.WriteButtonWrap>
            </AI.AdminInquirySection>
          </Inner>
        </AI.AdminContentsWrap>
      </AI.Wrapper>
    </>
  );
};

export default AdminInquiryUI;
