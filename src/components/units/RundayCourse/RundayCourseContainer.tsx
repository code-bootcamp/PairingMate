import { Modal } from "antd";
import axios from "axios";
import { ChangeEvent, useState } from "react";
import RundayCourseUI from "./RundayCoursePresenter";
import { GU_COURSE_NAME } from "../../../commons/data/seoulGill";

const RundayCourse = () => {
  let newData = [];
  const [pointName, setPointName] = useState("");
  const [data, setData] = useState([]);
  const [courseName, setCourseName] = useState<string[]>([]);

  const onClickSearchCourse = async () => {
    if (!courseName) {
      Modal.warning({ content: "해당지역은 오픈예정입니다." });
      return;
    }
    courseName.forEach(async (el) => {
      const result = await axios.get(
        `http://openapi.seoul.go.kr:8088/75676d4b54776f6f3130397555666d4f/json/SeoulGilWalkCourse/1/100/${el}`
      );
      if (result.data?.SeoulGilWalkCourse !== undefined) {
        newData = newData.concat(result.data?.SeoulGilWalkCourse.row);
        setData(newData);
      }
    });
    console.log("검색");
  };

  const onChangeGuName = (event: ChangeEvent<HTMLSelectElement>) => {
    setCourseName(GU_COURSE_NAME[event.target.value]);
  };

  return (
    <RundayCourseUI
      onChangeGuName={onChangeGuName}
      onClickSearchCourse={onClickSearchCourse}
      data={data}
    />
  );
};
export default RundayCourse;
