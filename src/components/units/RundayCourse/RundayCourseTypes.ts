import { ChangeEvent } from "react";

export interface RundayCourseUIProps {
  data: any[];
  onClickSearchCourse: () => void;
  onChangeGuName: (event: ChangeEvent<HTMLSelectElement>) => void;
}
