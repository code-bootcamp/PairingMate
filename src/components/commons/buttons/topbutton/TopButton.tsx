import useScrollToggle from "../../../../commons/hooks/scrollToTop";
import styled from "@emotion/styled";
import { AngleUp } from "@emotion-icons/fa-solid";
import theme from "../../../../commons/styles/variables";
const TopButton = styled.button`
  position: fixed;
  right: 100px;
  bottom: 60px;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: ${theme.colorBase};
  transition: 0.3s;
  opacity: 1;
  font-size: 12px;
  color: #fff;

  @media all and ${theme.tablet} {
    right: 30px;
  }
`;
const TopButtonIco = styled(AngleUp)`
  width: 40%;
  height: 40%;
  color: #fff;
`;

function Topbutton() {
  const scrollFlag = useScrollToggle(false);
  const moveToTop = () => (document.documentElement.scrollTop = 0);

  return scrollFlag ? (
    <TopButton onClick={moveToTop}>
      <i>
        <TopButtonIco />
      </i>
      <br />
      Top
    </TopButton>
  ) : (
    <TopButton style={{ opacity: "0", transition: ".3s" }}></TopButton>
  );
}
export default Topbutton;
