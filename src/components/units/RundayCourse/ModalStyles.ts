import styled from "@emotion/styled";
import theme from "../../../commons/styles/variables";

interface InfoTagProps {
  line: string;
}

export const ModalWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 1;
  width: 700px;
  padding: 60px 30px 60px 30px;
  transform: translate(-50%, -50%);
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
    font-weight: bolder;
  }
  p {
    margin: 20px 0px 20px 0px;
    line-height: 25px;
    color: #c4c4c4;
  }
  ul {
    margin-top: 20px;
  }

  li {
    display: inline-block;
    margin-top: 20px;
    margin-right: 20px;
  }

  @media screen and ${theme.laptop} {
    top: 50%;
    width: 450px;
    padding: 35px 20px 30px 20px;

    div {
      width: 100%;
    }

    h3 {
      margin-bottom: 10px;
    }

    p {
      margin: 10px 0px 10px 0px;
      font-size: ${theme.fontsize.fs14};
      line-height: 15px;
    }

    ul {
      margin-top: 0px;
    }
  }

  @media screen and (max-width: 610px) {
    width: 230px;
    height: auto;

    div {
      display: none;
    }

    ul {
      display: none;
    }
  }
`;

export const InfoText = styled.span`
  margin-right: 5px;
  padding: 3px;
  color: #324e86;
  font-size: 15px;
  font-weight: bolder;
`;

export const InfoTag = styled.span`
  margin-right: 5px;
  padding: 3px;
  border-radius: 7px;
  background-color: ${(props: InfoTagProps) => theme.SubWayColor[props.line]};
  color: white;
  font-size: 15px;
`;

export const CloseIcon = styled.img`
  position: absolute;
  top: 10px;
  right: 10px;
`;
