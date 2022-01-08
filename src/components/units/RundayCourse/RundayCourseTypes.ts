import { ChangeEvent } from "react";

export interface RundayCourseUIProps {
  data: any[];
  pointData: any[];
  isOpen: boolean;
  onClickSearchList: (location: string) => () => void;
  onClickGetCourseInfo: (courseName: string, pointName: string) => () => void;
  onClickClose: () => void;
}
