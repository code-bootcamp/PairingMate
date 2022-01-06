import { Inner } from "../../../commons/styles/common";
import * as F from "./FitnessCentersStyles";

const FitnessCentersUI = (props) => {
  return (
    <>
      <F.Wrapper>
        <F.GetMap id="map" />
        <F.Body>
          <F.TitleBox>
            <F.Title>내 주변 피트니스 센터</F.Title>
          </F.TitleBox>
          <F.GetList>
            {props.myKeyword &&
              props.myKeyword.map((el: any, index) => (
                <F.List key={el.id}>
                  <F.PlaceName onClick={props.newMarker(index)}>
                    {el.place_name}
                  </F.PlaceName>
                  <F.Address> {el.address_name}</F.Address>
                  <F.Phone>Tel. {el.phone}</F.Phone>
                  <F.MoveToDetail href={el.place_url}>상세보기</F.MoveToDetail>
                </F.List>
              ))}
          </F.GetList>
        </F.Body>
      </F.Wrapper>
    </>
  );
};
export default FitnessCentersUI;
