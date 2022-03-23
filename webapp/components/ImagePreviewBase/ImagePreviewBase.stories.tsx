import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Box, Button, Stack, styled } from '@mui/material';
import { ImagePreviewBase } from './ImagePreviewBase';
import Centered from '../Centered';
import LogoPlaceholder from './LogoPlaceholder.png';

export default {
  title: 'Components/ImagePreviewBase',
  component: ImagePreviewBase,
  argTypes: {
    value: {
      control: { type: 'file' },
    },
  },
} as ComponentMeta<typeof ImagePreviewBase>;

const Template: ComponentStory<typeof ImagePreviewBase> = (args) => (
  <ImagePreviewBase
    sx={{ width: 200, height: 200 }}
    value={args.value}
    emptyContent={<Box> Click here to select a logo </Box>}
    overlayContent={<Centered> HELLO! </Centered>}
  />
);
export const Playground = Template.bind({});
Playground.args = {
  // onClick: action('onClick'),
};

export const Empty: ComponentStory<typeof ImagePreviewBase> = () => (
  <ImagePreviewBase
    sx={{ width: 200, height: 200 }}
    emptyContent={<Box> Click here to select a logo </Box>}
    overlayContent={<Centered> HELLO! </Centered>}
  />
);

export const Default: ComponentStory<typeof ImagePreviewBase> = () => (
  <ImagePreviewBase
    sx={{ width: 200, height: 200 }}
    value={LogoPlaceholder}
    emptyContent={<Box> Click here to select a logo </Box>}
    overlayContent={<Centered> HELLO! </Centered>}
  />
);

export const Default2: ComponentStory<typeof ImagePreviewBase> = () => (
  <ImagePreviewBase
    sx={{ width: 200, height: 200 }}
    value={LogoPlaceholder}
    emptyContent={<Box> Click here to select a logo </Box>}
    overlayContent={<Centered> HELLO! </Centered>}
  >
    <StyledImageComponent src={LogoPlaceholder} alt="ABC" />
  </ImagePreviewBase>
);

export const CustomOverlayColor: ComponentStory<typeof ImagePreviewBase> = () => (
  <ImagePreviewBase
    sx={{ width: 200, height: 200 }}
    value={LogoPlaceholder}
    emptyContent={<Box> Click here to select a logo </Box>}
    overlayContent={<Centered> HELLO! </Centered>}
    overlayBackgroundColor="#fcba0380"
  />
);

export const ButtonsInOverlay: ComponentStory<typeof ImagePreviewBase> = () => (
  <ImagePreviewBase
    height={200}
    value={LogoPlaceholder}
    emptyContent={<Box> Click here to select a logo </Box>}
    overlayContent={
      <Centered>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" color="success" onClick={action('Success')}>
            Success
          </Button>
          <Button variant="outlined" color="error" onClick={action('Error')}>
            Error
          </Button>
        </Stack>
      </Centered>
    }
  />
);

const StyledImageComponent = styled('img')`
  display: block;
  width: 75%;
  border: 1px double dodgerblue;
`;
const RenderImage = (value) => <StyledImageComponent src={value} alt="Logo" />;
export const CustomRenderImageFunction: ComponentStory<typeof ImagePreviewBase> = () => (
  <ImagePreviewBase
    sx={{ width: 200, height: 200 }}
    value={LogoPlaceholder}
    emptyContent={<Box> Click here to select a logo </Box>}
    overlayContent={<Centered> HELLO! </Centered>}
    renderImage={RenderImage}
  />
);

export const CustomBorder: ComponentStory<typeof ImagePreviewBase> = () => (
  <ImagePreviewBase
    sx={{ width: 200, height: 200 }}
    value={LogoPlaceholder}
    emptyContent={<Box> Click here to select a logo </Box>}
    overlayContent={<Centered> HELLO! </Centered>}
    border="2px solid green"
    borderRadius="100px"
  />
);
