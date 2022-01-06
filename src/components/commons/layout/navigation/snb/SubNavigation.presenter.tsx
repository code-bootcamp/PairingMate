import * as SN from "./SubNavigation.styles";

const SubNavigationUI = () => {
  return (
    <>
      <SN.SubNavigationList>
        <li>
          <button>FAQ</button>
        </li>
        <li>
          <button>파트너 문의</button>
        </li>
      </SN.SubNavigationList>
    </>
  );
};

export default SubNavigationUI;
