import { Inner } from "../../../../commons/styles/common";
import { IBestDealGetUIProps } from "./BestDealGetTypes";
import * as B from "./BestDealGetStyles";

const BestDealGetUI = (props: IBestDealGetUIProps) => {
  return (
    <Inner>
      <B.Header>
        <B.BestDealImgWrap>
          <img />
        </B.BestDealImgWrap>
        <B.HeaderTextWrapper>
          <B.TextWrapperTitle>스포애니 구로디지털단지점</B.TextWrapperTitle>
          <B.Line></B.Line>
          <B.TextWrapperAddress>
            <B.AddressImg src="/images/sub/best-deal/maker.png" />
            <B.Address>
              서울특별시 구로구 디지털로 273, 에이스타워 2차 B101호
            </B.Address>
          </B.TextWrapperAddress>
          <B.TextWrapperPhone>
            <B.PhoneImg src="/images/sub/fitness-centers/phone-solid.svg" />
            <B.Phone>02-858-9618</B.Phone>
          </B.TextWrapperPhone>
          <B.Line></B.Line>
          <B.ServiceWrapper>
            <B.ServiceTitle>기본제공</B.ServiceTitle>
            <B.ServiceFigureWrapper>
              <B.ServiceContents>
                <p>
                  <B.ServiceContentsIcon src="/images/sub/best-deal/sportswear.png" />
                </p>
                <figcaption>
                  <B.ServiceContentsTitle>운동복</B.ServiceContentsTitle>
                </figcaption>
              </B.ServiceContents>
              <B.ServiceContents>
                <p>
                  <B.ServiceContentsIcon src="/images/sub/best-deal/towel.png" />
                </p>
                <figcaption>
                  <B.ServiceContentsTitle>타월</B.ServiceContentsTitle>
                </figcaption>
              </B.ServiceContents>
              <B.ServiceContents>
                <p>
                  <B.ServiceContentsIcon src="/images/sub/best-deal/shower.png" />
                </p>
                <figcaption>
                  <B.ServiceContentsTitle>샤워시설</B.ServiceContentsTitle>
                </figcaption>
              </B.ServiceContents>
              <B.ServiceContents>
                <p>
                  <B.ServiceContentsIcon src="/images/sub/best-deal/wifi.png" />
                </p>
                <figcaption>
                  <B.ServiceContentsTitle>와이파이</B.ServiceContentsTitle>
                </figcaption>
              </B.ServiceContents>
              <B.ServiceContents>
                <p>
                  <B.ServiceContentsIcon src="/images/sub/best-deal/locker.png" />
                </p>
                <figcaption>
                  <B.ServiceContentsTitle>락커(공용)</B.ServiceContentsTitle>
                </figcaption>
              </B.ServiceContents>
            </B.ServiceFigureWrapper>
          </B.ServiceWrapper>
          <B.ConvenienceWrapper>
            <B.ConvenienceTitle>편의시설</B.ConvenienceTitle>
            <B.ConvenienceFigureWrapper>
              <B.ConvenienceContents>
                <p>
                  <B.ConvenienceContentsIcon src="/images/sub/best-deal/health.png" />
                </p>
                <figcaption>
                  <B.ConvenienceContentsTitle>헬스</B.ConvenienceContentsTitle>
                </figcaption>
              </B.ConvenienceContents>
              <B.ConvenienceContents>
                <p>
                  <B.ConvenienceContentsIcon src="/images/sub/best-deal/pilates.png" />
                </p>
                <figcaption>
                  <B.ConvenienceContentsTitle>
                    필라테스
                  </B.ConvenienceContentsTitle>
                </figcaption>
              </B.ConvenienceContents>
              <B.ConvenienceContents>
                <p>
                  <B.ConvenienceContentsIcon src="/images/sub/best-deal/pt.png" />
                </p>
                <figcaption>
                  <B.ConvenienceContentsTitle>P.T</B.ConvenienceContentsTitle>
                </figcaption>
              </B.ConvenienceContents>
              <B.ConvenienceContents>
                <p>
                  <B.ConvenienceContentsIcon src="/images/sub/best-deal/parking.png" />
                </p>
                <figcaption>
                  <B.ConvenienceContentsTitle>
                    주차(부분무료)
                  </B.ConvenienceContentsTitle>
                </figcaption>
              </B.ConvenienceContents>
            </B.ConvenienceFigureWrapper>
          </B.ConvenienceWrapper>
          <B.PriceWrapper>
            <B.PriceTitle>가격</B.PriceTitle>
            <B.PriceSubTitle>
              <B.Percent>20%</B.Percent>
              <B.OriginalPrice>180,000원</B.OriginalPrice>
            </B.PriceSubTitle>
            <B.PriceButtonLineWrapper>
              <B.Price>144,000원</B.Price>
              <B.Month>6개월</B.Month>
              <B.Payment>구매하기</B.Payment>
            </B.PriceButtonLineWrapper>
          </B.PriceWrapper>
        </B.HeaderTextWrapper>
      </B.Header>
      <B.TabWrapper>
        <B.TabOn>시설정보</B.TabOn>
        <B.TabOff>환불규정</B.TabOff>
        <B.TabOff>시설사진</B.TabOff>
        <B.TabOff>후기</B.TabOff>
      </B.TabWrapper>
      <B.Body>
        <B.BodyWrapper>
          <B.BodyTitle>시설소개</B.BodyTitle>
          <B.BodyContent>
            1. 약 400여평 구로디지털단지 최고 시설로 오픈한 스포애니
            구로디지털점은 헬스, 요가, 댄스 등 각종 G.X를 갖춘 대규모 종합
            피트니스센터 입니다. <br />
            <br />
            2. 신세대 기호에 맞춘 젊고 세련된 감각의 최신식 인테리어로 오픈
            하였습니다. <br />
            <br />
            3. 약 40여종의 유산소기구, 50여종의 최고급 운동시설이 준비되어
            있습니다. * 웨이트머신 브랜드 : 외산 최고급 싸이백스 풀세트 <br />
            <br />
            4. 넓고 쾌적한 샤워시설, 휴게실 등 다양한 부대시설을 제공합니다
            <br />
            <br />
            5. 합리적인 비용으로 헬스는 물론 댄스,요가 등 다양한 그룹 엑서사이즈
            프로그램을 모두 이용하실 수 있습니다. (G.X 예약방식은 지점별로
            상이하며 지점으로 문의해 주시기 바랍니다.) <br />
            <br />
            6. 평일 24시간, 연중무휴 오픈으로 원하는 시간에 어느때나 이용하실 수
            있습니다.
            <br />
            <br />
            7. 체성분 분석기를 활용하여 전문강사진이 과학적으로 운동지도
            해드립니다.
            <br />
            <br />
            8. 스포애니 전용 어플로 스포애니의 모든 지점을 동시에 이용하실 수
            있습니다.(동일 브랜드에 한함)
            <br />
            <br />
            <br /> &nbsp; ※ 코로나19로 인한 지점 이용 및 G.X 운영에 변동 사항이
            있으므로 자주 묻는 질문에서 꼭 확인해 주세요.
          </B.BodyContent>
        </B.BodyWrapper>
        <B.TableWrapper>
          <B.BodyTitle>운영시간</B.BodyTitle>
          <tr>
            <td>이거 뭐야</td>
            <td>이거는 뭐야</td>
            <td>그럼 이거는?</td>
          </tr>
        </B.TableWrapper>
      </B.Body>
    </Inner>
  );
};
export default BestDealGetUI;
