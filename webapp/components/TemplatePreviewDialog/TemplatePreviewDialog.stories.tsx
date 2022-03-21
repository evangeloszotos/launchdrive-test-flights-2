import { IconButton } from '@mui/material';
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
      templateName="TemplateNameTemplateNameTemplateNameTemplateNameTemplateNameTemplateName"
      onClose={action('onClose')}
      sx={{ color: '#000000DE', backgroundColor: 'white' }}
    >
      <DesktopMobileToggle state="mobile" onChange={action('onChange')} />
    </TemplatePreviewDialogAppBar>
    <TemplatePreviewDialogContent templateWidth="800px" marginTop="2.5vh" sx={{ backgroundColor: '#FFFFFFF2' }}>
      <TemplatePreviewDialogImage src="favicon.ico" />
    </TemplatePreviewDialogContent>
  </TemplatePreviewDialog>
);

export const Default = Template.bind({});
Default.args = {
  open: true,
};

export const Desktop = () => (
  <TemplatePreviewDialog open={true}>
    <TemplatePreviewDialogAppBar
      sx={{ color: '#000000DE', backgroundColor: 'white' }}
      startContent={
        <Typography variant="h6" noWrap={true} sx={{ ml: '1.25rem' }}>
          {templateName}
        </Typography>
      }
      endContent={[
        <IconButton>
          <CloseIcon />
        </IconButton>,
      ]}
    >
      <DesktopMobileToggle state="mobile" onChange={action('onChange')} />
    </TemplatePreviewDialogAppBar>
    <TemplatePreviewDialogContent templateWidth="800px" marginTop="2.5vh" sx={{ backgroundColor: '#FFFFFFF2' }}>
      <TemplatePreviewDialogImage src="favicon.ico" />
    </TemplatePreviewDialogContent>
  </TemplatePreviewDialog>
);

export const Mobile = () => (
  <TemplatePreviewDialog open={true}>
    <TemplatePreviewDialogAppBar
      sx={{ color: '#000000DE', backgroundColor: 'white' }}
      startContent={
        <Typography variant="h6" noWrap={true} sx={{ ml: '1.25rem' }}>
          {templateName}
        </Typography>
      }
      endContent={[
        <IconButton>
          <CloseIcon />
        </IconButton>,
      ]}
    >
      <DesktopMobileToggle state="mobile" onChange={action('onChange')} />
    </TemplatePreviewDialogAppBar>
    <TemplatePreviewDialogContent templateWidth="800px" marginTop="2.5vh" sx={{ backgroundColor: '#FFFFFFF2' }}>
      <TemplatePreviewDialogImage src="favicon.ico" />
    </TemplatePreviewDialogContent>
  </TemplatePreviewDialog>
);

export const MobileVeryLongTitle = () => (
  <TemplatePreviewDialog open={true}>
    <TemplatePreviewDialogAppBar
      sx={{ color: '#000000DE', backgroundColor: 'white' }}
      startContent={
        <Typography variant="h6" noWrap={true} sx={{ ml: '1.25rem' }}>
          {templateName}
        </Typography>
      }
      endContent={[
        <IconButton>
          <CloseIcon />
        </IconButton>,
      ]}
    >
      <DesktopMobileToggle state="mobile" onChange={action('onChange')} />
    </TemplatePreviewDialogAppBar>
    <TemplatePreviewDialogContent templateWidth="800px" marginTop="2.5vh" sx={{ backgroundColor: '#FFFFFFF2' }}>
      <TemplatePreviewDialogImage src="favicon.ico" />
    </TemplatePreviewDialogContent>
  </TemplatePreviewDialog>
);
