import { ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Adb, AirlineSeatLegroomNormal, ArrowRightRounded } from '@mui/icons-material';
import React from 'react';
import PropTypes from 'prop-types';

import { SideBar } from './SideBar';
import { SideBarLinkItem } from './SideBarLinkItem';
import { SideBarIcon } from './SideBarIcon';
import { SideBarText } from './SideBarText';
import { SideBarItem } from './SideBarItem';

export default {
  title: 'Components/SideBarLegacy',
  component: SideBar,
} as ComponentMeta<typeof SideBar>;

export const Default = () => (
  <SideBar>
    <SideBarLinkItem href="/home">
      <SideBarIcon icon={Adb} />
      <SideBarText label="Home" />
    </SideBarLinkItem>
    <SideBarLinkItem href="/trending" isSelected={true}>
      <SideBarIcon icon={AirlineSeatLegroomNormal} />
      <SideBarText label="Trending" />
    </SideBarLinkItem>
    <SideBarLinkItem href="/bookmarks">
      <SideBarIcon icon={Adb} />
      <SideBarText label="Landing Page" />
    </SideBarLinkItem>
    <SideBarItem onClick={action('onClick')}>
      <SideBarIcon icon={Adb} />
      <SideBarText label="Event" />
    </SideBarItem>
    <SideBarItem onClick={action('onClick')}>
      <SideBarIcon icon={Adb} />
    </SideBarItem>
  </SideBar>
);

export const Expandable = ({ isExpanded }) => (
  <SideBar isExpanded={isExpanded}>
    <SideBarLinkItem href="/home">
      <SideBarIcon icon={Adb} />
      <SideBarText label="Home" />
    </SideBarLinkItem>
    <SideBarLinkItem href="/trending" isSelected={true}>
      <SideBarIcon icon={AirlineSeatLegroomNormal} />
      <SideBarText label="Trending" />
    </SideBarLinkItem>
    <SideBarLinkItem href="/bookmarks">
      <SideBarIcon icon={Adb} />
      <SideBarText label="Landing Page" />
    </SideBarLinkItem>
    <SideBarLinkItem href="/messages">
      <SideBarIcon icon={Adb} />
      <SideBarText label="Landing Page" />
    </SideBarLinkItem>
    <SideBarItem onClick={action('onExpand')}>
      <SideBarIcon
        icon={ArrowRightRounded}
        iconProps={{
          sx: {
            mx: 'auto',
            transform: `rotate(${isExpanded ? 180 : 0}deg)`,
            transition: 'transform .3s ease-in-out',
          },
        }}
      />
    </SideBarItem>
  </SideBar>
);
Expandable.propTypes = {
  isExpanded: PropTypes.bool.isRequired,
};
Expandable.args = {
  isExpanded: true,
};
