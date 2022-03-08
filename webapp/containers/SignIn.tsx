import React from "react";
import * as yup from "yup";
import { useFormik } from "formik";
import {
  Button,
  Stack,
  Paper,
  Typography,
  CircularProgress,
  TextField,
  Container,
  Grid,
} from "@mui/material";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
});

export const SignIn = ({
  error = false,
  loading = false,
  onSignIn = () => {},
  initialEmail = "",
  initialPassword = "",
}) => {
  const formik = useFormik({
    initialValues: {
      email: initialEmail,
      password: initialPassword,
    },
    validationSchema: validationSchema,
    onSubmit: onSignIn,
  });

  return (
    <Paper variant="outlined" sx={{ paddingX: 4, paddingY: 2 }}>
      <form onSubmit={formik.handleSubmit}>
        <Stack spacing={3}>
          <Typography variant="h3">Sign in to LaunchDrive</Typography>

          <TextField
            id="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={
              error || (formik.touched.email && Boolean(formik.errors.email))
            }
            helperText={formik.touched.email && formik.errors.email}
            variant="outlined"
            label="Email"
            disabled={loading}
          />
          <TextField
            helperText={formik.touched.password && formik.errors.password}
            error={
              error ||
              (formik.touched.password && Boolean(formik.errors.password))
            }
            disabled={loading}
            id="password"
            onChange={formik.handleChange}
            variant="outlined"
            label="Password"
            type="password"
          />

          {!loading ? (
            <Button variant="text" fullWidth type="submit">
              SignIn
            </Button>
          ) : (
            <Grid container justifyContent="center">
              <CircularProgress size={36.5} />
            </Grid>
          )}
        </Stack>
      </form>
    </Paper>
  );
};

export default SignIn;
