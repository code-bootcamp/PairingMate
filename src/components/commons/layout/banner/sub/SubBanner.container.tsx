import { useEffect, useState } from "react";
import { auth } from "../../../../../../pages/_app";
import SubBannerUI from "./SubBannaer.presenter";

const PageUrl = [
  {
    url: "find-mates",
    title: "FindMates",
    images: "/images/sub/bg_sub_visual01.jpg",
  },
  {
    url: "fitness-centers",
    title: "Fitness Center",
    images: "/images/sub/bg_sub_visual02.jpg",
  },
  {
    url: "best-deal",
    title: "Best Deal",
    images: "/images/sub/bg_sub_visual03.jpg",
  },
  {
    url: "runday-course",
    title: "Runday Course",
    images: "/images/sub/bg_sub_visual04.jpg",
  },
  {
    url: "cs-center",
    title: "고객센터",
    images: "/images/sub/bg_sub_visual05.jpg",
  },
  {
    url: "mypage",
    title: "Mypage",
    images: "/images/sub/bg_sub_visual06.jpg",
  },
];

const SubBanner = () => {
  const [sectionName, setSectionName] = useState("");
  const [bgUrl, setBgUrl] = useState("");

  const onLoadBanner = () => {
    PageUrl.forEach((el) => {
      if (window.location.pathname.includes(el.url)) {
        setSectionName(el.title);
        setBgUrl(el.images);
      }
    });
  };

  useEffect(() => {
    onLoadBanner();
  });

  return (
    <>
      <SubBannerUI sectionName={sectionName} bgUrl={bgUrl} />
    </>
  );
};

export default SubBanner;
