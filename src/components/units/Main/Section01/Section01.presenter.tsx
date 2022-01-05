import { FullpageSection, Inner } from "../../../../commons/styles/common";
import * as MS1 from "./Section01.styles";
import { Section01Props } from "./Section01.types";

const MainSection01UI = (props: Section01Props) => {
  return (
    <>
      <FullpageSection>
        <Inner>
          <MS1.TextWrap>
            <MS1.title>
              <MS1.subtitle>PairingMate</MS1.subtitle>
              함께하는 스포츠 액티비티
            </MS1.title>
            <MS1.TextDesc>
              PairingMate 는 스포츠 액티비티 플랫폼으로 운동에 관한 다양한
              컨텐츠와 <br />
              유저 근처의 Fitness Center 정보 및 회원권 Best Deal <br />
              Runday course를 추천해드립니다!
            </MS1.TextDesc>
          </MS1.TextWrap>
          <MS1.AboutContsCard>
            <li onClick={props.onClickMoveToFindMates}>
              <figure>
                <figcaption>
                  <h4>FindMates</h4>
                </figcaption>
              </figure>
            </li>

            <li onClick={props.onClickMoveToFitnessCenter}>
              <figure>
                <figcaption>
                  <h4>Fitness Center</h4>
                </figcaption>
              </figure>
            </li>

            <li onClick={props.onClickMoveToBestDeal}>
              <figure>
                <figcaption>
                  <h4>Best Deal</h4>
                </figcaption>
              </figure>
            </li>

            <li onClick={props.onClickMoveToRundayCourse}>
              <figure>
                <figcaption>
                  <h4>Runday course</h4>
                </figcaption>
              </figure>
            </li>
          </MS1.AboutContsCard>
        </Inner>
        <MS1.SectionBg />
      </FullpageSection>
    </>
  );
};

export default MainSection01UI;
