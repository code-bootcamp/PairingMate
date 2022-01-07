import Navigation from "../navigation/Navigation.container";
import NavigationUI from "../navigation/Navigation.presenter";
import * as H from "./Header.styles";
import { HeaderProps } from "./Header.types";

const HeaderUI = (props: HeaderProps) => {
  return (
    <>
      <H.Header>
        <H.Logo>
          <button onClick={props.onClickMoveToMain}></button>
        </H.Logo>
        <Navigation />
      </H.Header>
    </>
  );
};

export default HeaderUI;
