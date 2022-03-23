/* eslint-disable react/no-multi-comp */
import { IconButton, Typography } from '@mui/material';
import { action } from '@storybook/addon-actions';
import { ComponentMeta } from '@storybook/react';
import CloseIcon from '@mui/icons-material/Close';
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

export const DesktopViewSelected = () => (
  <TemplatePreviewDialog open={true}>
    <TemplatePreviewDialogAppBar
      startContent={
        <Typography variant="h6" noWrap={true}>
          Startup Website
        </Typography>
      }
      centerContent={<DesktopMobileToggle state="desktop" onChange={action('onChange')} />}
      endContent={
        <IconButton onClick={action('onClose')}>
          <CloseIcon />
        </IconButton>
      }
    />
    <TemplatePreviewDialogContent>
      <TemplatePreviewDialogImage src="favicon.ico" />
    </TemplatePreviewDialogContent>
  </TemplatePreviewDialog>
);

export const MobileViewSelected = () => (
  <TemplatePreviewDialog open={true}>
    <TemplatePreviewDialogAppBar
      startContent={
        <Typography variant="h6" noWrap={true}>
          Startup Website
        </Typography>
      }
      centerContent={<DesktopMobileToggle state="mobile" onChange={action('onChange')} />}
      endContent={
        <IconButton onClick={action('onClose')}>
          <CloseIcon />
        </IconButton>
      }
    />
    <TemplatePreviewDialogContent>
      <TemplatePreviewDialogImage src="vercel.svg" />
    </TemplatePreviewDialogContent>
  </TemplatePreviewDialog>
);

export const VeryLongTitle = () => (
  <TemplatePreviewDialog open={true}>
    <TemplatePreviewDialogAppBar
      startContent={
        <Typography variant="h6" noWrap={true}>
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua.
        </Typography>
      }
      centerContent={<DesktopMobileToggle state="desktop" onChange={action('onChange')} />}
      endContent={
        <IconButton onClick={action('onClose')}>
          <CloseIcon />
        </IconButton>
      }
    />

    <TemplatePreviewDialogContent>
      <TemplatePreviewDialogImage src="favicon.ico" />
    </TemplatePreviewDialogContent>
  </TemplatePreviewDialog>
);

export const SmallPicture = () => (
  <TemplatePreviewDialog open={true}>
    <TemplatePreviewDialogAppBar
      startContent={
        <Typography variant="h6" noWrap={true}>
          Startup Website
        </Typography>
      }
      centerContent={<DesktopMobileToggle state="desktop" onChange={action('onChange')} />}
      endContent={
        <IconButton onClick={action('onClose')}>
          <CloseIcon />
        </IconButton>
      }
    />
    <TemplatePreviewDialogContent templateWidth="100px">
      <TemplatePreviewDialogImage src="favicon.ico" />
    </TemplatePreviewDialogContent>
  </TemplatePreviewDialog>
);

export const OversizedPicture = () => (
  <TemplatePreviewDialog open={true}>
    <TemplatePreviewDialogAppBar
      startContent={
        <Typography variant="h6" noWrap={true}>
          Startup Website
        </Typography>
      }
      centerContent={<DesktopMobileToggle state="desktop" onChange={action('onChange')} />}
      endContent={
        <IconButton onClick={action('onClose')}>
          <CloseIcon />
        </IconButton>
      }
    />
    <TemplatePreviewDialogContent templateWidth="120vw">
      <TemplatePreviewDialogImage src="favicon.ico" />
    </TemplatePreviewDialogContent>
  </TemplatePreviewDialog>
);

export const MultipleCenterContent = () => (
  <TemplatePreviewDialog open={true}>
    <TemplatePreviewDialogAppBar
      startContent={
        <Typography variant="h6" noWrap={true}>
          Startup Website
        </Typography>
      }
      centerContent={
        <>
          <DesktopMobileToggle state="desktop" onChange={action('onChange')} />
          <DesktopMobileToggle state="desktop" onChange={action('onChange')} />
        </>
      }
      endContent={
        <IconButton onClick={action('onClose')}>
          <CloseIcon />
        </IconButton>
      }
    />
    <TemplatePreviewDialogContent>
      <TemplatePreviewDialogImage src="favicon.ico" />
    </TemplatePreviewDialogContent>
  </TemplatePreviewDialog>
);
