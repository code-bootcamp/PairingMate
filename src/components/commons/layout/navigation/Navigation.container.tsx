import NavigationUI from "./Navigation.presenter";
import { useState } from "react";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const onClickopen = () => {
    if (isOpen === true) {
      setIsOpen(false);
    } else {
      setIsOpen(true);
    }
  };

  return (
    <>
      <NavigationUI isOpen={isOpen} onClickopen={onClickopen} />
    </>
  );
};

export default Navigation;
