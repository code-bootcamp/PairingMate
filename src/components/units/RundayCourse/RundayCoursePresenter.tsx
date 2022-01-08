import { Inner } from "../../../commons/styles/common";
import * as S from "./RundayCourseStyles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SeoulMap from "../../commons/seoulMap/mapContainer";
import { replaceSubway } from "../../../commons/libraries/utils/utils";
import { RundayCourseUIProps } from "./RundayCourseTypes";
import ModalUI from "./ModalContainer";

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
};

const RundayCourseUI = (props: RundayCourseUIProps) => {
  return (
    <>
      {props.isOpen && (
        <ModalUI
          onClickClose={props.onClickClose}
          pointData={props.pointData}
        />
      )}
      <Inner>
        <S.MapWrapper>
          <SeoulMap onClickSearchList={props.onClickSearchList} />
        </S.MapWrapper>
        <S.ListWrapper>
          <Slider {...settings}>
            {props.data.map((el, index) => (
              <S.SliderInnerDiv key={index}>
                <nav
                  onClick={props.onClickGetCourseInfo(
                    el.COURSE_NAME,
                    el.CPI_NAME
                  )}
                >
                  <span>{el.AREA_GU}</span>
                  <h3>{el.COURSE_NAME}</h3>
                  <span>{el.CPI_NAME}</span>
                  <ul>
                    <li>
                      <S.IconWrapper>
                        <img
                          src="/images/sub/runday-course/distance-icon.png"
                          alt=""
                        />
                      </S.IconWrapper>
                      <span>{el.DISTANCE}</span>
                    </li>
                    <li>
                      <S.IconWrapper>
                        <img
                          src="/images/sub/runday-course/time-icon.png"
                          alt=""
                        />
                      </S.IconWrapper>
                      <span>{el.LEAD_TIME}</span>
                    </li>
                    <li>
                      <S.IconWrapper>
                        <img
                          src="/images/sub/runday-course/subway-icon.png"
                          alt=""
                        />
                      </S.IconWrapper>
                      <span>
                        {replaceSubway(el.RELATE_SUBWAY || "").map((el) =>
                          el.length !== 0 ? <h4 key={el}>{el}</h4> : "없음"
                        )}
                      </span>
                    </li>
                  </ul>
                </nav>
              </S.SliderInnerDiv>
            ))}
          </Slider>
        </S.ListWrapper>
      </Inner>
    </>
  );
};
export default RundayCourseUI;
