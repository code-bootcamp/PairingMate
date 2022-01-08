import { Modal } from "antd";
import axios from "axios";
import { useState } from "react";
import RundayCourseUI from "./RundayCoursePresenter";
import { GU_COURSE_NAME } from "../../../commons/data/seoulGill";

const RundayCourse = () => {
  let newData = [];
  const [data, setData] = useState([]);
  const [pointData, setPointData] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

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
