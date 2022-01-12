import { Modal } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import RundayCourseUI from "./RundayCoursePresenter";
import { GU_COURSE_NAME } from "../../../commons/data/seoulGill";
import { IWeatherInfo } from "./RundayCourseTypes";
import { getTemp } from "../../../commons/libraries/utils/utils";

const RundayCourse = () => {
  let newData = [];
  const [data, setData] = useState([]);
  const [weatherInfo, setWeatherInfo] = useState<IWeatherInfo>({});
  const [pointData, setPointData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    fetchWeather();
  }, []);

  const fetchWeather = async () => {
    const result = await axios.get(
      `https://api.openweathermap.org/data/2.5/weather?q=Seoul,kr&appid=de43835420dc373a9c635d81f90469e3`
    );

    setWeatherInfo({
      cityName: result.data.name,
      src: `http://openweathermap.org/img/w/${result.data.weather[0].icon}.png`,
      humidity: result.data.main.humidity,
      temp: getTemp(result.data.main.temp),
      wind: result.data.wind.speed,
      weather: result.data.weather[0].description,
    });
  };

  const onClickGetCourseInfo =
    (courseName: string, pointName: string) => async () => {
      setIsOpen(true);
      try {
        const result = await axios.get(
          `http://openapi.seoul.go.kr:8088/75676d4b54776f6f3130397555666d4f/json/SeoulGilWalkCourse/1/100/${courseName}/${pointName}`
        );
        console.log(result);
        setPointData(result.data?.SeoulGilWalkCourse.row);
      } catch (error) {
        Modal.error({ content: "서버 장애 , 관리자에게 문의해주세요." });
      }
    };
  const onClickClose = () => {
    setIsOpen(false);
  };

  const onClickSearchList = (location: string) => () => {
    if (GU_COURSE_NAME[location] === undefined) {
      Modal.warning({ content: "해당지역은 오픈예정입니다." });
      return;
    }
    GU_COURSE_NAME[location].forEach(async (el: string) => {
      const result = await axios.get(
        `http://openapi.seoul.go.kr:8088/75676d4b54776f6f3130397555666d4f/json/SeoulGilWalkCourse/1/100/${el}`
      );
      if (result.data?.SeoulGilWalkCourse !== undefined) {
        newData = newData.concat(result.data?.SeoulGilWalkCourse.row);
        setData(newData);
      }
    });
  };

  return (
    <RundayCourseUI
      weatherInfo={weatherInfo}
      data={data}
      pointData={pointData}
      isOpen={isOpen}
      onClickSearchList={onClickSearchList}
      onClickGetCourseInfo={onClickGetCourseInfo}
      onClickClose={onClickClose}
    />
  );
};
export default RundayCourse;
