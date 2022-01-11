import NavigationUI from "./Navigation.presenter";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { reload } from "firebase/auth";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  const onClickopen = () => {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  const onClickMoveToFindMates = () => {
    router.push("/find-mates");
    setIsOpen(false);
  };

  const onClickMoveToFitnessCenter = () => {
    router.push("/fitness-centers");
    setIsOpen(false);
  };

  const onClickMoveToBestDeal = () => {
    router.push("/best-deal");
    setIsOpen(false);
  };

  const onClickMoveToRundayCourse = () => {
    router.push("/runday-course");
    setIsOpen(false);
  };

  const onClickMoveToCSCenter = () => {
    router.push("/cs-center");
    setIsOpen(false);
  };

  // useEffect(() => {
  //   if(localStorage.getItem(("refreshToken")) === "false"){
  //     console.log("refreshToken 1 : " , localStorage.getItem(("refreshToken")))
  //   } else {
  //     console.log("refreshToken 2 : " , localStorage.getItem(("refreshToken")))
  //   }
  // }, [])

  return (
    <>
      <NavigationUI
        isOpen={isOpen}
        onClickopen={onClickopen}
        onClickMoveToFindMates={onClickMoveToFindMates}
        onClickMoveToFitnessCenter={onClickMoveToFitnessCenter}
        onClickMoveToBestDeal={onClickMoveToBestDeal}
        onClickMoveToRundayCourse={onClickMoveToRundayCourse}
        onClickMoveToCSCenter={onClickMoveToCSCenter}
        setIsOpen={setIsOpen}
      />
    </>
  );
};

export default Navigation;
