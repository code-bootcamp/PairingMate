import * as MS2 from "./Section02.styles";
import { BestFindMatesUIProps } from "./Section02.types";
import {
  replaceUrl,
  replaceTags,
  getTitle,
} from "../../../../commons/libraries/utils/utils";
import { Inner } from "../../../../commons/styles/common";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const MainSection02UI = (props: BestFindMatesUIProps) => {
  const settings = {
    dots: false,
    infinitie: true,
    speed: 1500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Inner>
        <MS2.TextWrap>
          <MS2.title>
            <MS2.subtitle>PairingMate</MS2.subtitle>
            Best Feeds of FindMates
          </MS2.title>
          <MS2.TextDesc>현재 가장 인기많은 FindMates</MS2.TextDesc>
        </MS2.TextWrap>
        <div>
          <MS2.BestFindMatesList>
            <Slider {...settings}>
              {props.data?.fetchBoardsOfTheBest.map((el) => (
                <li key={el._id} onClick={props.onClickFindmateGetPage(el._id)}>
                  <MS2.BestFindMatesCard>
                    <p className="imageWrapper">
                      <img src={replaceUrl(el.images[0])} alt="" />
                    </p>
                    <MS2.BestFindMatsCardText>
                      <h5>{getTitle(el.title)}</h5>
                      <p>{el.boardAddress?.address}</p>
                      {replaceTags(el.youtubeUrl).map((tag) => (
                        <span key={tag}>{tag}</span>
                      ))}
                    </MS2.BestFindMatsCardText>
                  </MS2.BestFindMatesCard>
                  {el.likeCount}
                </li>
              ))}
            </Slider>
          </MS2.BestFindMatesList>
        </div>
      </Inner>
    </>
  );
};

export default MainSection02UI;
