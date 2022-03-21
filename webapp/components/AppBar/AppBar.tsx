import React from 'react';
import MuiAppBar, { AppBarTypeMap } from '@mui/material/AppBar';
import { Grid, IconButton, IconButtonTypeMap, styled, Toolbar } from '@mui/material';
import { ArrowBackIosNew, Notifications, Widgets } from '@mui/icons-material';
import Link from 'next/link';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import Logo from './Logo.svg';
import Leslie from './Leslie.png';
import TextWithIcon from '../TextWithIcon';

interface AppBarBaseProps {
  backgroundColor?: string;
}
interface AppBarProps extends AppBarBaseProps {
  title: string;
  backHref: string;
}

const StyledMuiAppBar = styled<OverridableComponent<AppBarTypeMap<AppBarBaseProps>>>(MuiAppBar)((props) => ({
  backgroundColor: props.backgroundColor,
}));
const StyledIconButton = styled<OverridableComponent<IconButtonTypeMap<{ mr: number }>>>(IconButton)((props) => ({
  marginRight: `${props.mr}rem`,
}));

export const AppBar: React.FC<AppBarProps> = (props) => {
  const { title, backHref, backgroundColor = '#010D31', ...other } = props;

  return (
    <StyledMuiAppBar {...other} position="static" backgroundColor={backgroundColor}>
      <Toolbar variant="dense" disableGutters={true}>
        <Grid container={true} justifyContent="space-between" height="100%">
          <Grid container={true} width="auto" alignItems="center">
            <Grid container={true} justifyContent="center" width={64}>
              <img src={Logo} alt="Logo" />
            </Grid>

            <TextWithIcon
              color="white"
              label={title}
              icon={
                <Link href={backHref}>
                  <StyledIconButton size="medium" color="inherit" aria-label="menu" mr={-0.5}>
                    <ArrowBackIosNew sx={{ fontSize: 20 }} />
                  </StyledIconButton>
                </Link>
              }
              letterSpacing={0.15}
              fontSize={16}
            />
          </Grid>

          <Grid container={true} width="auto" alignItems="center" sx={{ pr: 4 }}>
            <StyledIconButton size="medium" color="inherit" aria-label="menu" mr={0.5}>
              <Notifications sx={{ fontSize: 20 }} />
            </StyledIconButton>
            <StyledIconButton size="medium" color="inherit" aria-label="menu" mr={1.5}>
              <Widgets sx={{ fontSize: 20 }} />
            </StyledIconButton>

            <TextWithIcon color="white" label="Leslie" icon={<img src={String(Leslie)} alt="Leslie" />} fontSize={12} />
          </Grid>
        </Grid>
      </Toolbar>
    </StyledMuiAppBar>
  );
};

export default AppBar;
