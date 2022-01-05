import { useRouter } from "next/router";
import MainSection01UI from "./Section01.presenter";

const MainSection01 = () => {
  const router = useRouter();
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

  return (
    <>
      <MainSection01UI
        onClickMoveToFindMates={onClickMoveToFindMates}
        onClickMoveToFitnessCenter={onClickMoveToFitnessCenter}
        onClickMoveToBestDeal={onClickMoveToBestDeal}
        onClickMoveToRundayCourse={onClickMoveToRundayCourse}
      />
    </>
  );
};

export default MainSection01;
