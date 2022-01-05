import { FooterProps } from "./Footer.types";
import { Inner } from "../../../../commons/styles/common";
import * as F from "./Footer.styles";

const FooterUI = (props: FooterProps) => {
  return (
    <>
      <F.Footer>
        <F.FooterInner>
          <F.FooterLogo>
            <button>
              <img src="/images/common/logo.png" alt="PairingMate Logo" />
            </button>
          </F.FooterLogo>
          <F.FooterMenu>
            <li>
              <button>개인정보 취급방침</button>
            </li>

            <li>
              <button>이메일 무단수집거부</button>
            </li>

            <li>
              <button>고객센터</button>
            </li>

            <li>
              <button>파트너 문의</button>
            </li>
          </F.FooterMenu>
        </F.FooterInner>
        <F.CopyRight>Copyright ⓒ PairingMate. All rights reserved.</F.CopyRight>
      </F.Footer>
    </>
  );
};
export default FooterUI;
