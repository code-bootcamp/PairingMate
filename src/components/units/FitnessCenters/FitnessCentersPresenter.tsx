import * as F from "./FitnessCentersStyles";

const FitnessCentersUI = (props) => {
  return (
    <>
      <F.Wrapper>
        <F.MapsWrapper>
          <F.GetMap id="map" />
        </F.MapsWrapper>
        <F.Body>
          <F.TitleBox>
            <F.Title>내 주변 피트니스 센터</F.Title>
          </F.TitleBox>
          <F.GetListWrap>
            <F.GetList>
              {props.myKeyword &&
                props.myKeyword.map((el: any, index) => (
                  <F.List key={el.id}>
                    <F.PlaceName onClick={props.newMarker(index)}>
                      {el.place_name}
                    </F.PlaceName>
                    <F.Address>
                      <F.Img src="/images/sub/fitness-centers/map-marker-alt-solid.svg" />
                      {el.address_name}
                    </F.Address>
                    <F.Phone>
                      <F.Img src="/images/sub/fitness-centers/phone-solid.svg" />
                      {el.phone ? el.phone : "연락처 정보없음"}
                    </F.Phone>
                    <F.Distance>
                      <F.DistanceImg src="/images/sub/fitness-centers/running-solid.svg" />
                      {el.distance}M
                    </F.Distance>
                    <F.MoveToDetail href={el.place_url} target="_blank">
                      <F.Img src="/images/sub/fitness-centers/search-solid.svg" />
                      상세보기
                    </F.MoveToDetail>
                  </F.List>
                ))}
            </F.GetList>
          </F.GetListWrap>
        </F.Body>
      </F.Wrapper>
    </>
  );
};
export default FitnessCentersUI;
