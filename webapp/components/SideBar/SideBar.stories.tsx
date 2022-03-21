import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Adb, AirlineSeatLegroomNormal } from '@mui/icons-material';
import React from 'react';
import { SideBar } from './SideBar';
import { SideBarTestbuilderItem } from './SideBarTestbuilderItem';
import { SideBarLinkItem } from './SideBarLinkItem';
import { SideBarItem } from './SideBarItem';

export default {
  title: 'Components/SideBar',
  component: SideBar,
  argTypes: {},
} as ComponentMeta<typeof SideBar>;

const Template: ComponentStory<typeof SideBar> = () => (
  <SideBar>
    <SideBarLinkItem href="/home">
      <SideBarTestbuilderItem icon={<Adb />} label="Home" />
    </SideBarLinkItem>
    <SideBarLinkItem href="/trending" isSelected={true}>
      <SideBarTestbuilderItem icon={<AirlineSeatLegroomNormal />} label="Trending" />
    </SideBarLinkItem>
    <SideBarLinkItem href="/bookmarks">
      <SideBarTestbuilderItem icon={<Adb />} label="Landing Page" />
    </SideBarLinkItem>
    <SideBarItem onClick={action('onClick')}>
      <SideBarTestbuilderItem icon={<Adb />} label="Event" />
    </SideBarItem>
    <SideBarItem onClick={action('onClick')}>
      <SideBarTestbuilderItem icon={<Adb />} />
    </SideBarItem>
  </SideBar>
);

export const Default = Template.bind({});
Default.args = {};

//

const TemplateCustomColor: ComponentStory<typeof SideBar> = () => (
  <SideBar>
    <SideBarLinkItem href="/home" isSelected={true} colorSelected="#347C3C" backgroundColorSelected="#347C3C1E">
      <SideBarTestbuilderItem icon={<Adb />} label="Home" />
    </SideBarLinkItem>
    <SideBarLinkItem href="/trending" isSelected={true}>
      <SideBarTestbuilderItem icon={<AirlineSeatLegroomNormal />} label="Trending" />
    </SideBarLinkItem>
    <SideBarLinkItem href="/bookmarks" isSelected={true} colorSelected="#ebd63d" backgroundColorSelected="#ebd63d1E">
      <SideBarTestbuilderItem icon={<Adb />} label="Landing Page" />
    </SideBarLinkItem>
    <SideBarItem onClick={action('onClick')} backgroundColor="#a89be080">
      <SideBarTestbuilderItem icon={<Adb />} label="Event" />
    </SideBarItem>
    <SideBarItem onClick={action('onClick')}>
      <SideBarTestbuilderItem icon={<Adb />} />
    </SideBarItem>
  </SideBar>
);

export const CustomColors = TemplateCustomColor.bind({});
CustomColors.args = {};

//

const TemplateExpandable: ComponentStory<typeof SideBar> = ({ isExpanded }) => (
  <SideBar isExpanded={isExpanded}>
    <SideBarLinkItem href="/home">
      <SideBarTestbuilderItem icon={<Adb />} label="Home" />
    </SideBarLinkItem>
    <SideBarLinkItem href="/trending" isSelected={true}>
      <SideBarTestbuilderItem icon={<AirlineSeatLegroomNormal />} label="Trending" />
    </SideBarLinkItem>
    <SideBarLinkItem href="/bookmarks">
      <SideBarTestbuilderItem icon={<Adb />} label="Landing Page" />
    </SideBarLinkItem>
    <SideBarItem onClick={action('onClick')}>
      <SideBarTestbuilderItem icon={<Adb />} label="Event" />
    </SideBarItem>
    <SideBarItem onClick={action('onClick')}>
      <SideBarTestbuilderItem icon={<Adb />} />
    </SideBarItem>
  </SideBar>
);

export const Expandable = TemplateExpandable.bind({});
Expandable.args = {};
