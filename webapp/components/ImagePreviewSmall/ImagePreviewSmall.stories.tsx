import { ComponentStory, ComponentMeta } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Box } from '@mui/material';
import { Abc } from '@mui/icons-material';
import { ImagePreviewSmall } from './ImagePreviewSmall';
import LogoPlaceholder from '../ImagePreviewBase/LogoPlaceholder.png';
import Centered from '../Centered';
import ImagePreviewImage from '../ImagePreviewImage';

export default {
  title: 'Components/ImagePreviewSmall',
  component: ImagePreviewSmall,
  argTypes: {},
} as ComponentMeta<typeof ImagePreviewSmall>;

export const Empty: ComponentStory<typeof ImagePreviewSmall> = () => (
  <ImagePreviewSmall label="Logo" onClick={action('onClick')} noOverlay>
    <Box onClick={action('onClickEmpty')} height="100%">
      <Centered>
        <Box> Click here to select a logo </Box>
      </Centered>
    </Box>
  </ImagePreviewSmall>
);

//

export const Default: ComponentStory<typeof ImagePreviewSmall> = () => (
  <ImagePreviewSmall label="Logo" onClick={action('onClick')}>
    <Centered>
      <ImagePreviewImage src={LogoPlaceholder} />
    </Centered>
  </ImagePreviewSmall>
);

//

export const NoLabel: ComponentStory<typeof ImagePreviewSmall> = () => (
  <ImagePreviewSmall onClick={action('onClick')}>
    <Centered>
      <ImagePreviewImage src={LogoPlaceholder} />
    </Centered>
  </ImagePreviewSmall>
);

//

export const CustomIcon: ComponentStory<typeof ImagePreviewSmall> = () => (
  <ImagePreviewSmall label="Logo" icon={<Abc />} onClick={action('onClick')}>
    <Centered>
      <ImagePreviewImage src={LogoPlaceholder} />
    </Centered>
  </ImagePreviewSmall>
);
