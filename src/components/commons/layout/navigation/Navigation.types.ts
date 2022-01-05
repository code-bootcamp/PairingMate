import { Dispatch, SetStateAction } from "react";

export interface NavigationProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  onClickopen: () => void;
  onClickMoveToFindMates: () => void;
  onClickMoveToFitnessCenter: () => void;
  onClickMoveToBestDeal: () => void;
  onClickMoveToRundayCourse: () => void;
  onClickMoveToCSCenter: () => void;
}

export interface NaviButtonProps {
  isOpen: boolean;
}
