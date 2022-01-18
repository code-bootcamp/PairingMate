import useScrollToggle from "../../../../commons/hooks/scrollToTop";
import styled from "@emotion/styled";
import router from "next/router";

const FindMateAddButtonWrap = styled.p`
  position: fixed;
  width: 100%;
  max-width: 1320px;

  @media all and (max-width: 1280px) {
    width: 85%;
    max-width: 100%;
  }
`;

const FindmateAddButton = styled.button`
  float: right;
  width: 48px;
  height: 48px;
  border-radius: 50px;
  background-color: #213358;
  background-image: url("/images/sub/find-mates/pen-icon-white.png");
  background-repeat: no-repeat;
  background-position: center center;
  opacity: 1;
`;

function FindMatesAddButton() {
  const scrollFlag = useScrollToggle(false);
  const onClickMoveToFindmateAddPage = () => {
    router.push("/find-mates/add");
  };

  return scrollFlag ? (
    <FindMateAddButtonWrap>
      <FindmateAddButton
        onClick={onClickMoveToFindmateAddPage}
      ></FindmateAddButton>
    </FindMateAddButtonWrap>
  ) : (
    <FindMateAddButtonWrap>
      <FindmateAddButton
        style={{ opacity: "0", transition: ".5s;" }}
        onClick={onClickMoveToFindmateAddPage}
      ></FindmateAddButton>
    </FindMateAddButtonWrap>
  );
}
export default FindMatesAddButton;
