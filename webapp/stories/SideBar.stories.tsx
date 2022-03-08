import { AdbIcon, AirlineSeatLegroomNormalIcon } from "@mui/icons-material";
import SideBar from "../components/SideBar";
import SideBarItem from "../components/SideBarItem";

import { onClickAction } from "./on-click-action";

export default {
  title: "Components/SideBar",
  component: SideBar,
};

export const Spannen = () => (
  <SideBar>
    <SideBarItem icon={AdbIcon} name="Home" {...onClickAction} />
    <SideBarItem
      name="Trending"
      icon={AirlineSeatLegroomNormalIcon}
      selected={true}
      {...onClickAction}
    />
    <SideBarItem name="Bookmarks" icon={AdbIcon} {...onClickAction} />
    <SideBarItem name="Messages" icon={AdbIcon} {...onClickAction} />
    <SideBarItem
      name="Profile"
      icon={AirlineSeatLegroomNormalIcon}
      {...onClickAction}
    />
  </SideBar>
);

export const Default = () => (
  <SideBar>
    <SideBarItem name="Home" icon={AdbIcon} {...onClickAction} />
    <SideBarItem
      name="Trending"
      icon={AirlineSeatLegroomNormalIcon}
      selected={true}
      {...onClickAction}
    />
    <SideBarItem
      name="Bookmarks"
      icon={AirlineSeatLegroomNormalIcon}
      {...onClickAction}
    />
    <SideBarItem
      name="Messages"
      icon={AirlineSeatLegroomNormalIcon}
      {...onClickAction}
    />
    <SideBarItem
      name="Profile"
      icon={AirlineSeatLegroomNormalIcon}
      {...onClickAction}
    />
  </SideBar>
);

export const NoSelection = () => (
  <SideBar>
    <SideBarItem
      name="Home"
      icon={AirlineSeatLegroomNormalIcon}
      {...onClickAction}
    />
    <SideBarItem name="Trending" icon={AdbIcon} {...onClickAction} />
    <SideBarItem
      name="Bookmarks"
      icon={AirlineSeatLegroomNormalIcon}
      {...onClickAction}
    />
    <SideBarItem
      name="Messages"
      icon={AirlineSeatLegroomNormalIcon}
      {...onClickAction}
    />
    <SideBarItem name="Profile" icon={AdbIcon} {...onClickAction} />
  </SideBar>
);
