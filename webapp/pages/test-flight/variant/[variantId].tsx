import Head from 'next/head';
import { useRouter } from 'next/router';
import { NextPage } from 'next';
import { Container, Stack, Grid, Typography } from '@mui/material';
import {
  selectTax,
  TestFlightVariant,
} from '../../../store/test-flight/testFlightVariantSlice';
import { useSelector } from 'react-redux';

export const TestFlightVariantPage: NextPage = () => {
  const variant = useSelector(selectTax);

  return (
    <Container sx={{ mt: 24 }} maxWidth="md">
      <Head>
        <title>TestFlightVariantPage</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container>
        <Stack width="100%" spacing={3}>
          <Typography variant="h3">Test Flight Variant Detail Page</Typography>
          <Stack>
            <Typography variant="body1">
              TestFlight: {variant?.testFlight}
            </Typography>
            <Typography variant="body1">Variant: {variant?.id}</Typography>
          </Stack>
        </Stack>
      </Grid>
    </Container>
  );
};

export default TestFlightVariantPage;
