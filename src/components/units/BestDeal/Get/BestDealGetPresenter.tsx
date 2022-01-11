import { Inner } from "../../../../commons/styles/common";
import { IBestDealGetUIProps } from "./BestDealGetTypes";
import * as B from "./BestDealGetStyles";
import GetBestdealMapsPage from "../../../commons/maps/get/getBestDeal/getBestdealMaps.container";
import {
  priceToString,
  replaceUrl,
} from "../../../../commons/libraries/utils/utils";

const BestDealGetUI = (props: IBestDealGetUIProps) => {
  return (
    <Inner>
      <B.Header>
        <B.BestDealImgWrap>
          <B.HeaderImg src={replaceUrl(props.data?.fetchUseditem?.images[0])} />
        </B.BestDealImgWrap>
        <B.HeaderTextWrapper>
          <B.TextWrapperTitle>
            {props.data?.fetchUseditem?.name}
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
      <B.TabWrapper>
        <B.TabOn>시설정보</B.TabOn>
        <B.TabOff>환불규정</B.TabOff>
        <B.TabOff>시설사진</B.TabOff>
        <B.TabOff>후기</B.TabOff>
      </B.TabWrapper>
      <B.Body>
        <B.BodyWrapper>
          <B.BodyTitle>시설소개</B.BodyTitle>
          <B.BodyContent>{props.data?.fetchUseditem?.contents}</B.BodyContent>
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
    </Inner>
  );
};
export default BestDealGetUI;
