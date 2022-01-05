import { useEffect, useState } from "react";
import * as SB from "./SubBanner.styles";
const PageUrl = [
  {
    url: "/find-mates",
    title: "FindMates",
  },
  {
    url: "/fitness-center",
    title: "Fitness Center",
  },
  {
    url: "/best-deal",
    title: "Best Deal",
  },
  {
    url: "/runday-course",
    title: "Runday Course",
  },
  {
    url: "/cs-center",
    title: "고객센터",
  },
];

const SubBanner = () => {
  const [sectionName, setSectionName] = useState("");

  useEffect(() => {
    PageUrl.forEach((el) => {
      if (el.url === window.location.pathname) {
        setSectionName(el.title);
      }
    });
  }, []);

  return (
    <>
      <SB.BannerSection>
        <SB.SectionConts>
          <SB.subtitle>PairingMate</SB.subtitle>
          <SB.BannerTitle>{sectionName}</SB.BannerTitle>
        </SB.SectionConts>
      </SB.BannerSection>
    </>
  );
};

export default SubBanner;
