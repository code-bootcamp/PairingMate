import router from "next/router";
import FooterUI from "./Footer.presenter";

const Footer = () => {
  const onClickToMoveToMain = () => {
    router.push("/");
  };
  return (
    <>
      <FooterUI onClickToMoveToMain={onClickToMoveToMain} />
    </>
  );
};
export default Footer;
