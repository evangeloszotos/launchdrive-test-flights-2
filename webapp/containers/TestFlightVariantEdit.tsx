/* eslint-disable no-use-before-define */
import React from 'react';
import {
  Box,
  Grid,
  Stack,
  Stepper,
  styled,
  Step,
  StepLabel,
  StepContent,
  Typography,
  Button,
  GlobalStyles,
  ButtonProps,
  Chip,
} from '@mui/material';
import {
  BorderColor,
  DynamicForm,
  Menu,
  MenuTwoTone,
} from '@mui/icons-material';
import SideBar from '../components/SideBar';
import SideBarItem from '../components/SideBarItem';
import SideBarItemLabel from '../components/SideBarItemLabel';
import TemplateCard from '../components/TemplateCard';
import { teal } from '@mui/material/colors';

const separatorColor = '#010d31';
// const separatorColor = 'red';
const SideBarPane = styled(Grid)`
  /* background-color: red; */
  border: 0;
  border-right: 1px;
  border-color: ${separatorColor};
  /* border-right: 1px solid rgba(255, 255, 255, 0.3); */
  border-style: solid;
`;

const StepperPane = styled(Grid)`
  /* background-color: red; */
  padding-left: 20px;
  width: 214px;
  flex-shrink: 0;
  border: 0;
  border-right: 1px;
  border-color: ${separatorColor};
  border-style: solid;
`;

const ContentPane = styled(Grid)`
  //background-color: red;
  /* border: thin solid black; */
  padding-left: 20px;
  flex-grow: 1;
`;

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

export const TestFlightVariantDetail = () => (
  <Stack sx={{ height: '100%' }} direction="row">
    <SideBarPane>
      <SideBar>
        <SideBarItem selected>
          <BorderColor />
          <SideBarItemLabel>Setup</SideBarItemLabel>
        </SideBarItem>
        <SideBarItem>
          <DynamicForm />
          <SideBarItemLabel>Landing Page</SideBarItemLabel>
        </SideBarItem>
      </SideBar>
    </SideBarPane>

    <StepperPane>
      <Typography variant="h6" sx={{ mt: '16px', mb: '32px' }}>
        Setup
      </Typography>

      <Stepper orientation="vertical">
        <Step>
          <StepLabel>Template</StepLabel>
        </Step>
        <Step>
          <StepLabel>Name &amp; Logo</StepLabel>
        </Step>
        <Step>
          <StepLabel>Color</StepLabel>
        </Step>
        <Step>
          <StepLabel>Font</StepLabel>
        </Step>
      </Stepper>
    </StepperPane>

    <ContentPane>
      <Typography sx={{ mt: '32px', mb: '20px' }} variant="h5">
        Select a template
      </Typography>

      {/* TemplateSelectionContainer */}
      <Grid container={true} spacing={2} columns={3}>
        {/* Card */}
        {renderGridItem({
          title: 'Tropical Lift',
          description: 'Lorem ipsum dolor sit amet.',
          imageSrc:
            'https://www.gettyimages.de/gi-resources/images/500px/983794168.jpg',
          tags: ['Automotive', 'Energy'],
        })}
        {/* Card */}
        {renderGridItem({
          title: 'Rocket Science',
          description: 'Lorem ipsum dolor sit amet.',

          imageSrc:
            'https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg',
          tags: ['Art'],
        })}
        {renderGridItem({
          title: 'Template 3',
          description: 'Lorem ipsum dolor sit amet,',
          imageSrc:
            'https://www.gettyimages.de/gi-resources/images/500px/983794168.jpg',
          tags: ['Production'],
        })}
        {renderGridItem({
          title: 'Template 4',
          description: 'Lorem ipsum dolor sit amet,',
          imageSrc:
            'https://www.gettyimages.de/gi-resources/images/500px/983794168.jpg',
          tags: ['Industry'],
        })}
        {renderGridItem({
          title: 'Template 5',
          description: 'Lorem ipsum dolor sit amet,',
          imageSrc:
            'https://www.gettyimages.de/gi-resources/images/500px/983794168.jpg',
          tags: ['Industry'],
        })}
      </Grid>
    </ContentPane>
  </Stack>
);

export default TestFlightVariantDetail;

function renderGridItem({
  title = '',
  description = '',
  imageSrc,
  tags = ['Industry'],
}) {
  return (
    <Grid item={true} xs={1}>
      <TemplateCard
        templatePreviewImageSrc={imageSrc}
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
        title={title}
        description={description}
        tags={tags.map((tag) => (
          <Chip label={tag} variant="outlined" size="small" />
        ))}
      />
    </Grid>
  );
}
