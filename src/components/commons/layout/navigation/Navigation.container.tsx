import NavigationUI from "./Navigation.presenter";
import { useState } from "react";
import { useRouter } from "next/router";

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
  };

  const onClickMoveToFitnessCenter = () => {
    router.push("/fitness-centers");
  };

  const onClickMoveToBestDeal = () => {
    router.push("/best-deal");
  };

  const onClickMoveToRundayCourse = () => {
    router.push("/runday-course");
  };

  const onClickMoveToCSCenter = () => {
    router.push("/cs-center");
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
