import router from "next/router";
import FooterUI from "./Footer.presenter";

const Footer = () => {
  const onClickMoveToMain = () => {
    router.push("/");
  };

  const onClickMoveToPrivacyPolicy = () => {
    router.push("/cs-center/policy/privacy-policy");
  };
  const onClickMoveToEmail = () => {
    router.push("/cs-center/policy/email");
  };

  const onClickMoveToFAQ = () => {
    router.push("/cs-center");
  };

  const onClickMoveToPartnerInquiry = () => {
    router.push("/cs-center/partner");
  };
  return (
    <>
      <FooterUI
        onClickMoveToMain={onClickMoveToMain}
        onClickMoveToPrivacyPolicy={onClickMoveToPrivacyPolicy}
        onClickMoveToEmail={onClickMoveToEmail}
        onClickMoveToFAQ={onClickMoveToFAQ}
        onClickMoveToPartnerInquiry={onClickMoveToPartnerInquiry}
      />
    </>
  );
};
export default Footer;
