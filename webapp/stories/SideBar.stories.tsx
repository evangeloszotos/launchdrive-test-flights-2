import { Adb, AirlineSeatLegroomNormal } from "@mui/icons-material";
import SideBar from "../components/SideBar";
import SideBarItem from "../components/SideBarItem";

import { onClickAction } from "./on-click-action";

export default {
  title: "Components/SideBar",
  component: SideBar,
};

export const Default = () => (
  <SideBar>
    <SideBarItem icon={Adb} label="Home" href="/home" />
    <SideBarItem icon={AirlineSeatLegroomNormal} label="Trending" href="/trending" selected={true}/>
    <SideBarItem icon={Adb} label="Bookmarks" href="/bookmarks" />
    <SideBarItem icon={Adb} label="Messages" href="/messages" />
    <SideBarItem icon={AirlineSeatLegroomNormal} label="Profile" href="/profile" />
  </SideBar>
);

export const NoSelection = () => (
  <SideBar>
    <SideBarItem
      label="Home"
      icon={AirlineSeatLegroomNormal}
      {...onClickAction}
    />
    <SideBarItem label="Trending" icon={Adb} {...onClickAction} />
    <SideBarItem
      label="Bookmarks"
      icon={AirlineSeatLegroomNormal}
      {...onClickAction}
    />
    <SideBarItem
      label="Messages"
      icon={AirlineSeatLegroomNormal}
      {...onClickAction}
    />
    <SideBarItem label="Profile" icon={Adb} {...onClickAction} />
  </SideBar>
);
