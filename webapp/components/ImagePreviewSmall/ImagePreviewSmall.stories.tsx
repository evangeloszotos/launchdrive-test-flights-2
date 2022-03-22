import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ImagePreviewSmall } from './ImagePreviewSmall';
import LogoPlaceholder from '../ImagePreviewBase/LogoPlaceholder.png';

export default {
  title: 'Components/ImagePreviewSmall',
  component: ImagePreviewSmall,
  argTypes: {},
} as ComponentMeta<typeof ImagePreviewSmall>;

const Template: ComponentStory<typeof ImagePreviewSmall> = (args) => <ImagePreviewSmall {...args} />;
export const Playground = Template.bind({});
Playground.args = {
  // onClick: action('onClick'),
};

export const Empty: ComponentStory<typeof ImagePreviewSmall> = () => (
  <ImagePreviewSmall
    label="Logo"
    onClick={action('onClick')}
    onClickEditLogo={action('onClickEditLogo')}
    onClickNewLogo={action('onClickNewLogo')}
  />
);

export const Default: ComponentStory<typeof ImagePreviewSmall> = () => (
  <ImagePreviewSmall
    label="Logo"
    value={LogoPlaceholder}
    onClick={action('onClick')}
    onClickEditLogo={action('onClickEditLogo')}
    onClickNewLogo={action('onClickNewLogo')}
  />
);

export const NoLabel: ComponentStory<typeof ImagePreviewSmall> = () => (
  <ImagePreviewSmall
    value={LogoPlaceholder}
    onClick={action('onClick')}
    onClickEditLogo={action('onClickEditLogo')}
    onClickNewLogo={action('onClickNewLogo')}
  />
);
