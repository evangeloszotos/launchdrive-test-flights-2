import Head from 'next/head';
import { NextPage } from 'next';
import { styled, Stack, IconButton, IconButtonTypeMap } from '@mui/material';
import { ArrowBackIosNew } from '@mui/icons-material';
import { useSelector } from 'react-redux';

import { OverridableComponent } from '@mui/material/OverridableComponent';
import TestFlightVariantDetail from '../../../containers/TestFlightVariantEdit';
import * as selectors from '../../../store/test-flight/selectors';
import MainAppBar from '../../../components/AppBar';
import IconText from '../../../components/IconText';

const StyledIconButton = styled<
  OverridableComponent<IconButtonTypeMap<{ mr: number }>>
>(IconButton)((props) => ({
  marginRight: `${props.mr}rem`,
}));

const MainAppBarMockUp = (
  <MainAppBar
    logo={<img src="/Logo.svg" alt="Logo" />}
    elevation={0}
    startContent={
      <IconText
        color="white"
        label="LaunchDrive"
        icon={
          <StyledIconButton
            size="medium"
            color="inherit"
            aria-label="menu"
            mr={-0.5}
          >
            <ArrowBackIosNew sx={{ fontSize: 20 }} />
          </StyledIconButton>
        }
        letterSpacing={0.15}
        fontSize={16}
      />
    }
  />
);

export const TestFlightVariantPage: NextPage = () => {
  const variant = useSelector(selectors.selectTestFlightVariant);

  return (
    <Stack sx={{ height: '100vh' }}>
      <Head>
        <title>TestFlightVariantPage</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {MainAppBarMockUp}

      <TestFlightVariantDetail />
    </Stack>
  );
};

export default TestFlightVariantPage;
