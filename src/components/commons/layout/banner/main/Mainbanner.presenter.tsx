import FullpageArrows from "../../../buttons/fullpageArrows/fullpageArrows";
import * as MB from "./Mainbanner.styles";
const MainBannerUI = () => {
  return (
    <>
      <FullpageArrows name="Scroll Down" />
      <MB.MainBannerWrap>
        <video data-autoplay muted loop playsInline>
          <source src="/images/main/main_visual.mp4" type="video/mp4" />
          IE 8 이하는 비디오가 나오지 않습니다. IE 버전을 업데이트 하시길
          바랍니다.
        </video>
      </MB.MainBannerWrap>
    </>
  );
};

export default MainBannerUI;
