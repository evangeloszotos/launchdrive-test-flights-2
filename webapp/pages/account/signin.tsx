import React from 'react';
import { Container } from '@mui/material';
import SignIn from '../../containers/SignIn';

const SignInPage: React.FC = (props) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  return (
    <Container sx={{ mt: 24 }} maxWidth="md">
      <SignIn
        onSignIn={({ email, password }) => console.log(email, password)}
      />
    </Container>
  );
};

export default SignInPage;
