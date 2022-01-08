import styled from "@emotion/styled";

export const ModalWrapper = styled.div`
  position: absolute;
  top: 90%;
  right: 36%;
  z-index: 1;
  width: 700px;
  padding: 60px 30px 60px 30px;
  border: none;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.25);
  background-color: white;

  div {
    width: 640px;
    height: 300px;
    margin-bottom: 30px;
    background-color: gray;

    img {
      width: 100%;
      height: 100%;
    }
  }

  h3 {
    margin-bottom: 20px;
  }
  p {
    margin: 20px 0px 20px 0px;
  }
  ul {
    margin-top: 20px;
  }

  li {
    display: inline-block;
    margin-top: 20px;
    margin-right: 20px;
  }
`;

export const InfoTag = styled.span`
  margin-right: 5px;
  padding: 3px;
  border-radius: 7px;
  background-color: #324e86;
  color: white;
  font-size: 15px;
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
`;
