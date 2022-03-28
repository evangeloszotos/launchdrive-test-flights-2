import React from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Grid, GridTypeMap, styled, Toolbar } from '@mui/material';
import { OverridableComponent } from '@mui/types';

interface AppBarProps extends MuiAppBarProps {
  logoWidth?: number;
  logo: React.ReactElement;
  startContent?: React.ReactElement;
  centerContent?: React.ReactElement;
  endContent?: React.ReactElement;
  dividerColor?: string;
  backgroundColor?: string;
}

//

const StyledMuiAppBar = styled<React.FC<{ 'background-color': string }>>(
  MuiAppBar
)((props) => ({
  backgroundColor: props['background-color'],
}));
const StyledToolbar = styled(Toolbar)`
  padding-left: 0 !important;
`;
const LogoContainer = styled<
  OverridableComponent<GridTypeMap<{ 'divider-color': string }>>
>(Grid)((props) => ({
  borderRight: `1px solid ${props['divider-color']}`,
}));
const ContentContainer = styled(Grid)`
  width: auto;
  flex-grow: 1;
`;

//

export const AppBar: React.VoidFunctionComponent<AppBarProps> = (props) => {
  const {
    logoWidth = 64,
    backgroundColor = '#010D31',
    dividerColor = '#4d556e',
    logo,
    startContent,
    centerContent,
    endContent,
    ...other
  } = props;

  return (
    <StyledMuiAppBar
      position="static"
      background-color={backgroundColor}
      {...other}
    >
      <StyledToolbar variant="dense">
        <Grid container alignItems="center">
          {logo && (
            <LogoContainer
              container
              justifyContent="center"
              width={logoWidth}
              divider-color={dividerColor}
            >
              {logo}
            </LogoContainer>
          )}
          <ContentContainer
            container
            justifyContent="space-between"
            alignItems="center"
            height="100%"
          >
            <Grid
              container
              width="auto"
              alignItems="center"
              justifyContent="flex-start"
            >
              {startContent}
            </Grid>

            <Grid
              container
              width="auto"
              alignItems="center"
              justifyContent="center"
            >
              {centerContent}
            </Grid>

            <Grid
              container
              width="auto"
              alignItems="center"
              justifyContent="flex-end"
            >
              {endContent}
            </Grid>
          </ContentContainer>
        </Grid>
      </StyledToolbar>
    </StyledMuiAppBar>
  );
};

export default AppBar;
