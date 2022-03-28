import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { NextPage } from 'next';
import Head from 'next/head';
import {
  Container,
  Stack,
  Grid,
  TextField,
  Button,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import { testFlightCreated } from '../../store/test-flight/testFlightSaga';

export const CreateTestFlightPage: NextPage = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [testFlightName, setTestFlightName] = useState('');

  return (
    <Container sx={{ mt: 24 }} maxWidth="md">
      <Head>
        <title>LaunchDrive: Create Test Flight</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container>
        <Stack width="100%" spacing={3}>
          <Typography variant="h3">Create TestFlight</Typography>

          {/* <Grid marginTop={3} /> */}
          <TextField
            placeholder="What should we call it?"
            value={testFlightName}
            onChange={(e) => setTestFlightName(e.target.value)}
          />

          <Grid container justifyContent="flex-end">
            <Button
              onClick={() => {
                // dispatch(testFlightCreated(testFlightName));
                router.push('variant/select-template');
              }}
            >
              Create
            </Button>
          </Grid>
        </Stack>
      </Grid>
    </Container>
  );
};

export default CreateTestFlightPage;
