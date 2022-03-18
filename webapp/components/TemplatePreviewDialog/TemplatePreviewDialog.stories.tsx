import { action } from '@storybook/addon-actions';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import DesktopMobileToggle from '../DeskopMobileToggle';
import { TemplatePreviewDialog } from './TemplatePreviewDialog';
import TemplatePreviewDialogAppBar from './TemplatePreviewDialogAppBar';
import TemplatePreviewDialogContent from './TemplatePreviewDialogContent';
import TemplatePreviewDialogImage from './TemplatePreviewImage';

export default {
  title: 'Components/TemplatePreviewDialog',
  component: TemplatePreviewDialog,
  argTypes: {},
} as ComponentMeta<typeof TemplatePreviewDialog>;

const Template: ComponentStory<typeof TemplatePreviewDialog> = (args) => (
  <TemplatePreviewDialog {...args}>
    <TemplatePreviewDialogAppBar
      templateName="TemplateName"
      onClose={action('onClose')}
      appBarActions={<DesktopMobileToggle state="mobile" onChange={action('onChange')} />}
    />
    <TemplatePreviewDialogContent templateWidth="100px" marginTop="2.5vh">
      <TemplatePreviewDialogImage src="favicon.ico" />
    </TemplatePreviewDialogContent>
  </TemplatePreviewDialog>
);

export const Default = Template.bind({});
Default.args = {
  open: true,
};
