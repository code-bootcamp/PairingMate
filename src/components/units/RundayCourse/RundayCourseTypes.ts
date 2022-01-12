import { ChangeEvent } from "react";

export interface RundayCourseUIProps {
  data: any[];
  weatherInfo: IWeatherInfo;
  pointData: any[];
  isOpen: boolean;
  onClickSearchList: (location: string) => () => void;
  onClickGetCourseInfo: (courseName: string, pointName: string) => () => void;
  onClickClose: () => void;
}

export interface IWeatherInfo {
  cityName?: string;
  src?: string;
  humidity?: string;
  temp?: string;
  wind?: number;
  weather?: string;
}
