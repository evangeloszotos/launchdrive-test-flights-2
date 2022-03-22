import React from 'react';
import {
  Container,
  Button,
  Stack,
  Paper,
  Typography,
  CircularProgress,
  TextField,
  Grid,
} from '@mui/material';
import { email, password, validateFields } from '../utils/form-validations';
import SideBar from '../components/SideBar';
import SideBarItem from '../components/SideBar/SideBarItem';
import SideBarText from '../components/SideBar/SideBarText';

const validationSchema = validateFields({ email, password });
export type OnSignInData = { email: string; password: string };
export const TestFlightVariantEdit = ({}) => {
  return (
    <Grid container>
      <Grid item>
        <SideBar>
          <SideBarItem onClick={() => console.log('Clicked')}>
            <SideBarText label="MenuItem" />
          </SideBarItem>
        </SideBar>
      </Grid>
    </Grid>
  );
};

export default TestFlightVariantEdit;
