import { useState } from "react";
import TabsTitle from "./Tabs.Title";
import * as T from "./Tabs.styles";

const Tabs = ({ children }) => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [isActive, setIsActive] = useState(false);
  return (
    <div>
      <T.TabTitleList>
        {children.map((item, index) => (
          <TabsTitle
            isActive={isActive}
            key={index}
            title={item.props.title}
            index={index}
            setSelectedTab={setSelectedTab}
            selectedTab={selectedTab}
            setIsActive={setIsActive}
          />
        ))}
      </T.TabTitleList>
      {children[selectedTab]}
    </div>
  );
};

export default Tabs;
