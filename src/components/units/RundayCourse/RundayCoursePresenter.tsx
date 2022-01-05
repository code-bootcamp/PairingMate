import { Inner } from "../../../commons/styles/common";
import * as S from "./RundayCourseStyles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { RundayCourseUIProps } from "./RundayCourseTypes";
import { seoulGuname } from "../../../commons/data/seoulGill";

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 4,
};

const RundayCourseUI = (props: RundayCourseUIProps) => {
  return (
    <>
      <Inner>
        <h1>RundayCourse List Page</h1>
        <div>
          <select defaultValue={"none"} onChange={props.onChangeGuName}>
            <option value={"none"} disabled>
              행정구 선택
            </option>
            {seoulGuname.map((el) => (
              <option key={el} value={el}>
                {el}
              </option>
            ))}
          </select>
          <button onClick={props.onClickSearchCourse}>검색</button>
        </div>
        <S.ListWrapper>
          <Slider {...settings}>
            {props.data.map((el, index) => (
              <div key={index}>
                <S.SliderInnerDiv>
                  <div>{el.AREA_GU}</div>
                  <div>{el.COURSE_NAME}</div>
                  <div>{el.CPI_NAME}</div>
                  <div>{el.DISTANCE}</div>
                  <div>{el.LEAD_TIME}</div>
                  <div>{el.RELATE_SUBWAY}</div>
                </S.SliderInnerDiv>
              </div>
            ))}
          </Slider>
        </S.ListWrapper>
      </Inner>
    </>
  );
};
export default RundayCourseUI;
