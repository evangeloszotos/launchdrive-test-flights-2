import { Container, Grid, Stack, Typography } from "@mui/material";
import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <Container sx={{ mt: 24 }} maxWidth="md">
      <Grid container justifyContent={"center"}>
        <Stack spacing={3}>
          <Typography variant="h3">💥 LaunchDrive 🚀</Typography>
          <Typography variant="h3">Your are Awesome 🦄</Typography>
          <Typography variant="h3">fasten your seat belts! 🌑</Typography>
        </Stack>
      </Grid>
    </Container>
  );
};

export default Home;
