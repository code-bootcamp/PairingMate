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
          </B.PriceWrapper>
          <B.PriceButtonLineWrapper>
            <B.Price>144,000원</B.Price>
            <B.Month>6개월</B.Month>
            <B.Payment>구매하기</B.Payment>
          </B.PriceButtonLineWrapper>
        </B.HeaderTextWrapper>
      </B.Header>
    </Inner>
  );
};
export default BestDealGetUI;
