import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Box, Button, Stack, styled } from '@mui/material';
import { ImagePreviewBase } from './ImagePreviewBase';
import Centered from '../Centered';
import LogoPlaceholder from './LogoPlaceholder.png';
import ImagePreviewImage from '../ImagePreviewImage';

export default {
  title: 'Components/ImagePreviewBase',
  component: ImagePreviewBase,
  argTypes: {
    value: {
      control: { type: 'file' },
    },
  },
} as ComponentMeta<typeof ImagePreviewBase>;

export const Empty: ComponentStory<typeof ImagePreviewBase> = () => (
  <ImagePreviewBase height={200} overlayContent={<Centered> HELLO! </Centered>}>
    <Centered>
      <Box> Click here to select a logo </Box>
    </Centered>
  </ImagePreviewBase>
);

export const Default: ComponentStory<typeof ImagePreviewBase> = () => (
  <ImagePreviewBase height={200} overlayContent={<Centered> HELLO! </Centered>}>
    <Centered>
      <ImagePreviewImage src={LogoPlaceholder} />
    </Centered>
  </ImagePreviewBase>
);

export const CustomOverlayColor: ComponentStory<
  typeof ImagePreviewBase
> = () => (
  <ImagePreviewBase
    height={200}
    overlayContent={<Centered> HELLO! </Centered>}
    overlayBackgroundColor="#fcba0380"
  >
    <Centered>
      <ImagePreviewImage src={LogoPlaceholder} />
    </Centered>
  </ImagePreviewBase>
);

export const CustomWidth: ComponentStory<typeof ImagePreviewBase> = () => (
  <ImagePreviewBase
    height={200}
    width={200}
    overlayContent={<Centered> HELLO! </Centered>}
  >
    <Centered>
      <ImagePreviewImage src={LogoPlaceholder} />
    </Centered>
  </ImagePreviewBase>
);

export const ButtonsInOverlay: ComponentStory<typeof ImagePreviewBase> = () => (
  <ImagePreviewBase
    height={200}
    overlayContent={
      <Centered>
        <Stack direction="row" spacing={2}>
          <Button
            variant="contained"
            color="success"
            onClick={action('Success')}
          >
            Success
          </Button>
          <Button variant="outlined" color="error" onClick={action('Error')}>
            Error
          </Button>
        </Stack>
      </Centered>
    }
  >
    <Centered>
      <ImagePreviewImage src={LogoPlaceholder} />
    </Centered>
  </ImagePreviewBase>
);

const StyledImageComponent = styled('img')`
  display: block;
  width: 75%;
  height: 75%;
  border: 1px double dodgerblue;
  object-fit: contain;
`;
export const CustomRenderImageFunction: ComponentStory<
  typeof ImagePreviewBase
> = () => (
  <ImagePreviewBase height={200} overlayContent={<Centered> HELLO! </Centered>}>
    <Centered>
      <StyledImageComponent src={LogoPlaceholder} />
    </Centered>
  </ImagePreviewBase>
);

export const CustomBorder: ComponentStory<typeof ImagePreviewBase> = () => (
  <ImagePreviewBase
    height={200}
    overlayContent={<Centered> HELLO! </Centered>}
    border="2px solid green"
    borderRadius="100px"
  >
    <Centered>
      <ImagePreviewImage src={LogoPlaceholder} />
    </Centered>
  </ImagePreviewBase>
);
