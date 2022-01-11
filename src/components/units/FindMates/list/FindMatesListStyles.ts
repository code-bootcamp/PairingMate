import styled from "@emotion/styled";
import theme from "../../../../commons/styles/variables";

export const FindMateAddButtonWrap = styled.p`
  position: fixed;
  width: 100%;
  max-width: 1320px;

  @media all and (max-width: 1280px) {
    width: 85%;
    max-width: 100%;
  }
`;

export const FindmateAddButton = styled.button`
  float: right;
  width: 48px;
  height: 48px;
  border-radius: 50px;
  background-color: black;
`;

export const FindmatesListWrapper = styled.div`
  width: 100%;
  padding: 35px;
`;

export const FindmatesListHead = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-bottom: 35px;
`;

export const UserProfile = styled.div`
  width: 40px;
  height: 40px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const FindmatesAddButton = styled.button`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 1245px;
  height: 60px;
  padding-right: 20px;
  margin-left: 25px;
  border: 1px solid #dddddd;
  border-radius: 15px;
`;

export const FindmatesAddButtonIcon = styled.div`
  width: 27px;
  height: 27px;

  img {
    width: 100%;
    height: auto;
  }
`;

export const ListWrapper = styled.div`
  padding: 20px 0px 20px 0px;
  margin-bottom: 40px;
`;

export const NavigationList = styled.ul`
  width: 100%;
  margin-bottom: 40px;

  li {
    display: inline-block;
    margin-right: 50px;
    padding: 10px 0;

    button {
      position: relative;
      font-size: 1.25rem;

      &::after {
        content: "";
        position: absolute;
        bottom: -5px;
        left: 0;
        width: 0%;
        height: 2px;
        background-color: black;
        transition: 0.5s;
      }

      &:hover {
        &::after {
          width: 100%;
        }
      }
    }
  }
`;

export const FindmatesList = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 50px 0px 50px 0px;
  border-bottom: 1px solid #dddddd;
`;

export const FindmatesImg = styled.div`
  width: 450px;
  height: 250px;
  background: #c4c4c4;
  border-radius: 15px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
  }
`;

export const FindmatesInfo = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const FindmatesInfoName = styled.span`
  margin-left: 20px;
  font-size: 17px;
  font-weight: bolder;
`;

export const FindmatesInfoDate = styled.span`
  margin-left: 20px;
  color: #dddddd;
  font-size: 14px;
`;

export const FindmatesInfoAddr = styled.span`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 40px;
  font-size: 14px;
`;

export const FindmatesInfoLikeCount = styled.span`
  padding-left: 5px;
`;

export const FindmatesLocationIcon = styled.div`
  position: absolute;
  top: -6px;
  left: -20px;
  width: 14px;
  height: 14px;
  margin-right: 10px;

  img {
    width: 100%;
  }
`;

export const FindmatesContents = styled.div`
  padding-left: 60px;

  h2 {
    margin-bottom: 25px;
  }

  p {
    margin-bottom: 40px;
  }

  span {
    margin-right: 5px;
    font-size: 14px;
    color: #324e86;
  }

  div {
    margin-top: 30px;
  }
`;

export const FindmatesFooter = styled.footer`
  display: flex;
  justify-content: center;

  div {
    width: 40px;
    height: 40px;

    :hover {
      cursor: pointer;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
  /* 
  button {
    width: 180px;
    height: 50px;
    border: 1px solid #dddddd;
    border-radius: 15px;
  } */
`;
