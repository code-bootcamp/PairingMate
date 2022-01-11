import { Inner } from "../../../../commons/styles/common";
import { BestdealListUIProps } from "./BestDealListTypes";
import * as B from "./BestDealListStyles";
import { Fragment } from "react";

const BestDealListUI = (props: BestdealListUIProps) => {
  console.log(props.bestDealList);
  return (
    <>
      <Inner>
        <B.Title>PairingMate추천 운동센터</B.Title>
        <div>
          {/* <B.Wrapper>
            {props.bestOfBestDealList?.fetchUseditemsOfTheBest.map(
              (el: any) => (
                <div key={el._id}>
                  <B.BestdealImg
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  ></B.BestdealImg>
                  <B.BestdealTitle
                    id={el._id}
                    onClick={props.onClickBestdealGetPage(el._id)}
                  >
                    {el.name}
                  </B.BestdealTitle>
                  <div>{el.useditemAddress?.address}</div>
                  <div key={el}>
                    {el.tags.map((el: any) => (
                      <div>{el}</div>
                    ))}
                  </div>
                </div>
              )
            )}
          </B.Wrapper> */}
          <B.Wrapper>
            {props.bestDealList?.fetchUseditems.map((el: any) => (
              <div key={el._id}>
                <B.BestdealImg
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                ></B.BestdealImg>
                <B.TextBox>
                  <B.BestdealTitle
                    id={el._id}
                    onClick={props.onClickBestdealGetPage(el._id)}
                  >
                    {el.name}
                  </B.BestdealTitle>
                  <B.BestdealAddress>
                    {el.useditemAddress?.address}
                  </B.BestdealAddress>
                  <B.TagsWrapper>
                    {el.tags.map((el: any) => (
                      <Fragment key={el}>
                        <B.BestdealTags>{el}</B.BestdealTags>
                      </Fragment>
                    ))}
                  </B.TagsWrapper>
                </B.TextBox>
              </div>
            ))}
          </B.Wrapper>
          <button onClick={props.onClickGetBestdealList}>더보기</button>
          <button onClick={props.onClickMoveToBestdealAddPage}>글쓰기</button>
        </div>
      </Inner>
    </>
  );
};
export default BestDealListUI;
