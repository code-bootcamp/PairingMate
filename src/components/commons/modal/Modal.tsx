import styled from "@emotion/styled";

const ModalBackgorund = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 4;
`;

const ModalContents = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 700px;
  height: 700px;
  transform: translate(-50%, -50%);
  background: #fff;
  z-index: 5;
`;

const CommonModal = ({ children }) => {
  return (
    <>
      <ModalBackgorund>
        <ModalContents>{children}</ModalContents>
      </ModalBackgorund>
    </>
  );
};

export default CommonModal;
