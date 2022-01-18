import { Inner } from "../../../../commons/styles/common";
import { BestdealListUIProps } from "./BestDealListTypes";
import * as B from "./BestDealListStyles";
import { Fragment } from "react";
import { getTitle } from "../../../../commons/libraries/utils/utils";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: true,
  autoplayspeed: 2000,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1021,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
      },
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
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

const BestDealListUI = (props: BestdealListUIProps) => {
  return (
    <>
      <Inner>
        <B.Title>PairingMate추천 운동센터</B.Title>
        <B.Wrapper>
          <div>
            <B.BestProductWrapper>
              <Slider {...settings}>
                {props.bestOfBestDealList?.fetchUseditemsOfTheBest.map(
                  (el: any) => (
                    <B.ProductItem
                      key={el._id}
                      onClick={props.onClickBestdealGetPage(el._id)}
                    >
                      <B.ItemWrapper>
                        <B.ImgWrapper>
                          <B.ProductImg
                            src={`https://storage.googleapis.com/${el.images[0]}`}
                          />
                        </B.ImgWrapper>
                        <B.ProductTextBox>
                          <h4>{getTitle(el.name)}</h4>
                          <p>
                            {el.useditemAddress?.address
                              ? el.useditemAddress.address
                              : "서울 구로구 디지털로 300 "}
                          </p>
                          <B.ProductTagsWrapper>
                            {el.tags.map((el: any) => (
                              <Fragment key={el}>
                                <B.ProductTags>{el}</B.ProductTags>
                              </Fragment>
                            ))}
                          </B.ProductTagsWrapper>
                        </B.ProductTextBox>
                      </B.ItemWrapper>
                    </B.ProductItem>
                  )
                )}
              </Slider>
            </B.BestProductWrapper>
          </div>
          <B.NavigationList>
            <li>
              <button onClick={props.onClickCategory("")}>전체</button>
            </li>
            <li>
              <button onClick={props.onClickCategory("fitness")}>GYM</button>
            </li>
            <li>
              <button onClick={props.onClickCategory("yoga")}>YOGA</button>
            </li>
            <li>
              <button onClick={props.onClickCategory("pilates")}>
                PILATES
              </button>
            </li>
          </B.NavigationList>

          <div>
            <B.ProductWrapper>
              {props.bestDealList?.fetchUseditems.map((el: any) => (
                <B.ProductItem
                  key={el._id}
                  onClick={props.onClickBestdealGetPage(el._id)}
                >
                  <B.ItemWrapper>
                    <B.ImgWrapper>
                      <B.ProductImg
                        src={`https://storage.googleapis.com/${el.images[0]}`}
                      />
                    </B.ImgWrapper>
                    <B.ProductTextBox>
                      <h4>{getTitle(el.name)}</h4>
                      <p>
                        {el.useditemAddress?.address
                          ? el.useditemAddress.address
                          : "서울 구로구 디지털로 300 "}
                      </p>
                      <B.ProductTagsWrapper>
                        {el.tags.map((el: any) => (
                          <Fragment key={el}>
                            <B.ProductTags>{el}</B.ProductTags>
                          </Fragment>
                        ))}
                      </B.ProductTagsWrapper>
                    </B.ProductTextBox>
                  </B.ItemWrapper>
                </B.ProductItem>
              ))}
            </B.ProductWrapper>
          </div>
          <B.ButtonWrapper>
            <B.MoreButton onClick={props.onClickGetBestdealList}>
              더보기
            </B.MoreButton>
            {props.userImage === "null" && (
              <button onClick={props.onClickMoveToBestdealAddPage}>
                글쓰기
              </button>
            )}
          </B.ButtonWrapper>
        </B.Wrapper>
      </Inner>
    </>
  );
};
export default BestDealListUI;
