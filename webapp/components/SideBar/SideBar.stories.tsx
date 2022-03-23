import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Adb, AirlineSeatLegroomNormal } from '@mui/icons-material';
import React, { useState } from 'react';
import { SideBar } from './SideBar';
import SideBarItemLink from '../SideBarItemLink';
import SideBarItem from '../SideBarItem';
import SideBarItemLabel from '../SideBarItemLabel';

export default {
  title: 'Components/SideBar',
  component: SideBar,
  argTypes: {},
} as ComponentMeta<typeof SideBar>;

export const Default: ComponentStory<typeof SideBar> = () => (
  <SideBar>
    <SideBarItemLink href="/home">
      <Adb />
      <SideBarItemLabel> Home </SideBarItemLabel>
    </SideBarItemLink>
    <SideBarItemLink href="/trending" selected={true}>
      <AirlineSeatLegroomNormal />
      <SideBarItemLabel> Trending </SideBarItemLabel>
    </SideBarItemLink>
    <SideBarItemLink href="/bookmarks">
      <Adb />
      <SideBarItemLabel> Landing Page </SideBarItemLabel>
    </SideBarItemLink>
    <SideBarItem onClick={action('onClick')}>
      <Adb />
      <SideBarItemLabel> Event </SideBarItemLabel>
    </SideBarItem>
    <SideBarItem onClick={action('onClick')}>
      <Adb />
    </SideBarItem>
  </SideBar>
);

//

export const CustomColors: ComponentStory<typeof SideBar> = () => (
  <SideBar>
    <SideBarItemLink href="/home" selected={true} colorSelected="#347C3C" backgroundColorSelected="#347C3C1E">
      <Adb />
      <SideBarItemLabel> Home </SideBarItemLabel>
    </SideBarItemLink>
    <SideBarItemLink href="/trending" selected={true}>
      <AirlineSeatLegroomNormal />
      <SideBarItemLabel> Trending </SideBarItemLabel>
    </SideBarItemLink>
    <SideBarItemLink href="/bookmarks" selected={true} colorSelected="#ebd63d" backgroundColorSelected="#ebd63d1E">
      <Adb />
      <SideBarItemLabel> Landing Page </SideBarItemLabel>
    </SideBarItemLink>
    <SideBarItem onClick={action('onClick')} backgroundColor="#a89be080">
      <Adb />
      <SideBarItemLabel> Event </SideBarItemLabel>
    </SideBarItem>
    <SideBarItem onClick={action('onClick')}>
      <Adb />
    </SideBarItem>
  </SideBar>
);

//

export const Expandable: ComponentStory<typeof SideBar> = () => {
  const [expanded, setExpanded] = useState(true);

  return (
    <SideBar expanded={expanded}>
      <SideBarItemLink href="/home" justifyContent="flex-start">
        <Adb sx={{ mr: 1 }} />
        <SideBarItemLabel> Home </SideBarItemLabel>
      </SideBarItemLink>
      <SideBarItemLink href="/trending" justifyContent="flex-start" selected={true}>
        <AirlineSeatLegroomNormal sx={{ mr: 1 }} />
        <SideBarItemLabel> Trending </SideBarItemLabel>
      </SideBarItemLink>
      <SideBarItemLink href="/bookmarks" justifyContent="flex-start">
        <Adb sx={{ mr: 1 }} />
        <SideBarItemLabel> Landing Page </SideBarItemLabel>
      </SideBarItemLink>
      <SideBarItem onClick={action('onClick')} justifyContent="flex-start">
        <Adb sx={{ mr: 1 }} />
        <SideBarItemLabel> Event </SideBarItemLabel>
      </SideBarItem>
      <SideBarItem onClick={action('onClick')} justifyContent="flex-start">
        <Adb sx={{ mr: 1 }} />
      </SideBarItem>
      <SideBarItem onClick={() => setExpanded(!expanded)} justifyContent="flex-start">
        Toggle
      </SideBarItem>
    </SideBar>
  );
};

//

export const Tooltip: ComponentStory<typeof SideBar> = () => (
  <SideBar>
    <SideBarItemLink href="/home" tooltip="Home">
      <Adb />
      <SideBarItemLabel> Home </SideBarItemLabel>
    </SideBarItemLink>
    <SideBarItemLink href="/trending" tooltip="Trending" selected={true}>
      <AirlineSeatLegroomNormal />
      <SideBarItemLabel> Trending </SideBarItemLabel>
    </SideBarItemLink>
    <SideBarItemLink href="/bookmarks" tooltip="Landing Page">
      <Adb />
      <SideBarItemLabel> Landing Page </SideBarItemLabel>
    </SideBarItemLink>
    <SideBarItem onClick={action('onClick')} tooltip="Event">
      <Adb />
      <SideBarItemLabel> Event </SideBarItemLabel>
    </SideBarItem>
    <SideBarItem onClick={action('onClick')} tooltip="FooBar">
      <Adb />
    </SideBarItem>
  </SideBar>
);
