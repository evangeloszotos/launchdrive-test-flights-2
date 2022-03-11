import {
  Adb,
  AirlineSeatLegroomNormal,
  ArrowRightRounded,
} from "@mui/icons-material";
import SideBar from "../components/SideBar";
import SideBarLinkItem from "../components/SideBarLinkItem";

import { action } from "@storybook/addon-actions";
import React from "react";
import SideBarIcon from "../components/SideBarIcon";
import SideBarText from "../components/SideBarText";
import SideBarItem from "../components/SideBarItem";

export default {
  title: "Components/SideBar",
  component: SideBar,
};

export const Default = () => (
  <SideBar>
    <SideBarLinkItem href={"/home"}>
      <SideBarIcon icon={Adb} label={"Home"} />
      <SideBarText label={"Home"} />
    </SideBarLinkItem>
    <SideBarLinkItem href={"/trending"} isSelected={true}>
      <SideBarIcon icon={AirlineSeatLegroomNormal} label={"Trending"} />
      <SideBarText label={"Trending"} />
    </SideBarLinkItem>
    <SideBarLinkItem href={"/bookmarks"}>
      <SideBarIcon icon={Adb} label={"Bookmarks"} />
      <SideBarText label={"Bookmarks"} />
    </SideBarLinkItem>
    <SideBarLinkItem href={"/messages"}>
      <SideBarIcon icon={Adb} label={"Messages"} />
      <SideBarText label={"Messages"} />
    </SideBarLinkItem>
  </SideBar>
);

export const Expandable = ({ isExpanded }) => (
  <SideBar isExpanded={isExpanded}>
    <SideBarLinkItem href={"/home"}>
      <SideBarIcon icon={Adb} label={"Home"} isExpanded={isExpanded} />
      <SideBarText label={"Home"} />
    </SideBarLinkItem>
    <SideBarLinkItem href={"/trending"} isSelected={true}>
      <SideBarIcon
        icon={AirlineSeatLegroomNormal}
        label={"Trending"}
        isExpanded={isExpanded}
      />
      <SideBarText label={"Trending"} />
    </SideBarLinkItem>
    <SideBarItem onClick={action("onExpand")}>
      <SideBarIcon
        icon={ArrowRightRounded}
        iconStyles={{
          transform: `rotate(${isExpanded ? 180 : 0}deg)`,
          transition: "transform .3s ease-in-out",
        }}
      />
    </SideBarItem>
  </SideBar>
);
Expandable.args = {
  isExpanded: true,
};

export const NoSelection = () => (
  <SideBar>
    <SideBarLinkItem href={"/home"}>
      <SideBarIcon icon={Adb} label={"Home"} />
      <SideBarText label={"Home"} />
    </SideBarLinkItem>
    <SideBarLinkItem href={"/trending"}>
      <SideBarIcon icon={AirlineSeatLegroomNormal} label={"Trending"} />
      <SideBarText label={"Trending"} />
    </SideBarLinkItem>
    <SideBarLinkItem href={"/bookmarks"}>
      <SideBarIcon icon={Adb} label={"Bookmarks"} />
      <SideBarText label={"Bookmarks"} />
    </SideBarLinkItem>
    <SideBarLinkItem href={"/messages"}>
      <SideBarIcon icon={Adb} label={"Messages"} />
      <SideBarText label={"Messages"} />
    </SideBarLinkItem>
  </SideBar>
);
