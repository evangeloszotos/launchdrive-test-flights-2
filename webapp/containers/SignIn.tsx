import React from 'react';
import { useFormik } from 'formik';
import {
  Button,
  Stack,
  Paper,
  Typography,
  CircularProgress,
  TextField,
  Grid,
} from '@mui/material';
import { email, password, validateFields } from '../utils/form-validations';

const validationSchema = validateFields({ email, password });
export type OnSignInData = { email: string; password: string };
export const SignIn = ({
  error = false,
  loading = false,
  initialEmail = '',
  initialPassword = '',
  onSignIn: onSubmit = (data: OnSignInData) => {},
}) => {
  const formik = useFormik({
    validationSchema,
    onSubmit,
    initialValues: {
      email: initialEmail,
      password: initialPassword,
    },
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
