import router from "next/router";
import { useState, useEffect } from "react";
import AdminNavigationUI from "./AdminNavigation.presenter";

const AdminNavigation = () => {
  const [time, setTime] = useState("");

  const date = new Date();
  const getCurrentDate = () => {
    const currentTime = {
      year: date.getFullYear(),
      month: date.getMonth() + 1,
      date: date.getDate(),
      hours: date.getHours(),
      minutes: date.getMinutes(),
    };

    const currentTimer = String(
      `${currentTime.year}년 ${currentTime.month}월 ${currentTime.date}일 ${currentTime.hours}시 ${currentTime.minutes}분`
    );
    setTime(currentTimer);
  };

  const onClickMoveToOverview = () => {
    router.push("/admin");
  };
  const onClickMoveToUser = () => {
    router.push("/admin/user");
  };
  const onClickMoveToInquiry = () => {
    router.push("/admin/inquiry");
  };

  const onClickMoveToSales = () => {
    router.push("/admin/sales");
  };

  const onClickMoveToMain = () => {
    router.push("/");
  };

  useEffect(() => {
    getCurrentDate();
  });
  return (
    <>
      <AdminNavigationUI
        time={time}
        onClickMoveToOverview={onClickMoveToOverview}
        onClickMoveToUser={onClickMoveToUser}
        onClickMoveToInquiry={onClickMoveToInquiry}
        onClickMoveToSales={onClickMoveToSales}
        onClickMoveToMain={onClickMoveToMain}
      />
    </>
  );
};

export default AdminNavigation;
