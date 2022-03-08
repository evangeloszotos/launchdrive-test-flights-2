import React from "react";
import { Container, Typography } from "@mui/material";
import SignIn from "../containers/SignIn";

import {
  Button,
  Stack,
  Paper,
  CircularProgress,
  TextField,
} from "@mui/material";

const SignInPage: React.FC = (props) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  return (
    <Container sx={{ mt: 24 }} maxWidth="md">
      <SignIn
        onSignIn={({ email, password }) => console.log(email, password)}
      />
    </Container>
  );
};

export default SignInPage;

// DataFetching
// StateManagement
