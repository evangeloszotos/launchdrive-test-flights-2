import { ComponentStory, ComponentMeta } from '@storybook/react';
import React from 'react';
import { action } from '@storybook/addon-actions';
import { TemplateCard } from './TemplateCard';

export default {
  title: 'Components/TemplateCard',
  component: TemplateCard,
  argTypes: {},
} as ComponentMeta<typeof TemplateCard>;

const Template: ComponentStory<typeof TemplateCard> = (args) => <TemplateCard {...args} />;
export const Default = Template.bind({});
Default.args = {
  'onClick:select': action('onClick:select'),
  'onClick:preview': action('onClick:preview'),
};

export const Test = Template.bind({});
Test.args = {
  templatePreviewImage: 'sadasd',
  actions: [<ColorButton />, <ColorButton />],
  title: '',
  description: '',
  headerText: 'sd', // title - remove?
  bodyText: 'sd', // description - remove?
  tags: [<Chip />, <Chip />],
};

export const Sample = (args) => (
  <TemplateCard
    templatePreviewImage="sadasd"
    actions={[<ColorButton />, <ColorButton />]}
    title=""
    description=""
    headerText="sd" // title - remove?
    bodyText="sd" // description - remove?
    tags={[<Chip />, <Chip />]}
  />
);
