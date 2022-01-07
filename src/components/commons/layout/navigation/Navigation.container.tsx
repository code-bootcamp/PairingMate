import NavigationUI from "./Navigation.presenter";
import { useState } from "react";
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
