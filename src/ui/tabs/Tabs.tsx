import { classNames } from "@/utils";
import React, { useState } from "react";
import style from "./tabs.module.scss";
import { TabsProps } from "./tabsModel";

const Tabs = ({ children, tabs, onTabSelect }: TabsProps) => {
  const [tabItem, setTabItem] = useState<string>(tabs ? tabs[0].id : "0");

  const handleTab = (id: string) => {
    setTabItem(id);
    typeof onTabSelect === "function" && onTabSelect(id);
  };

  return (
    <div>
      <ul className={style.tab_nav}>
        {tabs &&
          tabs?.map((item, index) => {
            return (
              <li
                onClick={() => handleTab(item.id)}
                className={classNames(style.tab_nav_item, tabItem === item.id && style.active)}
                key={index}
              >
                {item.title}
              </li>
            );
          })}
      </ul>
      <div className={style.tab_body}>{children}</div>
    </div>
  );
};
export default Tabs;
