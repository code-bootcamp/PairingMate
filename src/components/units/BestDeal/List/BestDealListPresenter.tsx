import { Inner } from "../../../../commons/styles/common";

const BestDealListUI = (props) => {
  console.log(props.getBestOfBestDealList);
  return (
    <>
      <Inner>
        <h2>PairingMate추천 운동센터</h2>
        <div>
          <div>
            {props.getBestOfBestDealList?.fetchUseditemsOfTheBest.map(
              (el: any) => (
                <div key={el._id}>
                  <img
                    src={`https://storage.googleapis.com/${el.images[0]}`}
                  ></img>
                  <div id={el._id} onClick={props.onClickTitle}>
                    {el.name}
                  </div>
                  <div>{el.useditemAddress}</div>
                  <div>{el.tags}</div>
                </div>
              )
            )}
          </div>
          <div>
            {props.getBestDealList?.fetchUseditems.map((el: any) => (
              <div key={el._id}>
                <img
                  src={`https://storage.googleapis.com/${el.images[0]}`}
                ></img>
                <div id={el._id} onClick={props.onClickTitle}>
                  {el.name}
                </div>
                <div>{el.useditemAddress}</div>
                <div>{el.tags}</div>
              </div>
            ))}
          </div>
        </div>
      </Inner>
    </>
  );
};
export default BestDealListUI;
