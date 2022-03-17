import { NextPage } from "next";
import Head from "next/head";
import {
  Container,
  Stack,
  Grid,
  TextField,
  Button,
  Typography,
} from "@mui/material";

export const CreateTestFlightPage: NextPage = () => {
  return (
    <Container sx={{ mt: 24 }} maxWidth="md">
      <Head>
        <title>LaunchDrive: Create Test Flight</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Grid container>
        <Stack width="100%" spacing={3}>
          <Typography variant="h3">Create TestFlight</Typography>

          {/* <Grid marginTop={3} /> */}
          <TextField placeholder="What should we call it?" fullWidth={true} />

          <Grid container justifyContent="flex-end">
            <Button>Create</Button>
          </Grid>
        </Stack>
      </Grid>
    </Container>
  );
};

export default CreateTestFlightPage;
