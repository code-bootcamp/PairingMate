import router from "next/router";
import MainSection04UI from "./Section04.presenter";
import { MainSection04Props } from "./Section04.types";

const MainSection04 = () => {
  const onClickMoveToPartnerInquiry = () => {
    router.push("/cs-center/partner");
  };
  return (
    <>
      <MainSection04UI
        onClickMoveToPartnerInquiry={onClickMoveToPartnerInquiry}
      />
    </>
  );
};

export default MainSection04;
