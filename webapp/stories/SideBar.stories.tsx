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

const storyBaseData = {
  title: "Components/SideBar",
  component: SideBar,
};
export default storyBaseData;

export const Default = () => (
  <SideBar>
    <SideBarLinkItem href="/home">
      <SideBarIcon icon={Adb} />
      <SideBarText label={"Home"} />
    </SideBarLinkItem>
    <SideBarLinkItem href="/trending" isSelected={true}>
      <SideBarIcon icon={AirlineSeatLegroomNormal} />
      <SideBarText label={"Trending"} />
    </SideBarLinkItem>
    <SideBarLinkItem href="/bookmarks">
      <SideBarIcon icon={Adb} />
      <SideBarText label={"Landing Page"} />
    </SideBarLinkItem>
    <SideBarItem onClick={action("onClick")}>
      <SideBarIcon icon={Adb} />
      <SideBarText label={"Event"} />
    </SideBarItem>
    <SideBarItem onClick={action("onClick")}>
      <SideBarIcon icon={Adb} />
    </SideBarItem>
  </SideBar>
);

export const Expandable = ({ isExpanded }) => (
  <SideBar isExpanded={isExpanded}>
    <SideBarLinkItem href="/home">
      <SideBarIcon icon={Adb} />
      <SideBarText label={"Home"} />
    </SideBarLinkItem>
    <SideBarLinkItem href="/trending" isSelected={true}>
      <SideBarIcon icon={AirlineSeatLegroomNormal} />
      <SideBarText label={"Trending"} />
    </SideBarLinkItem>
    <SideBarLinkItem href="/bookmarks">
      <SideBarIcon icon={Adb} />
      <SideBarText label={"Landing Page"} />
    </SideBarLinkItem>
    <SideBarLinkItem href="/messages">
      <SideBarIcon icon={Adb} />
      <SideBarText label={"Landing Page"} />
    </SideBarLinkItem>
    <SideBarItem onClick={action("onExpand")}>
      <SideBarIcon
        icon={ArrowRightRounded}
        iconProps={{
          sx: {
            mx: "auto",
            transform: `rotate(${isExpanded ? 180 : 0}deg)`,
            transition: "transform .3s ease-in-out",
          },
        }}
      />
    </SideBarItem>
  </SideBar>
);
Expandable.args = {
  isExpanded: true,
};
