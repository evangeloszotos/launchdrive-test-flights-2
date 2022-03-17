import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TemplatePreviewDialog } from './TemplatePreviewDialog';

export default {
  title: 'Components/TemplatePreviewDialog',
  component: TemplatePreviewDialog,
  argTypes: {},
} as ComponentMeta<typeof TemplatePreviewDialog>;

const Template: ComponentStory<typeof TemplatePreviewDialog> = (args) => <TemplatePreviewDialog {...args} />;

export const Default = Template.bind({});
Default.args = {
  templateName: 'Default',
  open: true,
  templateWith: '100px',
  desktopImageUrl: 'favicon.ico',
  mobileImageUrl: 'vercel.svg',
  onClose: action('close'),
};
