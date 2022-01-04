import Navigation from "../navigation/Navigation.container";
import NavigationUI from "../navigation/Navigation.presenter";
import * as H from "./Header.styles";

const HeaderUI = () => {
  return (
    <>
      <H.Header>
        <H.Logo>
          <button></button>
        </H.Logo>
        <Navigation />
      </H.Header>
    </>
  );
};

export default HeaderUI;
