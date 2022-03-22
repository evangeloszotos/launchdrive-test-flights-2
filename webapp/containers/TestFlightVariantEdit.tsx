import React from 'react';
import {
  Box,
  Grid,
  Stepper,
  styled,
  Step,
  StepLabel,
  StepContent,
  Typography,
  Button,
  GlobalStyles,
} from '@mui/material';
import { Menu } from '@mui/icons-material';

const SideBarPane = styled(Grid)`
  //background-color: red;
  border: thin solid blue;
  padding: 1rem;
  width: 64px;
`;

const StepperPane = styled(Grid)`
  //background-color: red;
  border: thin solid black;
  padding-left: 20px;
  width: 214px;
`;

const ContentPane = styled(Grid)`
  //background-color: red;
  border: thin solid black;
  padding-left: 20px;
  flex-grow: 1;
`;

export const TestFlightVariantDetail = () => (
  <Grid container={true}>
    <SideBarPane item={true}></SideBarPane>

    <StepperPane item={true}>
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

    <ContentPane item={true}>
      <Typography sx={{ mt: '32px', mb: '20px' }} variant="h5">
        Select a template
      </Typography>
      <Typography variant="h5">TemplateCardGrid here</Typography>
    </ContentPane>
  </Grid>
);

export default TestFlightVariantDetail;
