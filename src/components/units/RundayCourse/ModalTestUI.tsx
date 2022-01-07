import styled from "@emotion/styled";
import { useState } from "react";
import ModalUI from "./ModalContainer";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 200px;
`;
const Wrapper = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const ModalButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 50px;
  background-color: gray;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  :hover {
    background-color: #eaeaea;
    color: #000;
  }
`;

const ModalTestUI = () => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickOpen = () => {
    setIsOpen(true);
  };
  const onClickClose = () => {
    setIsOpen(false);
  };
  return (
    <>
      <Container>
        <Wrapper>
          {isOpen && <ModalUI onClickClose={onClickClose} />}
          <ModalButton onClick={onClickOpen}>Open Modal</ModalButton>
        </Wrapper>
      </Container>
    </>
  );
};

export default ModalTestUI;
