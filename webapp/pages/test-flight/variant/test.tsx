import Head from 'next/head';
import { NextPage } from 'next';
import {
  Stack,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from '@mui/material';
import { Menu } from '@mui/icons-material';
import { useSelector } from 'react-redux';

import TestFlightVariantDetail from '../../../containers/TestFlightVariantEdit';
import * as selectors from '../../../store/test-flight/selectors';

const AppBarMockUp = (
  <AppBar position="static" elevation={0}>
    <Toolbar>
      <IconButton
        size="large"
        edge="start"
        color="inherit"
        aria-label="menu"
        sx={{ mr: 2 }}
      >
        <Menu />
      </IconButton>
      <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
        News
      </Typography>
      <Button color="inherit">Login</Button>
    </Toolbar>
  </AppBar>
);

export const TestFlightVariantPage: NextPage = () => {
  const variant = useSelector(selectors.selectTestFlightVariant);

  return (
    <Stack>
      <Head>
        <title>TestFlightVariantPage</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {AppBarMockUp}

      <TestFlightVariantDetail />
    </Stack>
  );
};

export default TestFlightVariantPage;
