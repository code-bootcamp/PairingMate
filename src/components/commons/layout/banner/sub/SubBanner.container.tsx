import { useEffect, useState } from "react";
import { auth } from "../../../../../../pages/_app";
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
    url: ["/best-deal"],
    title: "Best Deal",
    images: "/images/sub/bg_sub_visual03.jpg",
  },
  {
    url: "/runday-course",
    title: "Runday Course",
    images: "/images/sub/bg_sub_visual04.jpg",
  },
  {
    url: [
      "/cs-center",
      "/cs-center/partner",
      "/cs-center/policy/email",
      "/cs-center/policy/privacy-policy",
    ],
    title: "고객센터",
    images: "/images/sub/bg_sub_visual05.jpg",
  },
  {
    url: ["mypage/user/", "mypage/company"],
    title: "Mypage",
    images: "/images/sub/bg_sub_visual06.jpg",
  },
];

const SubBanner = () => {
  const [sectionName, setSectionName] = useState("");
  const [bgUrl, setBgUrl] = useState("");

  useEffect(() => {
    const userId = auth?.currentUser?.uid;
    const myPageUser = "/mypage/user" + "/" + userId;
    const myPageCompany = "/mypage/company" + "/" + userId;
    console.log(myPageUser);
    PageUrl.forEach((el) => {
      if (el.url.includes(window.location.pathname)) {
        setSectionName(el.title);
        setBgUrl(el.images);
      }
    });
    if (window.location.pathname === myPageUser) {
      setSectionName("Mypage");
      setBgUrl("/images/sub/bg_sub_visual06.jpg");
    }
  });

  return (
    <>
      <SubBannerUI sectionName={sectionName} bgUrl={bgUrl} />
    </>
  );
};

export default SubBanner;
