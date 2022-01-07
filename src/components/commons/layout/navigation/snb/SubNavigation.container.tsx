import router from "next/router";
import SubNavigationUI from "./SubNavigation.presenter";

const SubNavigation = () => {
  const onClickMoveToFAQ = () => {
    router.push("/cs-center");
  };

  const onClickMoveToPartnerInquiry = () => {
    router.push("/cs-center/partner");
  };
  return (
    <SubNavigationUI
      onClickMoveToFAQ={onClickMoveToFAQ}
      onClickMoveToPartnerInquiry={onClickMoveToPartnerInquiry}
    />
  );
};

export default SubNavigation;
