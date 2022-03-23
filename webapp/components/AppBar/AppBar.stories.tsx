import { ComponentMeta } from '@storybook/react';
import Link from 'next/link';
import { ArrowBackIosNew, Notifications, Widgets } from '@mui/icons-material';
import React from 'react';
import { IconButton, IconButtonTypeMap, styled } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import IconText from '../IconText';
import { AppBar } from './AppBar';
import Leslie from './Leslie.png';
import Logo from './Logo.svg';

export default {
  title: 'Components/AppBar',
  component: AppBar,
  argTypes: {},
} as ComponentMeta<typeof AppBar>;

const StyledIconButton = styled<OverridableComponent<IconButtonTypeMap<{ mr: number }>>>(IconButton)((props) => ({
  marginRight: `${props.mr}rem`,
}));

export const Default = () => (
  <AppBar
    logo={<img src={Logo} alt="Logo" />}
    startContent={
      <IconText
        color="white"
        label="LaunchDrive"
        icon={
          <Link href="/foo">
            <StyledIconButton size="medium" color="inherit" aria-label="menu" mr={-0.5}>
              <ArrowBackIosNew sx={{ fontSize: 20 }} />
            </StyledIconButton>
          </Link>
        }
        letterSpacing={0.15}
        fontSize={16}
      />
    }
    endContent={
      <>
        <StyledIconButton size="medium" color="inherit" aria-label="menu" mr={0.5}>
          <Notifications sx={{ fontSize: 20 }} />
        </StyledIconButton>
        <StyledIconButton size="medium" color="inherit" aria-label="menu" mr={1.5}>
          <Widgets sx={{ fontSize: 20 }} />
        </StyledIconButton>

        <IconText color="white" label="Leslie" icon={<img src={String(Leslie)} alt="Leslie" />} fontSize={12} />
      </>
    }
  />
);

export const NoLogo = () => (
  <AppBar
    startContent={
      <IconText
        color="white"
        label="LaunchDrive"
        icon={
          <Link href="/foo">
            <StyledIconButton size="medium" color="inherit" aria-label="menu" mr={-0.5}>
              <ArrowBackIosNew sx={{ fontSize: 20 }} />
            </StyledIconButton>
          </Link>
        }
        letterSpacing={0.15}
        fontSize={16}
      />
    }
    endContent={
      <>
        <StyledIconButton size="medium" color="inherit" aria-label="menu" mr={0.5}>
          <Notifications sx={{ fontSize: 20 }} />
        </StyledIconButton>
        <StyledIconButton size="medium" color="inherit" aria-label="menu" mr={1.5}>
          <Widgets sx={{ fontSize: 20 }} />
        </StyledIconButton>

        <IconText color="white" label="Leslie" icon={<img src={String(Leslie)} alt="Leslie" />} fontSize={12} />
      </>
    }
  />
);

export const WideLogo = () => (
  <AppBar
    logoWidth={128}
    logo={<img src={Logo} alt="Logo" />}
    startContent={
      <IconText
        color="white"
        label="LaunchDrive"
        icon={
          <Link href="/foo">
            <StyledIconButton size="medium" color="inherit" aria-label="menu" mr={-0.5}>
              <ArrowBackIosNew sx={{ fontSize: 20 }} />
            </StyledIconButton>
          </Link>
        }
        letterSpacing={0.15}
        fontSize={16}
      />
    }
    endContent={
      <>
        <StyledIconButton size="medium" color="inherit" aria-label="menu" mr={0.5}>
          <Notifications sx={{ fontSize: 20 }} />
        </StyledIconButton>
        <StyledIconButton size="medium" color="inherit" aria-label="menu" mr={1.5}>
          <Widgets sx={{ fontSize: 20 }} />
        </StyledIconButton>

        <IconText color="white" label="Leslie" icon={<img src={String(Leslie)} alt="Leslie" />} fontSize={12} />
      </>
    }
  />
);

export const WithoutActions = () => <AppBar logo={<img src={Logo} alt="Logo" />} />;
