import { useEffect, useState } from "react";
import * as T from "./Tabs.styles";

const TabsTitle = (props: any) => {
  const [isActive, setIsActive] = useState(false);
  const onClickTabTitie = () => {
    props.setSelectedTab(props.index);
  };

  useEffect(() => {
    const currentIndex = () => {
      const currentSelectedIndex = props.selectedTab;
      if (props.index === currentSelectedIndex) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    };
    return currentIndex();
  });

  return (
    <>
      <T.TabTitle isActive={isActive}>
        <button onClick={onClickTabTitie}>{props.title}</button>
      </T.TabTitle>
    </>
  );
};

export default TabsTitle;
