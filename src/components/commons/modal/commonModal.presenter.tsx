import { Children } from "react";
import { ModalWrap } from "./commonModal.styles";

interface IModalProps {
  isOpen: boolean;
  contents: string;
}
const CommonModalUI = (props: IModalProps) => {
  return (
    <>
      <ModalWrap isOpen={props.isOpen}>{props.contents}</ModalWrap>
    </>
  );
};

export default CommonModalUI;
