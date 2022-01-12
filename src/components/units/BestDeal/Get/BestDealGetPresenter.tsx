import { Inner } from "../../../../commons/styles/common";
import { IBestDealGetUIProps } from "./BestDealGetTypes";
import * as B from "./BestDealGetStyles";
import GetBestdealMapsPage from "../../../commons/maps/get/getBestDeal/getBestdealMaps.container";
import {
  getTitle,
  priceToString,
  replaceUrl,
} from "../../../../commons/libraries/utils/utils";
import Tab from "../../../commons/tabs/detail-tap/Tabs.Contents";
import Tabs from "../../../commons/tabs/detail-tap/Tabs";
import { Fragment } from "react";

const BestDealGetUI = (props: IBestDealGetUIProps) => {
  console.log(props.data?.fetchUseditem.images);
  return (
    <Inner>
      <B.Header>
        <B.BestDealImgWrap>
          <B.HeaderImg src={replaceUrl(props.data?.fetchUseditem?.images[0])} />
        </B.BestDealImgWrap>
        <B.HeaderTextWrapper>
          <B.TextWrapperTitle>
            {getTitle(props.data?.fetchUseditem?.name || "")}
          </B.TextWrapperTitle>
          <B.Line></B.Line>
          <B.TextWrapperAddress>
            <B.AddressImg src="/images/sub/best-deal/maker.png" />
            <B.Address>
              {props.data?.fetchUseditem?.useditemAddress?.address}
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
              <B.Price>
                {priceToString(props.data?.fetchUseditem?.price)}원
              </B.Price>
              <B.Month>6개월</B.Month>
              <B.Payment>구매하기</B.Payment>
            </B.PriceButtonLineWrapper>
          </B.PriceWrapper>
        </B.HeaderTextWrapper>
      </B.Header>
      <Tabs>
        <Tab title="시설정보">
          <B.Body>
            <B.BodyWrapper>
              <B.BodyTitle>시설소개</B.BodyTitle>
              <B.BodyTextContent>
                {props.data?.fetchUseditem?.contents}
              </B.BodyTextContent>
            </B.BodyWrapper>
            <B.TableWrapper>
              <B.BodyTitle>운영시간</B.BodyTitle>
              <B.Table>
                <colgroup>
                  <col width="12.5%" />
                  <col width="12.5%" />
                  <col width="12.5%" />
                  <col width="12.5%" />
                  <col width="12.5%" />
                  <col width="12.5%" />
                  <col width="12.5%" />
                  <col width="12.5%" />
                </colgroup>
                <thead>
                  <tr>
                    <th colSpan={2}>평일</th>
                    <th colSpan={2}>주말 / 공휴일</th>
                    <th colSpan={2}>휴일</th>
                    <th colSpan={2}>비고</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>OPEN</td>
                    <td>CLOSE</td>
                    <td>OPEN</td>
                    <td>CLOSE</td>
                    <td colSpan={2} rowSpan={2}></td>
                    <td colSpan={2} rowSpan={2}>
                      코로나 19로 인해 운영시간이 변경될 수 있습니다.
                    </td>
                  </tr>
                  <tr>
                    <td>00:00</td>
                    <td>00:00</td>
                    <td>00:00</td>
                    <td>00:00</td>
                  </tr>
                </tbody>
              </B.Table>
            </B.TableWrapper>
            <B.MapWrapper>
              <B.BodyTitle>위치안내</B.BodyTitle>
              <B.Map>
                <GetBestdealMapsPage data={props.data} />
              </B.Map>
            </B.MapWrapper>
          </B.Body>
        </Tab>
        <Tab title="환불규정">
          <B.BodyWrapper>
            <B.BodyTitle>환불규정</B.BodyTitle>
            <B.BodyTextContent>
              - 환불 신청 시 증빙서류를 제출해주시면 빠른 처리가 가능합니다.
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;※&nbsp;증빙서류 예시 (1)
              진단서 (2) 전입증명서 (3) 전출발령서 등<br />
              <br /> - 환불은 1개월 정상가를 일할계산한 금액에 운동시작
              의사표시일부터 해지 의사표시일까지의 이용 일수 (연기신청 기간은
              포함되지 않음)를 곱한 금액과
              <br /> &nbsp;&nbsp;총 결제 금액의 10%의 해당하는 금액을
              공제합니다. <br />
              <br />- 환불 시, O.T를 진행하였을 경우에는 O.T 비용 회당
              33,000원(VAT 포함)을 추가 공제합니다. <br />
              <br />- 이벤트에 따른 회원권을 양도받은 경우 환불이 불가합니다.
              <br />
              <br />
              - 환불액 계산 방법 - <br />
              <br />
              환불액 = 총 결제 금액 - 위약금 - 이용요금 <br />
              <br />① 위약금 : 총 결제 금액의 10% <br />
              <br />② 이용 요금 : 1개월 정상가 일할 계산 * 이용일수
              <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;※&nbsp;예시: 패스트 : 2,000원
              * 이용일수 피트니스/짐 : 3,000원 * 이용일수 프리미엄 : 3,700원 *
              이용일수 <br />
              <br />③ 이용일수 : ‘운동시작 의사표시일’로부터 ‘해지
              의사표시일’까지의 일수로 실제 운동을 하고 안한 것과는 무관하며,
              연기 신청 기간은 포함되지 않음 <br />
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;※&nbsp;예시: 이용일수 1월 1일
              가입, 운동 시작 설정일 1월 10일, 해지 의사표시일 1월 30일 1월 10일
              ~ 1월 30일, 총 21일
            </B.BodyTextContent>
          </B.BodyWrapper>
        </Tab>
        <Tab title="시설사진">
          <B.BodyWrapper>
            <B.BodyTitle>시설사진</B.BodyTitle>
            <B.ImgWrapper>
              {props.data?.fetchUseditem.images.map((el) => (
                <li key={el}>
                  <B.ImgList src={`https://storage.googleapis.com/${el}`} />
                </li>
              ))}
            </B.ImgWrapper>
          </B.BodyWrapper>
        </Tab>
        <Tab title="후기">
          <B.BodyWrapper>
            <B.BodyTitle>이용후기</B.BodyTitle>
            <B.BodyContent>댓글기능 들어갈것</B.BodyContent>
          </B.BodyWrapper>
        </Tab>
      </Tabs>
    </Inner>
  );
};
export default BestDealGetUI;
