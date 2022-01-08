import { Inner } from "../../../commons/styles/common";
import * as S from "./RundayCourseStyles";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 2,
};

const RundayCourseTestUI = () => {
  return (
    <>
      <Inner>
        <div></div>
        <S.ListWrapper>
          <Slider {...settings}>
            <S.SliderInnerDiv>
              <div>1</div>
            </S.SliderInnerDiv>
            <S.SliderInnerDiv>
              <div>1</div>
            </S.SliderInnerDiv>
            <S.SliderInnerDiv>
              <div>1</div>
            </S.SliderInnerDiv>
            <S.SliderInnerDiv>
              <div>1</div>
            </S.SliderInnerDiv>
            <S.SliderInnerDiv>
              <div>1</div>
            </S.SliderInnerDiv>
          </Slider>
        </S.ListWrapper>
      </Inner>
    </>
  );
};

export default RundayCourseTestUI;
