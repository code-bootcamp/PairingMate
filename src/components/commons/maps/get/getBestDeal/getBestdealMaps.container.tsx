import { useEffect } from "react";
import GetBestdealMapsPageUI from "./getBestdealMaps.presenter";

declare const window: typeof globalThis & {
  kakao: any;
};

const GetBestdealMapsPage = (props) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=7f7e5a77df96d74182f8c75d73e54e95&libraries=services"; // 서비스 key값입니다.
    document.head.appendChild(script);

    script.onload = () => {
      window.kakao.maps.load(function () {
        const container = document.getElementById("map");
        const options = {
          center: new window.kakao.maps.LatLng(33.450701, 126.570667),
          level: 2,
        };
        const map = new window.kakao.maps.Map(container, options);
        map.setZoomable(false);
        const zoomControl = new window.kakao.maps.ZoomControl();
        map.addControl(zoomControl, window.kakao.maps.ControlPosition.RIGHT);
        const geocoder = new window.kakao.maps.services.Geocoder();

        geocoder.addressSearch(
          props.data?.fetchUseditem.useditemAddress?.address, // 좌표로 변환할 대상의 주소가 들어가는 곳입니다.(베스트딜의 정보에서 가져와야되는 주소)
          function (result, status) {
            if (status === window.kakao.maps.services.Status.OK) {
              const coords = new window.kakao.maps.LatLng(
                result[0].y,
                result[0].x
              );

              const marker = new window.kakao.maps.Marker({
                map: map,
                position: coords,
              });
              map.setCenter(coords);
            }
          }
        );
      });
    };
  }, [props.data]); // 의존성배열에 address값을 담아 address값이 변경되면 지도만 다시 랜더링 합니다.

  return (
    <>
      <GetBestdealMapsPageUI />
    </>
  );
};

export default GetBestdealMapsPage;
