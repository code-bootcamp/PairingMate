import FitnessCentersUI from "./FitnessCentersPresenter";
import axios from "axios";
import { useState, useEffect } from "react";

declare const window: typeof globalThis & {
  kakao: any;
};

const FitnessCenters = () => {
  const [myKeyword, setMyKeyword] = useState([]);
  const [myLat, setMyLat] = useState<number>();
  const [myLon, setMyLon] = useState<number>();

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=7f7e5a77df96d74182f8c75d73e54e95&libraries=services"; // 서비스 key값 & 라이브러리 호출
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const mapContainer = document.getElementById("map"); // 지도를 표시할 div
        const mapOption = {
          center: new window.kakao.maps.LatLng(
            37.56639085841548,
            126.9779594783454
          ), // 지도의 중심좌표
          level: 2, // 지도의 확대 레벨
        };
        const map = new window.kakao.maps.Map(mapContainer, mapOption);
        map.setZoomable(false);
        const zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);

        if (navigator.geolocation) {
          // GeoLocation을 이용해서 접속 위치를 얻어옵니다
          navigator.geolocation.getCurrentPosition(async function (position) {
            const lat = position.coords.latitude; // 위도
            const lon = position.coords.longitude; // 경도
            setMyLat(lat);
            setMyLon(lon);
            const locPosition = await new window.kakao.maps.LatLng(lat, lon); // 마커가 표시될 위치를 geolocation으로 얻어온 좌표로 생성합니다
            const message = '<div style="padding:5px;">현재위치</div>'; // 인포윈도우에 표시될 내용입니다

            // 마커와 인포윈도우를 표시합니다
            displayMarker(locPosition, message);

            if (myLon && myLat) {
              const search = async () => {
                const result = await axios.get(
                  `https://dapi.kakao.com/v2/local/search/keyword.json?autoload=false&page=1&size=15&sort=distance&query=${"주변 헬스장"}&y=${myLat}&x=${myLon}&radius=10000`,
                  {
                    headers: {
                      Authorization: "KakaoAK 80255a1f4e1c8018da2312bc4f97ad51",
                    },
                  }
                );
                setMyKeyword(result.data.documents);
              };
              search();
            }
          });
        } else {
          // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다

          const locPosition = new window.kakao.maps.LatLng(
            37.56639085841548,
            126.9779594783454
          );
          // 37.56639085841548, 126.97795947834545 // 서울시청
          const message = "현재위치 불러오기에 실패하였습니다";

          displayMarker(locPosition, message);
        }

        // 지도에 마커와 인포윈도우를 표시하는 함수입니다
        function displayMarker(locPosition, message) {
          // 마커를 생성합니다
          const marker = new window.kakao.maps.Marker({
            map: map,
            position: locPosition,
          });

          // 지도 중심좌표를 접속위치로 변경합니다
          map.setCenter(locPosition);
        }
      });
    };
  }, [myLat, myLon]); // 의존성배열에 address값을 담아 address값이 변경되면 지도만 다시 랜더링 합니다.

  const newMarker = (index: number) => () => {
    // console.log(myKeyword[0].x);
    const mapContainer = document.getElementById("map"); // 지도를 표시할 div
    const mapOption = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
      level: 2, // 지도의 확대 레벨
    };
    const map = new window.kakao.maps.Map(mapContainer, mapOption);
    map.setZoomable(false);
    const markerPosition = new window.kakao.maps.LatLng(
      myKeyword[index].y,
      myKeyword[index].x
    );

    // 마커를 생성합니다
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커가 지도 위에 표시되도록 설정합니다
    marker.setMap(map);
    map.setCenter(markerPosition);
  };

  return <FitnessCentersUI myKeyword={myKeyword} newMarker={newMarker} />;
};
export default FitnessCenters;
