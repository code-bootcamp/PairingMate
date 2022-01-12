import { Inner } from "../../../../commons/styles/common";
import { BestdealListUIProps } from "./BestDealListTypes";
import * as B from "./BestDealListStyles";
import { Fragment } from "react";
import { getTitle } from "../../../../commons/libraries/utils/utils";

const BestDealListUI = (props: BestdealListUIProps) => {
  console.log(props.bestDealList);
  return (
    <>
      <Inner>
        <B.Title>PairingMate추천 운동센터</B.Title>
        <B.Wrapper>
          <B.BestdealWrapper>
            {props.bestOfBestDealList?.fetchUseditemsOfTheBest.map(
              (el: any) => (
                <B.BestdealItem key={el._id}>
                  <B.BestdealImg
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  ></B.BestdealImg>
                  <B.TextBox>
                    <B.BestdealTitle
                      id={el._id}
                      onClick={props.onClickBestdealGetPage(el._id)}
                    >
                      {getTitle(el.name)}
                    </B.BestdealTitle>
                    <B.BestdealAddress>
                      {el.useditemAddress?.address}
                    </B.BestdealAddress>
                    <B.TagsWrapper>
                      {el.tags.map((el: any) => (
                        <Fragment key={el}>
                          <B.ProductTags>{el}</B.ProductTags>
                        </Fragment>
                      ))}
                    </B.TagsWrapper>
                  </B.TextBox>
                </B.BestdealItem>
              )
            )}
          </B.BestdealWrapper>
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
          <B.ProductWrapper>
            {props.bestDealList?.fetchUseditems.map((el: any) => (
              <B.ProductItem key={el._id}>
                <B.ProductImg
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                ></B.ProductImg>
                <B.ProductTextBox>
                  <B.ProductTitle
                    id={el._id}
                    onClick={props.onClickBestdealGetPage(el._id)}
                  >
                    {getTitle(el.name)}
                  </B.ProductTitle>
                  <B.ProductAddress>
                    {el.useditemAddress?.address}
                  </B.ProductAddress>
                  <B.ProductTagsWrapper>
                    {el.tags.map((el: any) => (
                      <Fragment key={el}>
                        <B.ProductTags>{el}</B.ProductTags>
                      </Fragment>
                    ))}
                  </B.ProductTagsWrapper>
                </B.ProductTextBox>
              </B.ProductItem>
            ))}
          </B.ProductWrapper>
          <B.MoreButton onClick={props.onClickGetBestdealList}>
            더보기
          </B.MoreButton>
          <button onClick={props.onClickMoveToBestdealAddPage}>글쓰기</button>
        </B.Wrapper>
      </Inner>
    </>
  );
};
export default BestDealListUI;
