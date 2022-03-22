import { ComponentStory, ComponentMeta } from '@storybook/react';
// import { action } from '@storybook/addon-actions';
import { ImagePreviewBase } from './ImagePreviewBase';

export default {
  title: 'Components/ImagePreviewBase',
  component: ImagePreviewBase,
  argTypes: {},
} as ComponentMeta<typeof ImagePreviewBase>;

const Template: ComponentStory<typeof ImagePreviewBase> = (args) => <ImagePreviewBase {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  // onClick: action('onClick'),
};

const Foo: ComponentStory<typeof ImagePreviewBase> = (args) => <ImagePreviewBase />;
