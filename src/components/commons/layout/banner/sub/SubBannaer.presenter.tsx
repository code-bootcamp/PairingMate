import * as SB from "./SubBanner.styles";
import { SubBannerProps } from "./SubBanner.types";

const SubBannerUI = (props: SubBannerProps) => {
  return (
    <>
      <SB.BannerSection style={{ backgroundImage: `url(${props.bgUrl})` }}>
        <SB.SectionConts>
          <SB.subtitle>PairingMate</SB.subtitle>
          <SB.BannerTitle>{props.sectionName}</SB.BannerTitle>
        </SB.SectionConts>
      </SB.BannerSection>
    </>
  );
};

export default SubBannerUI;
