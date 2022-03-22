import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import {
  Stack,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from '@mui/material';
import { selectTax } from '../../../store/test-flight/testFlightVariantSlice';
import { useSelector } from 'react-redux';
import TestFlightVariantEdit from '../../../containers/TestFlightVariantEdit';
import { Menu } from '@mui/icons-material';

export const TestFlightVariantPage: NextPage = () => {
  const variant = useSelector(selectTax);

  return (
    <Stack>
      <Head>
        <title>TestFlightVariantPage</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {AppBarMockUp}

      <Typography variant="body1">TestFlight: {variant?.testFlight}</Typography>
      <Typography variant="body1">Variant: {variant?.id}</Typography>

      <TestFlightVariantEdit />
    </Stack>
  );
};

export default TestFlightVariantPage;

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
