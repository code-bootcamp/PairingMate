import { useEffect, useState } from "react";
import SubBannerUI from "./SubBannaer.presenter";

const PageUrl = [
  {
    url: "/find-mates",
    title: "FindMates",
    images: "/images/sub/bg_sub_visual01.jpg",
  },
  {
    url: "/fitness-centers",
    title: "Fitness Center",
    images: "/images/sub/bg_sub_visual02.jpg",
  },
  {
    url: "/best-deal",
    title: "Best Deal",
    images: "/images/sub/bg_sub_visual03.jpg",
  },
  {
    url: "/runday-course",
    title: "Runday Course",
    images: "/images/sub/bg_sub_visual04.jpg",
  },
  {
    url: "/cs-center",
    title: "고객센터",
    images: "/images/sub/bg_sub_visual05.jpg",
  },
  {
    url: "/cs-center/partner",
    title: "고객센터",
    images: "/images/sub/bg_sub_visual05.jpg",
  },
];

const SubBanner = () => {
  const [sectionName, setSectionName] = useState("");
  const [bgUrl, setBgUrl] = useState("");

  useEffect(() => {
    PageUrl.forEach((el) => {
      if (el.url === window.location.pathname) {
        setSectionName(el.title);
        setBgUrl(el.images);
      }
      console.log(el.images);
    });
  });

  return (
    <>
      <SubBannerUI sectionName={sectionName} bgUrl={bgUrl} />
    </>
  );
};

export default SubBanner;
