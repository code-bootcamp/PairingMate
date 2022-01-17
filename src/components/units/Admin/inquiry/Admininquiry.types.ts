import { ChangeEvent } from "react";

export interface IAdminInquiryProps {
  data: any;
  faqResultData: any;
  onChangeFAQ: (
    event: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => void;
  onClickWriteFaq: () => void;
  onClickDeleteFaq: () => void;
  isToggle: boolean;
  onClickToggleWrite: () => void;
}

export interface IWriteToggleButtonProps {
  isToggle: boolean;
}
