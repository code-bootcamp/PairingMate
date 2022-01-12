import { User } from "firebase/auth";
import { Dispatch, SetStateAction } from "react";
import { IQuery } from "../../../../commons/types/generated/types";

export interface NavigationProps {
  isOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  FirebaseUserInfo:User;
  companyUserInfo:Pick<IQuery, "fetchUserLoggedIn">;
  userName:string;
  onClickopen: () => void;
  onClickMoveToFindMates: () => void;
  onClickMoveToFitnessCenter: () => void;
  onClickMoveToBestDeal: () => void;
  onClickMoveToRundayCourse: () => void;
  onClickMoveToCSCenter: () => void;
  onClickMoveToMypage: () => void;
}

export interface NaviButtonProps {
  isOpen: boolean;
}
