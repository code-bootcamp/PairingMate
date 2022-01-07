import * as SN from "./SubNavigation.styles";
import { SubNavigationProps } from "./SubNavigation.types";

const SubNavigationUI = (props: SubNavigationProps) => {
  return (
    <>
      <SN.SubNavigationList>
        <li>
          <button onClick={props.onClickMoveToFAQ}>FAQ</button>
        </li>
        <li>
          <button onClick={props.onClickMoveToPartnerInquiry}>
            파트너 문의
          </button>
        </li>
      </SN.SubNavigationList>
    </>
  );
};

export default SubNavigationUI;
