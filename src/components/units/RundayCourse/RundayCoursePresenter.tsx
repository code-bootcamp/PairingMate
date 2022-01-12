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
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 580,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

const RundayCourseUI = (props: RundayCourseUIProps) => {
  return (
    <>
      <Inner>
        <S.MapWrapper>
          {props.isOpen && (
            <ModalUI
              onClickClose={props.onClickClose}
              pointData={props.pointData}
            />
          )}
          <SeoulMap onClickSearchList={props.onClickSearchList} />
          <S.WeahterInfo>
            <h1>Seoul</h1>
            <div>
              <ul>
                <li>
                  <span>weather</span>
                </li>
                <li>
                  <span>temp</span>
                </li>
                <li>
                  <span>humidity</span>
                </li>
                <li>
                  <span>wind</span>
                </li>
              </ul>
              <ul>
                <li>
                  <span>{props.weatherInfo.weather}</span>
                </li>
                <li>
                  <span>{props.weatherInfo.temp} ℃</span>
                </li>
                <li>
                  <span>{props.weatherInfo.humidity} %</span>
                </li>
                <li>
                  <span>{props.weatherInfo.wind} m/s</span>
                </li>
              </ul>
            </div>
          </S.WeahterInfo>
        </S.MapWrapper>
        <S.ListWrapper>
          <Slider {...settings}>
            {props.data.length !== 0
              ? props.data.map((el, index) => (
                  <S.SliderInnerDiv key={index}>
                    <nav
                      onClick={props.onClickGetCourseInfo(
                        el.COURSE_NAME,
                        el.CPI_NAME
                      )}
                    >
                      <span>{el.AREA_GU}</span>
                      <h3>{el.COURSE_NAME}</h3>
                      <S.PointName>{el.CPI_NAME}</S.PointName>
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
                ))
              : Array(8)
                  .fill(1)
                  .map((el, index) => (
                    <S.SliderInnerDiv key={index}>
                      <nav>
                        <h5>Runday Course</h5>
                        <p>오늘은 여기 어떠세요 ?</p>
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
