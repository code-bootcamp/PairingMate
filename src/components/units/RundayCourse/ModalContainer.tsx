import styled from "@emotion/styled";

const ModalWrapper = styled.div`
  width: 500px;
  height: 500px;
  background-color: #fff;
  border: 1px solid #000;
  border-radius: 20px;
  position: absolute;
  z-index: 1;
`;
const Modal = styled.div`
  padding: 50px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
const ModalContents = styled.div`
  font-size: 18px;
`;
const ModalCloseButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  border-radius: 5px;
  border: 1px solid #000;
  font-size: 24px;
  font-weight: bold;
  cursor: pointer;
  :hover {
    background-color: #000;
    color: #fff;
  }
`;

interface Props {
  onClickClose: () => void;
}

const ModalUI = (props: Props) => {
  return (
    <ModalWrapper>
      <Modal>
        <ModalContents>이것은 모달입니다</ModalContents>
        <ModalCloseButton onClick={props.onClickClose}>닫기</ModalCloseButton>
      </Modal>
    </ModalWrapper>
  );
};

export default ModalUI;
