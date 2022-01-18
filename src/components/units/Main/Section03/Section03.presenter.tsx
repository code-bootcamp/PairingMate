import * as MS3 from "./Section03.styles";
import { Inner } from "../../../../commons/styles/common";
import { IMainSection03Props } from "./Section03.types";
import { getTitle } from "../../../../commons/libraries/utils/utils";

const MainSection03UI = (props: IMainSection03Props) => {
  return (
    <>
      <Inner>
        <MS3.TextWrap>
          <MS3.title>
            <MS3.subtitle>PairingMate</MS3.subtitle>
            Best Deal
          </MS3.title>
        </MS3.TextWrap>
        <div>
          <div>
            <MS3.BestDealList>
              {props.data?.fetchUseditems.map((el) => (
                <li key={el._id} onClick={props.onClickBestdealGetPage(el._id)}>
                  <figure>
                    <p>
                      <img
                        src={`https://storage.googleapis.com/${el.images[0]}`}
                        alt=""
                      />
                    </p>
                    <figcaption>
                      <h4>{getTitle(el.name)}</h4>
                    </figcaption>
                  </figure>
                </li>
              ))}
            </MS3.BestDealList>
          </div>
        </div>
      </Inner>
    </>
  );
};

export default MainSection03UI;
