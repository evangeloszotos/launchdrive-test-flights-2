/* eslint-disable react/no-multi-comp */
import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { teal } from '@mui/material/colors';
import { styled } from '@mui/system';
import { Button, ButtonProps, Chip, Grid } from '@mui/material';
import { TemplateCard } from './TemplateCard';

export default {
  title: 'Components/TemplateCard',
  component: TemplateCard,
  argTypes: {},
} as ComponentMeta<typeof TemplateCard>;

const ColorButton = styled(Button)<
  ButtonProps & {
    mainColor?: string;
    mainColorHover?: string;
    textColor: string;
    borderColor?: string;
    borderColorHover?: string;
  }
>(
  ({
    mainColor,
    mainColorHover,
    textColor,
    borderColor,
    borderColorHover,
  }) => ({
    color: textColor,
    borderColor,
    backgroundColor: mainColor,
    '&:hover': {
      backgroundColor: mainColorHover,
      borderColor: borderColor || borderColorHover,
    },
  })
);

export const Default: ComponentStory<typeof TemplateCard> = () => (
  <TemplateCard
    templatePreviewImageSrc="http://placekitten.com/300/200"
    actions={[
      <ColorButton
        variant="contained"
        color="primary"
        mainColor={teal[500]}
        mainColorHover={teal[700]}
        textColor="#fff"
      >
        Select
      </ColorButton>,
      <ColorButton
        variant="outlined"
        color="primary"
        textColor="#fff"
        borderColor="#fff"
      >
        Preview
      </ColorButton>,
    ]}
    title="title"
    description="description"
    tags={[
      <Chip label="Chip" variant="outlined" size="small" />,
      <Chip label="Chip" variant="outlined" size="small" />,
      <Chip label="Chip" variant="outlined" size="small" />,
    ]}
  />
);

export const NoDescription: ComponentStory<typeof TemplateCard> = () => (
  <TemplateCard
    templatePreviewImageSrc="http://placekitten.com/300/200"
    actions={[
      <ColorButton
        variant="contained"
        color="primary"
        mainColor={teal[500]}
        mainColorHover={teal[700]}
        textColor="#fff"
      >
        Select
      </ColorButton>,
      <ColorButton
        variant="outlined"
        color="primary"
        textColor="#fff"
        borderColor="#fff"
      >
        Preview
      </ColorButton>,
    ]}
    title="title"
    tags={[
      <Chip label="Chip" variant="outlined" size="small" />,
      <Chip label="Chip" variant="outlined" size="small" />,
      <Chip label="Chip" variant="outlined" size="small" />,
    ]}
  />
);

export const NoTags: ComponentStory<typeof TemplateCard> = () => (
  <TemplateCard
    templatePreviewImageSrc="http://placekitten.com/300/200"
    actions={[
      <ColorButton
        variant="contained"
        color="primary"
        mainColor={teal[500]}
        mainColorHover={teal[700]}
        textColor="#fff"
      >
        Select
      </ColorButton>,
      <ColorButton
        variant="outlined"
        color="primary"
        textColor="#fff"
        borderColor="#fff"
      >
        Preview
      </ColorButton>,
    ]}
    title="title"
    description="description"
  />
);

export const TemplateCardGrid: ComponentStory<typeof TemplateCard> = () => (
  <Grid maxWidth={1560} container spacing={2}>
    {[...Array(7)].map((i, j) => (
      <Grid item>
        <TemplateCard
          templatePreviewImageSrc={`https://placekitten.com/300/200?image=${j}`}
          actions={[
            <ColorButton
              variant="contained"
              color="primary"
              mainColor={teal[500]}
              mainColorHover={teal[700]}
              textColor="#fff"
            >
              Select
            </ColorButton>,
            <ColorButton
              variant="outlined"
              color="primary"
              textColor="#fff"
              borderColor="#fff"
            >
              Preview
            </ColorButton>,
          ]}
          title={`title ${j}`}
          description="description"
          tags={[
            <Chip label="Chip" variant="outlined" size="small" />,
            <Chip label="Chip" variant="outlined" size="small" />,
            <Chip label="Chip" variant="outlined" size="small" />,
          ]}
        />
      </Grid>
    ))}
  </Grid>
);
