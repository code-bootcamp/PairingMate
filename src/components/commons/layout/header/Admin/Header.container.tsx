import router from "next/router";
import HeaderUI from "./Header.presenter";

const Header = () => {
  const onClickMoveToMain = () => {
    router.push("/");
  };

  return (
    <>
      <HeaderUI onClickMoveToMain={onClickMoveToMain} />
    </>
  );
};

export default Header;
